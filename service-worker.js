if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const o=e=>c(e,s),a={module:{uri:s},exports:n,require:o};i[s]=Promise.all(r.map((e=>a[e]||o(e)))).then((e=>(d(...e),n)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/04/hello-world/index.html",revision:"2796b05ce85f540c67cbc0f49ceaa2ff"},{url:"404.html",revision:"d12176fbafc24b15d8d64c31ad1458f8"},{url:"about/index.html",revision:"56d57d0b72371c21596519bc7e18101c"},{url:"archives/2022/08/index.html",revision:"d4663d9f73dab2e9e3c94f176fd3ed3d"},{url:"archives/2022/index.html",revision:"833ba05144c77951c2303925f06c13b4"},{url:"archives/index.html",revision:"d1dc615a51c541de7caffe18984618ca"},{url:"categories/index.html",revision:"e02ecd78cd24adb794ce1f3bb1966abd"},{url:"css/index.css",revision:"6d44fef8b16ee2ae898998bb54296799"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/cover1.jpg",revision:"444b796a7347257ee45c8983b9d4baa1"},{url:"img/cover2.jpg",revision:"6f3c5335c5c30631210f3fa2589ec2c9"},{url:"img/cover3.jpg",revision:"7e095558f7489442ba40c6fd7dd43ffb"},{url:"img/cover4.webp",revision:"e2b962ba68e35af66f9034ea39f61505"},{url:"img/cover5.jpg",revision:"31303a902b30f584a72b93c47dc0a823"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"d691f275c5f93407447f77ff82ee804c"},{url:"img/MashiroKanon.webp",revision:"7cddd205860da3865c4a1e1c1d8d9c77"},{url:"img/MashiroKanon1.webp",revision:"1324eb1517863f6cc268467e20799729"},{url:"img/MashiroKanon2.webp",revision:"170f1b381560c01089f290db2d88e755"},{url:"img/MashiroKanon3.webp",revision:"c7502e5d8e40bc2874a06c366e509cbb"},{url:"index.html",revision:"34c07cde79ae5d48a5b9144d455cbb33"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"tags/index.html",revision:"1be99a1265b463aee4a36555dc5d9310"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
