(()=>{"use strict";const e=document.querySelectorAll(".mobilenav__item");function t(t){e.forEach((e=>{e.classList.remove("mobilenav__item-current"),e.querySelector(".mobilenav__icon").classList.remove("mobilenav__icon-current"),e.querySelector(".mobilenav__icon-text").classList.remove("mobilenav__icon-text-current")}));const c=t.currentTarget;c.classList.add("mobilenav__item-current"),c.querySelector(".mobilenav__icon").classList.add("mobilenav__icon-current"),c.querySelector(".mobilenav__icon-text").classList.add("mobilenav__icon-text-current")}e.forEach((e=>{e.addEventListener("click",t)}))})();