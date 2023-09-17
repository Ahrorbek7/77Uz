<template>
  <div
    class="create-required w-full h-[497px] bg-white rounded-[12px] my-4 p-4"
  >
    <h3 class="text-[20px] text-special-black font-bold">
      {{ $t(`required-info`) }}
    </h3>
    <p class="text-[14px] text-grey-0 font-[500] my-3">
      {{ $t(`product-name`) }}
    </p>
    <input
      class="bordered w-[98%] rounded-[8px] h-[44px] outline-none p-2 focus:border bg-slate-bg text-[14px]"
      type="text"
      :placeholder="$t('enter-name')"
    />
    <p class="text-[14px] text-grey-0 font-[500] my-4">
      {{ $t(`product-category`) }}
    </p>
    <div
      class="bordered w-[98%] rounded-[8px] h-[44px] p-4 bg-slate-bg flex justify-between items-center"
    >
      <h3 class="text-[14px] text-special-black">
        {{ $t(`choose-category`) }}
      </h3>
      <i class="bi bi-chevron-down cursor-pointer text-[14px] text-grey-1"></i>
    </div>
    <p class="text-[14px] text-grey-0 font-[500] my-4 capitalize">
      {{ $t(`description`) }}
    </p>
    <textarea
      class="bordered w-[98%] rounded-[8px] h-[84px] outline-none p-2 bg-slate-bg text-[14px]"
      :placeholder="$t('enter-product-comment')"
    ></textarea>
    <p class="text-[14px] text-grey-0 font-[500] my-4">
      {{ $t(`product-price`) }}
    </p>
    <input
      type="number"
      class="bordered w-[98%] rounded-[8px] outline-none h-[44px] p-4 bg-slate-bg flex justify-between items-center text-[14px]"
      :placeholder="$t('enter-product-price')"
    />
  </div>
</template>