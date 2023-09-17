<template>
    <nuxt-link to="/about">
        <div class="bg-white w-full h-[52px] relative hover:bg-slate-bg cursor-pointer flex items-center"
            v-for="defaultCategory in defaultCategories" :key="defaultCategory.id">
            <i class="bi bi-chevron-right absolute right-2 text-grey-1 text-[14px]"></i>
            <img class="w-[16.78px] h-[16px] mx-3" src="../../assets/img/starred-recommend.jpg" alt="" />
            <h3 class="text-[16px] font-[500] leading-[20.8px]">
                {{ $t(`defaultRecommended.${defaultCategory.id}.title`) }}
            </h3>
        </div>
    </nuxt-link>
</template>

<script setup>
import {ref} from 'vue'
import recommendedData from "../../database/recommendations.json"
const defaultCategories = ref(recommendedData.defaultRecommendations)
</script>

<style lang="scss" scoped></style>