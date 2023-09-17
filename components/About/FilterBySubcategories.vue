<template>
    <div>
        <div class="flex items-center my-7 mx-3 relative" v-for="(filterSubcategory, index) in filterSubcategories"
        :key="index">
        <input :checked="filterSubcategory.checked" disabled type="checkbox"
            class="w-[20px] h-[20px] cursor-pointer border-none" :id="index" />
        <label class="cursor-pointer mx-2 text-[14px] font-[500] leading-6 text-special-black my-1" :for="index">{{
            $t(`subcategories.${index}.title`) }}</label>
        <hr class="w-[90%] mx-auto absolute bottom-0" />
    </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import fSbData from "../../database/filterSubcategories.json";

const filterSubcategories = ref(fSbData.filterSubcategories)
</script>

<style lang="scss" scoped></style>