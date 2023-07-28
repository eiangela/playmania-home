<template>
  <AppBar />

  <v-main>
    <section id="banner">
      <v-layout align-center justify-center class="background-image">
        <svg
          class="svg-img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            class="svg-img"
            fill="#fff"
            fill-opacity="1"
            d="M0,224L80,229.3C160,235,320,245,480,261.3C640,277,800,299,960,277.3C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </v-layout>
    </section>

    <section id="promotions">
      <div class="text-main text-center mt-5">
        <h2 class="title-section">
          OFERTAS ONLINE IMPERDÍVEIS!! GARANTA A SUA!
        </h2>
        <p class="sub-title-section">
          Curtir no Playcenter Family e no Playland ficou simples assim: é só
          escolher as melhores ofertas, carregar o seu Playcard de qualquer
          lugar e dar play na diversão! Aproveite e venha se divertir muito com
          a família e os amigos.
        </p>
      </div>
      <Carrossel />
    </section>

    <section id="steps">
      <Steps />
    </section>
  </v-main>

  <v-footer></v-footer>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import Carrossel from "../components/Carrossel.vue";
import Steps from "../components/Steps.vue";
</script>

<style lang="scss">
.background-image {
  background-image: url("https://stgimgs.blob.core.windows.net/banners/oiilVut4mCac1PTcbZUgF0xz3bIg6hUROF1UkveW.png");
  background-repeat: no-repeat;
}

svg {
  margin-top: 150px;
  -webkit-filter: drop-shadow(5px 5px 0 black) drop-shadow(-5px -5px 0 black);
  filter: drop-shadow(0px -7px 0 #7367F0) drop-shadow(-7px 5px 0 #7367F0)
}

.title-section {
  font-weight: 700;
  font-size: 2.5em;
  text-transform: uppercase;
  color: #f92b7d;
  text-align: center;
  margin-bottom: 10px;
}

.sub-title-section {
  font-family: "Public Sans", sans-serif;
  color: #525252;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.4px;
  font-weight: 500;
  margin: 0 auto;
  padding: 0 28em;
  font-weight: 600;
}
</style>
