import logoPlannio from "../images/logo-plannio.svg";
import mapThumbnail from "../images/map-thumbnail.png";
import userone from "../images/user1.png";
import like from "../images/likes.svg";
import comments from "../images/comments.svg";
import share from "../images/share.svg";

export default function Beranda() {
    return `
        <!-- Menu Header -->
        <header class="fixed top-0 left-0 right-0 bg-white flex justify-between items-center py-2 md:px-3 px-6 shadow-md">
          <!-- Logo Plannio -->
          <div id="logo-plannio" href="/" data-link>
            <img class="w-[121px] h-[30px]" src=${logoPlannio} alt="">
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
              <button class="flex py-1 px-2 gap-2 items-center font-medium text-base text-solidDarkAbu  hover:text-solidBiru duration-200"> Abdul Manaf <img src="./images/user-icon.png" alt="" class="h-6 w-6"> </button>
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
                  <img class="w-14 h-14 object-center" src=${userone} alt="">
                  <h3 class="font-bold text-base">Andi Abdul Manaf</h3>
                </div>
                <!-- Content Links and Status -->
                 <div class="flex gap-6">
                  <img class="h-24 w-44 rounded-md" src=${mapThumbnail} alt="">
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
                      <img src=${like} alt="">
                      20 Likes
                     </button>
                     <!-- Comments -->
                     <button class="flex items-center gap-1 text-sm font-bold text-solidAbu">
                      <img src=${comments} alt="">
                      4 Comments
                     </button>
                     <!-- Share -->
                     <button class="flex items-center gap-1 text-sm font-bold text-solidAbu">
                      <img src=${share} alt="">
                      Share
                     </button>
                  </div>
              </div>
           </div>
       </div>
    `;
}