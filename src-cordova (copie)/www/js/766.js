"use strict";(globalThis["webpackChunkorg_mybakery_app"]=globalThis["webpackChunkorg_mybakery_app"]||[]).push([[766],{3766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});n(2506);var c=n(2360);const a=(0,c.Fv)('<div class="background fadeIn2 bb background1"><div class="content"><h1>Activation de votre compte</h1><div class="b-breadcrumb"><div class="b-breadcrumb"><ol class="breadcrumb"><li><a href="/">Accueil</a></li><li class="active">Activation de votre compte</li></ol></div></div></div></div>',1),o={id:"login",class:"section fadeIn3"},s={class:"content b-80 b-80",style:{"min-height":"100%"}},i={class:"container"},l={key:0},r=(0,c.Lk)("div",{class:"text-center mb-5"},[(0,c.Lk)("img",{src:"check.png",style:{"max-width":"200px"}})],-1),u=["innerHTML"],d={class:"text-center mt-5"},m={key:1},v=(0,c.Lk)("div",{class:"text-center mb-5"},[(0,c.Lk)("img",{src:"error.png",style:{"max-width":"200px"}})],-1),b=["innerHTML"],k={class:"text-center mt-5"};function f(e,t,n,f,h,p){const $=(0,c.g2)("HeaderComponent"),g=(0,c.g2)("Section7"),y=(0,c.g2)("FooterComponent");return(0,c.uX)(),(0,c.CE)(c.FK,null,[(0,c.bF)($),a,(0,c.Lk)("div",o,[(0,c.Lk)("div",s,[(0,c.Lk)("div",i,[!1!==e.activateAccount.activateAccount?((0,c.uX)(),(0,c.CE)("div",l,[r,(0,c.Lk)("h3",{class:"text-center text-success",style:{"line-height":"40px"},innerHTML:e.activateAccount.message},null,8,u),(0,c.Lk)("div",d,[(0,c.Lk)("a",{onClick:t[0]||(t[0]=e=>{this.$router.push("/my-account")}),class:"btn btn-bakery"},"Connexion")])])):((0,c.uX)(),(0,c.CE)("div",m,[v,(0,c.Lk)("h3",{class:"text-center text-warning mb-5",style:{"line-height":"40px"},innerHTML:e.activateAccount.message},null,8,b),(0,c.Lk)("div",k,[(0,c.Lk)("a",{onClick:t[1]||(t[1]=e=>{this.$router.push("/my-account")}),class:"btn btn-bakery"},"Retour")])]))])])]),(0,c.bF)(g),(0,c.bF)(y)],64)}var h=n(2418),p=n(1338),g=n(5701),y=n(7130),C=n(723);const x=(0,c.pM)({name:"ActivateAccount",setup(){const e=(0,C.lq)(),t=(0,y.Pj)(),n=(0,c.EW)((()=>t.state.activateAccount));return(0,c.sV)((()=>{t.dispatch("fetchActivateAccount",{token:e.params.token})})),{activateAccount:n}},components:{HeaderComponent:h.A,FooterComponent:p.A,Section7:g.A},mounted(){null!==sessionStorage.getItem("token")&&(location.href="/"),$("#menu-main-menu").removeAttr("style"),$(document).on("click",".menu-toggle-2:not(.active)",(function(e){e.preventDefault(),$(this).addClass("active"),$("#menu-main-menu").fadeIn(300)})),$(document).on("click",".menu-toggle-2.active",(function(e){e.preventDefault(),$(this).removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#menu-main-menu .menu-item",(function(e){$(".menu-toggle-2").removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#blog .btn-target",(function(e){e.preventDefault();var t=$(this).attr("href");location.href=t})),$(".header").addClass("h-blog"),$("body").removeClass("loading"),$(".fadeIn").fadeIn(600),$(".fadeIn2").fadeIn(600),$(".fadeIn3").fadeIn(600),$(".fadeIn7").fadeIn(600),$(".fadeIn8").fadeIn(600),$(document).on("click",".scroll-click-s",(function(e){e.preventDefault();const t=$(this).data("scroll");$([document.documentElement,document.body]).animate({scrollTop:$("#"+t).offset().top},"slow")})),$(window).scroll((function(){$(this).scrollTop()>=600?$("#back-top").addClass("active"):$("#back-top").removeClass("active")})),$(document).on("click","#back-top",(function(e){e.preventDefault(),console.log("test"),$("html, body").animate({scrollTop:0},600)})),setTimeout((()=>{$(".search-btn").on("click",(function(e){e.preventDefault(),$(".searchbox").addClass("active"),$("body").css({overflow:"hidden"})})),$(".searchbox-remove").on("click",(function(e){e.preventDefault(),$(".searchbox").removeClass("active"),$("body").css({overflow:"auto"})}))}),1e3)}});var A=n(8497);const L=(0,A.A)(x,[["render",f]]),I=L}}]);