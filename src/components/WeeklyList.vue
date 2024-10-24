<template>
  <div class="max-w-[100%]  p-4 flex justify-center my-8">
    <div class="border  rounded-lg shadow-lg w-[85%] p-8">

      <div class="w-[100%]">
        <div class=" flex justify-center text-3xl font-bold">
          <div>
          <p class="hidden md:block">Weekly Updates of</p>
          <!--          {{ this.city.length === 0 ? "Islamabad" : this.city }}-->
          {{ this.city.length === 0 ? "Islamabad" : this.$store.state.city }}
          </div>
        </div>
        <div class="py-4"><p class="text-2xl flex justify-center hidden md:block ">Stay One Step Ahead with Our Comprehensive Weather
          Forecasts – Know What's Coming Your Way</p></div>
      </div>
      <ul>
        <li v-for="(item, index) in apidata" :key="item.dt" class="my-4 ">
          <div class="border-4 border-[#ACD4F7] rounded-lg shadow-lg py-5 px-4 ">
            <div class="w-[100%] flex justify-center"><p class="font-bold text-2xl ">{{ dayGetter(index) }}</p></div>
            <div class="flex w-[100%]">
              <div class="w-[90%] pt-4">
                <p class="font-[400] text-xl font-bold">Daily Report : </p>
                <div class="flex justify-around py-4">
                  <div>
                    <p class="font-[400] text-xl">Weather: {{ item.weather[0].main }}</p>
                    <p class="font-[400] pt-1 text-xl">Description: {{ item.weather[0].description }}</p>
                  </div>
                  <div class="">
                    <p class="font-[400] text-xl">Humidity: {{ item.main.humidity }}</p>
                    <p class="font-[400] pt-1 text-xl">Temp: {{ item.main.temp }} C</p>
                  </div>
                </div>


              </div>
              <div class="w-[10%]">
                <img width="100%" height="100%" :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
                     alt="Weather Icon">
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default
{
  name:'WeeklyList',
  data() {
    return {
      apidata: [],
      lon: 0,
      lat: 0,
      city: [],
      latChanger: 0,
      longChanger: 0,
      Day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      testAry: []
    }
  },

  methods: {
    dayGetter(ind) {
      const date = new Date();
      const day = date.getDay();
      let i = day + ind;

      if (i > 6) {
        i -= 7;
        return this.Day[i];
      } else {
        return this.Day[i];
      }
    },

    async getData() {
      try {
        const lond = this.$store.state.long
        const latd = this.$store.state.lat
        const apikey = import.meta.env.VITE_WEATHER_KEY
        console.log(latd, lond)
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?appid=${apikey}&lat=${latd}&lon=${lond}&cnt=7&units=metric&lang=en`)
        // .catch(err => {
        //   console.log(err.status === '1002')
        // });
        if (res) {
          this.apidata = res.data.list;
          this.apidata = res.data.list;
          this.city = res.data.city.name
        }

      } catch (e) {
        console.log(e.message);
      }
    },

  },
  computed: {
    laTo() {
      return (this.latChanger = this.$store.state.lat)
    }
  },
  watch: {
    laTo() {
      this.getData();
    }
  },
  created() {
    this.getData();
  },


}
</script>