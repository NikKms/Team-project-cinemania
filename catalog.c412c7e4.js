!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequire8a95;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequire8a95=r),r("i6wQM");var i=r("bpxeT"),o=r("2TvXO"),s=(r("bpxeT"),r("2TvXO"),r("8MBJY")),c=r("hKHmD"),u={pagination:document.getElementById("pagination"),catalogFilms:document.querySelector(".catalog-films")},l=(i=r("bpxeT"),o=r("2TvXO"),function(t){var e,n=t.map((function(t){return"<div data-id=".concat(t.id,' class="catalog-card">\n      <img src=\'https://image.tmdb.org/t/p/original').concat(t.poster,"' alt=\"").concat(t.title,'" loading="lazy" />\n      <div class="catalog-info">\n        <div>\n          <p class="catalog-info-name">\n            <b>').concat(t.title,'</b>\n          </p>\n          <p class="catalog-info-details">\n            <span>').concat(t.genres,'</span>\n            <span class="catalog-info-border" >').concat(t.date,'</span>\n          </p>\n        </div>\n        <div\n          class="Stars"\n          style="--rating: ').concat(t.rating/2,'"\n          aria-label="Rating of this product is 2.3 out of 5."\n        ></div>\n      </div>\n    </div>')})).join("");e=n,u.catalogFilms.innerHTML=e});var d,g=(d=t(i)(t(o).mark((function e(n){var a,r;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:a=t.sent,r=n.map((function(t){var e=t.id,n=t.title,r=t.poster_path,i=t.vote_average,o=t.genre_ids,s=t.release_date;return{id:e,title:n,poster:r,rating:i,genres:p(a,o),date:f(s)}})),l(r);case 5:case"end":return t.stop()}}),e)}))),function(t){return d.apply(this,arguments)}),p=function(t,e){var n=[];return t.map((function(t){var a=t.id,r=t.name;-1!==e.indexOf(a)&&n.push(r)})),n.join(",")},f=function(t){return new Date(t).getFullYear()},v=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},h=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}},m=function e(n,a,r){"use strict";var i=this;t(s)(this,e),t(c)(this,"createButton",(function(){var t=[];i.addFirstPages(t),i.totalPages>3&&i.addEllipsisIfNeeded(t),i.totalPages>3&&i.addMiddlePages(t),i.totalPages>3&&i.addEllipsisIfNeeded(t,!0),i.totalPages>3&&i.addLastPage(t);var e=i.createPagination(t.join(""));i.render(e),v("currentPage",i.currentPage),i.getMovies(i.currentPage)})),t(c)(this,"addFirstPages",(function(t){for(var e=1;e<=Math.min(3,i.totalPages);e++){var n=i.currentPage===e?"btn-active":"",a=i.createPaginationItem(e,n);t.push(a)}})),t(c)(this,"addMiddlePages",(function(t){for(var e=Math.max(4,i.currentPage-2),n=Math.min(i.currentPage+1,i.totalPages-1),a=e;a<=n;a++){var r=i.currentPage===a?"btn-active":"",o=i.createPaginationItem(a,r);t.push(o)}})),t(c)(this,"addEllipsisIfNeeded",(function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(e&&i.currentPage<i.totalPages-2||!e&&i.currentPage>3)&&t.push('<li class="pagination-item">...</li>')})),t(c)(this,"addLastPage",(function(t){var e=i.totalPages,n=i.currentPage===e?"btn-active":"",a=i.createPaginationItem(e,n);t.push(a)})),t(c)(this,"createPaginationItem",(function(t,e){return"<li class='pagination-item ".concat(e,"'>\n              <a href='#' data-page='").concat(t,"' class='pagination-btn'>").concat(t,"</a>\n            </li>")})),t(c)(this,"createPagination",(function(t){return"<ul class='pagination'>".concat(t,"</ul>")})),t(c)(this,"render",(function(t){i.reset(),u.catalogFilms.insertAdjacentHTML("afterend",t),document.querySelector(".pagination").addEventListener("click",i.handlerBtn)})),t(c)(this,"reset",(function(){var t=document.querySelector(".pagination");t&&t.remove()})),t(c)(this,"handlerBtn",(function(t){t.preventDefault();var e=parseInt(t.target.dataset.page);isNaN(e)||(i.currentPage=e,i.createButton())})),this.totalPages=n,this.currentPage=a,this.getMovies=r},P=r("jyO6b"),b=r("dIxxU"),w="88b8a7c5d221d3120fb29d734050dc7d",y=function(){var e=t(i)(t(o).mark((function e(){var n,a,r,i,s,c,u=arguments;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>0&&void 0!==u[0]?u[0]:1,a=h("searchTerm"),console.log(n,a),t.next=5,(0,P.getByQuery)(a,n);case 5:return r=t.sent,i=r.results,s=r.total_pages,c=r.page,g(i),t.abrupt("return",{results:i,total_pages:s,page:c});case 11:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=t(i)(t(o).mark((function e(n){var a,r,i,s;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(w,"&page=").concat(n,"&language=en-US"));case 2:return a=t.sent.data,r=a.results,i=a.page,s=a.total_pages,g(r),t.abrupt("return",{results:r,page:i,total_pages:s});case 6:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=t(i)(t(o).mark((function e(){var n,a;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(w));case 2:return n=t.sent.data,a=n.genres,t.abrupt("return",a);case 5:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=document.querySelector(".search-form"),T=function(){var e=t(i)(t(o).mark((function e(){var n,a,r;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:n=t.sent,a=n.page,r=n.total_pages,new m(r,a,x).createButton();case 7:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=t(i)(t(o).mark((function e(n){var a,r,i;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:a=t.sent,r=a.page,i=a.total_pages,new m(i,r,y).createButton();case 7:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();M.addEventListener("submit",(function(t){t.preventDefault();var e=new FormData(t.target),n=Object.fromEntries(e.entries()).searchMovies;n.length?(v("searchTerm",n),I(n)):T()})),window.addEventListener("load",T),r("hVzVa"),r("h8OCG")}();
//# sourceMappingURL=catalog.c412c7e4.js.map
