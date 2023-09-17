<template>
  <div class="w-full mt-14">
    <h1 class="text-[32px] font-bold text-center text-special-black capitalize">
      {{ $t(`category.ads`) }}
    </h1>
    <p class="ad-text text-[16px] text-grey-1 text-center my-2">
      {{ $t(`ads-txt`) }}
    </p>

    <!-- Showing ads from local json file data -->
    <div class="ads-container justify-between w-[80%] flex flex-wrap mx-auto">
      <div
        v-for="(ad, index) in ads"
        :key="index"
        class="ob-card w-[278px] h-[470px] my-3 rounded-[12px] border-2 relative border-white bg-white hover:shadow-sm cursor-pointer"
      >
        <nuxt-link to="/single">
          <svg
            class="hidden liked-my"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2041 11.2823C19.5965 10.8937 19.5996 10.2605 19.211 9.86814C18.8223 9.47574 18.1892 9.47268 17.7968 9.86132L19.2041 11.2823ZM11.0004 17.9998L10.2968 18.7103C10.6865 19.0963 11.3144 19.0963 11.7041 18.7103L11.0004 17.9998ZM4.20413 9.86132C3.81173 9.47268 3.17857 9.47574 2.78993 9.86814C2.4013 10.2605 2.40435 10.8937 2.79675 11.2823L4.20413 9.86132ZM2.80304 11.2885C3.19885 11.6737 3.83196 11.665 4.21712 11.2692C4.60229 10.8734 4.59366 10.2403 4.19784 9.85515L2.80304 11.2885ZM11.0004 4.00583L10.1978 4.60235C10.3859 4.85541 10.6824 5.00495 10.9977 5.00582C11.313 5.0067 11.6102 4.85882 11.7997 4.6068L11.0004 4.00583ZM17.7997 9.8644C17.4057 10.2514 17.4 10.8845 17.787 11.2786C18.174 11.6726 18.8072 11.6783 19.2012 11.2913L17.7997 9.8644ZM17.7968 9.86132L10.2968 17.2893L11.7041 18.7103L19.2041 11.2823L17.7968 9.86132ZM11.7041 17.2893L4.20413 9.86132L2.79675 11.2823L10.2968 18.7103L11.7041 17.2893ZM4.19784 9.85515C3.11888 8.80521 2.72083 7.23838 3.16783 5.80077L1.25802 5.20695C0.587517 7.36336 1.1846 9.71361 2.80304 11.2885L4.19784 9.85515ZM3.16783 5.80077C3.61483 4.36317 4.83117 3.2983 6.31525 3.04531L5.97916 1.07375C3.75303 1.45324 1.92852 3.05054 1.25802 5.20695L3.16783 5.80077ZM6.31525 3.04531C7.79934 2.79231 9.29979 3.39403 10.1978 4.60235L11.803 3.40931C10.456 1.59684 8.20529 0.694253 5.97916 1.07375L6.31525 3.04531ZM11.7997 4.6068C12.7015 3.40743 14.1988 2.81369 15.6775 3.06906L16.0178 1.09823C13.7998 0.715186 11.5539 1.60579 10.2012 3.40485L11.7997 4.6068ZM15.6775 3.06906C17.1562 3.32442 18.3676 4.38592 18.8149 5.81828L20.724 5.22207C20.053 3.07353 18.2359 1.48127 16.0178 1.09823L15.6775 3.06906ZM18.8149 5.81828C19.2622 7.25065 18.8703 8.81289 17.7997 9.8644L19.2012 11.2913C20.807 9.71398 21.395 7.37061 20.724 5.22207L18.8149 5.81828Z"
              fill="white"
            />
          </svg>

          <div class="flex flex-col justify-center">
            <img
              class="w-full h-[240px] rounded-t-[12px]"
              :src="ad.img"
              alt=""
            />
            <div
              class="ad-location w-auto max-w-[150px] flex-nowrap text-center h-[26px] px-2 py-1 bg-grey-4 text-[14px] text-grey-0 mx-auto my-3 rounded-md"
            >
              {{ $t(`regions.${index}.location`) }}
            </div>
            <h1 class="title font-[600] text-[18px] leading-8 mx-2">
              {{ ad.name }}
            </h1>
            <div class="ad-card-lined absolute bottom-[62px]">
              <p class="ad-card-posted leading-7 text-grey-1 text-[14px] mx-3">
                {{ $t(`postedDate.${index}.time`) }}, 13:29
              </p>
              <p class="ad-card-number text-[16px] font-[600] text-grey-1 mx-3">
                  {{ ad.phoneNumber }}
              </p>
            </div>
            <div class="flex items-center absolute bottom-1">
              <h1
                class="ad-card-price font-bold text-[24px] leading-10 text-special-black mx-3 my-2"
              >
                {{ ad.price }}
              </h1>
              <p
                class="summa text-[16px] font-[500] leading-6 text-special-blue"
              >
                UZS
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <button
      class="load-more-btn flex w-[226px] h-[44px] border-2 bg-grey-4 rounded-[100px] items-center justify-center mx-auto my-4 font-[550] text-[16px]"
    >
      {{ $t(`load-more`) }}
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 11.5L10.5 15.5L6.5 11.5M14.5 5.5L10.5 9.5L6.5 5.5"
          stroke="#16191D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import adsData from "../../database/ads.json";

const ads = ref(adsData.ads);
</script>

<style scoped>
body {
  z-index: 1;
}
</style>