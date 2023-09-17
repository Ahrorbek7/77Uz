<template>
    <div class="search-result-address flex items-center ml-[128px] mt-8">
      <nuxt-link to="/">
        <h3 class="text-[14px] text-special-black font-[500] leading-7">
          {{ $t(`main`) }}
        </h3>
      </nuxt-link>
      <i class="bi bi-chevron-right mx-2 text-[7px]"></i>
      <p class="font-[500] text-[14px] text-grey-2">{{ $t(`usage`) }}</p>
    </div>
</template>
