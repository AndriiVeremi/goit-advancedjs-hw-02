import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.body};t.start.addEventListener("click",r);t.stop.addEventListener("click",e);t.start.disabled=!1;let o;function r(){o=setInterval(()=>{t.body.style.backgroundColor=a()},1e3),t.start.disabled=!0}function e(){clearInterval(o),t.start.disabled=!1}function a(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map