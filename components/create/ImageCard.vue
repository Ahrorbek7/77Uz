<template>
  <div class="image-card w-[234px] h-164px m-2 relative">
    <span
      class="span-block absolute flex items-center justify-center top-3 border w-[32px] h-[32px] bg-special-black text-white p-3 rounded-[50%] right-12"
    >
      <i class="bi bi-list text-xl cursor-pointer" @click="openPhotoModal"></i>
    </span>
    <span
      class="span-block absolute flex items-center justify-center top-3 border w-[32px] h-[32px] bg-special-black text-white p-3 rounded-[50%] right-2"
    >
      <i class="bi bi-trash text-xl cursor-pointer"></i>
    </span>
    <img class="w-full h-full rounded-[12px]" alt="" :src="imageUrl" />
  </div>
</template>
  
  <script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    openPhotoModal() {
      this.$emit("open-photo-modal");
    },
  },
};
</script>