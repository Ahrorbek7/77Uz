<template>
    <div class="w-full h-[262px] border">
        <img class="w-[120px] h-[137px] my-4 mx-auto" src="../../assets/img/searched-thing-not-found.jpg" alt="" />
        <h3 class="text-center text-[18px] leading-[23.4px] font-[600]">
            {{ $t(`nothing-found`) }}
        </h3>
        <p class="text-center max-w-[326px] text-grey-1 text-[13px] mx-auto font-[500 ] my-2">
            {{ $t(`not-found-txt`) }}
        </p>
    </div>
</template>
