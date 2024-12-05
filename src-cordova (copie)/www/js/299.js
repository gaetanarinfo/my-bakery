"use strict";(globalThis["webpackChunkmy_bakery"]=globalThis["webpackChunkmy_bakery"]||[]).push([[299],{299:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ae});var a=l(1758);function o(e,t,l,o,n,s){const i=(0,a.g2)("HeaderComponent"),c=(0,a.g2)("BlogComponent"),r=(0,a.g2)("Section7"),u=(0,a.g2)("FooterComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(i),(0,a.bF)(c),(0,a.bF)(r),(0,a.bF)(u)],64)}var n=l(5622),s=(l(4748),l(8790)),i=l(9104);const c=(0,a.Fv)('<div class="background fadeIn2 bb background2"><div class="content"><h1>Notre blog</h1><div class="b-breadcrumb"><div class="b-breadcrumb"><ol class="breadcrumb"><li><a href="/">Accueil</a></li><li class="active">Blog</li></ol></div></div></div></div>',1),r={id:"blog",class:"section fadeIn3 last-blog"},u={class:"column-inner"},d={class:"wrapper"},m={class:"bloc container"},b={class:"hp-container"},g={class:"section text-center"},v={id:"blocGrid",class:"row"},h={class:"thumbnail"},p=["onClick","title"],k=["src"],f={class:"content text-start"},C={class:"date"},L=(0,a.Lk)("i",{class:"fa-solid fa-clock me-1"},null,-1),y={class:"title"},w={class:"author"},A={class:"views me-2"},I=(0,a.Lk)("i",{class:"fa-solid fa-eye me-1"},null,-1),x={key:0},D=["onClick","title"],T={class:"mt-5"},B={class:"b-pagination"},F={class:"pagination"},M=(0,a.Lk)("i",{class:"fa fa-angle-left"},null,-1),_=[M],E=["onClick"],Y=(0,a.Lk)("i",{class:"fa fa-angle-right"},null,-1),G=[Y];function K(e,t,l,o,n,$){const M=(0,a.g2)("q-inner-loading");return(0,a.uX)(),(0,a.CE)(a.FK,null,[c,(0,a.Lk)("div",r,[(0,a.Lk)("div",u,[(0,a.Lk)("div",d,[(0,a.Lk)("div",m,[(0,a.Lk)("div",b,[(0,a.Lk)("div",g,[(0,a.bo)((0,a.Lk)("div",v,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.blogsAll,(t=>(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",{class:"col-lg-4 col-md-4 col-sm-12 col-xs-12",key:t.id},[(0,a.Lk)("article",null,[(0,a.Lk)("div",h,[(0,a.Lk)("a",{onClick:e=>this.$router.push("/blogs/"+t.url),title:t.title},null,8,p),(0,a.Lk)("img",{width:"450",height:"300",src:"blogs/"+t.image,alt:""},null,8,k)]),(0,a.Lk)("div",f,[(0,a.Lk)("span",C,[L,(0,a.eW)(" Créer le "+(0,s.v_)(e.moment(t.created_at).format("DD MMMM YYYY à H:mm")),1)]),(0,a.Lk)("h3",y,(0,s.v_)(t.title),1),(0,a.Lk)("span",w,[(0,a.eW)("Par "),(0,a.Lk)("span",null,(0,s.v_)(t.author),1)]),(0,a.Lk)("span",A,[I,(0,a.eW)((0,s.v_)(t.views)+" vue",1),t.views>=2?((0,a.uX)(),(0,a.CE)("span",x,"s")):(0,a.Q3)("",!0)]),(0,a.Lk)("p",null,(0,s.v_)(t.small_content),1),(0,a.Lk)("a",{onClick:e=>this.$router.push("/blogs/"+t.url),title:t.title,class:"btn btn-bakery"},"Lire la suite",8,D)])])])),[[i.aG,e.showSimulatedReturnData]]))),128))],512),[[i.aG,e.showSimulatedReturnData]]),(0,a.bo)((0,a.Lk)("div",T,[(0,a.Lk)("div",B,[(0,a.Lk)("ul",F,[(0,a.Lk)("li",null,[(0,a.Lk)("a",{role:"button",class:(0,s.C4)(1===this.current?"disabled":""),onClick:t[0]||(t[0]=t=>e.chargeBlog(this.current-1))},_,2)]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.max,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t,class:(0,s.C4)(e.current===t?"active":"")},[(0,a.Lk)("a",{role:"button",onClick:l=>e.chargeBlog(t)},(0,s.v_)(t),9,E)],2)))),128)),(0,a.Lk)("li",null,[(0,a.Lk)("a",{role:"button",class:(0,s.C4)(this.current===Math.round(this.blogsAllCount/9)?"disabled":""),onClick:t[1]||(t[1]=t=>e.chargeBlog(this.current+1))},G,2)])])])],512),[[i.aG,e.showSimulatedReturnData]]),(0,a.bF)(M,{style:{"z-index":"9999"},size:"5rem",color:"blue-5",showing:e.visible},null,8,["showing"])])])])])])])],64)}var R=l(6980),X=l(5038),S=l.n(X),W=l(8734),z=l(2303);S().locale("fr");var H=1;const N=(0,a.pM)({name:"BlogcComponent",setup(){const e=(0,R.Pj)(),t=(0,W.KR)(!1),l=(0,W.KR)(!0),o=(0,a.EW)((()=>e.state.blogsAll)),n=(0,a.EW)((()=>e.state.blogsAllCount));return(0,a.sV)((()=>{e.dispatch("fetchBlogsAll")})),{showTextLoading(){t.value=!0,l.value=!0,setTimeout((()=>{t.value=!1,l.value=!0}),3e3)},blogsAll:o,blogsAllCount:n,visible:t,moment:S(),showSimulatedReturnData:l}},data(){return{current:(0,W.KR)(1),max:1}},methods:{chargeBlog(e){z.A.get("https://serveur.my-bakery.fr/blogs-page/"+e).then((t=>{this.current=e,$("#blocGrid").html(""),$([document.documentElement,document.body]).animate({scrollTop:$("#blocGrid").offset().top},"slow"),this.showTextLoading(),$.each(t.data.blogsAll,(function(e,t){var l="";l=t.vue>=2?"<span>s</span>":"",$("#blocGrid").append('<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><article><div class="thumbnail"><a href="#/blogs/'+t.url+'" title="'+t.title+'"></a><img width="450" height="300" src="blogs/'+t.image+'" alt=""></div><div class="content text-start"><span class="date"><i class="fa-solid fa-clock me-1"></i> Créer le '+S()(t.created_at).format("DD MMMM YYYY à H:mm")+'</span><h3 class="title">'+t.title+'</h3><span class="author">Par <span>'+t.author+'</span></span><span class="views me-2"><i class="fa-solid fa-eye me-1"></i> '+t.views+" vue"+l+"</span><p>"+t.small_content+'</p><a href="#/blogs/'+t.url+'" title="'+t.title+'" class="btn btn-bakery">Lire la suite</a></div></article></div>')}))})).catch((e=>{console.log(e)}))},countBlog(){H<=1&&setTimeout((()=>{this.blogsAll.length<=8?this.max=1:this.max=Math.round(this.blogsAllCount/9),H++}),300)}},mounted(){$("#menu-main-menu").removeAttr("style"),setTimeout((()=>{this.countBlog()}),1e3),$(document).on("click",".menu-toggle-2:not(.active)",(function(e){e.preventDefault(),$(this).addClass("active"),$("#menu-main-menu").fadeIn(300)})),$(document).on("click",".menu-toggle-2.active",(function(e){e.preventDefault(),$(this).removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#menu-main-menu .menu-item",(function(e){$(".menu-toggle-2").removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#blog .btn-target",(function(e){e.preventDefault();var t=$(this).attr("href");location.href=t})),$(".header").addClass("h-blog"),$("body").removeClass("loading"),$(".fadeIn").fadeIn(600),$(".fadeIn2").fadeIn(600),$(".fadeIn3").fadeIn(600),$(".fadeIn7").fadeIn(600),$(".fadeIn8").fadeIn(600),$(document).on("click",".scroll-click-s",(function(e){e.preventDefault();const t=$(this).data("scroll");$([document.documentElement,document.body]).animate({scrollTop:$("#"+t).offset().top},"slow")})),$(window).scroll((function(){$(this).scrollTop()>=600?$("#back-top").addClass("active"):$("#back-top").removeClass("active")})),$(document).on("click","#back-top",(function(e){e.preventDefault(),console.log("test"),$("html, body").animate({scrollTop:0},600)})),setTimeout((()=>{$(".search-btn").on("click",(function(e){e.preventDefault(),$(".searchbox").addClass("active"),$("body").css({overflow:"hidden"})})),$(".searchbox-remove").on("click",(function(e){e.preventDefault(),$(".searchbox").removeClass("active"),$("body").css({overflow:"auto"})}))}),1e3)}});var j=l(2807),P=l(1426),O=l(8582),Q=l.n(O);const q=(0,j.A)(N,[["render",K]]),V=q;Q()(N,"components",{QInnerLoading:P.A});var J=l(9982),U=l(1723),Z=l(6599);const ee={title:"Notre blog sur my bakery",description:"Bienvenue sur le blog de my bakery, retrouvez tous nos articles liée à la boulangerie, à nos applications, ou au mise à jour du site internet.",titleTemplate:e=>`${e}`,descriptionTemplate:e=>`${e}`,meta:{title:{name:"title",content:"Notre blog sur my bakery"},description:{name:"description",content:"Bienvenue sur le blog de my bakery, retrouvez tous nos articles liée à la boulangerie, à nos applications, ou au mise à jour du site internet."},ogTitle:{property:"og:title",template(){return"Notre blog sur my bakery"}}}},te=(0,a.pM)({name:"Blog",setup(){(0,U.A)(ee)},components:{HeaderComponent:n.A,BlogComponent:V,FooterComponent:J.A,Section7:Z.A}}),le=(0,j.A)(te,[["render",o]]),ae=le}}]);