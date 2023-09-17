<template>
    <div class="profile-tab w-[278px] max-h-[324px] bg-white rounded-[12px] ml-[128px] mt-6">
        <div class="profile--username w-[246px] h-[86px] rounded-[8px] border mx-auto my-4 flex items-center">
            <img class="w-[54px] h-[54px] rounded-[50%] border mx-2" src="../../assets/img/user.jpg" alt="" />
            <h3 class="font-bold text-[16px] max-w-[100px] mx-4">
                {{ $t(`username`) }}
            </h3>
        </div>
        <button :style="[
            currentTab === 'ads'
                ? {
                    color: '#388FF3',
                    boxShadow: '0px 0px 21px -11px  #388FF3',
                    background: 'white',
                }
                : {},
        ]" @click="$emit('show-ads-section')"
            class="w-[246px] h-[44px] flex items-center my-2 rounded-[8px] border mx-auto cursor-pointer bg-grey-4">
            <i class="bi bi-grid mx-4 text-xl"></i>
            <h3 class="text-[14px] font-[600] mx-2">{{ $t(`my-ads`) }}</h3>
        </button>
        <button :style="[
            currentTab === 'personalData'
                ? {
                    color: '#388FF3',
                    boxShadow: '0px 0px 21px -11px  #388FF3',
                    background: 'white',
                }
                : {},
        ]" @click="$emit('show-personal-data')"
            class="w-[246px] h-[44px] flex items-center my-2 rounded-[8px] border mx-auto cursor-pointer bg-grey-4">
            <i class="bi bi-person-circle mx-4 text-xl"></i>
            <h3 class="text-[14px] font-[600] mx-2">{{ $t(`personal-data`) }}</h3>
        </button>
        <button
            class="logout-profile-btn w-[246px] h-[40px] rounded-[8px] font-[600] mx-3 mt-6 bg-grey-4 flex items-center justify-center">
            <i class="bi bi-box-arrow-left text-xl mx-2"></i> {{ $t(`exit`) }}
        </button>
    </div>
</template>

<script setup>
defineEmits(['show-ads-section', 'show-personal-data'])
defineProps({
    currentTab:{
        type:String,
        required:true
    }
})
</script>
