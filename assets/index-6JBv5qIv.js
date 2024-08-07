(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const s=document.querySelector(".form"),a=s.querySelector(".form__wrapper"),L=s.querySelector('[type="submit"]'),i=s.querySelector("#email");function f(e){a.getBoundingClientRect().bottom+8,a.getBoundingClientRect().left+8*2;const r=document.createElement("div");return r.classList.add("user-message"),r.textContent=e,r}function S(){const e=document.createElement("div");return e.classList.add("error-icon"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <circle cx="12" cy="12" r="12" fill="#F96464" />
                <path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z" />
              </g>
            </svg>`,e}function p(){const e=document.querySelector(".user-message"),n=a.querySelector(".error-icon");e&&e.parentNode.removeChild(e),n&&n.parentNode.removeChild(n)}function g(){const e=document.createDocumentFragment(),n=f("Please provide a valid email"),r=S();p(),document.body.classList.remove("success"),document.body.classList.add("error"),e.appendChild(r),e.appendChild(n),a.appendChild(e)}function b(){const e=f("Thank you! Your email's been saved");p(),document.body.classList.remove("error"),document.body.classList.add("success"),a.appendChild(e)}s.addEventListener("submit",e=>{e.preventDefault();const r=new RegExp("^[^_\\.@][a-zA-z0-9!#$%&'*+\\-\\/=?\\^_`{|\\.]+(?<![@\\._-])@+[a-z]+\\.+[a-z]{2,}").test(i.value);s.classList.remove("error"),i.value===""||i.value===null||r===!1?g():(b(),i.value="",i.blur(),L.blur(),s.submit())});i.addEventListener("invalid",()=>{g()});window.addEventListener("load",()=>{i.value=""});const q=document.querySelector(".hero-img"),x=document.querySelector(".page-title"),C=document.querySelector(".title-accent"),E=document.querySelector(".logo img"),w=document.querySelector(".main-content").firstElementChild.querySelector("p"),M=document.querySelector(".form"),y=[{opacity:0,transform:"translate3D(-25%, 0, 0)"},{opacity:1,transform:"translate3D(0, 0, 0)"}],c={duration:2e3,easing:"ease-in-out"};q.animate([{opacity:.1,filter:"grayscale(1)"},{filter:"grayscale(0.9)",offset:.8},{opacity:1,filter:"grayscale(0)"}],{duration:3500,easing:"ease-in-out"});const z=E.animate(y,{duration:c.duration/2}),u=x.animate([{opacity:0,fontWeight:100,letterSpacing:"-2rem"},{opacity:1,offset:.4},{opacity:1,fontWeight:700,letterSpacing:"1.0825rem"}],c),h=C.animate([{opacity:0,fontWeight:400,letterSpacing:"-2rem"},{opacity:1,offset:.4},{opacity:1,fontWeight:300,letterSpacing:"1.0825rem"}],c),d=w.animate(y,c),v=M.animate([{opacity:0,gridTemplateColumns:"0fr max-content"},{opacity:1},{gridTemplateColumns:"1fr max-content"}],{duration:3600,easing:"cubic-bezier(.57,-0.22,.37,1.22)"});u.pause();h.pause();d.pause();v.pause();z.addEventListener("finish",()=>{u.play(),h.play()});u.addEventListener("finish",()=>{d.play()});d.addEventListener("finish",()=>{v.play()});