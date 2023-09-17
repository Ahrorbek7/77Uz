<template>
    <button @click="$emit('apply-filter')" class="w-[246px] h-[44px] bg-special-blue text-white rounded-[8px] m-3">
        {{ $t(`apply-filter`) }}
    </button>
</template>

<script setup>
defineEmits(['apply-filter'])
</script>

<style lang="scss" scoped></style>