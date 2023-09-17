<template>

   <Overall>
     <!-- PageAddress  -->
     <createPageAddress />
    
    <div class="create-wrapper mx-auto w-[782px] mt-10">

      <!-- Heading  -->
      <h1 class="create-page-title text-[32px] font-bold text-special-black my-4">
        {{ $t(`create-ad`) }}
      </h1>

      <createContactInfo />

      <createRequired />

      <!-- Setting product photo  -->
      <div class="create-photo w-full h-[auto] bg-white rounded-[12px] my-4 p-4">

        <CreatePhotoHeading />

        <div class="images flex flex-wrap w-[100%] mx-auto mt-6">
          <createImageCard v-for="image in images" :key="image.id" :imageUrl="image.url"
            @open-photo-modal="openPhotoModal" />
        </div>
      </div>

      <!-- Footer -->
      <createFooter @open-cancel-modal="openCancelModal" />

      <!--Cancel Ad Modal -->
      <CreateModalCancelModal :cancelModalActive="cancelModalActive" @close-cancel-modal="closeCancelModal" />

      <!-- Photo Modal -->
      <CreateModalPhotoModal :photoModalActive="photoModalActive" @close-photo-modal="closePhotoModal" />
    </div>
   </Overall>
</template>

<script setup>
import { ref } from "vue";
import imagesData from "../database/create-images.json";
import Overall from "~/layouts/Overall.vue";

const cancelModalActive = ref(false);
const photoModalActive = ref(false);
const images = ref(imagesData.images);

// Modals' settings here

const openCancelModal = () => {
  cancelModalActive.value = true;
};
const openPhotoModal = () => {
  photoModalActive.value = true;
};

const closeCancelModal = () => {
  cancelModalActive.value = false;
};
const closePhotoModal = () => {
  photoModalActive.value = false;
};
</script>

<style lang="scss" scoped></style>