<template>
  <Overall>
    <ProfilePageAddress />
    <div class="profile-wrapper w-full flex">

      <!-- Profile tab here  -->
      <ProfileTab
        @show-ads-section="showAdsSection"
        @show-personal-data="showPersonalData"
        :current-tab="currentTab"
      />

      <!-- Users ads here -->
      <ProfileMyAds v-if="currentTab === 'ads'" />

      <!-- Personal data here  -->
      <ProfilePersonalData v-if="currentTab === 'personalData'" />
    </div>
  </Overall>
</template>

<script setup>
import { ref } from "vue";
import Overall from "~/layouts/Overall.vue";

const currentTab = ref("ads");

// Method to show the Ads section
const showAdsSection = () => {
  currentTab.value = "ads";
};

// Method to show the Personal Data section
const showPersonalData = () => {
  currentTab.value = "personalData";
};
</script>

<style lang="scss" scoped>
@import "../assets/style/tailwind.css";
</style>