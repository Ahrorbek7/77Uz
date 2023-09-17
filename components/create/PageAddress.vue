<template>
  <div class="create--page--address flex items-center ml-[128px] mt-6">
    <nuxt-link to="/">
      <h3 class="text-[14px] text-special-black font-[500] leading-7">
        {{ $t(`main`) }}
      </h3>
    </nuxt-link>
    <i class="bi bi-chevron-right text-[9px] text-gey-1 mx-2"></i>
    <nuxt-link to="/profile">
      <h3 class="text-[14px] font-[500] text-grey-0">{{ $t(`profile`) }}</h3>
    </nuxt-link>
    <i class="bi bi-chevron-right text-[9px] text-gey-1 mx-2"></i>
    <h3 class="text-[14px] font-[500] text-grey-0">
      {{ $t(`create-ad`) }}
    </h3>
  </div>
</template>