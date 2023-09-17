<template>
  
  <!-- Using Nuxt Transition for Modal  -->
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="cancelModalActive"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div class="modal-overlay"></div>
        <Transition name="modal-inner">
          <div
            v-if="cancelModalActive"
            class="cancel-ad-modal relative z-10 bg-white rounded-[12px] p-4 w-[378px]"
          >
            <i
              class="bi bi-x-lg absolute top-[20px] right-[20px] cursor-pointer"
              @click="$emit('closeCancelModal')"
            ></i>
            <img
              class="w-[120px] h-[113px] mx-auto mt-14"
              src="../../../assets/img/cancel-publish-ad.jpg"
              alt=""
            />
            <h3
              class="text-[18px] text-special-black font-[600] text-center my-4"
            >
              {{ $t(`cancellation-created-ad`) }}
            </h3>
            <p
              class="max-w-[270px] mx-auto text-grey-1 text-[14px] leading-[19.6px] text-center"
            >
              {{ $t(`cancel-ad-warning-txt`) }}
            </p>
            <div class="mt-4 flex justify-center w-full">
              <button
                class="title rounded-[8px] w-[162.5px] h-[44px] bg-grey-4 font-[600]"
                @click="$emit('closeCancelModal')"
              >
                {{ $t(`back`) }}
              </button>
              <button
                class="title rounded-[8px] w-[162.5px] h-[44px] bg-special-blue text-white mx-2 font-[600]"
              >
                {{ $t(`cancellation`) }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>

// Modal called in create page, so, defining propses and emits
defineEmits(["closeCancelModal"]);
defineProps({
  cancelModalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
@import "../../../assets/style/about.css";
</style>