<template>
  <div class="single--page--address flex items-center ml-[128px] my-8">
    <nuxt-link to="/">
      <h3 class="text-[14px] font-[500]">{{ $t(`main`) }}</h3>
    </nuxt-link>
    <i class="bi bi-chevron-right text-[9px] text-grey-1 mx-2"></i>
    <nuxt-link to="/about">
      <h3 class="text-[14px] font-[500]">{{ $t(`electronics`) }}</h3>
    </nuxt-link>
    <i class="bi bi-chevron-right text-[9px] text-grey-1 mx-2"></i>
    <h3 class="text-[14px] font-[500]">{{ $t(`cars`) }}</h3>
  </div>
</template>