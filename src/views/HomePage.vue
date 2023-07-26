<template>
  <AppBar />

  <section>
    <v-layout align-center justify-center class="background-image">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
        class="mt-5 "
          fill="#EC407A"
          fill-opacity="1"
          d="M0,224L80,229.3C160,235,320,245,480,261.3C640,277,800,299,960,277.3C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </v-layout>
  </section>

  <section>
    <div class="text-main text-center mt-5">
      <h2>OFERTAS ONLINE IMPERDÍVEIS!! GARANTA A SUA!</h2>
      <p>
        Curtir no Playcenter Family e no Playland ficou simples assim: é só
        escolher as melhores ofertas, carregar o seu Playcard de qualquer lugar
        e dar play na diversão! Aproveite e venha se divertir muito com a
        família e os amigos.
      </p>
    </div>
    <Carrossel />
<Steps />

  </section>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import Carrossel from "../components/Carrossel.vue";
import Steps from "../components/Steps.vue";
</script>

<style>
.background-image {
  background-image: url("https://stgimgs.blob.core.windows.net/banners/oiilVut4mCac1PTcbZUgF0xz3bIg6hUROF1UkveW.png"); /* Substitua "URL_DA_IMAGEM" pelo caminho da sua imagem de fundo */
  background-repeat: no-repeat;
}


</style>
