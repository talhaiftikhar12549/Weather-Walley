<template>
  <div class=" w-[100%] h-[95vh] ">


    <div class="w-[100%]  md:h-[70vh] h-[50vh]  p-2 flex justify-center relative "><img src="../assets/WeatherForcast.svg"
                                                                          alt="Vue logo"
                                                                          class="h-[100%] w-[100%]  absolute">


    </div>


    <div class="flex w-full flex-col justify-center items-center text-center">
      <h1 class="font-bold text-3xl pb-3 ">Welcome to Weather Walley</h1>

      <button class="bg-[#79A3FF] py-2 px-8 rounded-lg shadow-lg font-bold " @click="handleViewMoreClick">Get Weekly
        Updates
      </button>
    </div>


  </div>
</template>
<script>
export default {
  name: 'HomeFirstSection',
  methods:
      {
        handleViewMoreClick() {
          console.log("button pressed")

          const scrollId = document.getElementById('mapSection')
          if (scrollId) {
            scrollId.scrollIntoView(
                {
                  behavior: 'smooth'
                }
            )
          }


        },
      }
}
</script>