<template>
  <div
    class="create-footer w-full rounded-[12px] h-auto bg-white items-center flex flex-1 p-4"
  >
    <input type="checkbox" class="w-[20px] h-[20px] ml-6" />
    <h3 class="text-[12px] font-semibold mx-2 max-w-[380px]">
      {{ $t(`agree-txt`) }}
    </h3>
    <div class="create-footer-bottom mx-12 w-[50%] flex justify-end">
      <button
        class="w-[118px] h-[40px] rounded-[8px] bg-grey-4 text-[14px] mx-2"
        @click="$emit('open-cancel-modal')"
      >
        {{ $t(`cancellation`) }}
      </button>
      <button
        class="w-[118px] h-[40px] rounded-[8px] bg-special-blue text-white text-[14px]"
      >
        {{ $t(`publishing`) }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(["open-cancel-modal"]);
</script>
