<template>
    <div>
        
        <!-- Carousel  -->
        <div class="carousel-wrapper w-[834px] mx-auto relative">
            <div class="active-slide w-full h-[481px]" v-for="(image, index) in activeImages" :key="index">
                <img class="w-full h-full my-2 main-carousel-img rounded-[16px]" :src="image.src" alt="">
            </div>
            <div class="absolute top-[40%] left-[5%] w-[90%] flex justify-between">
                <span @click="goToPrevious"
                    class="nexter cursor-pointer w-[32px] h-[32px] rounded-[50%] bg-grey-3 p-3 flex items-center justify-center">
                    <i class="bi bi-chevron-left"></i>
                </span>
                <span
                    class="nexter cursor-pointer w-[32px] h-[32px] rounded-[50%] bg-grey-3 p-3 flex items-center justify-center">
                    <i @click="goToNext" class="bi bi-chevron-right"></i>
                </span>
            </div>
            <div class="slides flex justify-around my-3">
                <img v-for="(image, index) in images" :key="index" :class="{ active: index === activeIndex }"
                    @click="setActiveIndex(index)" class="w-[110px] h-[64px] rounded-[8px] cursor-pointer mx-1"
                    :src="image.src" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import singleSlidesData from "../../database/product-single-images.json"

export default {
    data() {
        return {
            images: singleSlidesData.images,
            activeIndex: 0,
        };
    },
    computed: {
        activeImages() {
            return [this.images[this.activeIndex]];
        },
    },
    methods: {
        goToPrevious() {
            this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
        },
        goToNext() {
            this.activeIndex = (this.activeIndex + 1) % this.images.length;
        },
        setActiveIndex(index) {
            this.activeIndex = index;
        },
    },
};
</script>

<style scoped>
@import "../../assets/style/about.css";
</style>