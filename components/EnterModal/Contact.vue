<template>
    <div>
        <img class="w-[64px] h-[64px] my-6 mx-auto" src="../../assets/img/forcot-help.jpg" alt="" />
        <p class="text-[14px] text-grey-1 my-5 text-center mx-auto max-w-[311px] font-[500]">
            {{ $t(`contact-help-text`) }}
        </p>
        <button @click="$emit('show-login-section')"
            class="w-full mx-auto rounded-[8px] font-semibold bg-special-blue text-white h-[44px] text-[14px]">
            <i class="bi bi-telephone"></i>
            <a href="tel:998509045050">+998 88 400 50 00</a>
        </button>
    </div>
</template>

<script setup>
defineEmits(['show-login-section'])
</script>

<style lang="scss" scoped></style>