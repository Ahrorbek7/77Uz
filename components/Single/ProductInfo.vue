<template>
     <div class="mx-6">
            <span class="single-product-address flex items-center my-4">
                <p class="text-[14px] leading-7 text-grey-1 capitalize">{{ $t(`electronics`) }} </p>
                <i class="bi bi-chevron-right text-[7px] text-gey-1 mx-2"></i>
                <p class="text-[14px] leading-7 text-grey-1">{{ $t(`cars`) }} </p>
            </span>
            <h3 class="single-product-title font-bold text-[20px] leading-8 text-special-black">
                {{ $t(`single-product-local-name`) }} 
            </h3>
            <div class="flex my-4">
                <div
                    class="w-auto max-w-[105px] flex-nowrap text-center h-[26px] px-2 py-1 bg-grey-4 text-[14px] text-grey-0 rounded-md">
                    {{ $t(`postedDate.1.time`) }} , 19:20
                </div>
                <div
                    class="w-auto max-w-[150px] flex-nowrap text-center mx-4 h-[26px] px-2 py-1 bg-grey-4 text-[14px] text-grey-0 rounded-md">
                    {{ $t(`regions.1.location`) }} 
                </div>
            </div>
            <div class="numbercha w-full flex pr-2 justify-between items-center my-6">
                <div class="flex items-center">
                    <h1 class="font-bold text-[24px] leading-10 text-special-black mx-3 my-2">
                        376 520 000
                    </h1>
                    <p class="text-[16px] font-[500] leading-6 text-special-blue">
                        UZS
                    </p>
                </div>
                <button class="w-[250px] h-[40px] bg-special-blue text-white rounded-[8px]">
                    <i class="bi bi-telephone"></i>
                    <a href="tel:+998900090080">+998 71 200 70 07</a>
                </button>
            </div>
        </div>
</template>
