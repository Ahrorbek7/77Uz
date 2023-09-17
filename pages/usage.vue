<template>
    <Overall>
       <MainUsageAddress />
       <div class="mx-auto w-[50%]">
        <h1 class="text-[32px] text-special-black font-bold">{{ $t(`usage`) }}</h1>
       <div class="w-full bg-white p-3">
        <p class=" text-special-black my-5">{{ $t(`usage-txt1`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt2`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt3`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt4`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt5`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt6`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt7`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt8`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt9`) }}</p>
        <p class=" text-special-black my-5">{{ $t(`usage-txt10`) }}</p>
       </div>
       </div>
    </Overall>
</template>

<script setup>
import Overall from '~/layouts/Overall.vue';
</script>

<style lang="scss" scoped>

</style>