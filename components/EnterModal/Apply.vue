<template>
  <div>
    <h2 class="text-[24px] font-[600]">{{ $t(`apply-now`) }}</h2>
    <p class="text-[14px] text-grey-1 leading-[18.2px] my-2">
      {{ $t(`enter-system-text`) }}
    </p>
    <p class="text-[14px] text-grey-0 leading-[18.2px] my-2">
      {{ $t(`fullname`) }}
    </p>
    <input
      class="w-[100%] mx-auto rounded-[8px] bg-slate-bg h-[44px] py-2 px-3 text-[14px] outline-none focus: border focus: shadow-sm focus:shadow-special-blue focus:border-special-blue"
      type="text" :placeholder="$t('enter-fullname')" />
    <p class="text-[14px] text-grey-0 leading-[18.2px] my-1 py-1">
      {{ $t(`product-name`) }}
    </p>
    <input
      class="w-[100%] mx-auto rounded-[8px] bg-slate-bg h-[44px] px-3 text-[14px] outline-none focus: border focus: shadow-sm focus:shadow-special-blue focus:border-special-blue"
      type="text" :placeholder="$t('enter-product-name')" />
    <p class="text-[14px] text-grey-0 leading-[18.2px] my-1 py-1">
      {{ $t(`category.title`) }}
    </p>
    <div class="flex w-[100%] mx-auto my-2 py-2 px-3 border rounded-[8px] bg-slate-bg">
      <select class="bg-transparent outline-none cursor-pointer w-[100%]" name="" id="">
        <i class="bi bi-chevron-down"></i>
        <option value="">{{ $t(`choose-category`) }}</option>
        <option value="Tashkent">{{ $t(`subcategories.3.title`) }}</option>
        <option value="Karakalpakstan">
          {{ $t(`subcategories.2.title`) }}
        </option>
        <option value="Andijan">{{ $t(`electronics`) }}</option>
        <option value="Bukhara">{{ $t(`transport`) }}</option>
        <option value="Jizzakh">{{ $t(`subcategories.0.title`) }}</option>
        <option value="Kashkadarya">{{ $t(`subcategories.1.title`) }}</option>
      </select>
    </div>
    <p class="text-[14px] text-grey-0 leading-[18.2px] my-2 py-1">
      {{ $t(`phone-number`) }}
    </p>
    <input
      class="w-[100%] mx-auto rounded-[8px] bg-slate-bg h-[44px] py-2 px-3 text-[14px] outline-none focus: border focus: shadow-sm focus:shadow-special-blue focus:border-special-blue"
      type="number" placeholder="+998 () --- --- ---" />
    <p class="text-[14px] text-grey-0 leading-[18.2px] my-2 py-1">
      {{ $t(`adres`) }}
    </p>
    <input
      class="w-[100%] mx-auto rounded-[8px] bg-slate-bg h-[44px] py-2 px-3 text-[14px] outline-none focus: border focus: shadow-sm focus:shadow-special-blue focus:border-special-blue"
      type="text" :placeholder="$t('enter-address')" />
    <div>
      <button @click="$emit('show-applied-section')"
        class="w-full mx-auto my-2 rounded-[8px] bg-special-blue text-white h-[44px] text-[14px]">
        {{ $t(`apply-now`) }}
      </button>
      <p class="text-[12px] text-grey-1 leading-[18.2px] my-2 text-center">
        {{ $t(`want-to-be-seller`) }}
      </p>
      <button @click="$emit('show-login-section')"
        class="w-full mx-auto rounded-[8px] border border-special-blue text-special-blue h-[44px] text-[14px]">
        {{ $t(`enter`) }}
      </button>
    </div>
  </div>
</template>
<script setup>
defineEmits("show-applied-section", "show-login-section")
</script>


