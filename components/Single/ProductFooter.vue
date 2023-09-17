<template>
  <div
    class="product-single-footer w-[882px] bg-white rounded-[16px] ml-[128px] p-2 my-2 relative"
  >
    <h3 class="text-[22px] text-special-black leading-8 font-bold m-4">
      {{ $t(`seller`) }}
    </h3>
    <nuxt-link to="/">
      <div class="flex mx-4">
        <img
          class="w-[48px] h-[48px] rounded-[8px] border"
          src="../../assets/img/user.jpg"
          alt=""
        />
        <span class="mx-2">
          <h4 class="text-[16px] leading-7 text-special-black font-[600]">
            {{ $t(`username`) }}
          </h4>
          <p class="text-[12px] text-grey-0 leading-5">ID: 1326547</p>
        </span>
      </div>
    </nuxt-link>
    <div class="flex">
      <h3
        class="single--seller-number text-[16px] text-special-black font-[600] absolute right-4 bottom-3"
      >
        
        <a href="tel:+998712007007">
          +998 71 200 70 07
        </a>
      </h3>
      <nuxt-link to="/profile">
        <button
          class="all-ads-btn hidden p-2 bg-grey-4 rounded-[8px] font-[600] text-[14px]"
        >
          {{ $t(`all-ads`) }}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>