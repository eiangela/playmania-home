<template>
  <div class="grey-image">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="steps__title">Veja como é fácil garantir a diversão</h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" class="steps">
          <div class="steps__div pa-8">
            <div class="steps__wrapper">
              <div class="steps__card">
                <h3>Escolha</h3>
                <p>
                  Escolha a oferta que mais deseja para brincar no Playcenter
                  Family ou Playland.
                </p>
              </div>
            </div>
            <div class="steps__wrapper">
              <div class="steps__card">
                <h3>Carregue</h3>
                <p>
                  Você pode carregar a oferta diretamente no seu Playcard ou
                  adquirir um voucher.
                </p>
              </div>
            </div>
            <div class="steps__wrapper">
              <div class="steps__card">
                <h3>Divirta-se</h3>
                <p>
                  Após conferir os detalhes, é só finalizar a compra, aguardar a
                  liberação do pedido e curtir de montão!
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.grey-image {
  background-image: url("../assets/images/bg-passo-a-passo.png");
  margin-top: 2%;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 660px;
}

.steps {
  position: relative;
  &__title {
    font-weight: 700;
    font-size: 2.5em;
    text-transform: uppercase;
    color: #f92b7d;
    text-align: center;
  }
  &__div {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  &__wrapper {
    background-image: url("../assets/images/hexagono.png");
    width: 272px;
    height: 306px;
    &:nth-child(odd) {
      margin-top: 150px;
    }
    -webkit-filter: drop-shadow(15px 20px 15px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(15px 20px 15px rgba(0, 0, 0, 0.3));
  }
  &__card {
    > h3 {
      font-family: "Public Sans", sans-serif;
      font-weight: 300;
      width: fit-content;
      display: block;
      margin: 78px auto 10px auto;
      background-color: #f94297;
      padding: 4px 45px;
      text-align: center;
      color: #fff;
      border-radius: 6px;
    }
    p {
      font-family: "Public Sans", sans-serif;
      font-weight: 600;
      color: #525252;
      text-align: center;
      font-size: 15px;
      line-height: 22px;
      text-align: center;
      margin-bottom: 0;
      padding: 20px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 800px;
    height: 400px;
    border-radius: 50%;
    border-top: 8px dashed red;
    top: 170px;
    left: 15%;
  }
}
</style>
