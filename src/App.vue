<script setup>
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <header>

    <div>


      <nav>
        <div class="border py-3 flex justify-around items-center shadow">

          <RouterLink to="/">
            <svg width="60" height="60" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">

              <rect width="100%" height="100%" fill="transparent"/>
              <text x="50%" y="50%" fill="#ACD4F7" filter="url(#glow)" stroke="#ACD4F7" stroke-width="2" font-size="72"
                    font-family="Arial" font-weight="bold" text-anchor="middle" dominant-baseline="middle"
                    transform="translate(-20, 0)">
                W
              </text>
              <text x="50%" y="50%" fill="transparent" stroke="#ACD4F7" stroke-width="2" filter="url(#glow)"
                    font-size="72" font-family="Arial" font-weight="bold" text-anchor="middle"
                    dominant-baseline="middle"
                    transform="translate(20, 0)">
                W
              </text>
            </svg>
          </RouterLink>
          <RouterLink to="/" class="font-bold text-xl">Home</RouterLink>
          <RouterLink to="/AboutUs" class="font-bold text-xl">About</RouterLink>
          <RouterLink to="/ContactUs" class="font-bold text-xl">Contact Us</RouterLink>
        </div>
      </nav>

    </div>
  </header>
  <RouterView/>

</template>

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--  max-height: 100vh;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
<!--}-->

<!--nav {-->
<!--  width: 100%;-->
<!--  font-size: 12px;-->
<!--  text-align: center;-->
<!--  margin-top: 2rem;-->
<!--}-->

<!--nav a.router-link-exact-active {-->
<!--  color: var(&#45;&#45;color-text);-->
<!--}-->

<!--nav a.router-link-exact-active:hover {-->
<!--  background-color: transparent;-->
<!--}-->

<!--nav a {-->
<!--  display: inline-block;-->
<!--  padding: 0 1rem;-->
<!--  border-left: 1px solid var(&#45;&#45;color-border);-->
<!--}-->

<!--nav a:first-of-type {-->
<!--  border: 0;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  header {-->
<!--    display: flex;-->
<!--    place-items: center;-->
<!--    padding-right: calc(var(&#45;&#45;section-gap) / 2);-->
<!--  }-->

<!--  .logo {-->
<!--    margin: 0 2rem 0 0;-->
<!--  }-->

<!--  header .wrapper {-->
<!--    display: flex;-->
<!--    place-items: flex-start;-->
<!--    flex-wrap: wrap;-->
<!--  }-->

<!--  nav {-->
<!--    text-align: left;-->
<!--    margin-left: -1rem;-->
<!--    font-size: 1rem;-->

<!--    padding: 1rem 0;-->
<!--    margin-top: 1rem;-->
<!--  }-->
<!--}-->
<!--</style>-->
