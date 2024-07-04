import logoPlannio from '../images/logo-plannio.svg';
import mockup from '../images/mockup.png';
import fiturone from '../images/fitur1.png';
import fiturTwo from '../images/fitur2.png';
import fiturTri from '../images/fitur3.png';
import logoGeokatalis from '../images/logo-geokatalis.png';


export default function Landing() {
    return `
        <!-- Menu Header -->
<header class="fixed top-0 left-0 right-0 bg-bgPutih flex justify-between items-center py-6 md:px-20 px-6 shadow-lg z-10">
    <!-- Logo Plannio -->
   <div id="logo-plannio" href="/" data-link>
    <img class="w-56 h-14" src=${logoPlannio} alt="">
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
    <h1 class="animate-fade-slide font-semibold text-3xl text-center">Upload SHP jadi WebGIS<br>se-simpel upload<br>konten di sosmed</h1>
    <!-- mockup multiplatform -->
    <div>
      <img class="animate-fade-slide max-w-3xl w-full" src=${mockup} alt="mockup">
    </div>
    <!-- Fitur-fitur plannio -->
    <div class="flex flex-col lg:flex-row gap-8 px-10">        
       <!-- fitur1 -->
      <div class="animate-fade-slide container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${fiturone} alt="gambar1">
        <h3 class="my-1.5 text-2xl font-semibold text-left">
          Beragam Style Basemap
        </h3>
        <p class="my-1.5 font-opensans font-light text-sm text-justify">
          Setiap peta di PLANNIO dilengkapi dua tampilan tema peta dasar, yaitu tema cerah (bright) dan tema gelap (satellite). Data peta dasar mutakhir, melihat peta manapun di PLANNIO dengan tampalan foto satelit resolusi tinggi dari berbagai sumber.
        </p>
      </div>
      <!-- fitur2 -->
      <div class="animate-fade-slide delay-300 container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${fiturTwo} alt="gambar2">
        <h3 class="my-1.5 text-2xl font-semibold text-left">
          Topografi Tiga Dimensi (3D)
        </h3>
        <p class="my-1.5 font-opensans font-light text-sm text-justify">
          Web aplikasi PLANNIO dapat menampilkan seluruh peta yang ada dengan topografi tampak tiga dimensi (3D) yang memudahkan dalam observasi ketinggian tempat dari tiap tiap bagian yang ada pada peta.
        </p>
      </div>
      <!-- fitur3 -->
      <div class="animate-fade-slide delay-700 container flex-col py-10 items-center justify-center">
        <img class="object-fill mx-auto my-1.5 max-h-[400px] pb-4" src=${fiturTri} alt="gambar1">
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
    <img class="h-14" src=${logoGeokatalis} alt="">
   </div>
   <!-- Log-in and Signup -->
   <div class="font-semibold text-sm flex justify-center">
    <p>©2024 Geokatalis. All right reserved.</p>
   </div>
  </footer>
    `;
}
