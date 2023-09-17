<template>
  <Overall>
    <SingleProductAddress />
    <div class="single-product-wrapper w-full flex">
      <div class="product-single--info">
        <SingleMainWrapper />
        <SingleProductComment />
        <SingleProductFooter />
      </div>
      <singleProductSellerInfo />
    </div>
  </Overall>
</template>
<script setup>
import Overall from '~/layouts/Overall.vue';

</script>
