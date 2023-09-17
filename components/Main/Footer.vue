<template>
  <div class="footer w-full bg-white mt-12">
    <!-- Logo of the 77.uz  -->
    <div
      class="footer-logo w-[122px] h-[64px] border-[4px] border-special-blue mt-4 rounded-[12px] flex items-center justify-center mx-auto translate-y-[-40px] bg-white">
      <div class="bg-special-blue w-[85%] h-[85%] rounded-md flex items-center justify-center">
        <h1 class="text-2xl font-bold text-white">77.uz</h1>
      </div>
    </div>

    <p class="footer-text max-w-[669px] text-[16px] leading-6 mx-auto text-center">
      {{ $t(`footer-txt`) }}
    </p>

    <!-- Contact info here  -->
    <div class="flex justify-center w-[60%] mx-auto mt-7 flex-wrap">
      <a class="flex font-[600] text-[16px] text-special-black m-3 bg" href="#">
        <img class="mx-1 w-[18px] h-[18px] mt-1" src="../../assets/img/bottomI.jpg" alt="" />
        {{ $t(`bulletin-board`) }}
      </a>
      <nuxt-link to="/usage" class="flex font-[600] text-[16px] text-special-black m-3" href="#">
        <img class="mx-1 w-[18px] h-[18px] mt-1" src="../../assets/img/bottomI.jpg" alt="" />
        {{ $t(`terms-of-use`) }}
      </nuxt-link>
      <a class="flex font-[600] text-[16px] text-special-black m-3" href="tel:+998509045050">
        <img class="mx-1 w-[18px] h-[18px] mt-1" src="../../assets/img/bottomI.jpg" alt="" />
          +998 88 500 50 00
      </a>
    </div>
    <div class="company-bottom border-t h-[48px] flex items-center px-[130px] justify-between bg-white">
      <p class="text-[14px]">
        <span class="font-[600]">© 77.uz</span>
        2023. {{ $t(`all-rights-reserved`) }}
      </p>
      <img width="101px" height="20px" src="../../assets/img/uic-logo.jpg" alt="" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-image: url(../../assets/img/footer-bg.jpg);
  background-size: 85% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
