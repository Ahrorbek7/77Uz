<template>
  <div class="create-contact-info w-full bg-white rounded-[12px] p-4">
    <h3 class="text-[20px] text-special-black font-bold">
      {{ $t(`contact-information`) }}
    </h3>
    <p class="text-[14px] text-grey-0 font-[500] my-3">{{ $t(`fullname`) }}</p>
    <input
      class="bordered w-[98%] rounded-[8px] h-[44px] outline-none p-2 focus:border bg-slate-bg text-[14px]"
      type="text"
      :placeholder="$t('username')"
    />
    <div class="create-plus-id flex justify-between w-[742px] mt-3">
      <div>
        <p class="text-[14px] text-grey-0 my-2">{{ $t(`phone-number`) }}</p>
        <input
          class="w-[361px] rounded-[8px] h-[44px] outline-none p-2 focus:border bg-slate-bg text-[14px]"
          type="text"
          placeholder="+998 99 400 00 00"
        />
      </div>
      <div>
        <p class="text-[14px] text-grey-0 my-2">{{ $t(`adres`) }}</p>
        <input
          class="w-[361px] rounded-[8px] h-[44px] outline-none p-2 focus:border bg-slate-bg text-[14px]"
          type="text"
          placeholder="8897+PMP, Almachi Street, Тоshkent, Узбекистан"
        />
      </div>
    </div>
  </div>
</template>
