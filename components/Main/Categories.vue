<template>
  <div class="bg-white w-full mt-16">
    <!-- Search area  -->
    <div
      class="search-input w-[580px] h-[60px] bg-white rounded-[8px] border my-2 translate-y-[-26px] mx-auto flex items-center p-2 relative z-40"
    >
      <i class="bi bi-search text-grey-2 mr-3 text-[16px]"></i>
      <input
        @focus="showRecommended = true"
        @blur="hideRecommendedWithDelay"
        class="outline-none h-full text-[16px]"
        type="text"
        :placeholder="$t('category.input-placeholder')"
        v-model="searchInput"
        @input="handleInput"
      />

      <SearchButton />
    </div>

    <!-- Showing  recommended categories -->
    <div
      v-if="showRecommended"
      class="recommendation-overlay fixed inset-0 z-30 flex justify-center items-center"
    >
      <div
        class="recommendation w-[580px] min-h-[350px] max-h-[450px] rounded-[12px] left-[31%] border auto overflow-y-scroll pt-3 mt-32 absolute bg-white mx-auto z-50"
        v-if="showRecommended"
      >
        <p class="text-[14px] text-grey-1 mx-3 my-3">
          {{ $t(`recommendation`) }}
        </p>

        <!-- Recommendation -->
        <RecommendationFiltered
          v-show="searchInput.length > 0"
          :adviced-categories="advicedCategories"
        />

        <RecommendationDefault v-show="searchInput.length < 1" />

        <ErrorsNotFound
          v-show="searchInput.length > 0 && advicedCategories.length < 1"
        />
      </div>
    </div>
    
    <!-- Showing the categories from local json file data  -->
    <MainCategoryArea/>
  </div>
</template>

<script>
import recommendedData from "../../database/recommendations.json";
export default {
  data() {
    return {
      searchInput: "",
      advicedData: recommendedData.filteredRecommendations,
      advicedCategories: [],
      showRecommended: false,

    };
  },

  methods: {
   
    hideRecommendedWithDelay() {
      setTimeout(() => {
        this.showRecommended = false;
      }, 200); // Delaying until clicked category to hide recommendations
    },

    handleInput() {
      //Function to show recommendations
      if (this.searchInput === "") {
        this.recommendedCategories = [];
        return;
      }

      this.advicedCategories = this.advicedData.filter((category) =>
        category.title.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
  },


};
</script>

<style scoped>
@import "../../assets/style/about.css";
</style>

<style scoped></style>
