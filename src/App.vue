<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div>


      <nav>
        <div class="border py-3 flex justify-around items-center shadow">

          <RouterLink to="/">
            <svg width="60" height="60" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">

              <rect width="100%" height="100%" fill="transparent" />
              <text x="50%" y="50%" fill="#ACD4F7" filter="url(#glow)" stroke="#ACD4F7" stroke-width="2" font-size="72"
                font-family="Arial" font-weight="bold" text-anchor="middle" dominant-baseline="middle"
                transform="translate(-20, 0)">
                W
              </text>
              <text x="50%" y="50%" fill="transparent" stroke="#ACD4F7" stroke-width="2" filter="url(#glow)"
                font-size="72" font-family="Arial" font-weight="bold" text-anchor="middle" dominant-baseline="middle"
                transform="translate(20, 0)">
                W
              </text>
            </svg>
          </RouterLink>

          <RouterLink to="/" class="font-bold text-lg lg:text-xl relative group">
            Home
            <span
              class="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#acd4f7] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </RouterLink>

          <RouterLink to="/AboutUs" class="font-bold text-lg lg:text-xl relative group">
            About
            <span
              class="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#acd4f7] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </RouterLink>

          <RouterLink to="/ContactUs" class="font-bold text-lg lg:text-xl relative group">
            Contact Us
            <span
              class="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#acd4f7] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </RouterLink>

        </div>
      </nav>

    </div>
  </header>
  <RouterView />

</template>
