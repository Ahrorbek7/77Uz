<template>
  <div class="w-full items-center my-6 mx-4">
    <h1 class="personal-data-heading text-[32px] text-special-black font-bold">
      {{ $t(`personal-data`) }}
    </h1>
    <div
      class="personal-data-profile w-[882px] rounded-[12px] bg-white flex mx-2 my-7 items-center p-4"
    >
      <img
        src="../../assets/img/user.jpg"
        class="w-[92px] h-[92px] rounded-[50%] mx-4"
        alt=""
      />
      <div>
        <h1 class="text-[24px] font-bold leading-[33px] my-5">
          {{ $t(`username`) }}
        </h1>
        <div class="personal-plus my-6">
          <span
            class="personal-data-span w-auto px-3 h-[40px] rounded-[8px] bg-slate-bg py-[10px] mx-2 font-[600] text-[16px]"
            ><i class="bi bi-telephone-plus text-special-blue mx-2"></i> +998 88
            033 18 05</span
          >
          <span
            class="personal-data-span w-auto px-3 h-[40px] rounded-[8px] bg-slate-bg py-[10px] mx-2 font-[600] text-[16px]"
            ><i class="bi bi-geo-alt text-special-blue mx-2"></i
            >{{ $t(`user-address`) }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
