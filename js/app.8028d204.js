(function(){"use strict";var e={3868:function(e,t,n){var i=n(3862),o=n(4252),a=(n(2834),n(3396));function r(e,t,n,i,o,r){const s=(0,a.up)("MotionSynthesis");return(0,a.wg)(),(0,a.j4)(s)}var s=n(7139);const l=e=>((0,a.dD)("data-v-1e0f1190"),e=e(),(0,a.Cn)(),e),d=l((()=>(0,a._)("div",{id:"Canvas"},null,-1))),u=l((()=>(0,a._)("section",{id:"loading-screen"},[(0,a._)("div",{id:"loader"}),(0,a._)("div",{id:"loader-text"},"0%")],-1))),c={id:"ProgressBar"},f={class:"frame-text"},h={id:"Buttons"};function m(e,t,n,o,r,l){const m=(0,a.up)("el-slider"),p=(0,a.up)("el-row"),g=(0,a.up)("ArrowRight"),w=(0,a.up)("el-icon"),y=(0,a.up)("el-button"),_=(0,a.up)("VideoPlay"),v=(0,a.up)("VideoPause"),b=(0,a.up)("RefreshLeft"),x=(0,a.up)("MagicStick");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,u,(0,a._)("div",c,[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:e.cur_frame,"onUpdate:modelValue":t[0]||(t[0]=t=>e.cur_frame=t),max:e.num_frames,size:"small",onInput:l.setFrame},null,8,["modelValue","max","onInput"]),(0,a._)("div",f,(0,s.zw)(e.cur_frame+1)+" / "+(0,s.zw)(e.num_frames),1)])),_:1})]),(0,a._)("div",h,[(0,a.Wm)(p,{style:{"justify-content":"center"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{type:"primary",color:"##262727",size:"large",onClick:t[1]||(t[1]=e=>l.next())},{default:(0,a.w5)((()=>[(0,a.Uk)(" Next"),(0,a.Wm)(w,{class:"el-icon--right",size:17},{default:(0,a.w5)((()=>[(0,a.Wm)(g)])),_:1})])),_:1}),(0,a.wy)((0,a.Wm)(y,{type:"primary",color:"##262727",size:"large",style:{"margin-left":"10px"},onClick:t[2]||(t[2]=e=>l.play())},{default:(0,a.w5)((()=>[(0,a.Uk)(" Play"),(0,a.Wm)(w,{class:"el-icon--right",size:17},{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:1})])),_:1},512),[[i.F8,e.isPause]]),(0,a.wy)((0,a.Wm)(y,{type:"primary",color:"##262727",size:"large",style:{"margin-left":"10px"},onClick:t[3]||(t[3]=e=>l.pause())},{default:(0,a.w5)((()=>[(0,a.Uk)(" Pause"),(0,a.Wm)(w,{class:"el-icon--right",size:17},{default:(0,a.w5)((()=>[(0,a.Wm)(v)])),_:1})])),_:1},512),[[i.F8,!e.isPause]]),(0,a.Wm)(y,{type:"primary",color:"##262727",size:"large",style:{"margin-left":"10px"},onClick:l.restart},{default:(0,a.w5)((()=>[(0,a.Uk)(" Restart"),(0,a.Wm)(w,{class:"el-icon--right",size:17},{default:(0,a.w5)((()=>[(0,a.Wm)(b)])),_:1})])),_:1},8,["onClick"]),(0,a.wy)((0,a.Wm)(y,{id:"SynthesisBtn",type:"primary",color:"##262727",size:"large",style:{"margin-left":"10px"},onClick:l.synthesis},{default:(0,a.w5)((()=>[(0,a.Uk)(" Generate"),(0,a.Wm)(w,{class:"el-icon--right",size:17},{default:(0,a.w5)((()=>[(0,a.Wm)(x)])),_:1})])),_:1},8,["onClick"]),[[i.F8,!e.isSynthesising]]),(0,a.wy)((0,a.Wm)(y,{id:"SynthesisBtn",type:"primary",color:"##262727",size:"large",style:{"margin-left":"10px"},loading:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Running... ")])),_:1},512),[[i.F8,e.isSynthesising]])])),_:1})])],64)}n(7658);var p=n(7178),g=n(2748),w=n(1288),y=n(1114),_=n(677),v=n(58),b=n(9061);class x extends v.w{constructor(e,t=null,n=null){var i=S(e),o=new b.z;null===t&&(t=new y.Ilk(4635559)),null===n&&(n=new y.Ilk(7363795));var a=[],r=[],s=new y.yGw;s.copy(e.matrixWorld).invert();for(var l=0;l<i.length;l++){var d=i[l];d.parent&&d.parent.isBone&&(a.push(0,0,0),a.push(0,0,0),r.push(t.r,t.g,t.b),r.push(n.r,n.g,n.b))}o.setPositions(a),o.setColors(r);let u=new _.Y({color:16777215,linewidth:.0075,vertexColors:!0,dashed:!0,depthTest:!1,depthWrite:!1});super(o,u),this.type="MySkeletonHelper",this.MySkeletonHelper=!0,this.root=e,this.bones=i,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){var t=this.geometry.getAttribute("position"),n=[],i=new y.Pa4,o=new y.yGw,a=new y.yGw;a.copy(this.root.matrixWorld).invert();for(let s=0;s<this.bones.length;s++){var r=this.bones[s];r.parent&&r.parent.isBone&&(o.multiplyMatrices(a,r.matrixWorld),i.setFromMatrixPosition(o),n.push(i.x,i.y,i.z),o.multiplyMatrices(a,r.parent.matrixWorld),i.setFromMatrixPosition(o),n.push(i.x,i.y,i.z))}this.geometry.setPositions(n),t.needsUpdate=!0,super.updateMatrixWorld(e)}}function S(e){const t=[];!0===e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,S(e.children[n]));return t}const k=x;var M=k,P=n(3959),W=n(3292),C=n(4543),z=n(6573),O=n(9717),j=n(5941);const F=["/GenMM_demo/assets/Wave_Hip_Hop_Dance.fbx","/GenMM_demo/assets/Hip_Hop_Dancing.fbx","/GenMM_demo/assets/Gangnam_Style.fbx","/GenMM_demo/assets/Samba_Dancing.fbx","/GenMM_demo/assets/Swing_Dancing.fbx"];let B,E,T,A,I,L,U,G,R,D,H=0,N=[],X=[],V=[],Z=[];const Y=new y.SUY,q=.1,J=50,K=50,$={fog:.08,hemi_light:!0,dir_light:!0,spot_light:!1,ground:!0},Q={show_mesh:!0,show_skeleton:!1,skeleton_width:5},ee={frames:500,noise_sigma:25,loop:!1,completeness:!1,alpha:.1,patch_size:15,coarse_ratio:.2,pyr_factor:.75,num_steps:3};var te={name:"MainScene",props:{init_file:{type:String,default:F[0]},scale:{type:Number,default:.01}},data:function(){return{cur_frame:-1,num_frames:0,isPause:!1,isSynthesising:!1,uploadFilename:null,uploadFiles:[]}},mounted(){this.initScene(),this.loadFBXModel(this.init_file),this.animate()},methods:{initScene(){function e(){const e=document.getElementById("Canvas");B=new y.cPb(45,window.innerWidth/window.innerHeight,q,J),B.position.set(0,2.5,5),E=new y.xsS,E.background=new y.Ilk(4342338),E.fog=new y.yo9(4342338,$.fog),L=new y.vmT(16777215,4473924),L.position.set(0,2,0),E.add(L),U=new y.Ox3(16777215,.8),U.position.set(0,5,4),U.castShadow=!0,U.shadow.mapSize.width=2048,U.shadow.mapSize.height=2048,E.add(U),G=new y.PMe,G.angle=Math.PI/8,G.penumbra=.5,G.castShadow=!0,G.position.set(-0,5,3);let t=new y.dpR,i=t.load("./assets/checker.png");i.wrapS=y.rpg,i.wrapT=y.rpg,i.magFilter=y.TyD,i.repeat.set(K,K),R=new y.Kj0(new y._12(K,K),new y.Wid({map:i,side:y.ehD,emissiveIntensity:1})),R.rotation.x=-.5*Math.PI,R.receiveShadow=!0,E.add(R),T=new y.CP7({antialias:!0}),T.setPixelRatio(window.devicePixelRatio),T.setSize(window.innerWidth,window.innerHeight),T.shadowMap.enabled=!0,e.appendChild(T.domElement);const o=new C.z(B,T.domElement);o.target.set(0,1,0),o.mouseButtons={LEFT:y.RsA.ROTATE,MIDDLE:y.RsA.PAN},o.update(),window.addEventListener("resize",n),A=new P.Z,e.appendChild(A.dom)}function t(){I=new W.XS({width:220});const e=I.addFolder("Scene");e.add($,"hemi_light").onChange((function(e){e?E.add(L):E.remove(L)})),e.add($,"dir_light").onChange((function(e){e?E.add(U):E.remove(U)})),e.add($,"spot_light").onChange((function(e){e?E.add(G):E.remove(G)})),e.add($,"ground").onChange((function(e){e?E.add(R):E.remove(R)})),e.add($,"fog",0,.25,.01).onChange((function(e){E.fog=new y.yo9(4342338,e)})),e.close();const t=I.addFolder("Visibility");t.add(Q,"show_mesh").onChange((function(e){for(let t=0;t<X.length;t++)X[t].visible=e})),t.add(Q,"show_skeleton").onChange((function(e){for(let t=0;t<V.length;t++)V[t].visible=e})).listen(),t.add(Q,"skeleton_width",1,10,.5).onChange((function(e){for(let t=0;t<V.length;t++)V[t].material.linewidth=e/1e3})),t.close();const n=I.addFolder("Synthesis");n.add(ee,"frames",1,2e3,1).listen(),n.add(ee,"noise_sigma",0,50,1),n.add(ee,"loop"),n.add(ee,"completeness").onChange((function(){ee.completeness?i.show():i.hide()}));let i=n.add(ee,"alpha",.001,1,.001).hide();n.add(ee,"patch_size",1,30,1),n.add(ee,"coarse_ratio",.1,1,.01),n.add(ee,"pyr_factor",.25,1,.01),n.add(ee,"num_steps",1,50,1),n.close(),I.close()}function n(){B.aspect=window.innerWidth/window.innerHeight,B.updateProjectionMatrix(),T.setSize(window.innerWidth,window.innerHeight)}e(),t()},reset(){for(let e=0;e<X.length;e++)E.remove(X[e]);for(let e=0;e<V.length;e++)E.remove(V[e]);N=[],Z=[],X=[],V=[],Z=[]},animate(){let e=this;requestAnimationFrame(e.animate);const t=Y.getDelta(),n=Math.max(...Z),i=Z.indexOf(n);for(let o=0;o<N.length;o++)if((n===-1/0||N[o].time<=Z[o])&&N[o].update(t),o===i&&(e.cur_frame=Math.round(N[o].time*e.num_frames/Z[o]),e.cur_frame%=e.num_frames),N[o].time>n)for(const e of N)e.setTime(0);T.render(E,B),A.update()},loadFBXobject(e){let t=this,n=new y.Xcj(e);for(let a=0;a<e.animations.length;a++)0!=e.animations[a].tracks.length&&(e.animations[0]=e.animations[a]);let i=n.clipAction(e.animations[0]);i.play(),e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),e.scale.multiplyScalar(t.scale),E.add(e);let o=new M(e);o.material.linewidth=Q.skeleton_width/1e3,o.visible=Q.show_skeleton,E.add(o),Z.push(e.animations[0].duration),D=e.animations[0].duration/(e.animations[0].tracks[0].times.length-1),t.num_frames=Math.round(Math.max(...Z)/D)+1,N.push(n),X.push(e),V.push(o)},loadFBXModel(e){let t=this;function n(e,t){const n=Math.round(e/t*100);document.getElementById("loader-text").textContent=`${n}%`}const i=new y.lLk;i.onStart=(e,t,i)=>{const o=document.getElementById("loading-screen");o.style.display="block",o.classList.remove("fade-out"),n(t,i)},i.onProgress=(e,t,i)=>{n(t,i)},i.onLoad=()=>{const e=document.getElementById("loading-screen");e.classList.add("fade-out"),e.addEventListener("transitionend",(e=>{e.target.style.display="none",e.target.classList.remove("fade-out")}))};const o=new z.y(i);o.load(e,t.loadFBXobject,void 0,(e=>{j.error("Error loading FBX model:",e)}))},restart(){for(const e of N)e.setTime(0);this.cur_frame=0},play(){for(const e of N)e.timeScale=1;this.isPause=!1},next(){H+=1,this.reset(),j.log(F[H]),this.loadFBXModel(F[H]),H>=F.length-1&&(H=-1)},pause(){for(const e of N)e.timeScale=0;this.isPause=!0},setFrame(e){const t=Math.max(...Z);for(const n of N){let i=n.timeScale;n.timeScale=1,n.setTime(t*e/this.num_frames),n.timeScale=i}},synthesis(){let e=this;async function t(e){const t=await(0,w.Lp)("https://wyysf-genmm.hf.space/"),n=await t.predict("/predict",[JSON.stringify(e)]);return n}e.isSynthesising=!0,t({setting:ee,tracks:X[0].animations[0].toJSON()["tracks"],scale:e.scale}).then((t=>{(0,p.z8)({message:(0,a.h)("p",null,[(0,a.h)("span",null,"Generated in "),(0,a.h)("i",{style:"color: red"},t.data[0].time.toFixed(4).toString()),(0,a.h)("span",null," s on CPU without any training.")]),duration:3e3});let n=O.d9(X[0]),i=new y.Xcj(n),o=y.m7l.parse(t.data[0]),r=i.clipAction(o);r.play(),n.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),E.add(n);let s=new M(n,new y.Ilk(12138830),new y.Ilk(14454850));s.material.linewidth=Q.skeleton_width/1e3,s.visible=!1,E.add(s);for(const e of N)e.setTime(0);Z.push(o.duration),e.num_frames=Math.round(Math.max(...Z)/D)+1,X.push(n),N.push(i),V.push(s);let l=[[0,0],[-2,-1],[-1,-1],[0,-1],[1,-1],[2,-1],[-2,-2],[-1,-2],[0,-2],[1,-2],[2,-2],[-2,-3],[-1,-3],[0,-3],[1,-3],[2,-3],[-2,-4],[-1,-4],[0,-4],[1,-4],[2,-4],[-2,-5],[-1,-5],[0,-5],[1,-5],[2,-5]];for(let e=0;e<X.length;e++)X[e].position.x=l[e][0],X[e].position.z=l[e][1];e.isSynthesising=!1}))}},components:{ArrowRight:g.olP,VideoPlay:g.GhU,VideoPause:g.lBU,RefreshLeft:g.Ufu,MagicStick:g.l8K}},ne=n(89);const ie=(0,ne.Z)(te,[["render",m],["__scopeId","data-v-1e0f1190"]]);var oe=ie,ae={name:"App",components:{MotionSynthesis:oe}};const re=(0,ne.Z)(ae,[["render",r]]);var se=re;const le=(0,i.ri)(se);le.use(o.Z),le.mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"===typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){r[e]=function(){return i[e]}}));return r["default"]=function(){return i},n.d(a,r),a}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".3863b0a5.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="patch-based_motion_synthesis:";n.l=function(i,o,a,r){if(e[i])e[i].push(o);else{var s,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==t+a){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=i),e[i]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var o=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=a);var r=n.p+n.u(t),s=new Error,l=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,o[1](s)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,r=i[0],s=i[1],l=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(i);d<r.length;d++)a=r[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkpatch_based_motion_synthesis"]=self["webpackChunkpatch_based_motion_synthesis"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3868)}));i=n.O(i)})();
//# sourceMappingURL=app.8028d204.js.map