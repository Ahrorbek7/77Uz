<template>
  <div>
    <div class="my-ads-header justify-between flex w-[85%] mx-auto">
      <h1 class="font-bold text-[32px]">{{ $t(`my-ads`) }}</h1>
      <nuxt-link to="/create">
        <button
          class="text-white w-[223px] h-[40px] rounded-[8px] bg-special-blue"
        >
          {{ $t(`create-ad`) }}
          <i class="bi bi-plus"></i>
        </button>
      </nuxt-link>
    </div>
    <div class="my-ads-container justify-around w-[90%] flex flex-wrap mx-auto">
      <div
        v-for="(ad, index) in ads"
        :key="index"
        class="ob-card w-[278px] h-[470px] my-3 rounded-[12px] mx-1 border-2 border-white bg-white hover:shadow-sm cursor-pointer relative"
      >
        <nuxt-link to="/single">
          <div
            v-if="ad.status === 'moderation'"
            class="card-status w-[110px] flex items-center justify-center text-[12px] h-[25px] rounded-md bg-special-orange text-white font-[600] absolute top-[16px] left-[16px]"
          >
            {{ $t(`in-moderation`) }}
          </div>
          <div
            v-else
            class="card-status w-[164px] flex items-center justify-center text-[12px] h-[25px] rounded-md bg-special-green text-white font-[600] absolute top-[16px] left-[16px]"
          >
            {{ $t(`active`) }}
            <div
              class="my-card--status w-[81px] h-[17px] bg-white rounded-[3px] text-special-green text-[10px] mx-1 flex items-center justify-center"
            >
              <p class="text-[10px] font-[400] leading-[12px]">
                {{ $t(`to`) }} 31.09.2023
              </p>
            </div>
          </div>
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
            <div class="my-card-lined absolute bottom-[62px]">
              <p class="ad-card-posted leading-7 text-grey-1 text-[14px] mx-3">
                {{ $t(`postedDate.${index}.time`) }}, 09:35
              </p>
              <p class="ad-card-number text-[16px] font-[600] text-grey-1 mx-3">
                {{ ad.phoneNumber }}
              </p>
            </div>
            <div class="my-adcard-bottom flex items-center absolute bottom-1">
              <h1
                class="my-ad-card-price font-bold text-[24px] leading-10 text-special-black mx-3 my-2"
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
  </div>
</template>
<script setup>
import { ref } from "vue";

import adsData from "../database/ads.json";
const ads = ref(adsData.ads);
</script>
