<script>
import MapSection from "./MapSection.vue"
// import axios from 'axios'
import HomeFirstSection from "./HomeFirstSection.vue"
import WeeklyList from "./WeeklyList.vue";

export default {
  name: 'HomeComponent',
  components: {
    WeeklyList,
    HomeFirstSection,
    MapSection
  },


};
</script>

<template>

  <div>
    <!--    first page section start-->
    <HomeFirstSection/>
    <!--    first page section end-->
    <div class="p-[3px] bg-[#ACD4F7]">

    </div>

    <!--    map section start-->
    <div ref="menuSectionRef" id="mapSection">
      <MapSection/>
    </div>
    <!--    map section end-->
    <div class="p-[3px] bg-[#ACD4F7]">

    </div>
  </div>

  <!--  Weather List Render start-->
  <WeeklyList/>
  <!--  Weather List Render end-->
</template>
