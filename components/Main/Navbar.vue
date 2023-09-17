<template>
  <nav class="h-[80px] bg-white flex items-center">
    <div class="language-switcher absolute left-[137px] h-[24px] gap-6 flex">

      <!-- Using i18n locale for internalization.(check for /locales/uz.json || ru.json) -->
      <div class="flex w-[110px]">
        <img class="rus-flag w-[20px] h-[20px] my-1 mx-2" src="../../assets/img/rus-flag.jpg"
          v-if="$i18n.locale === 'ru'" />
        <img class="uzb-flag w-[20px] h-[20px] my-1 mx-2" src="../../assets/img/uzbekflag.jpg" alt=""
          v-if="$i18n.locale === 'uz'" />
        <div class="custom-select">
          <el-select id="standart-select" v-model="$i18n.locale">
            <el-option class="flex items-center" value="ru"><img class="w-[20px] mx-1" src="../../assets/img/rus-flag.jpg"
                alt=""> Русский</el-option>
            <el-option class="flex items-center" value="uz"> <img class="w-[20px] mx-1"
                src="../../assets/img/uzbekflag.jpg" alt=""> O'zbekcha</el-option>
          </el-select>
        </div>
      </div>
      <div>
        <p class="contact-phone text-[14px] font-[500] leading-7 nuil">
          <i class="bi bi-telephone"></i>
          <a href="tel:+998509009090">+998509045050</a>
        </p>

        <a href="tel:+998509045050"><i class="bi bi-telephone hidden phone-mobile"></i></a>
      </div>
    </div>
    <a href="https://devjobs-web.netlify.app/" class="mx-auto">
      <div
      class="navbar-logo w-[170px] h-[100px] rounded-b-[20px] bg-white shadow-md flex items-center justify-center border">
      <div
        class="navbar-logo--inline w-[134px] h-[64px] border-[4px] border-special-blue mt-4 rounded-[10px] flex items-center justify-center">
        <div class="bg-special-blue w-[90%] h-[85%] rounded-sm flex items-center justify-center">
          <h1 class="text-2xl font-bold text-white">77.uz</h1>
        </div>
      </div>
    </div>  
    </a>
    <button @click="openEnterModal" class="logout-btn absolute w-[118px] h-[40px] bg-grey-4 rounded-[8px] right-[137px]">
      <p class="title font-[600] text-[14px] leading-8">
        {{ $t(`enter`) }}
        <i class="bi bi-box-arrow-left"></i>
      </p>
    </button>
    <button @click="openEnterModal" class="logout-mobile hidden absolute bg-grey-4 rounded-[8px]">
      <p class="title font-[600] text-[14px] leading-8">
        <i class="bi bi-box-arrow-left"></i>
      </p>
    </button>
    <MainEnterModal :enterModalActive="enterModalActive" @close-enter-modal="closeEnterModal" />
  </nav>
</template>
<script setup>
import { ref } from "vue";
const enterModalActive = ref(false);

// Setting Entering Modal
const openEnterModal = () => {
  enterModalActive.value = true;
};

const closeEnterModal = () => {
  enterModalActive.value = false;
};
</script >
<style>
body {
  z-index: 1;
}
</style>
