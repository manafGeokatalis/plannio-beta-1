(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function d(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=d(t);fetch(t.href,e)}})();const l="/assets/logo-plannio-AvKDaUDr.svg",c="/assets/mockup-BpmwFm6m.png",m="/assets/fitur1-DcvANOjI.png",u="/assets/fitur2-BUrvXkZJ.png",f="/assets/fitur3-0CdhIOmK.png",p="/assets/logo-geokatalis-BGOVCVfa.png";function r(){return`
        <!-- Menu Header -->
<header class="fixed top-0 left-0 right-0 bg-bgPutih flex justify-between items-center py-6 md:px-20 px-6 shadow-lg">
    <!-- Logo Plannio -->
   <div id="logo-plannio" href="/" data-link>
    <img class="w-56 h-14" src=${l} alt="">
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
      <img class="max-w-3xl w-full" src=${c} alt="mockup">
    </div>
    <!-- Fitur-fitur plannio -->
    <div class="flex flex-col lg:flex-row gap-8 px-10">        
       <!-- fitur1 -->
      <div class="container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${m} alt="gambar1">
        <h3 class="my-1.5 text-2xl font-semibold text-left">
          Beragam Style Basemap
        </h3>
        <p class="my-1.5 font-opensans font-light text-sm text-justify">
          Setiap peta di PLANNIO dilengkapi dua tampilan tema peta dasar, yaitu tema cerah (bright) dan tema gelap (satellite). Data peta dasar mutakhir, melihat peta manapun di PLANNIO dengan tampalan foto satelit resolusi tinggi dari berbagai sumber.
        </p>
      </div>
      <!-- fitur2 -->
      <div class="container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${u} alt="gambar2">
        <h3 class="my-1.5 text-2xl font-semibold text-left">
          Topografi Tiga Dimensi (3D)
        </h3>
        <p class="my-1.5 font-opensans font-light text-sm text-justify">
          Web aplikasi PLANNIO dapat menampilkan seluruh peta yang ada dengan topografi tampak tiga dimensi (3D) yang memudahkan dalam observasi ketinggian tempat dari tiap tiap bagian yang ada pada peta.
        </p>
      </div>
      <!-- fitur3 -->
      <div class="container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${f} alt="gambar1">
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
    <img class="h-14" src=${p} alt="">
   </div>
   <!-- Log-in and Signup -->
   <div class="font-semibold text-sm flex justify-center">
    <p>©2024 Geokatalis. All right reserved.</p>
   </div>
  </footer>
    `}const g="/assets/map-thumbnail-zP_ZOd2p.png",x="/assets/user1-BOUuooaP.png",b="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6859%206.20094C16.7484%205.91811%2017.0765%205.71647%2017.2327%205.651C17.2327%205.58553%2017.4046%205.45459%2018.092%205.45459C18.7794%205.45459%2019.1857%206.86873%2019.3028%207.5758C19.2247%208.06028%2018.9591%209.41419%2018.5217%2010.954C18.0842%2012.4939%2018.5217%2013.1931%2018.7951%2013.3502H23.5603C24.404%2013.3502%2025.0055%2014.2406%2025.2008%2014.6858C25.2529%2015.131%2025.2633%2016.1392%2024.8884%2016.6106C24.5134%2017.082%2024.3029%2018.2246%2024.2508%2018.7352C24.2508%2019.0672%2024.9196%2019.3682%2024.2634%2020.0281C23.6072%2020.688%2023.5515%2021.1557%2023.5906%2021.3913C23.5906%2022.0554%2023.5916%2021.5444%2023.5603%2022.7385C23.5291%2023.9327%2022.4797%2024.4407%2021.9589%2024.5455C18.9513%2024.5062%2012.7252%2024.4119%2011.8815%2024.3491C11.0379%2024.2862%2010.7749%2023.4325%2010.7488%2023.0135L10.9441%2013.9394L11.4909%2013.3502L12.9361%2012.4467L14.5376%2010.4826L15.9437%208.12575C16.1651%207.60199%2016.6234%206.48377%2016.6859%206.20094Z'%20stroke='%234C4C4C'%20stroke-width='2'/%3e%3cpath%20d='M4.77271%2024.2705L4.88988%2013.7037H8.52242V24.3491L4.77271%2024.2705Z'%20stroke='%234C4C4C'%20stroke-width='2'/%3e%3c/svg%3e",C="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.0581%208.07128C25.0581%2011.8711%2025.0581%2015.6714%2025.0581%2019.4712C25.0463%2019.5208%2025.0335%2019.5699%2025.0228%2019.6195C24.6936%2021.1746%2023.307%2022.1094%2021.9066%2022.0941C19.3899%2022.0665%2016.8727%2022.0884%2014.3561%2022.0823C14.1562%2022.0818%2014.0116%2022.1344%2013.8695%2022.2796C13.1693%2022.9941%2012.4522%2023.6922%2011.753%2024.4072C11.4458%2024.721%2011.1024%2024.955%2010.6725%2025.0562C10.443%2025.0562%2010.2136%2025.0562%209.98407%2025.0562C9.90485%2025.0332%209.82358%2025.0143%209.7459%2024.9867C9.07584%2024.7486%208.64191%2024.2932%208.49063%2023.592C8.41345%2023.2343%208.4482%2022.8683%208.44565%2022.5055C8.44309%2022.1079%208.44514%2022.1079%208.06488%2022.0511C6.56223%2021.8263%205.45518%2020.544%205.45518%2019.0251C5.45467%2015.513%205.45416%2012.0004%205.45518%208.48831C5.45569%206.82528%206.82392%205.45561%208.48552%205.4551C13.0057%205.45459%2017.5254%205.45612%2022.0451%205.45459C22.6646%205.45459%2023.2252%205.63551%2023.7328%205.98253C24.4723%206.48798%2024.893%207.19939%2025.0581%208.07128ZM15.2663%207.01438C14.8329%207.01438%2014.3995%207.01438%2013.9656%207.01438C12.1997%207.01438%2010.4338%207.01183%208.66798%207.0154C7.7439%207.01745%207.15869%207.52903%207.03398%208.4418C7.00996%208.61761%207.01558%208.79751%207.01558%208.97587C7.01456%2012.2651%207.01405%2015.5544%207.01558%2018.8436C7.01609%2019.8132%207.54253%2020.4264%208.49523%2020.4954C9.5941%2020.5746%2010.0996%2021.4016%2010.0398%2022.2183C10.0163%2022.5418%2010.0367%2022.8683%2010.0367%2023.1934C10.0367%2023.3191%2010.0848%2023.4172%2010.2038%2023.4694C10.324%2023.5215%2010.4282%2023.4847%2010.5202%2023.4024C10.5678%2023.36%2010.6122%2023.314%2010.6572%2023.269C11.3697%2022.5571%2012.097%2021.859%2012.7885%2021.1271C13.2158%2020.6748%2013.7121%2020.4893%2014.3218%2020.4959C15.5837%2020.5103%2016.8461%2020.5%2018.1086%2020.5C19.3899%2020.5%2020.6712%2020.4954%2021.9526%2020.5021C22.4294%2020.5046%2022.822%2020.339%2023.1363%2019.9828C23.4281%2019.6522%2023.5125%2019.2535%2023.5125%2018.8288C23.5135%2016.2469%2023.513%2013.6655%2023.513%2011.0835C23.513%2010.274%2023.5166%209.46446%2023.512%208.65492C23.5074%207.85305%2023.0607%207.24283%2022.3564%207.07315C22.1708%207.02869%2021.9802%207.01336%2021.7875%207.01336C19.6138%207.01489%2017.4401%207.01438%2015.2663%207.01438Z'%20fill='%23666666'/%3e%3cpath%20d='M15.2434%2012.2937C13.7392%2012.2937%2012.235%2012.2947%2010.7309%2012.2927C10.3557%2012.2922%2010.0291%2012.0131%209.97597%2011.661C9.91311%2011.246%2010.1334%2010.8821%2010.5162%2010.762C10.5975%2010.7365%2010.6792%2010.735%2010.7615%2010.735C13.7638%2010.7344%2016.7655%2010.7344%2019.7677%2010.7355C20.2318%2010.7355%2020.5563%2011.0585%2020.5573%2011.5103C20.5584%2011.9723%2020.2333%2012.2927%2019.7559%2012.2932C18.2523%2012.2947%2016.7481%2012.2937%2015.2434%2012.2937Z'%20fill='%23666666'/%3e%3cpath%20d='M13.3691%2015.2488C14.2226%2015.2488%2015.0767%2015.2483%2015.9302%2015.2488C16.4198%2015.2493%2016.7648%2015.5692%2016.7679%2016.023C16.7705%2016.4779%2016.425%2016.8075%2015.9404%2016.8075C14.22%2016.8086%2012.5002%2016.8086%2010.7798%2016.8075C10.2994%2016.807%209.97124%2016.4912%209.97022%2016.0333C9.9692%2015.5636%2010.2953%2015.2498%2010.7885%2015.2493C11.6487%2015.2483%2012.5089%2015.2488%2013.3691%2015.2488Z'%20fill='%23666666'/%3e%3cpath%20d='M18.9964%2016.8075C18.8757%2016.8075%2018.7546%2016.8091%2018.634%2016.8075C18.195%2016.8019%2017.8576%2016.4672%2017.8535%2016.0358C17.85%2015.5953%2018.1893%2015.2539%2018.6381%2015.2498C18.8926%2015.2472%2019.1471%2015.2467%2019.4017%2015.2498C19.8366%2015.2549%2020.1739%2015.5983%2020.1729%2016.0307C20.1719%2016.4626%2019.8341%2016.8019%2019.3976%2016.8081C19.2637%2016.8096%2019.1303%2016.8075%2018.9964%2016.8075Z'%20fill='%23666666'/%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.909%2015.2149L17.491%205.45459L17.2046%2010.5496C7.69471%2012.3699%205.52883%2015.8991%204.09082%2024.1158C7.93907%2018.7139%2014.4368%2018.7957%2017.2046%2019.5119L17.491%2024.5455L25.909%2015.2149Z'%20stroke='%234C4C4C'%20stroke-width='2'/%3e%3c/svg%3e",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD/SURBVHgB7ZTRDYIwEEAPMPDLCB1BN2AEncCawLd1AsMEDgAfjOAGMAIjdAR+IQS8Rj8IQe4I8UteQgiXax69uxZg4y+xliRHUbTv+95v27bMsqzirmNLUJBblhV8PjXKTkmSlJy1NicJBXIgMAh8HsCEJUGBmIgFwIQl6bquGMewXAUwYUnSNC3wFQ9C2nGcC/wCpZQfhmEAC2FNl5RSeJ53x7IdsRc+lqqybftZ13WMo6xXS4zAdd0c3hM1RjdNc6DODNkTs4MvAoP5AQUEpMSUiEg5w1qJ6QGRImCtxDSZSCHvMFKCUzR7P+FOn0CwoxKwJzcUXWckMWxsTPECvo1OoKazvKkAAAAASUVORK5CYII=";function A(){return`
        <!-- Menu Header -->
        <header class="fixed top-0 left-0 right-0 bg-white flex justify-between items-center py-2 md:px-3 px-6 shadow-md">
          <!-- Logo Plannio -->
          <div id="logo-plannio" href="/" data-link>
            <img class="w-[121px] h-[30px]" src=${l} alt="">
          </div>

          <!-- Nav Container -->
          <div class="nav-container flex p-0 gap-14">    
            <!-- Nav Menu       -->
            <div class="flex nav-menu p-0 gap-8">            
              <button href="/" data-link class="font-medium text-base text-solidDarkAbu hover:text-solidBiru duration-200"> HOME </button>
              <button class="font-medium text-base text-solidDarkAbu  hover:text-solidBiru duration-200"> My Geoportal </button>
            </div>
            <!-- Billing and Profile -->
            <div class="flex p-0 gap-8">            
              <button class="font-medium text-base text-solidDarkAbu hover:text-solidBiru duration-200"> Billing </button>
              <button class="flex py-1 px-2 gap-2 items-center font-medium text-base text-solidDarkAbu  hover:text-solidBiru duration-200"> Abdul Manaf <img src=${v} alt="" class="h-6 w-6"> </button>
            </div>
          </div>
        </header>
      <!-- Body content -->
       <div id="bodycontent" class="flex w-full pt-16 px-6 gap-4">
          <!-- Side Menu -->
           <div class="flex flex-col items-center gap-6 w-[202px]">           
            <button class="btnHijau">Make a Map</button>            
            <button class="btnBiru w-full">Explore Maps</button>
            <button class="btnBiru w-full">Followed</button>
            <button class="btnBiru w-full">Notifications</button>
            <button class="btnBiru w-full">Messages</button>            
           </div>
          <!-- Content Beranda -->
           <div class="flex flex-col w-full items-center">
              <!-- Content Item -->
              <div class="flex flex-col px-5 py-4 gap-3 rounded-lg bg-bgAbu w-full max-w-[1120px]">
                <!-- profile -->
                <div class="flex items-center gap-2">
                  <img class="w-14 h-14 object-center" src=${x} alt="">
                  <h3 class="font-bold text-base">Andi Abdul Manaf</h3>
                </div>
                <!-- Content Links and Status -->
                 <div class="flex gap-6">
                  <img class="h-24 w-44 rounded-md" src=${g} alt="">
                  <!-- Map Status -->
                   <div class="flex flex-col items-start">
                     <p class="font-semibold py-1 px-5 rounded-full text-sm text-solidHijau bg-bgHijau">Map</p>
                     <h2 class="font-bold text-lg">Peta rencana Tata Ruang Kabupaten Manggarai Barat</h2>
                     <p class="font-opensans text-solidDarkAbu text-xs">Last Updated :2 months ago</p>
                   </div>
                 </div>
                 <!-- Content Engage -->
                  <div class="flex w-full border-y border-solidAbu h-12 px-28 justify-between">
                    <!-- likes -->
                     <button class="flex items-center gap-1 text-sm font-bold text-solidAbu">
                      <img src=${b} alt="">
                      20 Likes
                     </button>
                     <!-- Comments -->
                     <button class="flex items-center gap-1 text-sm font-bold text-solidAbu">
                      <img src=${C} alt="">
                      4 Comments
                     </button>
                     <!-- Share -->
                     <button class="flex items-center gap-1 text-sm font-bold text-solidAbu">
                      <img src=${h} alt="">
                      Share
                     </button>
                  </div>
              </div>
           </div>
       </div>
    `}const w={"/":r,"/beranda":A};function i(){const a=window.location.pathname,s=w[a]||r;document.getElementById("app").innerHTML=s()}function y(a){window.history.pushState({},"",a),i()}window.addEventListener("popstate",i);window.addEventListener("load",()=>{i()});document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",a=>{if(a.target.matches("[data-link]")){a.preventDefault();const s=a.target.getAttribute("href");y(s)}}),i()});
