<template>
    <div class="mt-4 mx-5 search-card-container">
        <h1 class="text-[32px] text-special-black leading-10 font-bold mt-3">
          {{ $t(`search-results`) }}
        </h1>
        <i @click="$emit('toggle-mobile-filter')" class="grid-icon bi bi-grid text-[0px] absolute"></i>
        <p class="text-[14px] leading-6 font-[500] mt-2 text-grey-1">
          156 {{ $t(`category.ads`) }}
        </p>
        <div>
          <nuxt-link to="/single">
          <div
            class="lap-card w-[882px] h-[135px] flex border bg-white rounded-[12px] py-1 px-1 my-2 relative cursor-pointer"
            v-for="(laptop, index) in laptops" :key="index">
            <svg class="liked-searched hidden" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.2032 14.2823C20.5956 13.8937 20.5986 13.2605 20.21 12.8681C19.8213 12.4757 19.1882 12.4727 18.7958 12.8613L20.2032 14.2823ZM11.9995 20.9998L11.2958 21.7103C11.6855 22.0963 12.3134 22.0963 12.7032 21.7103L11.9995 20.9998ZM5.20315 12.8613C4.81075 12.4727 4.17759 12.4757 3.78896 12.8681C3.40032 13.2605 3.40337 13.8937 3.79578 14.2823L5.20315 12.8613ZM3.80207 14.2885C4.19788 14.6737 4.83098 14.665 5.21615 14.2692C5.60131 13.8734 5.59268 13.2403 5.19687 12.8551L3.80207 14.2885ZM11.9995 7.00583L11.1969 7.60235C11.385 7.85541 11.6814 8.00495 11.9967 8.00582C12.312 8.0067 12.6092 7.85882 12.7987 7.6068L11.9995 7.00583ZM18.7987 12.8644C18.4047 13.2514 18.399 13.8845 18.786 14.2786C19.173 14.6726 19.8062 14.6783 20.2002 14.2913L18.7987 12.8644ZM18.7958 12.8613L11.2958 20.2893L12.7032 21.7103L20.2032 14.2823L18.7958 12.8613ZM12.7032 20.2893L5.20315 12.8613L3.79578 14.2823L11.2958 21.7103L12.7032 20.2893ZM5.19687 12.8551C4.11791 11.8052 3.71985 10.2384 4.16685 8.80077L2.25704 8.20695C1.58654 10.3634 2.18362 12.7136 3.80207 14.2885L5.19687 12.8551ZM4.16685 8.80077C4.61385 7.36317 5.83019 6.2983 7.31428 6.04531L6.97818 4.07375C4.75205 4.45324 2.92754 6.05054 2.25704 8.20695L4.16685 8.80077ZM7.31428 6.04531C8.79836 5.79231 10.2988 6.39403 11.1969 7.60235L12.8021 6.40931C11.455 4.59684 9.20431 3.69425 6.97818 4.07375L7.31428 6.04531ZM12.7987 7.6068C13.7006 6.40743 15.1978 5.81369 16.6765 6.06906L17.0168 4.09823C14.7988 3.71519 12.5529 4.60579 11.2002 6.40485L12.7987 7.6068ZM16.6765 6.06906C18.1552 6.32442 19.3666 7.38592 19.8139 8.81828L21.723 8.22207C21.052 6.07353 19.2349 4.48127 17.0168 4.09823L16.6765 6.06906ZM19.8139 8.81828C20.2613 10.2506 19.8693 11.8129 18.7987 12.8644L20.2002 14.2913C21.806 12.714 22.394 10.3706 21.723 8.22207L19.8139 8.81828Z"
                fill="white" />
            </svg>

            <img class="w-[150px] h-full rounded-sm" :src="laptop.img" alt="" />
            <div>
              <h3 class="title text-[18px] leading-7 font-[600] mx-4 mt-2">
                {{ laptop.name }}
              </h3>
              <span class="flex items-center mx-4 mt-6">
                <h2 class="lap-price text-[24px] font-bold leading-9">
                  {{ formatPrice(laptop.price) }}
                </h2>
                <p class="text-[16px] leading-7 font-[500] text-special-blue mx-2">
                  UZS
                </p>
              </span>
              <p class="lap-posted leading-9 text-[14px] text-grey-1 mx-4">
                {{ $t(`postedDate.${index}.time`) }}, {{ laptop.postedTime }}
              </p>
            </div>
            <div class="lap-location absolute right-0 flex flex-col justify-between h-full p-3">
              <div
                class="w-auto max-w-[150px] flex-nowrap text-center h-[26px] px-2 py-1 bg-grey-4 text-[14px] text-grey-0 mx-auto rounded-md">
                {{ $t(`regions.${index}.location`) }}
              </div>
              <p class="lap-number text-[14px] font-[600] text-grey-1 mx-3">
                {{ laptop.phoneNumber }}
              </p>
            </div>
          </div>
        </nuxt-link>  
        </div>
      </div>
</template>

<script setup>
defineEmits(['toggle-mobile-filter'])
defineProps({
    laptops:{
        type:Array,
        required:true
    }
})

// Formatting category price in thousands to look prettier
const formatPrice = (price) =>  {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
</script>
