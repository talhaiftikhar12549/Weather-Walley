<template>

  <div class="h-[100vh]">
    <div class="w-full flex py-8">
      <!--       Form -->
      <ContactUsForm/>
      <!--        form end-->
      <!--      image-->
      <div class="w-1/2 h-[70vh] md:flex md:flex-row justify-center relative hidden">
        <img src="../assets/13429921_5255892.svg"
             alt="Vue logo"
             class="h-full w-full absolute">
      </div>
      <!--      image ends-->
    </div>
  </div>

</template>

<script>
import ContactUsForm from "./ContactUsForm.vue";

export default {
  name: 'ContactUs',
  components: {
    ContactUsForm,
  },

};
</script>

