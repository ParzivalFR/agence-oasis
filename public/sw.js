if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),d={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"72fffdbe6f28cffd03301a3d15f8e63b"},{url:"/_next/static/4j2F6bb8IFd61xPNHO_tW/_buildManifest.js",revision:"36391f317119050c8516c7adceb6a0b2"},{url:"/_next/static/4j2F6bb8IFd61xPNHO_tW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/133-9362614053eb10f4.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/155f8c52-fa01015e38d055a6.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/242-7d9cda5c9cbea0fc.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/247-9c9f1d9b5dbef231.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/295-87de57662a2157a0.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/306-4cec5529ff279ffb.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/355-b6e40ed675f5ff51.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/39eaf34b-d1f5071aea169a4f.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/3b6143f6-5d634d615cd19a7d.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/4-1bc136eabb55223d.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/460-ca1e347fdad88c4e.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/657-6a1c747677649429.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/755-67b138abe3919d7e.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/848-47e1709a3dbff426.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/84fbfe7f-941f009d9276e344.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/933-0ee286614fc885e1.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/967-687fb65fc1e5df98.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(auth)/layout-35c82ef9168ad32a.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(auth)/login/page-8bb7febfc2eb5122.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(auth)/signin/page-484ddf5e32a78ca9.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(auth)/signup/page-4f4096c8a6ebb5d9.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(legals)/layout-f0858ac573d97144.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(legals)/privacy/page-b4ed427796512f3a.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(legals)/terms/page-1542b4241501b7f0.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(marketing)/layout-d84073ce7dba8b7e.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/(marketing)/page-a7de34ba531489d0.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/_not-found/page-1b1bcbc018c8a42e.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/dashboard/page-4ab96be1d5d3cf76.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/layout-2f14c47a59c71771.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/app/not-found-14d92128ba7816f8.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/main-app-89c337d58ea713e0.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/main-bd77e151f09d16d5.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/pages/_app-0c88c40c4ccb1b45.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/pages/_error-7aee030696137d4f.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4c9bc14318ab5db0.js",revision:"4j2F6bb8IFd61xPNHO_tW"},{url:"/_next/static/css/3e68396e820e6a2d.css",revision:"3e68396e820e6a2d"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/hero-dark.png",revision:"11751c4640bc08c0e1fa9dc29387594a"},{url:"/hero-light.png",revision:"11bf566467cc5fd0ecf4990526fd13d8"},{url:"/icon-192x192.png",revision:"2d02462e15330927adc56aac93128edf"},{url:"/icon-256x256.png",revision:"3efad29fa37888f721bb88b5facd803b"},{url:"/icon-384x384.png",revision:"b323309652a1d542955e1e55abff6384"},{url:"/icon-512x512.png",revision:"b4da44afc9475002bcd142aae41bef03"},{url:"/manifest.json",revision:"4589a6f4525a8063e143cac0a0c1bfb3"},{url:"/photo-de-profil.jpg",revision:"7424cb71e80ee9514fff5b172488592d"},{url:"/qrcode.svg",revision:"b83888612bae3eac8bcb4fc185632675"},{url:"/robots.txt",revision:"3162704a1878dd0d9994accfd16a68d5"},{url:"/sitemap-0.xml",revision:"13304eebe77981f07c7404aeb780c809"},{url:"/sitemap.xml",revision:"8063c4cac0def77d6ffbb66a3d37b0d1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
