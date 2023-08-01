<template>
  <AppBar />

  <v-main>
    <section id="banner">
      <v-layout align-center justify-center class="background-image-banner">
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
        <p class="sub-title-section mb-6">
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

    <section id="call-all">
      <v-container>
        <v-row>
          <!-- v-col para o texto -->
          <v-col cols="12" md="7">
            <div class="box-offers-fixed-top text-center">
              <h2 class="title-offers-fixed">Tickets de montão</h2>
              <p class="text-offers">
                Carregue R$ 110 e tenha *R$ 220 para brincar muito e mais 110
                tickets para trocar por prêmios!
                <br />
                R$ 110 em créditos + R$ 110 em bônus
              </p>
              <div class="box-offers-fixed-middle d-flex justify-center mb-5">
                <div class="money">R$</div>
                <div class="money1">110</div>
                <div class="money2">,00</div>
              </div>
              <div class="box-offers-fixed-bottom">
                <v-btn color="#ffd100" class="btn-buy">Comprar</v-btn>
              </div>
            </div>
          </v-col>

          <!-- v-col para a imagem -->
          <v-col cols="12" md="5">
            <div class="menina">
              <img
                src="../assets/images/botao-oferta-ticko-agosto.png"
                alt=""
                height="500"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>

  <v-footer></v-footer>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import Carrossel from "../components/Carrossel.vue";
import Steps from "../components/Steps.vue";
</script>

<style lang="scss" scoped>
.background-image-banner {
  background-image: url("https://stgimgs.blob.core.windows.net/banners/oiilVut4mCac1PTcbZUgF0xz3bIg6hUROF1UkveW.png");
  background-repeat: no-repeat;
}

svg {
  margin-top: 150px;
  -webkit-filter: drop-shadow(5px 5px 0 black) drop-shadow(-5px -5px 0 black);
  filter: drop-shadow(0px -7px 0 #7367f0) drop-shadow(-7px 5px 0 #7367f0);
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

.title-offers-fixed {
  font-family: "Public Sans", sans-serif;
  font-weight: 600;
  font-size: 3.5em;
  color: #fed200;
  margin-top: 40px;
  text-transform: uppercase;
}

.text-offers {
  font-family: "Public Sans", sans-serif;
  color: #000;
  font-size: 1.1em;
  line-height: 1.7em;
}

.money {
  font-family: "Public Sans", sans-serif;
  font-size: 4em;
  color: #ffd100;
  font-weight: 900;
  margin-top: 6%;
  text-align: center;
}

.money1 {
  font-family: "Public Sans", sans-serif;
  font-weight: 900;
  color: #ffd100;
  font-size: 12em;
}

.money2 {
  font-size: 4em;
  font-weight: 900;
  color: #ffd100;
  display: block;
  margin-top: 6%;
}

.btn-buy {
  font-family: "Public Sans", sans-serif;
  color: #ff287b;
  font-size: 1.1em;
  font-weight: bold;
  padding-left: 1.4em;
  padding-right: 1.4em;
  padding-top: 0.4em;
  padding-bottom: 0.3em;
  border-radius: 6px;
  margin-bottom: 50px;
}
</style>
