"use strict";(globalThis["webpackChunkmy_bakery"]=globalThis["webpackChunkmy_bakery"]||[]).push([[320],{8320:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ne});var o=l(9835);function a(e,t,l,a,n,s){const c=(0,o.up)("HeaderComponent"),i=(0,o.up)("ArticleComponent"),r=(0,o.up)("Section7"),d=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(i),(0,o.Wm)(r),(0,o.Wm)(d)],64)}var n=l(5568),s=(l(9665),l(6970));const c={class:"background fadeIn2 bb background2"},i={class:"content"},r={class:"b-breadcrumb"},d={class:"b-breadcrumb"},u={class:"breadcrumb"},m=(0,o._)("li",null,[(0,o._)("a",{href:"/"},"Accueil")],-1),g={class:"before"},f={class:"active"},b={class:"blog-single section fadeIn3"},h={class:"container"},v={class:"row"},p={class:"col-lg-9 col-md-8 col-sm-12 col-xs-12"},_={class:"post-detail"},w={class:"post-thumbnail"},k=["src","alt"],y={class:"post-content"},C={class:"post-container none"},D={class:"post-byline"},I={class:"post-posted"},x=["innerHTML"],T={class:"sharing"},A={class:"text-right"},H=["href"],Y=(0,o._)("i",{class:"fa fa-facebook"},null,-1),Z=[Y],z=["href"],M=(0,o._)("i",{class:"fa fa-twitter"},null,-1),P=[M],F=["href"],W=(0,o._)("i",{class:"fa fa-linkedin"},null,-1),B=[W],E=(0,o._)("div",{class:"clearfix"},null,-1),L={class:"col-lg-3 col-md-4 col-sm-12 col-xs-12"},O=(0,o.uE)('<div class="widget categories-2 widget-categories widget-category"><h3 class="widget-title">Categories</h3><div class="widget-content"><ul class="list-arrow"><li class="cat-item"><a>Blog</a></li></ul></div></div>',1),S={class:"widget tag-cloud-2 widget-tags"},U=(0,o._)("h3",{class:"widget-title"},"Tags",-1),j={class:"tagcloud"},K=["id"];function R(e,t,l,a,n,$){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",c,[(0,o._)("div",i,[(0,o._)("h1",null,(0,s.zw)(e.blog.title),1),(0,o._)("div",r,[(0,o._)("div",d,[(0,o._)("ol",u,[m,(0,o._)("li",g,[(0,o._)("a",{role:"button",onClick:t[0]||(t[0]=e=>this.$router.push("/blogs"))},"Blog")]),(0,o._)("li",f,(0,s.zw)(e.blog.title),1)])])])])]),(0,o._)("div",b,[(0,o._)("div",h,[(0,o._)("div",v,[(0,o._)("div",p,[(0,o._)("div",_,[(0,o._)("div",w,[(0,o._)("img",{width:"675",height:"450",src:"blogs/"+e.blog.image,alt:e.blog.title},null,8,k)]),(0,o._)("div",y,[(0,o._)("div",C,[(0,o._)("div",D,[(0,o.Uk)(" Par "+(0,s.zw)(e.blog.author)+" - "+(0,s.zw)(e.blog.categorie)+" - ",1),(0,o._)("span",I,(0,s.zw)(e.moment(e.blog.created_at).format("DD MMMM YYYY")),1)]),(0,o._)("div",{class:"post-content-inner",innerHTML:e.blog.large_description},null,8,x),(0,o._)("div",T,[(0,o._)("p",A,[(0,o.Uk)("Partager sur : "),(0,o._)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://my-bakery.fr"+e.$route.fullPath},Z,8,H),(0,o._)("a",{href:"https://twitter.com/share?url=https://my-bakery.fr"+e.$route.fullPath+"&text="+e.blog.title+"&via=my-bakery",onclick:"window.open(this.href);return false;"},P,8,z),(0,o._)("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=https://my-bakery.fr"+e.$route.fullPath+"&text="+e.blog.title},B,8,F)])])])])]),E]),(0,o._)("div",L,[O,(0,o._)("div",S,[U,(0,o._)("div",j,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.blog_tags,(e=>((0,o.wg)(),(0,o.iD)("a",{id:e.id,role:"button"},(0,s.zw)(e.title),9,K)))),256))])])])])])])],64)}var q=l(3100),G=l(3878),J=l.n(G),N=l(8339);J().locale("fr");const Q=(0,o.aZ)({name:"ArticleComponent",setup(){const e=(0,q.oR)(),t=(0,N.yj)(),l=(0,o.Fl)((()=>e.state.blog)),a=(0,o.Fl)((()=>e.state.blog_tags));return e.dispatch("fetchBlog",{url:t.params.url}),{blog:l,blog_tags:a,moment:J()}},mounted(){$("#menu-main-menu").removeAttr("style"),$(document).on("click",".menu-toggle-2:not(.active)",(function(e){e.preventDefault(),$(this).addClass("active"),$("#menu-main-menu").fadeIn(300)})),$(document).on("click",".menu-toggle-2.active",(function(e){e.preventDefault(),$(this).removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#menu-main-menu .menu-item",(function(e){$(".menu-toggle-2").removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#blog .btn-target",(function(e){e.preventDefault();var t=$(this).attr("href");location.href=t})),$(".header").addClass("h-blog"),$("body").removeClass("loading"),$(".fadeIn").fadeIn(600),$(".fadeIn2").fadeIn(600),$(".fadeIn3").fadeIn(600),$(".fadeIn7").fadeIn(600),$(".fadeIn8").fadeIn(600),$(document).on("click",".scroll-click-s",(function(e){e.preventDefault();const t=$(this).data("scroll");$([document.documentElement,document.body]).animate({scrollTop:$("#"+t).offset().top},"slow")})),$(window).scroll((function(){$(this).scrollTop()>=600?$("#back-top").addClass("active"):$("#back-top").removeClass("active")})),$(document).on("click","#back-top",(function(e){e.preventDefault(),console.log("test"),$("html, body").animate({scrollTop:0},600)})),setTimeout((()=>{$(".search-btn").on("click",(function(e){e.preventDefault(),$(".searchbox").addClass("active"),$("body").css({overflow:"hidden"})})),$(".searchbox-remove").on("click",(function(e){e.preventDefault(),$(".searchbox").removeClass("active"),$("body").css({overflow:"auto"})}))}),1e3)}});var V=l(1639);const X=(0,V.Z)(Q,[["render",R]]),ee=X;var te=l(299),le=l(2018);const oe=(0,o.aZ)({name:"Article",components:{HeaderComponent:n.Z,ArticleComponent:ee,FooterComponent:te.Z,Section7:le.Z}}),ae=(0,V.Z)(oe,[["render",a]]),ne=ae}}]);