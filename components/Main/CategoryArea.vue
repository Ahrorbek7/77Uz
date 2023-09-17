<template>
  <h1
    class="category-heading text-[32px] font-bold text-center text-special-black"
  >
    {{ $t(`category.title`) }}
  </h1>
  <p class="category-heading-txt text-[16px] text-grey-1 text-center my-2">
    {{ $t(`category.description-text`) }}
  </p>
  <div
    class="categories-container w-[80%] mx-auto flex flex-wrap justify-between mt-10"
  >
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="category-card w-[336px] h-[85px] rounded-[12px] border m-2 flex items-center cursor-pointer"
      :style="[
        category.isExpand
          ? {
              height: 'auto',
              border: '1px solid #388FF3',
              boxShadow: '-2px 15px 5px -15px rgba(56,143,243,0.75',
            }
          : {},
      ]"
    >
      <div
        class="category-img-card w-[64px] h-[64px] rounded-[12px] border shadow-md translate-x-[-50%] bg-white flex items-center justify-center"
      >
        <img width="32px" height="32px" :src="category.img" alt="" />
      </div>
      <div
        @click.prevent="toggleExpand(category)"
        class="category-card-infotranslate-x-[-20px] w-[90%] h-full flex flex-col justify-center"
      >
        <h3 class="title text-[16px] text-special-black font-[600]">
          {{ $t(`category.${index}.title`) }}
        </h3>
        <p class="text-[14px] text-grey-1 leading-7">
          {{ category.adsCount }} {{ $t(`category.ads`) }}
        </p>
      </div>
      <div class="flex-1 relative">
        <i
          @click.prevent="toggleExpand(category)"
          v-if="!category.isExpand"
          class="bi bi-chevron-right text-[12px] text-grey-1 cursor-pointer absolute right-2"
        ></i>
        <i
          @click.prevent="toggleExpand(category)"
          v-if="category.isExpand"
          class="bi bi-chevron-down absolute right-2 text-[12px] text-grey-1 cursor-pointer"
        ></i>
      </div>
      <div
        class="subcategories h-0 overflow-hidden left-[130px] bottom-0 flex-wrap rounded-[20px] flex w-[81%] fixed bg-white z-10 top-[44%]"
        :ref="'content' + category.id"
        :style="[
          category.isExpand
            ? { height: 'auto', border: '1px solid #EAEDF0' }
            : {},
        ]"
      >
        <div
          class="sub-card w-[290px] flex flex-wrap mx-14 mt-10"
          v-for="subcategory in category.subcategories"
          :key="subcategory.title"
          v-show="showOnlySubcategory === subcategory || !showOnlySubcategory"
          :style="[subcategory.isExpand ? { width: '100%' } : {}]"
        >
          <div class="sub-card-header flex justify-between">
            <span
            @click="toggleSubExpand(subcategory)"
              class="font-[600] sub-title"
              :style="[subcategory.isExpand ? { marginLeft: '1rem' } : {}]"
              >{{ $t(`category.${index}.subcategory.${index}.title`) }}
            </span>
            <div class="icon">
              <i
                @click.prevent="toggleSubExpand(subcategory)"
                v-if="!subcategory.isExpand"
                class="bi bi-chevron-right text-[12px] text-grey-1 cursor-pointer"
              ></i>
              <i
                @click.prevent="toggleSubExpand(subcategory)"
                v-if="subcategory.isExpand"
                class="sub-card-back bi bi-chevron-left text-[20px] text-grey-1 cursor-pointer absolute left-3 mt-1"
              ></i>
            </div>
          </div>
          <div
            class="sub-card-body w-[100%] flex flex-wrap overflow-hidden h-0"
            :ref="'subcontent' + subcategory.title"
            :style="[
              subcategory.isExpand
                ? { height: subcategory.computedHeight }
                : {},
            ]"
          >
            <nuxt-link
              @click="toggleSubExpand(subcategory)"
              class="little-card mx-12 flex items-center justify-center w-[280px] cursor-pointer"
              v-for="(little, index) in subcategory.littleCategory"
              :key="index"
              :to="little.path"
            >
              <h3 class="text-[16px]">
                {{ little.title }}
              </h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryData from "../../database/categories.json";

export default {
  data() {
    return {
      showOnlySubcategory: null,
      categories: categoryData.categories,
      subcategories: categoryData.categories.reduce(
        (acc, category) => [...acc, ...category.subcategories], // Separating subcategories for accordion
        []
      ),
    };
  },
  methods: {
    toggleExpand(category) {
      category.isExpand = !category.isExpand;
    },
    getComputedSubHeight() {
      // Main logic of accordion.Setting subcategories height
      this.subcategories.forEach((subcategory) => {
        const subcontent = this.$refs["subcontent" + subcategory.title][0];
        subcontent.style.height = "auto";
        const height = getComputedStyle(subcontent).height;
        subcategory.computedHeight = height;
        subcontent.style.height = 0;
      });
    },

    toggleSubExpand(subcategory) {
      if (subcategory.isExpand) {
        this.showOnlySubcategory = null; // Collapsing the expanded subcategory
      } else {
        this.showOnlySubcategory = subcategory; // Show only the clicked subcategory
      }
      subcategory.isExpand = !subcategory.isExpand;
    },
  },
  mounted() {
    this.getComputedSubHeight();
  },
};
</script>

<style lang="scss" scoped></style>