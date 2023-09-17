<template>
    <nuxt-link to="/about">
        <div class="bg-white w-full h-[52px] relative hover:bg-slate-bg cursor-pointer flex items-center py-2"
            v-for="advicedCategory in advicedCategories" :key="advicedCategory.title">
            <i class="bi bi-chevron-right absolute right-2 text-grey-1 text-[14px]"></i>
            <i class="bi bi-search absolute left-2 text-special-blue text-[19px]"></i>
            <h3 class="font-[500] mx-10 text-[16px] leading-[20.8px]">
                {{ advicedCategory.title }}
            </h3>
            <hr class="w-[90%] right-0 bg-grey-0 absolute bottom-0" />
        </div>
    </nuxt-link>
</template>

<script setup>
defineProps({
    advicedCategories: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>