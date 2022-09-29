import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import fs from "fs";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import CopyPlugin from "copy-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const srcFiles: string = path.join(__dirname, "src");
const distFiles: string = path.join(__dirname, "dist");
const HTMLFiles: path.ParsedPath[] = fs.readdirSync(srcFiles).filter(file => file.endsWith(".hbs")).map(path.parse);
const HTMLPlugins: HtmlWebpackPlugin[] = HTMLFiles.map(file => new HtmlWebpackPlugin({
    template: path.join(srcFiles, file.base),
    inject: true,
    filename: `${file.name}.html`,
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
            static: {
                directory: distFiles,
            },
            port: 8080,
            hot: false,
            liveReload: true,
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        watch: true,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.(woff2?|ttf|otf|eot|svg)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name].[ext]',
                    }
                },
                {
                    test: /\.hbs$/,
                    loader: "handlebars-loader",
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
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
            // new webpack.ProvidePlugin({
            //     "jQuery": "jquery",
            //     "window.jQuery": "jquery",
            // }),
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            }),
            new BundleAnalyzerPlugin()
        ],
        optimization: {
            minimizer: [`...`, new CssMinimizerPlugin()],
            runtimeChunk: "single",
            splitChunks: {
                chunks: "all"
            }
        }
    }];
    return config;
}

