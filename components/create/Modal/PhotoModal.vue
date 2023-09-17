<template>
  
  <!-- Using Nuxt Transition for Modal  -->
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="photoModalActive"
        class="fixed inset-0 z-10 flex items-center justify-center"
      >
        <div class="modal-overlay fixed inset-0"></div>
        <Transition name="modal-inner">
          <div
            v-if="photoModalActive"
            class="photo-modal relative z-10 bg-white rounded-[12px] p-6 w-[982px] h-auto"
          >
            <i
              class="bi bi-x-lg absolute top-[20px] right-[20px] cursor-pointer"
              @click="$emit('closePhotoModal')"
            ></i>
            <h3 class="text-[18px] font-[600]">
              {{ $t(`choose-category`) }}
            </h3>
            <div
              class="search-input w-[580px] rounded-[8px] border my-4 translate-y-0 mx-auto flex items-center p-4"
            >
              <i class="bi bi-search text-grey-2 mx-2 text-[16px]"></i>
              <input
                class="outline-none h-full text-[16px] font-[400]"
                type="text"
                placeholder="Что вы ищите?"
              />
              <button
                class="w-[107px] h-[44px] bg-special-black text-white absolute right-2 rounded-md"
              >
                <p class="leading-8 text-[16px] font-[600]">
                  {{ $t(`category.search`) }}
                </p>
              </button>
            </div>
            <div class="guiji w-full flex flex-wrap justify-between px-3">
              <div
                v-for="productCategory in productCategories"
                :key="productCategory.id"
                @click="$emit('closePhotoModal')"
                class="w-[273px] h-[84px] rounded-[12px] border m-2 flex items-center cursor-pointer"
              >
                <div
                  class="w-[64px] h-[64px] rounded-[12px] border shadow-md translate-x-[-50%] bg-white"
                >
                  <img
                    class="w-full h-full rounded-[12px]"
                    :src="productCategory.imgSrc"
                    alt=""
                  />
                </div>
                <div>
                  <h3 class="text-[16px] text-special-black font-[600] my-1">
                    {{
                      $t(`product-modal-categories.${productCategory.id}.title`)
                    }}
                  </h3>
                  <p class="text-[14px] text-grey-1 leading-7">
                    {{ productCategory.subcategoryCount }}
                    {{ $t(`subcategory`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import prData from "../../../database/productCategories.json";

// Modal called in create page, so, defining propses and emit
defineEmits(["closePhotoModal"]);
defineProps({
  photoModalActive: {
    type: Boolean,
    default: false,
  },
});
const productCategories = ref(prData.productCategories);
</script>

<style scoped>
@import "../../../assets/style/about.css";
</style>