"use strict";(globalThis["webpackChunkmy_bakery"]=globalThis["webpackChunkmy_bakery"]||[]).push([[90],{9090:(e,a,n)=>{n.r(a),n.d(a,{default:()=>W});n(8268);var o=n(1758),t=n(8790);const l={class:"background fadeIn2 bb background4"},r={class:"content"},s={class:"b-breadcrumb"},i={class:"b-breadcrumb"},c={class:"breadcrumb"},d=(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"/"},"Accueil")],-1),m={class:"active link-letter"},k={class:"bakery-single section fadeIn3"},u={class:"container"},p={class:"bakery-detail"},v={class:"bakery"},f={class:"row"},b={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},g={style:{position:"relative","z-index":"999999999",overflow:"visible",display:"block","min-height":"550px","max-height":"550px",height:"100%","margin-top":"0"}},h={class:"mb-0 text-bold"},y=["href"],L={key:1,class:"loadingDiv"},C={class:"list-bakery col-lg-6 col-md-6 col-sm-12 col-xs-12"},I={class:"list-bakery-marker"},x=["onClick","id"];function _(e,a,n,$,_,w){const A=(0,o.g2)("HeaderComponent"),B=(0,o.g2)("l-tile-layer"),D=(0,o.g2)("l-popup"),F=(0,o.g2)("l-marker"),z=(0,o.g2)("l-map"),T=(0,o.g2)("q-spinner-grid"),E=(0,o.g2)("Section7"),M=(0,o.g2)("FooterComponent");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(A),(0,o.Lk)("div",l,[(0,o.Lk)("div",r,[(0,o.Lk)("h1",null,(0,t.v_)(e.markersBakerys.nom),1),(0,o.Lk)("div",s,[(0,o.Lk)("div",i,[(0,o.Lk)("ol",c,[d,(0,o.Lk)("li",m,(0,t.v_)(e.markersBakerys.nom),1)])])])])]),(0,o.Lk)("div",k,[(0,o.Lk)("div",u,[(0,o.Lk)("div",p,[(0,o.Lk)("div",v,[(0,o.Lk)("div",f,[(0,o.Lk)("div",b,[(0,o.Lk)("div",g,[Boolean(this.map)?((0,o.uX)(),(0,o.Wv)(z,{key:0,zoomAnimation:!0,fadeAnimation:!0,markerZoomAnimation:!0,ref:"map",zoom:e.zoom,"onUpdate:zoom":a[0]||(a[0]=a=>e.zoom=a),center:[46.232192999999995,2.209666999999996]},{default:(0,o.k6)((()=>[(0,o.bF)(B,{url:e.urlMap,"layer-type":"base",name:"OpenStreetMap"},null,8,["url"]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.markersBakerys.markers,(e=>((0,o.uX)(),(0,o.Wv)(F,{key:"marker_popup_"+e.id,"lat-lng":[e.lat,e.lng]},{default:(0,o.k6)((()=>[(0,o.bF)(D,{id:"marker-popup-"+e.id},{default:(0,o.k6)((()=>[(0,o.Lk)("p",h,(0,t.v_)(e.title),1),(0,o.Lk)("p",null,(0,t.v_)(e.adresse),1),(0,o.Lk)("a",{href:"#/bakery/"+e.url,style:{"text-decoration":"none","text-align":"right",display:"block",color:"#cd9b33","font-weight":"700"}},"Voir la bolangerie",8,y)])),_:2},1032,["id"])])),_:2},1032,["lat-lng"])))),128))])),_:1},8,["zoom","center"])):((0,o.uX)(),(0,o.CE)("div",L,[(0,o.bF)(T,{size:"70px",color:"info"})]))])]),(0,o.Lk)("div",C,[(0,o.Lk)("ul",I,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.markersBakerys.markers,(a=>((0,o.uX)(),(0,o.CE)("li",null,[(0,o.Lk)("a",{onClick:n=>e.search(a.id),id:"marker-"+a.id},(0,t.v_)(a.title),9,x)])))),256))])])])])])])]),(0,o.bF)(E),(0,o.bF)(M)],64)}n(3150),n(4823);var w=n(6980),A=n(7024),B=n(455),D=n(128),F=n(6599),z=n(6025);n(9032);const T=(0,o.pM)({name:"BakerysRegion",components:{LMap:A.Do,LMarker:A.li,LTileLayer:A.a,LPopup:A.nA,HeaderComponent:D.A,Section7:F.A,FooterComponent:z.A},setup(){const e=(0,w.Pj)(),a=(0,B.lq)(),n=(0,o.EW)((()=>e.state.markersBakerys));return(0,o.sV)((()=>{e.dispatch("fetchMarkersBakerys",{region:a.params.region})})),{markersBakerys:n,urlMap:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:6}},data(){return{map:null}},methods:{},mounted(){setTimeout((()=>{this.map=1,void 0!==this.markersBakerys.markers&&this.markersBakerys.markers.forEach((e=>{$(document).on("click","#marker-"+e.id,(function(e){e.preventDefault()}))}))}),1200),$("#menu-main-menu").removeAttr("style"),$(document).on("click",".menu-toggle-2:not(.active)",(function(e){e.preventDefault(),$(this).addClass("active"),$("#menu-main-menu").fadeIn(300)})),$(document).on("click",".menu-toggle-2.active",(function(e){e.preventDefault(),$(this).removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#blog .btn-target",(function(e){e.preventDefault();var a=$(this).attr("href");location.href=a})),$(window).scroll((function(){$(this).scrollTop(),$("header").removeClass("navigation-sticky navigation-unpin")})),$(".header").addClass("h-bakery"),$("body").removeClass("loading"),$(".fadeIn").fadeIn(600),$(".fadeIn2").fadeIn(600),$(".fadeIn3").fadeIn(600),$(".fadeIn7").fadeIn(600),$(".fadeIn8").fadeIn(600),$(document).on("click",".scroll-click-s",(function(e){e.preventDefault();const a=$(this).data("scroll");$([document.documentElement,document.body]).animate({scrollTop:$("#"+a).offset().top},"200")})),$(window).scroll((function(){$(this).scrollTop()>=600?$("#back-top").addClass("active"):$("#back-top").removeClass("active")})),$(document).on("click","#back-top",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0})})),$(document).on("click",".menu-toggle",(function(e){e.preventDefault(),$(this).toggleClass("active"),$("#menu-main-menu").fadeToggle(300)})),setTimeout((()=>{$(".search-btn").on("click",(function(e){e.preventDefault(),$(".searchbox").addClass("active"),$("body").css({overflow:"hidden"})})),$(".searchbox-remove").on("click",(function(e){e.preventDefault(),$(".searchbox").removeClass("active"),$("body").css({overflow:"auto"})}))}),100)}});var E=n(2807),M=n(3561),X=n(8582),S=n.n(X);const K=(0,E.A)(T,[["render",_]]),W=K;S()(T,"components",{QSpinnerGrid:M.A})}}]);