<template>
    <div >
        <img class="w-[120px] h-[120px] mx-auto mt-7" src="../../assets/img/applied.jpg" alt="" />
        <h3 class="text-[18px] font-[600] text-center">
            {{ $t(`applied-order`) }}
        </h3>
        <p class="my-5 text-[14px] text-grey-1 text-center max-w-[326px] mx-auto">
            {{ $t(`applied-order-txt`) }}
        </p>
        <button @click="$emit('show-login-section')"
            class="w-full mx-auto rounded-[8px] bg-special-blue text-white h-[44px] text-[14px]">
            {{ $t(`thanks`) }}
        </button>
    </div>
</template>

<script setup>
defineEmits(['show-login-section'])
</script>

<style lang="scss" scoped></style>