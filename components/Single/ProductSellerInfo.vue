<template>
  <div class="w-full">
    <div class="single-seller-main-info w-[278px] h-[165px] bg-white rounded-[16px] p-4 mx-8">
      <nuxt-link to="/profile">
        <div class="flex">
          <img
            class="seller-img w-[40px] h-[40px] border rounded-md"
            src="../../assets/img/user.jpg"
            alt=""
          />
          <span class="mx-2">
            <h1
              class="text-[16px] text-special-black font-[600] leading-7"
            >
              {{ $t(`username`) }}
            </h1>
            <p class="text-[12px] text-grey-0 leading-5">ID: 1326547</p>
          </span>
        </div>
      </nuxt-link>
      <h3
        class="text-[16px] text-special-black font-[600] my-2"
      >
        
        <a href="tel:+998712007007">
          +998 71 200 70 07
        </a>
      </h3>
      <nuxt-link to="/profile">
        <button
          class="w-[246px] h-[40px] bg-grey-4 rounded-[8px] font-[600]"
        >
          {{ $t(`all-ads`) }}
        </button>
      </nuxt-link>
    </div>
    <div
      class="single--user-address w-[278px] h-auto py-2 rounded-[16px] bg-white mx-8 my-4 px-2"
    >
      <h3 class="text-[20px] text-special-black font-bold mx-3 my-4">
        {{ $t(`address`) }}
      </h3>
      <hr class="w-full my-3" />
      <p
        class="text-[14px] text-special-black font-semibold max-w-[218px] mx-2 my-4"
      >
        {{ $t(`user-address`) }}
      </p>
      <img
        :src="getUrlImg()"
        class="rounded-md w-full h-[150px] cursor-pointer"
        alt=""
      />
    </div>
    <button
      class="save-address-btn w-[260px] rounded-[8px] bg-special-blue h-[40px] mx-10 text-white flex items-center justify-center"
    >
      {{ $t(`save-to-gallery`) }}
      <i class="bi bi-cloud-arrow-down text-xl mx-2"></i>
    </button>
  </div>
</template>

<script setup>
function getUrlImg() {
  return `https://s1.cdn.autoevolution.com/images/news/how-google-maps-knows-youre-braking-hard-so-it-can-find-safer-routes-162191_1.jpg`;
}
</script>