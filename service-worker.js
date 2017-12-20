"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","4ae89028f7de9f04b2237d2449497769"],["/static/css/main.5dec6f53.css","4638991c7950e1a6b3bc1d84fc449048"],["/static/js/main.c66fdfc1.js","e0da331bc572c4d157f8081e8d1601aa"],["/static/media/angular.1c0c349a.svg","1c0c349ad9921e0675e6d7a2920d4c72"],["/static/media/backend.0252128f.svg","0252128f07b70dbb16606a2afe548842"],["/static/media/calendar.5bc13849.svg","5bc1384983715b858ae8b40f5d0bbbfc"],["/static/media/email.a6cc4300.svg","a6cc4300552e047d18adbd8dedc41d9f"],["/static/media/frontend.1271968c.svg","1271968cc6f2baa2cd4890cf09284d65"],["/static/media/github.1ee8a22d.svg","1ee8a22d3ffd38b0c5b189ee09bc165c"],["/static/media/linkedin.75d3be28.svg","75d3be288a9e22e84b05f632af1851d3"],["/static/media/nimbus.ec37836a.svg","ec37836afdbdcedc2de2d68d514fae35"],["/static/media/node.89ccb090.svg","89ccb09060a7adf788ea2340c54d6d78"],["/static/media/personalysis.f783850e.svg","f783850ed5c43d019a14cd157de7769d"],["/static/media/profile.3fc4a34e.jpg","3fc4a34ecab1e0046e17a954e8278c0f"],["/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/static/media/tetris.4642efb6.svg","4642efb684daf59beef68af4389b7bce"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});