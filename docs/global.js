"use strict";(self.webpackChunkifes_website=self.webpackChunkifes_website||[]).push([[172],{31:(a,t,e)=>{e(755)(document).ready((function(a){a(".tabs").each((function(t,e){current_tabs=a(this),a(".tab-label").each((function(t){var e=a(this).attr("data-url");a(this).attr("data-url")?(a(this).closest(".tab-item").attr("id",e),a(this).attr("href","#"+e)):(a(this).closest(".tab-item").attr("id","tab-"+(t+1)),a(this).attr("href","#tab-"+(t+1)))})),a(this).prepend('<div class="tab-nav line"></div>');var i=a(e).find(".tab-label");function s(){a(this).parent().children().removeClass("active-btn"),a(this).addClass("active-btn");var t=a(this).attr("href");if(a(this).parent().parent().find(".tab-item").not(t).css("display","none"),a(this).parent().parent().find(t).fadeIn(),a("html,body").animate({scrollTop:a(t).offset().top-200},"slow"),!a(this).attr("data-url"))return!1}a(this).children(".tab-nav").prepend(i),a(this).find(".tab-nav a").click(s),a(this).find(".tab-label").each((function(){if(a(this).attr("data-url")){var t=window.location.hash;a(this).parent().find('a[href="'+t+'"]').length&&s.call(a(this).parent().find('a[href="'+t+'"]')[0])}}));var n=window.location.hash;a(n).length&&a("html,body").animate({scrollTop:a(n).offset().top-160},"slow")})),a('<div class="slide-nav-button"><div class="nav-icon"><div></div></div></div>').insertBefore(".slide-nav"),a(".slide-nav-button").click((function(){a("body").toggleClass("active-slide-nav")})),a(".aside-nav > ul > li ul").each((function(t,e){var i='<span class="count-number"> '+a(e).find("li").length+"</span>";a(e).closest("li").children("a").append(i)})),a(".aside-nav > ul > li:has(ul)").addClass("aside-submenu"),a(".aside-nav > ul ul > li:has(ul)").addClass("aside-sub-submenu"),a(".aside-nav > ul > li.aside-submenu > a").attr("aria-haspopup","true").click((function(){a(".aside-nav ul li.aside-submenu:not(:hover) > ul").removeClass("show-aside-ul","fast"),a(".aside-nav ul li.aside-submenu:hover > ul").toggleClass("show-aside-ul","fast")})),a(".aside-nav > ul ul > li.aside-sub-submenu > a").attr("aria-haspopup","true").click((function(){a(".aside-nav ul ul li:not(:hover) > ul").removeClass("show-aside-ul","fast"),a(".aside-nav ul ul li:hover > ul").toggleClass("show-aside-ul","fast")})),a(".aside-nav-text").each((function(t,e){a(e).click((function(){a(".aside-nav > ul").toggleClass("show-menu","fast")}))})),a(".top-nav").before('<p class="nav-text"><span></span></p>'),a(".top-nav > ul > li ul").each((function(t,e){var i='<span class="count-number"> '+a(e).find("li").length+"</span>";a(e).closest("li").children("a").append(i)})),a(".top-nav > ul li:has(ul)").addClass("submenu"),a(".top-nav > ul ul li:has(ul)").addClass("sub-submenu").removeClass("submenu"),a(".top-nav > ul li.submenu > a").attr("aria-haspopup","true").click((function(){a(".top-nav > ul li.submenu > ul").removeClass("show-ul","fast"),a(".top-nav > ul li.submenu:hover > ul").toggleClass("show-ul","fast")})),a(".top-nav > ul ul > li.sub-submenu > a").attr("aria-haspopup","true").click((function(){a(".top-nav ul ul li > ul").removeClass("show-ul","fast"),a(".top-nav ul ul li:hover > ul").toggleClass("show-ul","fast")})),a(".nav-text").click((function(){a("body").toggleClass("show-menu")})),a((function(){"placeholder"in document.createElement("input")==0&&a("[placeholder]").focus((function(){var t=a(this);t.val()==t.attr("placeholder")&&(t.val("").removeClass("placeholder"),t.hasClass("password")&&(t.removeClass("password"),this.type="password"))})).blur((function(){var t=a(this);""!=t.val()&&t.val()!=t.attr("placeholder")||("password"==this.type&&(t.addClass("password"),this.type="text"),t.addClass("placeholder").val(t.attr("placeholder")))})).blur().parents("form").submit((function(){a(this).find("[placeholder]").each((function(){var t=a(this);t.val()==t.attr("placeholder")&&t.val("")}))}))})),a(".tooltip-container").each((function(){a(this).hover((function(){var t=a(this).position(),e=a(this);t=e.offset(),tip=a(this).find(".tooltip-content"),tip_top=a(this).find(".tooltip-content.tooltip-top"),tip_bottom=a(this).find(".tooltip-content.tooltip-bottom");var i=tip.height();tip.fadeIn("fast"),tip_top.css({top:t.top-i,left:t.left+e.width()/2-tip.outerWidth(!0)/2}),tip_bottom.css({top:t.top,left:t.left+e.width()/2-tip.outerWidth(!0)/2})}),(function(){tip.fadeOut("fast")}))}));var t=a(".accordion");a(".active-accordion-section > .accordion-content").slideDown(),a(".active-accordion-section").parents(".accordion-content").slideDown(),t.on("click",".accordion-title",(function(t){t.stopPropagation?t.stopPropagation():t.returnValue=!1;var e=a(t.currentTarget);e.siblings(".accordion-content").stop(!0,!1).slideToggle("fast"),a(".accordion-section:not(:hover)").removeClass("active-accordion-section"),e.parent(".accordion-section").toggleClass("active-accordion-section"),e.closest(".accordion-section").siblings().find(".accordion-content").slideUp().end()})),a(".modal-button").each((function(){a(this).click((function(){var t=a(this).attr("data-modal");a("body").append('<div class="modal-wrap"><div class="modal-content"></div><div class="modal-close"></div></div>');var e=a("#"+t).html();a(".modal-content").append('<div class="modal-append modal"><a class="modal-close-icon"><i class="icon-cross_mark"></i></a>'+e+"</div>"),a(".modal-wrap").fadeIn("fast"),a(".modal-append").fadeIn("fast"),a("body").addClass("modal-active"),a(".modal-append").addClass("active-modal")}))})),a("body").on("click",".modal-close,.modal-close-button,.modal-close-icon",(function(){a(".modal-append").removeClass("active-modal"),a(".modal-wrap").fadeOut("fast",(function(){a(".modal-wrap").remove(),a("body").removeClass("modal-active")}))}));var e=window.location.href;a("a").filter((function(){return this.href==e})).parent("li").addClass("active-item"),e=window.location.href,a(".aside-nav a").filter((function(){return this.href==e})).parent("li").parent("ul").addClass("active-aside-item"),e=window.location.href,a(".aside-nav a").filter((function(){return this.href==e})).parent("li").parent("ul").parent("li").parent("ul").addClass("active-aside-item"),e=window.location.href,a(".aside-nav a").filter((function(){return this.href==e})).parent("li").parent("ul").parent("li").parent("ul").parent("li").parent("ul").addClass("active-aside-item")})),(0,e(311).Z)((()=>{window.addEventListener("scroll",(()=>{let a=document.querySelector(".sticky");null!==a&&(window.scrollY>100?a.classList.add("fixed"):a.classList.remove("fixed"))}))}))},311:(a,t,e)=>{function i(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}e.d(t,{Z:()=>i})}},a=>{a.O(0,[755],(()=>(31,a(a.s=31)))),a.O()}]);