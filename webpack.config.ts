import { CleanWebpackPlugin } from "clean-webpack-plugin";
import fs from "fs";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import CopyPlugin from "copy-webpack-plugin";

const srcFiles: string = path.join(__dirname, "src");
const distFiles: string = path.join(__dirname, "dist");
const HTMLFiles: path.ParsedPath[] = fs.readdirSync(srcFiles).filter(file => file.endsWith(".html")).map(path.parse);
const HTMLPlugins: HtmlWebpackPlugin[] = HTMLFiles.map(file => new HtmlWebpackPlugin({
    template: path.join(srcFiles, file.base),
    inject: true,
    filename: file.base,
    chunks: ["global", file.name],
}));


export default function configuration(env: any, argv: any) {
    const config: webpack.Configuration[] = [{
        name: "dev",
        entry: {
            global: "./src/global.ts",
            index: "./src/index.ts"
        },
        output: {
            path: distFiles,
        },
        devServer: {
            port: 8080,
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.(woff2?|ttf|otf|eot|svg)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name].[ext]',
                    }
                },
            ],
        },
        plugins: [
            ...HTMLPlugins,
            new CleanWebpackPlugin(),
            new CopyPlugin({
                patterns: [
                    { from: "./src/img", to: "./img" },
                ]
            }),
            new webpack.ProvidePlugin({
                "jQuery": "jquery",
                "window.jQuery": "jquery",
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            }),
        ],
    }];
    return config;
}

