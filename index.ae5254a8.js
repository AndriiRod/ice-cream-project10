var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".backdrop").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),$(document).ready((function(){$("#menu").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("body,html").animate({scrollTop:o},400)})),$("#menu-hero").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("body,html").animate({scrollTop:o},400)})),$("#mobile-menu").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("body,html").animate({scrollTop:o},400)}))})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=document.querySelector(".js-how-close-menu"),n=document.querySelector(".js-our-products-close-menu"),r=document.querySelector(".js-contacts-close-menu"),a=document.querySelector(".js-buy-now-close-menu"),l=document.querySelector(".js-home-close-menu"),s=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",s),o.addEventListener("click",s),c.addEventListener("click",s),n.addEventListener("click",s),r.addEventListener("click",s),a.addEventListener("click",s),l.addEventListener("click",s),window.matchMedia("(min-width: 1200px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),$(".scrollto a").on("click",(function(){let e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top},{duration:400,easing:"swing"}),!1}));
//# sourceMappingURL=index.ae5254a8.js.map
