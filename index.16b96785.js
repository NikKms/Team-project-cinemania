!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},r=t.parcelRequire8a95;null==r&&((r=function(n){if(n in e)return e[n].exports;if(n in a){var t=a[n];delete a[n];var r={id:n,exports:{}};return e[n]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(n,t){a[n]=t},t.parcelRequire8a95=r),r("i6wQM");var c=r("bpxeT"),i=r("2TvXO");r("1TFAy");var o=r("jyO6b"),s=(r("jyO6b"),o=r("jyO6b"),document.querySelector(".weekly-cards-wrap")),p=document.querySelector(".upcoming_wrap");function u(){return(u=n(c)(n(i).mark((function t(){var e;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.getWeeklyTrending)();case 2:e=n.sent,l(d(e.results));case 5:case"end":return n.stop()}}),t)})))).apply(this,arguments)}function d(n){return n.slice(0,3)}function l(n){return g.apply(this,arguments)}function g(){return g=n(c)(n(i).mark((function t(e){var a;return n(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,Promise.all(e.map(function(){var t=n(c)(n(i).mark((function t(e){var a,r,c,o,s,p,u,d,l;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.backdrop_path,a=e.title,r=e.release_date,c=e.genre_ids,o=e.id,s=e.poster_path,p=e.name,u=e.first_air_date,d=e.vote_average,c=b(c),n.next=4,v(c);case 4:return l=n.sent,n.abrupt("return",'<li class="weekly-card is-id" data-id='.concat(o,'>\n        <div class="weekly-container-image">\n          <img\n            class="weekly-card-image"\n           src="https://image.tmdb.org/t/p/original/').concat(s,'"\n            alt=""\n          />\n         <div class="overlay"></div>       \n        </div>\n        <div class="weekly-card-description">\n          <div>\n            <title class="weekly-card-description-title">').concat(a||p,'</title>\n            <p class="weekly-card-description-other">').concat(l," | ").concat(r?r.substring(0,4):u.substring(0,4),'</p>\n          </div>\n         <div class="Stars" style="--rating: ').concat(parseFloat((d/2).toFixed(1)),';" aria-label="Rating of this product is 2.3 out of 5."></div> \n        </div>\n        \n      </li>'));case 6:case"end":return n.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()));case 3:a=t.sent,s.innerHTML=a.join("");case 5:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function v(n){return f.apply(this,arguments)}function f(){return(f=n(c)(n(i).mark((function t(e){var a,r,c;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.getGenre)();case 2:return a=n.sent,r=a.genres,c=e.map((function(n){var t=r.find((function(t){return t.id===n}));return t?t.name:""})),n.abrupt("return",c.join(", "));case 6:case"end":return n.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=n(c)(n(i).mark((function t(){var e,a,r,c;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=x(),a=e.formattedStartDate,r=e.formattedEndDate,n.prev=1,n.next=4,(0,o.getUpcoming)(a,r);case 4:c=n.sent,w(k(c.results)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),p.innerHTML='<p class="upcoming-not-found">OOPS...We are very sorry! We don’t have any results matching your search.</p>';case 12:case"end":return n.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function w(n){return h.apply(this,arguments)}function h(){return(h=n(c)(n(i).mark((function t(e){var a,r,c,o,s,u,d,l,g,f,m,w,h;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.backdrop_path,r=e.poster_path,c=e.genre_ids,o=e.popularity,s=e.release_date,u=e.title,d=e.vote_average,l=e.vote_count,g=e.overview,c=b(c),n.next=4,v(c);case 4:f=n.sent,m=window.innerWidth<767,w=y(a,r,m),h='<div class="upcoming-card">\n\n            <img class="upcoming-card-img" src="'.concat(w,'" alt=" " />\n\n          <div class="upcoming-card-wrap">\n            <h3 class="upcoming-card-title">').concat(u,'</h3>\n\n            <div class="upcoming-card-numbers-wrap-top">\n              <div class="upcoming-card-release-wrap">\n                <span class="upcoming-card-release-text">Release date</span>\n                <span class="upcoming-card-release-data">').concat(s,'</span>\n              </div>\n\n              <div class="upcoming-card-vote-wrap">\n                <div class="upcoming-card-vote"><span>Vote / Votes</span></div>\n                <div class="upcoming-card-vote-data">\n                  <span>').concat(d,"</span> / <span>").concat(l,'</span>\n                </div>\n              </div>\n            </div>\n\n            <div class="upcoming-card-numbers-wrap-down">\n              <div class="upcoming-card-popularity-wrap">\n                <span class="upcoming-card-popularity-text">Popularity</span>\n                <span class="upcoming-card-popularity-data">').concat(o.toFixed(1),'</span>\n              </div>\n\n              <div class="upcoming-card-genre-wrap">\n                <span class="upcoming-card-genre-text">Genre</span>\n                <span class="upcoming-card-genre-data">').concat(f,'</span>\n              </div>\n            </div>\n \n\n            <span class="upcoming-card-about-title">About</span>\n\n            <p class="upcoming-card-about-text">').concat(g,'</p>\n\n            <button class="upcoming-button" type="button">\n              Add to my library\n            </button>\n          </div>\n        </div>'),p.insertAdjacentHTML("beforeend",h);case 9:case"end":return n.stop()}}),t)})))).apply(this,arguments)}function y(n,t,e){return!0===e&&null!==t?"https://image.tmdb.org/t/p/original/".concat(t):!0===e&&null===t&&null!==n||!1===e&&null!==n?"https://image.tmdb.org/t/p/original/".concat(n):!1===e&&null===n&&null!==t?"https://image.tmdb.org/t/p/original/".concat(t):"https://pbs.twimg.com/media/C5OTOt3UEAAExIk.jpg"}function b(n){return n.length>2?n.slice(0,2):n}function x(){var n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),r="".concat(t,"-").concat(e,"-").concat(a),c=new Date(t,e,1),i=new Date(c-1).getDate(),o=String(i).padStart(2,"0");return{formattedStartDate:r,formattedEndDate:"".concat(t,"-").concat(e,"-").concat(o)}}function k(n){return n[Math.floor(Math.random()*n.length)]}document.querySelector(".weekly-title-link").addEventListener("click",(function(){location.href="catalog.html"})),window.addEventListener("DOMContentLoaded",(function(){return m.apply(this,arguments)})),window.addEventListener("DOMContentLoaded",(function(){return u.apply(this,arguments)})),r("hVzVa"),r("h8OCG")}();
//# sourceMappingURL=index.16b96785.js.map
