(globalThis["webpackChunkorg_mybakery_app"]=globalThis["webpackChunkorg_mybakery_app"]||[]).push([[239],{9774:(e,a,s)=>{s(3128),s(5801),setTimeout((()=>{$("body").removeClass("loading"),$(".fadeIn").fadeIn(600),$(".fadeIn2").fadeIn(600),$(".fadeIn3").fadeIn(600),$(".fadeIn4").fadeIn(600),$(".fadeIn5").fadeIn(600),$(".fadeIn6").fadeIn(600),$(".fadeIn7").fadeIn(600),$(".fadeIn8").fadeIn(600),$(".fadeIn9").fadeIn(600),$(".fadeIn10").fadeIn(600),$(".carousel-control-prev").on("click",(function(e){e.preventDefault()})),$(".carousel-control-next").on("click",(function(e){e.preventDefault()}))}),2500),$(window).scroll((function(){$(this).scrollTop()>=300?$(".fadeIn.header").addClass("navigation-sticky navigation-unpin"):$(".fadeIn.header").removeClass("navigation-sticky navigation-unpin")})),$(document).on("click",".menu-toggle:not(.active)",(function(e){e.preventDefault(),$(this).addClass("active"),$("#menu-main-menu").fadeIn(300)})),$(document).on("click",".menu-toggle.active",(function(e){e.preventDefault(),$(this).removeClass("active"),$("#menu-main-menu").fadeOut(300)})),$(document).on("click","#menu-main-menu .menu-item",(function(e){$(".menu-toggle").removeClass("active"),$("#menu-main-menu").fadeOut(300)})),setTimeout((()=>{const e=document.querySelector("#sliders");new bootstrap.Carousel(e,{interval:2500,wrap:!0})}),3e3),$(document).on("click",".dot",(function(e){e.preventDefault();const a=$(this).data("slide");setTimeout((()=>{$(document).find("div.card-p").fadeOut(300)}),300),setTimeout((()=>{$("#slide-"+a).fadeIn(300)}),600),$(document).find("div.dot").removeClass("active"),$(this).addClass("active")})),$(window).scroll((function(){$(this).scrollTop()>=300?$("#back-top").addClass("active"):$("#back-top").removeClass("active")})),$(document).on("click","#back-top",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0})})),setTimeout((()=>{$(".search-btn").on("click",(function(e){e.preventDefault(),$(".searchbox").addClass("active"),$("body").css({overflow:"hidden"})})),$(".searchbox-remove").on("click",(function(e){e.preventDefault(),$(".searchbox").removeClass("active"),$("body").css({overflow:"auto"})}))}),4e3),$(document).on("click",".scroll-click",(function(e){e.preventDefault();const a=$(this).data("scroll");$([document.documentElement,document.body]).animate({scrollTop:$("#"+a).offset().top},"slow")}))},5239:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>il});var t=s(2360);function l(e,a,s,l,i,n){const r=(0,t.g2)("HeaderComponent"),c=(0,t.g2)("SliderComponent"),o=(0,t.g2)("SectionsHome"),u=(0,t.g2)("FooterComponent"),d=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(d,null,{default:(0,t.k6)((()=>[(0,t.bF)(r),(0,t.bF)(c),(0,t.bF)(o),(0,t.bF)(u)])),_:1})}s(2506);var i=s(6466),n=s(8352);const r={class:"searchbox"},c=(0,t.Lk)("div",{class:"searchbox-remove"},[(0,t.Lk)("i",{class:"fa fa-remove"})],-1),o={class:"container"},u=(0,t.Lk)("p",null,"Entrer un mot clé :",-1),d={id:"search-header-product"},k=(0,t.Lk)("button",{type:"submit"},[(0,t.Lk)("i",{class:"fa-solid fa-magnifying-glass"})],-1),v={class:"searchbox-result section last-blog"},m={class:"column-inner"},p={class:"wrapper"},b={class:"bloc container"},g={class:"hp-container"},h={class:"section text-center"},L={id:"blocGrids",class:"row"},f=(0,t.Lk)("footer",{class:"text-center"},null,-1),y={class:"fadeIn header"},C={class:"navigation"},x={class:"hn-container"},I={class:"nav-left"},_={class:"menu-left"},E={class:"menu-item"},w={class:"menu-item"},X={class:"menu-item"},S=["href"],F=(0,t.Lk)("div",{class:"nav-center"},[(0,t.Lk)("a",{href:"",class:"logo"},[(0,t.Lk)("img",{src:"logo-light.png",alt:"My bakery - classement des meilleurs boulangerie de France"})])],-1),M={class:"nav-right"},A={class:"menu-right"},D={class:"menu-item"},B=["href"],H={class:"menu-item"},P=["href"],K={class:"actions"},Q=(0,t.Lk)("i",{class:"icono-user"},null,-1),T=[Q],q=(0,t.Lk)("i",{class:"icono-user"},null,-1),W=[q],j=(0,t.Lk)("i",{class:"icono-signOut"},null,-1),V=[j],Y=(0,t.Lk)("i",{class:"icono-heart"},null,-1),z=[Y],O=(0,t.Lk)("a",{href:"#",class:"search-btn"},[(0,t.Lk)("i",{class:"icono-search"})],-1),G={class:"navigation-mobile"},N={class:"hn-container"},R=(0,t.Fv)('<a class="logo" href="/"><img src="logo-light.png" alt="My bakery - classement des meilleurs boulangerie de France"></a><ul id="menu-main-menu"><li class="menu-item"><a href="/" class="active" aria-current="page">Accueil</a></li><li class="menu-item"><a href="#" class="scroll-click" data-scroll="a-propos">À propos de nous</a></li><li class="menu-item"><a href="#" class="scroll-click" data-scroll="contact">Contact</a></li><li class="menu-item"><a href="#" class="scroll-click" data-scroll="classement">Boulangeries</a></li><li class="menu-item"><a href="#" class="scroll-click" data-scroll="blog">Blog</a></li></ul><div class="menu-toggle"><span></span></div>',3),U={class:"actions"},J=(0,t.Lk)("i",{class:"icono-user"},null,-1),Z=[J],ee=(0,t.Lk)("i",{class:"icono-user"},null,-1),ae=[ee],se=(0,t.Lk)("i",{class:"icono-heart"},null,-1),te=[se],le=(0,t.Lk)("i",{class:"icono-signOut"},null,-1),ie=[le],ne=(0,t.Lk)("a",{href:"#",class:"search-btn"},[(0,t.Lk)("i",{class:"icono-search"})],-1);function re(e,a,s,l,$,Q){const q=(0,t.g2)("q-inner-loading");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("div",r,[c,(0,t.Lk)("div",o,[(0,t.Lk)("header",null,[u,(0,t.Lk)("form",d,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=a=>e.searchHeader=a),onKeyup:a[1]||(a[1]=a=>e.searchBlog(this.searchHeader)),type:"text",class:"form-control"},null,544),[[i.Jo,e.searchHeader]]),k])]),(0,t.Lk)("div",v,[(0,t.Lk)("div",m,[(0,t.Lk)("div",p,[(0,t.Lk)("div",b,[(0,t.Lk)("div",g,[(0,t.Lk)("div",h,[(0,t.bo)((0,t.Lk)("div",L,null,512),[[i.aG,e.showSimulatedReturnData]]),(0,t.bF)(q,{style:{"z-index":"9999"},size:"5rem",color:"blue-5",showing:e.visible},null,8,["showing"])])])])])])]),f])]),(0,t.Lk)("header",y,[(0,t.Lk)("nav",C,[(0,t.Lk)("div",x,[(0,t.Lk)("div",I,[(0,t.Lk)("ul",_,[(0,t.Lk)("li",E,[(0,t.Lk)("a",{href:"/",class:(0,n.C4)("/"===this.$route.path?"active":""),"aria-current":"page"},"Accueil",2)]),(0,t.Lk)("li",w,[(0,t.Lk)("a",{role:"button",class:(0,n.C4)("/"===this.$route.path?"scroll-click":"scroll-click-s"),"data-scroll":"a-propos"},"À propos",2)]),(0,t.Lk)("li",X,[(0,t.Lk)("a",{href:(this.$route.path,""),class:(0,n.C4)("/"===this.$route.path?"scroll-click":"scroll-click-s"),"data-scroll":"contact"},"Contact",10,S)])])]),F,(0,t.Lk)("div",M,[(0,t.Lk)("ul",A,[(0,t.Lk)("li",D,[(0,t.Lk)("a",{href:"/"!==this.$route.path?"#/bakerys  ":"",class:(0,n.C4)(["/bakerys"===this.$route.path?"active":"","scroll-click"]),"data-scroll":"classement"},"Boulangeries",10,B)]),(0,t.Lk)("li",H,[(0,t.Lk)("a",{href:"/"!==this.$route.path?"#/blog":"",class:(0,n.C4)(["/blog"===this.$route.path?"active":"","scroll-click"]),"data-scroll":"blog"},"Blog",10,P)])]),(0,t.Lk)("div",K,[e.isLoggedIn?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("a",{key:0,onClick:a[2]||(a[2]=e=>{this.$router.push("/my-account")}),role:"button"},T)),e.isLoggedIn?((0,t.uX)(),(0,t.CE)("a",{key:1,onClick:a[3]||(a[3]=e=>{this.$router.push("/my-account-profil")}),role:"button"},W)):(0,t.Q3)("",!0),e.isLoggedIn?((0,t.uX)(),(0,t.CE)("a",{key:2,onClick:a[4]||(a[4]=(...a)=>e.logout&&e.logout(...a)),role:"button"},V)):(0,t.Q3)("",!0),(0,t.Lk)("a",{onClick:a[5]||(a[5]=e=>{this.$router.push("/my-bakerys")}),class:"heart-btn"},z),O])])])]),(0,t.Lk)("nav",G,[(0,t.Lk)("div",N,[R,(0,t.Lk)("div",U,[e.isLoggedIn?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("a",{key:0,onClick:a[6]||(a[6]=e=>{this.$router.push("/my-account")}),role:"button"},Z)),e.isLoggedIn?((0,t.uX)(),(0,t.CE)("a",{key:1,onClick:a[7]||(a[7]=e=>{this.$router.push("/my-account-profil")}),role:"button"},ae)):(0,t.Q3)("",!0),(0,t.Lk)("a",{role:"button",onClick:a[8]||(a[8]=e=>{this.$router.push("/my-bakerys")}),class:"heart-btn"},te),e.isLoggedIn?((0,t.uX)(),(0,t.CE)("a",{key:2,onClick:a[9]||(a[9]=(...a)=>e.logout&&e.logout(...a)),role:"button"},ie)):(0,t.Q3)("",!0),ne])])])])],64)}var ce=s(7130),oe=s(2804),ue=s.n(oe),de=s(4824),ke=s(8769);const ve=null,me=(0,t.pM)({name:"HeaderComponent",setup(){const e=(0,ce.Pj)(),a=(0,de.KR)(!1),s=(0,de.KR)(!0),l=((0,t.EW)((()=>e.state.searchAll)),(0,t.EW)((()=>e.state.stateUser.user)));return(0,t.sV)((()=>{e.dispatch("fetchSearchAll")})),null!==sessionStorage.getItem("token")&&(0,t.sV)((()=>{e.dispatch("fetchVerificationAccount")})),{showTextLoading(){a.value=!0,s.value=!0,setTimeout((()=>{a.value=!1,s.value=!0}),1500)},isLoggedIn:e.getters.isLoggedIn,user:l,visible:a,searchHeader:ve,moment:ue(),showSimulatedReturnData:s}},methods:{searchBlog(e=null){""!=e.trim()&&this.searchHeader.length>=3&&this.showTextLoading(),setTimeout((()=>{""!=e.trim()&&this.searchHeader.length>=3&&ke.A.get("https://serveur.my-bakery.fr/search/"+e.trim()).then((e=>{$(".searchbox-result #blocGrids").html(""),0!=e.data.searchAll.length?$.each(e.data.searchAll,(function(e,a){var s="";s=a.vue>=2?"<span>s</span>":"",$(".searchbox-result #blocGrids").append('<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><article><div class="thumbnail"><a href="#/blogs/'+a.url+'" title="'+a.title+'"></a><img width="450" height="300" src="blogs/'+a.image+'" alt=""></div><div class="content text-start"><span class="date"><i class="fa-solid fa-clock me-1"></i> Créer le '+ue()(a.created_at).format("DD MMMM YYYY à H:mm")+'</span><h3 class="title">'+a.title+'</h3><span class="author">Par <span>'+a.author+'</span></span><span class="views me-2"><i class="fa-solid fa-eye me-1"></i> '+a.views+" vue"+s+"</span><p>"+a.small_content+'</p><a href="#/blogs/'+a.url+'" title="'+a.title+'" class="btn btn-bakery">Lire la suite</a></div></article></div>')})):$(".searchbox-result #blocGrids").html('<div class="alert alert-info">Aucun article n\'a été trouvé.</div>')})).catch((e=>{console.log(e)}))}),1500)},logout(e){e.preventDefault(),sessionStorage.removeItem("token"),setTimeout((()=>{location.reload()}),1500)}},props:{}});var pe=s(8497),be=s(3492),ge=s(3452),he=s.n(ge);const Le=(0,pe.A)(me,[["render",re]]),fe=Le;he()(me,"components",{QInnerLoading:be.A});var ye=s(1338);const Ce={class:"container-xl fadeIn"},xe=(0,t.Fv)('<div id="sliders" class="carousel slide carousel-fade" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="slides/slider-1.png" class="d-block" alt="Croissants"></div><div class="carousel-item"><img src="slides/slider-2.png" class="d-block" alt="Panier"></div></div></div>',1),$e=[xe];function Ie(e,a,s,l,i,n){return(0,t.uX)(),(0,t.CE)("div",Ce,$e)}const _e=(0,t.pM)({name:"SliderComponent",props:{}}),Ee=(0,pe.A)(_e,[["render",Ie]]),we=Ee;function Xe(e,a,s,l,i,n){const r=(0,t.g2)("Section1"),c=(0,t.g2)("Section2"),o=(0,t.g2)("Section3"),u=(0,t.g2)("Section4"),d=(0,t.g2)("Section9"),k=(0,t.g2)("Section5"),v=(0,t.g2)("Section6"),m=(0,t.g2)("Section8"),p=(0,t.g2)("Section7");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(r),(0,t.bF)(c),(0,t.bF)(o),(0,t.bF)(u),(0,t.bF)(d),(0,t.bF)(k),(0,t.bF)(v),(0,t.bF)(m),(0,t.bF)(p)],64)}const Se={class:"container-xl section fadeIn"},Fe=(0,t.Lk)("div",{class:"text-center"},[(0,t.Lk)("h1",{class:"title"},"Delicieux n'est ce pas !"),(0,t.Lk)("p",{class:"description"},"Bienvenue sur notre comparateur de boulangerie en France."),(0,t.Lk)("div",null,[(0,t.Lk)("img",{class:"delicious",src:"floral.png",alt:"Delicieux"})])],-1),Me=[Fe];function Ae(e,a,s,l,i,n){return(0,t.uX)(),(0,t.CE)("div",Se,Me)}const De=(0,t.pM)({name:"SectionHome1",props:{}}),Be=(0,pe.A)(De,[["render",Ae]]),He=Be,Pe={class:"container-xl section fadeIn2 award"},Ke=(0,t.Fv)('<div class="row"><div class="col text-center"><div><img src="award/award-1.png" alt=""></div><p class="number">1</p><h4>Plus de perte de temps</h4><p> Vous en avez marre de chercher sur googler une bonne boulangerie en France, nous avons alors conçu ce site internet pour vous. </p></div><div class="col text-center"><div><img src="award/award-2.png" alt=""></div><p class="number">2</p><h4>Les meilleures boulangeries sont ici</h4><p> Une bonne boulangerie est un endroit où l&#39;on peut trouver du pain frais et délicieux ainsi que d&#39;autres produits de boulangerie de haute qualité. </p></div><div class="col text-center"><div><img src="award/award-3.png" alt=""></div><p class="number">3</p><h4>Rechercher facilement votre boulangerie</h4><p> Pour trouver une bonne boulangerie près de chez vous, vous êtes aux bons endroits parcourez notre site internet pour trouver la boulangerie qui vous fera craquer. </p></div></div>',1),Qe=[Ke];function Te(e,a,s,l,i,n){return(0,t.uX)(),(0,t.CE)("div",Pe,Qe)}const qe=(0,t.pM)({name:"SectionHome2",props:{}}),We=(0,pe.A)(qe,[["render",Te]]),je=We,Ve={class:"container-xl section fadeIn3 boulanger"},Ye=(0,t.Fv)('<div class="row"><div class="col"><div><img src="boulanger.png" alt="Boulanger"></div></div><div class="col"><p>“La baguette de pain, symbole de la France, est le fruit du travail du boulanger.&quot; : Ce dicton souligne l&#39;importance de la baguette de pain dans la culture française et rend hommage au savoir-faire des boulangers.” </p><small>Gaëtan Seigneur - Développeur pour My bakery</small><img src="signature.png" alt="Dev72"></div></div>',1),ze=[Ye];function Oe(e,a,s,l,i,n){return(0,t.uX)(),(0,t.CE)("div",Ve,ze)}const Ge=(0,t.pM)({name:"SectionHome3",props:{}}),Ne=(0,pe.A)(Ge,[["render",Oe]]),Re=Ne,Ue={id:"classement",class:"section fadeIn4 last-bakery"},Je={class:"column-inner"},Ze={class:"wrapper"},ea={class:"bloc container"},aa={class:"hp-container"},sa=(0,t.Lk)("div",{class:"section text-center"},[(0,t.Lk)("h2",{class:"title"},"Nos meilleurs boulangerie !"),(0,t.Lk)("p",{class:"description"},"Tout est dit, ça se passe en dessous."),(0,t.Lk)("div",null,[(0,t.Lk)("img",{class:"delicious",src:"floral.png",alt:"Delicieux"})])],-1),ta={class:"section"},la={class:"row"},ia={class:"row"},na=["id"],ra={class:"carousel-indicators"},ca=["data-bs-target"],oa=["data-bs-target"],ua=["data-bs-target"],da=["data-bs-target"],ka={class:"carousel-inner"},va={class:"carousel-item active"},ma=["href"],pa=["src","alt"],ba=["src","alt"],ga={class:"carousel-item"},ha=["href"],La=["src","alt"],fa=["src","alt"],ya={class:"carousel-item"},Ca=["href"],xa=["src","alt"],$a=["src","alt"],Ia={class:"carousel-item"},_a=["href"],Ea=["src","alt"],wa=["src","alt"],Xa=["data-bs-target"],Sa=(0,t.Lk)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1),Fa=(0,t.Lk)("span",{class:"visually-hidden"},"Previous",-1),Ma=[Sa,Fa],Aa=["data-bs-target"],Da=(0,t.Lk)("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),Ba=(0,t.Lk)("span",{class:"visually-hidden"},"Next",-1),Ha=[Da,Ba],Pa=["href"],Ka={class:"content"},Qa={class:"devanture"},Ta=(0,t.Lk)("span",null,"Devanture du magasin :",-1),qa={class:"br-widget"},Wa=["data-rating-value","data-rating-text"],ja={key:2,class:"br-current-rating"},Va={key:3,class:"br-current-rating"},Ya={class:"proprete"},za=(0,t.Lk)("span",null,"Propreté du magasin :",-1),Oa={class:"br-widget"},Ga=["data-rating-value","data-rating-text"],Na={key:2,class:"br-current-rating"},Ra={key:3,class:"br-current-rating"},Ua={class:"prix"},Ja=(0,t.Lk)("span",null,"Prix des produits :",-1),Za={class:"br-widget"},es=["data-rating-value","data-rating-text"],as={key:2,class:"br-current-rating"},ss={key:3,class:"br-current-rating"},ts={class:"choix"},ls=(0,t.Lk)("span",null,"Choix des produits :",-1),is={class:"br-widget"},ns=["data-rating-value","data-rating-text"],rs={key:2,class:"br-current-rating"},cs={key:3,class:"br-current-rating"},os={class:"location"},us=(0,t.Lk)("i",{class:"fa-solid fa-map-location me-1"},null,-1),ds={class:"text-end"},ks=(0,t.Lk)("p",{class:"mb-1"},[(0,t.Lk)("strong",null,"Dernier commentaire :")],-1),vs={key:0},ms={class:"last-ratings"},ps={class:"last-ratings"},bs={key:1,class:"empty-comments"},gs={class:"text-end mt-3 grid-mobile"},hs={key:0},Ls=["onClick"],fs=(0,t.Lk)("i",{class:"fa-solid fa-heart-circle-xmark me-2 text-danger"},null,-1),ys=["onClick"],Cs=(0,t.Lk)("i",{class:"fa-solid fa-heart me-2 text-danger"},null,-1),xs=["href"],$s={key:1},Is=["onClick"],_s=(0,t.Lk)("i",{class:"fa-solid fa-heart me-2 text-danger"},null,-1),Es=["href"],ws={class:"mt-3 text-center"};function Xs(e,a,s,l,i,r){return(0,t.uX)(),(0,t.CE)("div",Ue,[(0,t.Lk)("div",Je,[(0,t.Lk)("div",Ze,[(0,t.Lk)("div",ea,[(0,t.Lk)("div",aa,[sa,(0,t.Lk)("div",ta,[(0,t.Lk)("div",la,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.bakerys,(a=>((0,t.uX)(),(0,t.CE)("div",{class:"col-lg-6 bakery",key:a.id},[(0,t.Lk)("div",ia,[(0,t.Lk)("div",null,[(0,t.Lk)("div",{id:"carouselBakery"+a.id,class:"carousel slide slider-bakery carousel-fade","data-ride":"carousel"},[(0,t.Lk)("div",ra,[(0,t.Lk)("button",{type:"button","data-bs-target":"#carouselBakery"+a.id,"data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"},null,8,ca),(0,t.Lk)("button",{type:"button","data-bs-target":"#carouselBakery"+a.id,"data-bs-slide-to":"1","aria-label":"Slide 2"},null,8,oa),(0,t.Lk)("button",{type:"button","data-bs-target":"#carouselBakery"+a.id,"data-bs-slide-to":"2","aria-label":"Slide 3"},null,8,ua),(0,t.Lk)("button",{type:"button","data-bs-target":"#carouselBakery"+a.id,"data-bs-slide-to":"3","aria-label":"Slide 4"},null,8,da)]),(0,t.Lk)("div",ka,[(0,t.Lk)("div",va,[(0,t.Lk)("a",{href:"#/bakery/"+a.url},["default.jpg"===a.image?((0,t.uX)(),(0,t.CE)("img",{key:0,class:"d-block w-100",src:"bakerys/"+a.image,alt:a.title},null,8,pa)):((0,t.uX)(),(0,t.CE)("img",{key:1,class:"d-block w-100",src:e.folderPicture+a.image,alt:a.title},null,8,ba))],8,ma)]),(0,t.Lk)("div",ga,[(0,t.Lk)("a",{href:"#/bakery/"+a.url},["default2.jpg"===a.image_2?((0,t.uX)(),(0,t.CE)("img",{key:0,class:"d-block w-100",src:"bakerys/"+a.image_2,alt:a.title},null,8,La)):((0,t.uX)(),(0,t.CE)("img",{key:1,class:"d-block w-100",src:e.folderPicture+a.image_2,alt:a.title},null,8,fa))],8,ha)]),(0,t.Lk)("div",ya,[(0,t.Lk)("a",{href:"#/bakery/"+a.url},["default.jpg"===a.image_3?((0,t.uX)(),(0,t.CE)("img",{key:0,class:"d-block w-100",src:"bakerys/"+a.image_3,alt:a.title},null,8,xa)):((0,t.uX)(),(0,t.CE)("img",{key:1,class:"d-block w-100",src:e.folderPicture+a.image_3,alt:a.title},null,8,$a))],8,Ca)]),(0,t.Lk)("div",Ia,[(0,t.Lk)("a",{href:"#/bakery/"+a.url},["default2.jpg"===a.image_4?((0,t.uX)(),(0,t.CE)("img",{key:0,class:"d-block w-100",src:"bakerys/"+a.image_4,alt:a.title},null,8,Ea)):((0,t.uX)(),(0,t.CE)("img",{key:1,class:"d-block w-100",src:e.folderPicture+a.image_4,alt:a.title},null,8,wa))],8,_a)])]),(0,t.Lk)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselBakery"+a.id,"data-bs-slide":"prev"},Ma,8,Xa),(0,t.Lk)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselBakery"+a.id,"data-bs-slide":"next"},Ha,8,Aa)],8,na),(0,t.Lk)("a",{href:"#/bakery/"+a.url,class:"title"},(0,n.v_)(a.title),9,Pa),(0,t.Lk)("div",null,[(0,t.Lk)("p",Ka,(0,n.v_)(a.small_content),1)])]),(0,t.Lk)("div",null,[(0,t.Lk)("div",Qa,[Ta,(0,t.Lk)("div",qa,[0!==a.counter_devanture?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,"data-rating-value":e,"data-rating-text":e,class:(0,n.C4)(e>Math.round(5*a.counter_devanture/a.sum_devanture)?"":"br-selected")},null,10,Wa))),64)):(0,t.Q3)("",!0),0===a.counter_devanture?((0,t.uX)(),(0,t.CE)(t.FK,{key:1},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,class:""}))),64)):(0,t.Q3)("",!0),0!==a.counter_devanture?((0,t.uX)(),(0,t.CE)("div",ja,(0,n.v_)(Math.round(5*a.counter_devanture/a.sum_devanture)),1)):((0,t.uX)(),(0,t.CE)("div",Va,"0"))])]),(0,t.Lk)("div",Ya,[za,(0,t.Lk)("div",Oa,[0!==a.counter_proprete?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,"data-rating-value":e,"data-rating-text":e,class:(0,n.C4)(e>Math.round(5*a.counter_proprete/a.sum_proprete)?"":"br-selected")},null,10,Ga))),64)):(0,t.Q3)("",!0),0===a.counter_proprete?((0,t.uX)(),(0,t.CE)(t.FK,{key:1},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,class:""}))),64)):(0,t.Q3)("",!0),0!==a.counter_proprete?((0,t.uX)(),(0,t.CE)("div",Na,(0,n.v_)(Math.round(5*a.counter_proprete/a.sum_proprete)),1)):((0,t.uX)(),(0,t.CE)("div",Ra,"0"))])]),(0,t.Lk)("div",Ua,[Ja,(0,t.Lk)("div",Za,[0!==a.counter_prix?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,"data-rating-value":e,"data-rating-text":e,class:(0,n.C4)(e>Math.round(5*a.counter_prix/a.sum_prix)?"":"br-selected")},null,10,es))),64)):(0,t.Q3)("",!0),0===a.counter_prix?((0,t.uX)(),(0,t.CE)(t.FK,{key:1},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,class:""}))),64)):(0,t.Q3)("",!0),0!==a.counter_prix?((0,t.uX)(),(0,t.CE)("div",as,(0,n.v_)(Math.round(5*a.counter_prix/a.sum_prix)),1)):((0,t.uX)(),(0,t.CE)("div",ss,"0"))])]),(0,t.Lk)("div",ts,[ls,(0,t.Lk)("div",is,[0!==a.counter_choix?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,"data-rating-value":e,"data-rating-text":e,class:(0,n.C4)(e>Math.round(5*a.counter_choix/a.sum_choix)?"":"br-selected")},null,10,ns))),64)):(0,t.Q3)("",!0),0===a.counter_choix?((0,t.uX)(),(0,t.CE)(t.FK,{key:1},(0,t.pI)(5,(e=>(0,t.Lk)("a",{href:"#",key:e,class:""}))),64)):(0,t.Q3)("",!0),0!==a.counter_choix?((0,t.uX)(),(0,t.CE)("div",rs,(0,n.v_)(Math.round(5*a.counter_choix/a.sum_choix)),1)):((0,t.uX)(),(0,t.CE)("div",cs,"0"))])]),(0,t.Lk)("p",os,[us,(0,t.eW)(" "+(0,n.v_)(a.adresse),1)]),(0,t.Lk)("div",ds,[ks,null!==a.author_comment?((0,t.uX)(),(0,t.CE)("div",vs,[(0,t.Lk)("p",ms,[(0,t.eW)("Par "),(0,t.Lk)("strong",null,(0,n.v_)(a.author_comment),1),(0,t.eW)(" - "),(0,t.Lk)("span",null,"le "+(0,n.v_)(e.moment(a.created_at_comment).format("DD MMMM YYYY à H:mm")),1)]),(0,t.Lk)("p",ps,(0,n.v_)(a.content_comment),1)])):((0,t.uX)(),(0,t.CE)("div",bs," Aucun commentaire pour cette boulangerie ! "))])]),(0,t.Lk)("div",gs,[!1!==e.Cookies.has("bakerysList")?((0,t.uX)(),(0,t.CE)("div",hs,[-1!=e.Cookies.get("bakerysList").indexOf(a.id)?((0,t.uX)(),(0,t.CE)("a",{key:0,onClick:s=>e.saveBakeryList(a.id),class:(0,n.C4)("btn btn-bakery me-3 delete-bakery-list-"+a.id)},[fs,(0,t.eW)("Supprimer")],10,Ls)):((0,t.uX)(),(0,t.CE)("a",{key:1,onClick:s=>e.saveBakeryList(a.id),class:(0,n.C4)("btn btn-bakery me-3 bakery-list-"+a.id)},[Cs,(0,t.eW)("Ajouter à ma liste")],10,ys)),(0,t.Lk)("a",{href:"#/bakery/"+a.url,class:"btn btn-bakery"},"En savoir +",8,xs)])):((0,t.uX)(),(0,t.CE)("div",$s,[(0,t.Lk)("a",{onClick:s=>e.saveBakeryList(a.id),class:(0,n.C4)("btn btn-bakery me-3 bakery-list-"+a.id)},[_s,(0,t.eW)("Ajouter à ma liste")],10,Is),(0,t.Lk)("a",{href:"#/bakery/"+a.url,class:"btn btn-bakery"},"En savoir +",8,Es)]))])])])))),128)),(0,t.Lk)("div",ws,[(0,t.Lk)("a",{onClick:a[0]||(a[0]=e=>{this.$router.push("/bakerys")}),class:"btn btn-bakery"},"Voir les autres boulangeries")])])])])])])])])}s(3128),s(5801);var Ss=s(5387);const Fs=(0,t.pM)({name:"SectionHome4",setup(){const e=(0,ce.Pj)(),a=(0,t.EW)((()=>e.state.bakerys));return(0,t.sV)((()=>{e.dispatch("fetchBakerys",{limite:4})})),{folderPicture:"https://serveur.my-bakery.fr/bakerys/images/",Cookies:Ss.A,bakerys:a,moment:ue()}},methods:{saveBakeryList(e){const a=Ss.A.has("bakerysList"),s=Ss.A.get("bakerysList");if($(".bakery-list-"+e).html('<i class="fa-solid fa-heart-circle-xmark text-danger me-2"></i> Supprimer'),0!==$(document).find(".bakery-list-"+e).length)a?Ss.A.set("bakerysList",Ss.A.get("bakerysList")+"-"+e):Ss.A.set("bakerysList",e,{expires:3e4});else{var t=s.replace("-"+e,"");if(-1!=s.indexOf(e+"-")){t=s.replace(e+"-","");Ss.A.set("bakerysList",t,{secure:!0,sameSite:"None"})}else if(-1!=s.indexOf("-"+e)){t=s.replace("-"+e,"");Ss.A.set("bakerysList",t,{secure:!0,sameSite:"None"})}1===s.split("-").length&&Ss.A.remove("bakerysList"),$(".delete-bakery-list-"+e).removeClass("delete-bakery-list-"+e).addClass("bakery-list-"+e),$(".bakery-list-"+e).removeClass("delete-bakery-list").addClass("bakery-list")}$(".bakery-list-"+e).removeClass("bakery-list-"+e).addClass("delete-bakery-list-"+e)}}}),Ms=(0,pe.A)(Fs,[["render",Xs]]),As=Ms,Ds=(0,t.Lk)("div",{class:"section fadeIn5 ratings"},[(0,t.Lk)("div",{class:"background-p"})],-1),Bs={id:"bakery-add",class:"section fadeIn10"},Hs={class:"column-inner"},Ps={class:"wrapper"},Ks={class:"site-features"},Qs={class:"container"},Ts=(0,t.Fv)('<div class="bloc container"><div class="hp-container"><div class="section text-center"><h2 class="title">Vous ne trouvez pas votre boulangerie ?</h2><p class="description"></p><div><img class="delicious" src="floral.png" alt="Delicieux"></div></div></div></div>',1),qs={class:"row"},Ws={class:"col-lg-6"},js=(0,t.Lk)("p",null,"“Si votre boulangerie ne figure pas sur My Bakery, il vous reste donc une option que vous pouvez envisager” ",-1),Vs={class:"button"},Ys=(0,t.Lk)("small",null,"Gaëtan Seigneur - Développeur pour My bakery",-1),zs=(0,t.Lk)("p",{class:"signature"},[(0,t.Lk)("img",{src:"signature.png",width:"129",alt:"Dev72"})],-1),Os=(0,t.Lk)("div",{class:"col-lg-6"},[(0,t.Lk)("img",{src:"listed.png",alt:"Vous ne trouvez pas votre boulangerie ?"})],-1);function Gs(e,a,s,l,i,n){return(0,t.uX)(),(0,t.CE)(t.FK,null,[Ds,(0,t.Lk)("div",Bs,[(0,t.Lk)("div",Hs,[(0,t.Lk)("div",Ps,[(0,t.Lk)("div",Ks,[(0,t.Lk)("div",Qs,[Ts,(0,t.Lk)("div",qs,[(0,t.Lk)("div",Ws,[js,(0,t.Lk)("p",Vs,[(0,t.Lk)("a",{onClick:a[0]||(a[0]=e=>{this.$router.push("/add-bakery")}),class:"btn btn-bakery"},"Ajouter ma boulangerie")]),Ys,zs]),Os])])])])])])],64)}const Ns=(0,t.pM)({name:"SectionHome9",setup(){}}),Rs=(0,pe.A)(Ns,[["render",Gs]]),Us=Rs,Js={class:"section fadeIn5 ratings"},Zs={class:"background-p"},et={class:"pre-container"},at={class:"container"},st=["id"],tt={class:"user"},lt=["src","alt"],it={class:"content"},nt={class:"ft-starts"},rt={class:"br-widget"},ct=["data-rating-value","data-rating-text"],ot={class:"br-current-rating"},ut={class:"footer"},dt={class:"controls"},kt={class:"dots"},vt=["data-slide"],mt=(0,t.Lk)("span",null,null,-1),pt=[mt];function bt(e,a,s,l,i,r){return(0,t.uX)(),(0,t.CE)("div",Js,[(0,t.Lk)("div",Zs,[(0,t.Lk)("div",et,[(0,t.Lk)("div",at,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.ratings,(e=>((0,t.uX)(),(0,t.CE)("div",{id:"slide-"+e.id,key:e.id,class:(0,n.C4)(1===e.id?"card-p active":"card-p")},[(0,t.Lk)("div",tt,[(0,t.Lk)("img",{src:"ratings/"+e.avatar,alt:e.author},null,8,lt)]),(0,t.Lk)("div",it,[(0,t.Lk)("div",nt,[(0,t.Lk)("div",rt,[((0,t.uX)(),(0,t.CE)(t.FK,null,(0,t.pI)(5,(a=>(0,t.Lk)("a",{href:"#",key:a,"data-rating-value":a,"data-rating-text":a,class:(0,n.C4)(a>e.note?"":"br-selected")},null,10,ct))),64)),(0,t.Lk)("div",ot,(0,n.v_)(e.note),1)])]),(0,t.Lk)("p",null,"“"+(0,n.v_)(e.content)+"”",1)]),(0,t.Lk)("div",ut,[(0,t.Lk)("p",null,[(0,t.Lk)("strong",null,(0,n.v_)(e.author),1),(0,t.eW)(" - Utilisateur de My bakery")])])],10,st)))),128)),(0,t.Lk)("div",dt,[(0,t.Lk)("div",kt,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.ratings,(e=>((0,t.uX)(),(0,t.CE)("div",{"data-slide":e.id,class:(0,n.C4)(1===e.id?"dot active":"dot"),key:e.id},pt,10,vt)))),128))])])])])])])}const gt=(0,t.pM)({name:"SectionHome5",setup(){const e=(0,ce.Pj)(),a=(0,t.EW)((()=>e.state.ratings));return(0,t.sV)((()=>{e.dispatch("fetchRatings")})),{ratings:a}}}),ht=(0,pe.A)(gt,[["render",bt]]),Lt=ht,ft={id:"blog",class:"section fadeIn6 last-blog"},yt={class:"column-inner"},Ct={class:"wrapper"},xt={class:"bloc container"},$t={class:"hp-container"},It=(0,t.Lk)("div",{class:"section text-center"},[(0,t.Lk)("h2",{class:"title"},"Notre blog"),(0,t.Lk)("p",{class:"description"},"Consulter les dernières actualités de My bakery."),(0,t.Lk)("div",null,[(0,t.Lk)("img",{class:"delicious",src:"floral.png",alt:"Delicieux"})])],-1),_t={class:"section text-center"},Et={class:"row"},wt={class:"thumbnail"},Xt=["onClick","title"],St=["src"],Ft={class:"content text-start"},Mt={class:"date"},At=(0,t.Lk)("i",{class:"fa-solid fa-clock me-1"},null,-1),Dt={class:"title"},Bt={class:"author"},Ht={class:"views me-2"},Pt=(0,t.Lk)("i",{class:"fa-solid fa-eye me-1"},null,-1),Kt={key:0},Qt=["onClick","title"],Tt={class:"mt-3"};function qt(e,a,s,l,i,r){return(0,t.uX)(),(0,t.CE)("div",ft,[(0,t.Lk)("div",yt,[(0,t.Lk)("div",Ct,[(0,t.Lk)("div",xt,[(0,t.Lk)("div",$t,[It,(0,t.Lk)("div",_t,[(0,t.Lk)("div",Et,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.blogs,(a=>((0,t.uX)(),(0,t.CE)("div",{class:"col-lg-4 col-md-4 col-sm-12 col-xs-12",key:a.id},[(0,t.Lk)("article",null,[(0,t.Lk)("div",wt,[(0,t.Lk)("a",{onClick:e=>this.$router.push("/blogs/"+a.url),title:a.title},null,8,Xt),(0,t.Lk)("img",{width:"450",height:"300",src:"blogs/"+a.image,alt:""},null,8,St)]),(0,t.Lk)("div",Ft,[(0,t.Lk)("span",Mt,[At,(0,t.eW)(" Créer le "+(0,n.v_)(e.moment(a.created_at).format("DD MMMM YYYY à H:mm")),1)]),(0,t.Lk)("h3",Dt,(0,n.v_)(a.title),1),(0,t.Lk)("span",Bt,[(0,t.eW)("Par "),(0,t.Lk)("span",null,(0,n.v_)(a.author),1)]),(0,t.Lk)("span",Ht,[Pt,(0,t.eW)((0,n.v_)(a.views)+" vue",1),a.views>=2?((0,t.uX)(),(0,t.CE)("span",Kt,"s")):(0,t.Q3)("",!0)]),(0,t.Lk)("p",null,(0,n.v_)(a.small_content.substr(0,150)+"..."),1),(0,t.Lk)("a",{onClick:e=>this.$router.push("/blogs/"+a.url),title:a.title,class:"btn btn-bakery"},"Lire la suite",8,Qt)])])])))),128)),(0,t.Lk)("div",Tt,[(0,t.Lk)("a",{onClick:a[0]||(a[0]=e=>{this.$router.push("/blogs")}),class:"btn btn-bakery"},"Voir les autres articles")])])])])])])])])}ue().locale("fr");const Wt=(0,t.pM)({name:"SectionHome6",setup(){const e=(0,ce.Pj)(),a=(0,t.EW)((()=>e.state.blogs));return(0,t.sV)((()=>{e.dispatch("fetchBlogs")})),{blogs:a,moment:ue()}}}),jt=(0,pe.A)(Wt,[["render",qt]]),Vt=jt,Yt=(0,t.Fv)('<div class="section fadeIn5 ratings"><div class="background-p"></div></div><div id="bakery-list" class="section fadeIn9"><div class="column-inner"><div class="wrapper"><div class="site-features"><div class="container"><div class="bloc container"><div class="hp-container"><div class="section text-center"><h2 class="title">Pourquoi recommander My Bakery ?</h2><p class="description"></p><div><img class="delicious" src="floral.png" alt="Delicieux"></div></div></div></div><div class="row"><div class="bs-column bs-column-container bs-col-sm-3"><div class="bs-column-inner"><div><div class="bs-block-iconbox" data-mh="icon"><i>y</i><h4> Pas de frais caché </h4><p>Ajouter autant de boulangerie que vous désirez, notre application est payante pour nous rémunérer, ce qui permet de faire avancer le développement de My Bakery.</p></div></div></div></div><div class="bs-column bs-column-container bs-col-sm-3"><div class="bs-column-inner"><div><div class="bs-block-iconbox" data-mh="icon"><i>g</i><h4> Qualité des annonces </h4><p>La qualité des annonces de boulangerie sur My bakery est primordiale, notre équipe veille au grain. Nous vérifions chaque avis utilisateur, nous vous garantissons une totale transparence. </p></div></div></div></div><div class="bs-column bs-column-container bs-col-sm-3"><div class="bs-column-inner"><div><div class="bs-block-iconbox" data-mh="icon"><i>n</i><h4> Avis des boulangeries </h4><p>Les avis sont honnêtes et authentiques sur My bakery, vous pouvez alors choisir une bonne boulangerie en fermant les yeux. Cela nous tient à coeur de vous faire partager de merveilleux moment.</p></div></div></div></div></div></div></div></div></div></div>',2);function zt(e,a,s,t,l,i){return Yt}const Ot=(0,t.pM)({name:"SectionHome8",setup(){}}),Gt=(0,pe.A)(Ot,[["render",zt]]),Nt=Gt;var Rt=s(5701);const Ut=(0,t.pM)({name:"SectionsHome",components:{Section1:He,Section2:je,Section3:Re,Section4:As,Section9:Us,Section5:Lt,Section8:Nt,Section6:Vt,Section7:Rt.A}}),Jt=(0,pe.A)(Ut,[["render",Xe]]),Zt=Jt;var el=s(9774),al=s.n(el);al();const sl=(0,t.pM)({name:"IndexPage",components:{HeaderComponent:fe,FooterComponent:ye.A,SliderComponent:we,SectionsHome:Zt},mounted(){$(".fadeIn").fadeIn(600),$(".fadeIn2").fadeIn(600),$(".fadeIn3").fadeIn(600),$(".fadeIn4").fadeIn(600),$(".fadeIn5").fadeIn(600),$(".fadeIn6").fadeIn(600),$(".fadeIn7").fadeIn(600),$(".fadeIn8").fadeIn(600),$(".fadeIn9").fadeIn(600),$(".fadeIn10").fadeIn(600)}});var tl=s(9238);const ll=(0,pe.A)(sl,[["render",l]]),il=ll;he()(sl,"components",{QPage:tl.A})}}]);