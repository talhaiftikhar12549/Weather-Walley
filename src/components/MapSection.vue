<template>

    <div class="flex flex-col md:flex-row  w-[100%]" >
      <div class="md:w-[50%] w-[100%]]  h-[70vh] relative">

        <MapShow/>


      </div>


      <div class="w-[50%] hidden md:flex md:flex-row border h-[70vh] flex justify-center relative ">
        <p class="text-3xl bold pt-2">
          Weekly Updates
        </p>
        <img src="../assets/6982819_3353164.svg"
             alt="Vue logo"
             class="h-[100%] w-[100%] absolute">

      </div>

    </div>

</template>

<script>
import MapShow from "./MapItem.vue"
export default {
  name: 'MapSection',
  components:{
    MapShow
  },


}
</script>