if(!self.define){let e,s={};const r=(r,c)=>(r=new URL(r+".js",c).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const d=e=>r(e,n),l={module:{uri:n},exports:o,require:d};s[n]=Promise.all(c.map((e=>l[e]||d(e)))).then((e=>(i(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_astro/_slug_.8ced6fc2.css",revision:null},{url:"_astro/_slug_.9be3c881.css",revision:null},{url:"_astro/_slug_.e56d936d.css",revision:null},{url:"_astro/client.97e10384.js",revision:null},{url:"_astro/gallery.0fdb54cc.css",revision:null},{url:"_astro/gallery.197e1a52.css",revision:null},{url:"_astro/gallery.de6c3a87.css",revision:null},{url:"cn/gallery",revision:"e3768ddb9b4ebe800b01ea7dbb204340"},{url:"cn",revision:"3f4b87d559b564e606f50837d2065389"},{url:"cn/posts/1984-after-reading",revision:"8310e812e60258cf863df6caa65187b5"},{url:"cn/posts/2021-ending",revision:"d41cbbf12c1c8989cf0c418774b1c0de"},{url:"cn/posts/2022-ending",revision:"32e73d3ed6c1bbbcd2b6d8235f51fdd4"},{url:"cn/posts/archlinux-install-guide",revision:"a563322d1dcfda9dcba309dd7bc52000"},{url:"cn/posts/beancount-introduce",revision:"a8ce5cd9d16f69ce1e5a390ec8dc9619"},{url:"cn/posts/improving-your-code-review-process-with-semgrep",revision:"7c82d22eac5e786629edcc25fd35463b"},{url:"cn/posts",revision:"0d2adf5a7712153b05e3c036386f5824"},{url:"cn/posts/introspection",revision:"749e23b7e086d60a116fd838c9f30ac6"},{url:"cn/posts/inverted-index",revision:"dd63f0925ee090b19f58d62c62a0927a"},{url:"cn/posts/kmp",revision:"2f4e1fb2590692b4ee487140d6475443"},{url:"cn/posts/liner-in-python",revision:"ba26c44c75eebb6a06b4d72c4bf5f9e8"},{url:"cn/posts/my-homelab-introduce",revision:"a149ad96c2a642a509a3c3de2d7c16cc"},{url:"cn/posts/one-hundred-line-async-crawler",revision:"c1184d8b1068da5cda7a4a68f2bd613a"},{url:"cn/posts/pipenv-autoenv",revision:"caf078ba61823d54fc578847b66b273c"},{url:"cn/posts/sort-in-python",revision:"e5f7694683a5526f48f9a75f468c62cc"},{url:"cn/posts/thoughtworks-one-month",revision:"9fc3f599396255af1dfa7898a036eb6d"},{url:"cn/posts/tornado-auto-etag",revision:"3112f60f85084dcfb5dbc4ee8ccc4a28"},{url:"cn/posts/tree-in-python",revision:"64cda44b06e9b43615bd27d56fb3c14d"},{url:"cn/posts/webmentions",revision:"793ba2c1c7bd4119c6df7e097b1ede49"},{url:"gallery",revision:"e401b3f815759e00cfdd5f09a55a4545"},{url:"/",revision:"3f4b87d559b564e606f50837d2065389"},{url:"katex.min.css",revision:"caf1062309e21ed583d00d24cac20912"},{url:"posts/improving-your-code-review-process-with-semgrep",revision:"e95c8ac4183292228f699055e7b02825"},{url:"posts",revision:"696a2be17c9e49e7398de1923958efc3"},{url:"posts/semgrep-with-custom-rules",revision:"9a59b6ec3441519acf225649448dbe0e"},{url:"posts/webmentions",revision:"62752120eede14e1a053c3089c43bce4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"7b18dc105c7098a63f4808282fe6b3e5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
