<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="enterModalActive" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="modal-overlay fixed inset-0"></div>
        <Transition name="modal-inner">
          <div v-if="enterModalActive" class="enter-modal relative z-10 bg-white rounded-[12px] px-6 py-4 w-[378px]">
            <i class="bi bi-x-lg absolute top-[20px] right-[20px] cursor-pointer" @click="$emit('closeEnterModal')"></i>

            <!-- Login part of enter modal  -->
            <EnterModalLogin  v-show="currentModal === 'login'" @show-contact-section="showContactSection" @show-apply-section="showApplySection"/>

            <!-- Apply  -->
            
            <EnterModalApply class="apply-modal" v-show="currentModal === 'apply'" @show-applied-section="showAppliedSection" @show-login-section="showLoginSection"/>

            <!-- Contact  -->
            <EnterModalContact  v-show="currentModal === 'contact'" @show-login-section="showLoginSection"/>

            <!-- Applied successfull  -->
            <EnterModalApplied v-show="currentModal === 'applied'" @show-login-section="showLoginSection"/>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
  
<script setup>
import { ref } from "vue";

const currentModal = ref("login");

// Method to show the login section
const showLoginSection = () => {
  currentModal.value = "login";
};

// Method to show the applying section
const showApplySection = () => {
  currentModal.value = "apply";
};

//Method to show the contact section
const showContactSection = () => {
  currentModal.value = "contact";
};

// Method to show the successfuly applied section
const showAppliedSection = () => {
  currentModal.value = "applied";
};

defineEmits(["closeEnterModal"]);
defineProps({
  enterModalActive: {
    type: Boolean,
    default: false,
  },
});
</script>
  
<style scoped>
@import "../../assets/style/about.css";
</style>