<template>
    <Overall>
      <AboutPageAddress />
    <div class="flex flex-wrap">

      <!-- Default filter  -->
      <div class="filter mt-[35px] ml-[128px] rounded-[12px] border w-[278px] h-[850px] bg-white">
        <h3 class="text-[20px] font-[600] text-special-black m-3">
          {{ $t(`filter`) }}
        </h3>

        <!-- Filtering vilayats  -->
        <p class="text-[14px] text-grey-0 leading-5 m-3">{{ $t(`region`) }}</p>
        <div class="flex w-[93%] mx-auto py-2 rounded-[8px]">
          <el-select v-model="selectedRegion" class="w-[100%]" size="large">
            <el-option v-for="region in regions" :key="region.id" :value="region.title">
              {{ $t(`vilayats.${region.id}.title`) }}
            </el-option>
          </el-select>
        </div>

        <!-- Filtering by regions  -->
        <p class="text-[14px] text-grey-0 leading-5 mx-4 my-2">
          {{ $t(`city`) }}
        </p>
        <div class="flex w-[93%]  mx-auto py-2 rounded-[8px]">
          <el-select v-model="selectedCity" class="w-[100%]" size="large">
            <el-option v-for="city in cities" :key="city.id" :value="city.title">
              {{ $t(`cities.${city.id}.title`) }}
            </el-option>
          </el-select>
        </div>

      <!-- Sorting and ordering  -->
        <p class="text-[14px] text-grey-0 leading-5 mx-3 my-4">
          {{ $t(`sort`) }}
        </p>
        <form class="postedDate-price-filter m-3" action="#">
          <p class="my-4">
            <input type="radio" id="test1" name="radio-group" value="cheapest" v-model="sortType" />
            <label for="test1">{{ $t(`cheapest-first`) }}</label>
          </p>
          <p class="my-4">
            <input type="radio" id="test2" name="radio-group" value="oldest" v-model="sortType" />
            <label for="test2">{{ $t(`oldest-first`) }}</label>
          </p>
          <p class="my-4">
            <input type="radio" id="test3" name="radio-group" value="newest" v-model="sortType" />
            <label for="test3">{{ $t(`newest-first`) }}</label>
          </p>
        </form>
        <p class="text-[14px] text-grey-0 leading-5 mx-3 my-5">
          {{ $t(`subcategories.title`) }}
        </p>
        
        <AboutFilterBySubcategories />
        
        <AboutApplyFilterBtn @apply-filter="applyFilter"/>
      </div>

      <!-- Mobile filter  -->
      <div v-if="mobileFilter" class="mobile-filter bg-white absolute">
        <h3 class="text-[20px] font-[600] text-special-black m-3">
          {{ $t(`filter`) }}
        </h3>
        <p class="text-[14px] text-grey-0 leading-5 m-3">{{ $t(`region`) }}</p>
        <div class="flex w-[93%] mx-auto py-2 px-3 rounded-[8px]">
          <el-select v-model="selectedRegion" class="w-[100%]" size="large">
            <el-option v-for="option in options" :key="option.id" :value="option.title">
              {{ $t(`vilayats.${option.id}.title`) }}
            </el-option>
          </el-select>
        </div>
        <p class="text-[14px] text-grey-0 leading-5 mx-3 my-4">
          {{ $t(`sort`) }}
        </p>
        <form class="postedDate-price-filter m-3" action="#">
          <p class="my-4">
            <input type="radio" id="test1" name="radio-group" value="cheapest" v-model="sortType" />
            <label for="test1">{{ $t(`cheapest-first`) }}</label>
          </p>
          <p class="my-4">
            <input type="radio" id="test2" name="radio-group" value="oldest" v-model="sortType" />
            <label for="test2">{{ $t(`oldest-first`) }}</label>
          </p>
          <p class="my-4">
            <input type="radio" id="test3" name="radio-group" value="newest" v-model="sortType" />
            <label for="test3">{{ $t(`newest-first`) }}</label>
          </p>
        </form>
        <AboutApplyFilterBtn @apply-filter="applyFilter"/>
      </div>
      <AboutCardArea :laptops="laptops" @toggle-mobile-filter="toggleMobileFilter"/>
    </div>
    </Overall>
</template>

<script>
import laptopData from "../database/laptops.json";
import locationData from "../database/locations.json"
import Overall from "~/layouts/Overall.vue";
export default {
  components:{
    Overall
  },
  data() {
    return {
      selectedRegion: "",
      selectedCity: "",
      sortType: "",
      mobileFilter: false,
      regions:locationData.regions,
      cities:locationData.cities,
      laptops: laptopData.laptops,
      originalLaptops: laptopData.laptops,
    };
  },
  computed: {
    sortedLaptops() {
      const laptops = [...this.laptops]; // Creating a copy of the original array

      switch (
      this.sortType // Creating sorting for categories
      ) {
        case "cheapest":
          laptops.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          break;
        case "oldest":
          laptops.sort(
            (a, b) => new Date(a.postedDate) - new Date(b.postedDate)
          );
          break;
        case "newest":
          laptops.sort(
            (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
          );
          break;
      }

      return laptops;
    },
  },
  methods: {

    // Creating function for emply and done all filtering and sorting actions
    applyFilter() {
      if (this.selectedRegion) {
        this.laptops = this.originalLaptops.filter(
          (laptop) => laptop.region === this.selectedRegion
        );
      } else {
        this.laptops = this.originalLaptops;
      }

      if(this.selectedCity) {
        this.laptops = this.originalLaptops.filter(
          (laptop) => laptop.city === this.selectedCity
        )
      } else {
        this.laptops = this.originalLaptops
      }

      this.laptops.sort((a, b) => {
        switch (this.sortType) {
          case "cheapest":
            return parseFloat(a.price) - parseFloat(b.price);
          case "oldest":
            return new Date(a.postedDate) - new Date(b.postedDate);
          case "newest":
            return new Date(b.postedDate) - new Date(a.postedDate);
          default:
            return 0;
        }
      });
      this.mobileFilter = false;
    },

    // Toggling filter modal for mobile design
    toggleMobileFilter() {
      this.mobileFilter = !this.mobileFilter;
    }
  },
};
</script>

<style scoped>
@import "../assets/style/about.css";
</style>
