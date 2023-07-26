<template>
  <v-container>
    <section>
      <div class="text-center mt-5">
        <h2>OFERTAS ONLINE IMPERDÍVEIS!! GARANTA A SUA!</h2>
      </div>
      <div class="fluxo-content">
        <div class="fluxo1">
          <div class="contet-fluxo">
            <span class="titulo-box-fluxo">Escolha</span>
            <p class="subtitulo-box-fluxo">
              Escolha a oferta que mais deseja para brincar no Playcenter Family
              ou Playland.
            </p>
          </div>
        </div>
        <div class="fluxo2">
          <div class="contet-fluxo">
            <span class="titulo-box-fluxo">Carregue</span>
            <p class="subtitulo-box-fluxo">
              Você pode carregar a oferta diretamente no seu Playcard ou
              adquirir um voucher.
            </p>
          </div>
        </div>
        <div class="fluxo3">
          <div class="contet-fluxo">
            <span class="titulo-box-fluxo">Divirta-se</span>
            <p class="subtitulo-box-fluxo">
              Após conferir os detalhes, é só finalizar a compra, aguardar a
              liberação do pedido e curtir de montão!
            </p>
          </div>
        </div>
      </div>
    </section>
  </v-container>
</template>

<style>
.fluxo-content {
  background-image: url("../assets/images/itensp.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 940px;
  margin: 0 auto;
  height: 581px;
  display: flex;
}

.fluxo1 {
  width: 113px;
  float: left;
  margin-left: 24.1%;
  margin-top: 14.9%;
  text-align: center;
}

.fluxo2 {
  width: 125px;
  float: left;
  text-align: center;
  margin-left: 12.2%;
  margin-top: 7.4%;
  
}

.fluxo3 {
  width: 216px;
  float: left;
  text-align: center;
  margin-left: 11.7%;
  margin-top: 14.9%;
}

.titulo-box-fluxo {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  background-color: #f94297;
  padding: 3px 19px;
  text-align: center;
  margin-top: 0.6em;
  margin-bottom: 0.6em;
  border-radius: 6px;
}

.subtitulo-box-fluxo {
  padding: 7%;
  color: #525252;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  width: 14em;
  line-height: 20.05px;
  margin: 0 auto !important;
  letter-spacing: -0.36px;
  word-wrap: break-word;
}
</style>
