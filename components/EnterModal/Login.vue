<template>
  <div>
    <h2 class="text-[24px] font-[600]">{{ $t(`welcome`) }}</h2>
    <p class="text-[14px] text-grey-0 leading-[18.2px] my-2">
      {{ $t(`enter-system-text`) }}
    </p>
    <div class="my-6">
      <p class="text-[14px] text-grey-0 leading-[18.2px] my-2 py-1">
        {{ $t(`login`) }}
      </p>
      <input
        class="w-[100%] mx-auto rounded-[8px] bg-slate-bg h-[44px] py-2 px-3 text-[14px] outline-none focus: border focus: shadow-sm focus:shadow-special-blue focus:border-special-blue"
        type="text" :placeholder="$t('enter-login')" />
    </div>
    <div class="my-6">
      <p class="text-[14px] text-grey-0 leading-[18.2px] my-2 py-1">
        {{ $t(`password`) }}
      </p>
      <input
        class="w-[100%] mx-auto rounded-[8px] bg-slate-bg h-[44px] py-2 px-3 text-[14px] outline-none focus: border focus: shadow-sm focus:shadow-special-blue focus:border-special-blue"
        type="password" :placeholder="$t('enter-password')" />
    </div>
    <p @click="$emit('show-contact-section')"
      class="text-[12px] text-special-blue leading-[18.2px] my-2 py-1 cursor-pointer font-[500]">
      {{ $t(`forgot-password`) }}?
    </p>
    <div>
      <button class="w-full mx-auto my-2 rounded-[8px] bg-special-blue text-white h-[44px] text-[14px]">
        {{ $t(`enter`) }}
      </button>
      <p class="text-[12px] text-grey-1 leading-[18.2px] my-2 text-center">
        {{ $t(`want-to-be-seller`) }}
      </p>
      <button @click="$emit('show-apply-section')"
        class="w-full mx-auto rounded-[8px] border border-special-blue text-special-blue h-[44px] text-[14px]">
        {{ $t(`apply-now`) }}
      </button>
    </div>
  </div>
</template>
<script setup>
defineEmits(["show-contact-section", "show-apply-section"]);
</script>
