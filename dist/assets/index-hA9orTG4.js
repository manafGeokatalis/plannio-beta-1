(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="/assets/logo-plannio-DfM3FB8_.svg",m="/assets/mockup-BpmwFm6m.png",c="/assets/fitur1-DcvANOjI.png",f="/assets/fitur2-BUrvXkZJ.png",p="/assets/fitur3-0CdhIOmK.png",u="/assets/logo-geokatalis-BGOVCVfa.png";function l(){return`
        <!-- Menu Header -->
<header class="fixed top-0 left-0 right-0 bg-bgPutih flex justify-between items-center py-6 md:px-20 px-6 shadow-lg">
    <!-- Logo Plannio -->
   <div id="logo-plannio" href="/" data-link>
    <img class="w-56 h-14" src=${d} alt="">
   </div>
   <!-- Menu items -->
   <div id="navbar" class="hidden lg:block">
    <a href="#" class="menu-item mx-7 font-semibold">Community</a>
    <a href="#" class="menu-item mx-7 font-semibold">Pricing</a>
    <a href="https://geokatalis.com/" class="menu-item mx-7 font-semibold" target="_blank">Geokatalis V</a>
   </div>
   <!-- Log-in and Signup -->
   <div class="flex flex-col sm:flex-row justify-center items-center font-semibold text-base">
    <a href="/beranda" data-link class="mx-3">Log In</a>
    <button class="mx-3 bg-solidBiru py-1 px-6 rounded-full shadow-xl" href="/" data-link>Try for free</button>
   </div>
  </header>
  <!-- Main Content Body -->
  <div class="px-0 mb-48 flex flex-col gap-[40px] items-center py-20 max-w-[1120px] mx-auto mt-[104px] bg-bgPutih">
    <!-- tagline -->
    <h1 class="font-semibold text-3xl text-center">Upload SHP jadi WebGIS<br>se-simpel upload<br>konten di sosmed</h1>
    <!-- mockup multiplatform -->
    <div>
      <img class="max-w-3xl w-full" src=${m} alt="mockup">
    </div>
    <!-- Fitur-fitur plannio -->
    <div class="flex flex-col lg:flex-row gap-8 px-10">        
       <!-- fitur1 -->
      <div class="container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${c} alt="gambar1">
        <h3 class="my-1.5 text-2xl font-semibold text-left">
          Beragam Style Basemap
        </h3>
        <p class="my-1.5 font-opensans font-light text-sm text-justify">
          Setiap peta di PLANNIO dilengkapi dua tampilan tema peta dasar, yaitu tema cerah (bright) dan tema gelap (satellite). Data peta dasar mutakhir, melihat peta manapun di PLANNIO dengan tampalan foto satelit resolusi tinggi dari berbagai sumber.
        </p>
      </div>
      <!-- fitur2 -->
      <div class="container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${f} alt="gambar2">
        <h3 class="my-1.5 text-2xl font-semibold text-left">
          Topografi Tiga Dimensi (3D)
        </h3>
        <p class="my-1.5 font-opensans font-light text-sm text-justify">
          Web aplikasi PLANNIO dapat menampilkan seluruh peta yang ada dengan topografi tampak tiga dimensi (3D) yang memudahkan dalam observasi ketinggian tempat dari tiap tiap bagian yang ada pada peta.
        </p>
      </div>
      <!-- fitur3 -->
      <div class="container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${p} alt="gambar1">
        <h3 class="my-1.5 text-2xl font-semibold text-left">
          Berbagi Peta Multiplatform
        </h3>
        <p class="my-1.5 font-opensans font-light text-sm text-justify">
          Berbagi informasi spasial menjadi sangat mudah dengan PLANNIO. Bagikan informasi spasial teraktual kepada siapa saja di WhatsApp, Facebook, Instagram, Twitter, LinkedIn, dan lain-lain
        </p>
      </div>
    </div>      
  </div>

  <!-- Footer -->
  <footer class="bg-bgPutih flex flex-col md:flex-row  md:justify-between justify-center items-center py-6 px-20 shadow-lg">
    <!-- Menu items -->
    <div id="navbar" class="hidden lg:block">
      <a href="#" class="menu-item mx-7 font-semibold">Community</a>
      <a href="#" class="menu-item mx-7 font-semibold">Pricing</a>
      <a href="https://geokatalis.com/" class="menu-item mx-7 font-semibold" target="_blank">Geokatalis</a>
    </div>
    <!-- Logo Plannio -->
   <div id="logo-geokatalis" class="flex justify-center">
    <img class="h-14" src=${u} alt="">
   </div>
   <!-- Log-in and Signup -->
   <div class="font-semibold text-sm flex justify-center">
    <p>©2024 Geokatalis. All right reserved.</p>
   </div>
  </footer>
    `}function g(){return`
        <!-- Menu Header -->
<header class="fixed top-0 left-0 right-0 bg-briHijau flex justify-between items-center py-6 md:px-20 px-6 shadow-lg">
   <h2>
    Ini Header
   </h2>
   <button href="/" data-link class="font-semibold text-2xl"> Home </button>
</header>
    `}const x={"/":l,"/beranda":g};function s(){const a=window.location.pathname,i=x[a]||l;document.getElementById("app").innerHTML=i()}function h(a){window.history.pushState({},"",a),s()}window.addEventListener("popstate",s);window.addEventListener("load",()=>{s()});document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",a=>{if(a.target.matches("[data-link]")){a.preventDefault();const i=a.target.getAttribute("href");h(i)}}),s()});
