<template>
  <div class="h-full w-full shadow-lg p-[1px] relative">

    <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 flex justify-center">
      <input
          v-model="city"
          type="text"
          placeholder="Enter city name"
          class="border rounded p-2"
          @keydown.enter="searchCity"
      />
      <button
          @click="searchCity"
          @touchstart="searchCity"
          class="bg-[#79A3FF] text-white p-2 rounded ml-2"
      >
        Search
      </button>
    </div>
    <l-map ref="map" v-model:zoom="zoom" :center="center" :useGlobalLeaflet="false" class="h-full w-full z-10">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

import axios from 'axios'

import store from '../store/store.js';

export default {
  components: {
    LMap,
    LTileLayer,

  },
  data() {
    return {
      zoom: 12,
      // center: [33.6995, 73.0363],
      center: [this.$store.state.lat, this.$store.state.long],
      city: '',
    };
  },
  methods: {
    async searchCity() {
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${apiKey}`);
      const data = response.data
      if (data.length > 0) {
        store.commit('increment', {t: data[0].lat, n: data[0].lon})
        this.center = [data[0].lat, data[0].lon];
        console.log("long lat sended to sotre")
        store.commit('cityChanger', this.city)
      } else {
        alert('City not found');
      }

    },

  },
  props: {
    getdata: Function,
  }
};
</script>

<style></style>
