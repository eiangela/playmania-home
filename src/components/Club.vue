<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="3"
        class="coluns"
        v-for="club in clubs"
        :key="club.titleClub"
      >
        <v-card
          class="item-play-top rounded-lg text-center mt-5"
          width="300"
          height="300"
          color="#7367F0"
        >
          <img :src="club.imageClub" alt="Imagem do Clube" />
          <v-card-title class="title-top-card">{{
            club.titleClub
          }}</v-card-title>
          <v-card-text class="sub-tittle-card">{{
            club.descriptionClub
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        cols="3"
        class="coluns"
        v-for="clubInfo in clubsBottom"
        :key="clubInfo.titleClubBottom"
      >
        <v-card
          color="#fff"
          class="item-play-bottom rounded-lg text-center"
          width="300"
          height="300"
        >
          <img :src="clubInfo.imageClubBottom" alt="Imagem do Clube" />
          <v-card-title class="title-bottom-card">{{
            clubInfo.titleClubBottom
          }}</v-card-title>
          <v-card-text class="sub-tittle-card">{{
            clubInfo.descriptionClubBottom
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          class="btn-purple rounded-lg text-none"
          width="400"
          height="50"
          color="#7367F0"
          >Acesse ou cadastre-se</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clubs: [
        {
          titleClub: "Brinque mais",
          descriptionClub:
            "Faça parte do Clube de vantagens e tenha acesso a ofertas exclusivas que você só encontra em nosso e-commerce.",
          imageClub:
            "https://hsiteplaymania.azurewebsites.net/assets/img/play-img1.png",
        },
        {
          titleClub: "Surpresas incríveis",
          descriptionClub:
            "Fazendo parte do Playmania, você terá acesso a todas as novidades do Playcenter Family e Playland em primeira mão.",
          imageClub:
            "https://hsiteplaymania.azurewebsites.net/assets/img/play-img2.png",
        },
        {
          titleClub: "Comodidade",
          descriptionClub:
            "Escolha a melhor oferta, carregue seu Playcard online e já chegue no Playcenter Family ou Playland brincando! Sem filas no caixa.",
          imageClub:
            "https://hsiteplaymania.azurewebsites.net/assets/img/play-img3.png",
        },
      ],

      clubsBottom: [
        {
          titleClubBottom: "Conecte",
          descriptionClubBottom:
            "Tenha seu CPF conectado ao Playcard e acompanhe o saldo.",
          imageClubBottom:
            "https://hsiteplaymania.azurewebsites.net/assets/img/home/img1-play.png",
        },
        {
          titleClubBottom: "Confie",
          descriptionClubBottom:
            "Tenha mais segurança. Em caso de perda ou roube bloqueie seu Playcard.",
          imageClubBottom:
            "https://hsiteplaymania.azurewebsites.net/assets/img/home/img2-play.png",
        },
        {
          titleClubBottom: "Transfira",
          descriptionClubBottom:
            "Transfira o saldo de um Playcard para outro (da mesma unidade) e aproveite a diversão até o final.",
          imageClubBottom:
            "https://hsiteplaymania.azurewebsites.net/assets/img/home/img3-play.png",
        },
      ],


    };
  },
};
</script>

<style scoped>
.item-play-top {
  margin-bottom: 2em;
  padding: 20px;
  color: #fff;
  width: 19em;
  min-height: 19em;
}

.title-top-card {
  font-size: 1.5em;
  font-family: "Public Sans", sans-serif;
  font-weight: bold;
}

.title-bottom-card {
  font-size: 1.5em;
  color: #7367f0;
}

.sub-tittle-card {
  font-size: 0.9em;
  font-family: "Public Sans", sans-serif;
}

.coluns {
  max-width: 19%;
}

.btn-purple {
  font-size: 1.5em;
  color: #fff;
  font-family: "Public Sans", sans-serif;
}
</style>
