"use strict";(globalThis["webpackChunkmy_bakery"]=globalThis["webpackChunkmy_bakery"]||[]).push([[661],{1661:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});n(9665);var c=n(9835);const a=(0,c.uE)('<div class="background fadeIn2 bb background1"><div class="content"><h1>Activation de votre compte</h1><div class="b-breadcrumb"><div class="b-breadcrumb"><ol class="breadcrumb"><li><a href="/">Accueil</a></li><li class="active">Activation de votre compte</li></ol></div></div></div></div>',1),o={id:"login",class:"section fadeIn3"},i={class:"content b-80 b-80",style:{"min-height":"100%"}},s={class:"container"},l={key:0},r=(0,c._)("div",{class:"text-center mb-5"},[(0,c._)("img",{src:"check.png",style:{"max-width":"200px"}})],-1),u=["innerHTML"],d={class:"text-center mt-5"},m={key:1},v=(0,c._)("div",{class:"text-center mb-5"},[(0,c._)("img",{src:"error.png",style:{"max-width":"200px"}})],-1),b=["innerHTML"],f={class:"text-center mt-5"};function h(e,t,n,h,p,$){const g=(0,c.up)("HeaderComponent"),k=(0,c.up)("Section7"),y=(0,c.up)("FooterComponent");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(g),a,(0,c._)("div",o,[(0,c._)("div",i,[(0,c._)("div",s,[!1!==e.activateAccount.activateAccount?((0,c.wg)(),(0,c.iD)("div",l,[r,(0,c._)("h3",{class:"text-center text-success",style:{"line-height":"40px"},innerHTML:e.activateAccount.message},null,8,u),(0,c._)("div",d,[(0,c._)("a",{onClick:t[0]||(t[0]=e=>{this.$router.push("/my-account")}),class:"btn btn-bakery"},"Connexion")])])):((0,c.wg)(),(0,c.iD)("div",m,[v,(0,c._)("h3",{class:"text-center text-warning mb-5",style:{"line-height":"40px"},innerHTML:e.activateAccount.message},null,8,b),(0,c._)("div",f,[(0,c._)("a",{onClick:t[1]||(t[1]=e=>{this.$router.push("/my-account")}),class:"btn btn-bakery"},"Retour")])]))])])]),(0,c.Wm)(k),(0,c.Wm)(y)],64)}var p=n(5568),g=n(299),k=n(2018),y=n(3100),x=n(8339);const C=(0,c.aZ)({name:"ActivateAccount",setup(){const e=(0,x.yj)(),t=(0,y.oR)(),n=(0,c.Fl)((()=>t.state.activateAccount));return(0,c.bv)((()=>{t.dispatch("fetchActivateAccount",{token:e.params.token})})),{activateAccount:n}},components:{HeaderComponent:p.Z,FooterComponent:g.Z,Section7:k.Z},mounted(){null!==sessionStorage.getItem("token")&&(location.href="/"),$("#menu-main-menu").removeAttr("style"),$(document).on("click",".menu-toggle-2:not(.active)",(function(e){e.preventDefault(),$(this).addClass("active"),$("#menu-main-menu").fadeIn(300)})),$(document).on("click",".menu-toggle-2.active",(function(e){e.preventDefault(),$(this).removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#menu-main-menu .menu-item",(function(e){$(".menu-toggle-2").removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#blog .btn-target",(function(e){e.preventDefault();var t=$(this).attr("href");location.href=t})),$(".header").addClass("h-blog"),$("body").removeClass("loading"),$(".fadeIn").fadeIn(600),$(".fadeIn2").fadeIn(600),$(".fadeIn3").fadeIn(600),$(".fadeIn7").fadeIn(600),$(".fadeIn8").fadeIn(600),$(document).on("click",".scroll-click-s",(function(e){e.preventDefault();const t=$(this).data("scroll");$([document.documentElement,document.body]).animate({scrollTop:$("#"+t).offset().top},"slow")})),$(window).scroll((function(){$(this).scrollTop()>=600?$("#back-top").addClass("active"):$("#back-top").removeClass("active")})),$(document).on("click","#back-top",(function(e){e.preventDefault(),console.log("test"),$("html, body").animate({scrollTop:0},600)})),setTimeout((()=>{$(".search-btn").on("click",(function(e){e.preventDefault(),$(".searchbox").addClass("active"),$("body").css({overflow:"hidden"})})),$(".searchbox-remove").on("click",(function(e){e.preventDefault(),$(".searchbox").removeClass("active"),$("body").css({overflow:"auto"})}))}),1e3)}});var _=n(1639);const A=(0,_.Z)(C,[["render",h]]),I=A}}]);