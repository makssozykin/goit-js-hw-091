function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),p:document.querySelector("p")},o=document.createElement("h1");o.textContent="Random Background Color: ",o.style.position="absolute",o.style.top="20px",o.style.left="450px",o.style.width="700px",o.style.marginBottom="50px",o.style.textAlign="center",e.p.append(o),e.start.addEventListener("click",(function(){e.start.disabled=!0,e.stop.disabled=!1,n=setInterval((function(){document.body.style.backgroundColor=t(),o.textContent=`Random Background Color: ${t()}`}),1e3)})),e.stop.addEventListener("click",(function(){e.stop.disabled=!0,e.start.disabled=!1,clearInterval(n)}));let n=null;
//# sourceMappingURL=01-color-switcher.bb4b70f6.js.map
