<template>
  <v-sheet class="mx-auto" width="1100" height="550" density="compact">
    <v-slide-group show-arrows v-model="activeSlide" >
      <v-slide-group-item v-for="(item, index) in items" :key="index">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="4">
              <v-card width="300" height="500" class="border" elevation="3">
                <v-img :src="item.image"></v-img>
                <v-card-title class="pt-3 text-center title-wrap">
                  {{ item.title }}
                </v-card-title>
                <v-card-text class="text-center info-credits">
                  <p>{{ item.description }}</p>
                </v-card-text>
                <v-card-actions class="d-flex justify-center">
                  <v-btn
                    append-icon="mdi-cart"
                    variant="tonal"
                    :color="item.color"
                    >Comprar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 0,
      items: [
        {
          title: "Carregue R$110 e tenha R$220",
          description:
            "*R$110 em crédito e ganhe mais R$110 em bônus e mais 1000 TICKETS",
          image:
            "https://stgimgs.blob.core.windows.net/promotion/c3fEpYNSh6ydCL1bBar6XZMDQobjX6QIREQhG917.jpeg",
          color: "#7367F0",
        },
        {
          title: "Carregue R$110 e tenha R$220",
          description:
            "*R$110 em crédito e ganhe mais R$110 em bônus e mais 1000 TICKETS",
          image:
            "https://stgimgs.blob.core.windows.net/promotion/Wi1YXx6AY6FfY5PAedeW8hPx6p4miS0Pgf5tiZsB.jpeg",
          color: "#FFC107",
        },
        {
          title: "Carregue R$110 e tenha R$220",
          description:
            "*R$110 em crédito e ganhe mais R$110 em bônus e mais 1000 TICKETS",
          image:
            "https://stgimgs.blob.core.windows.net/promotion/OtNj5ZbDqC4MPcbwq2AClecdFogznhmQTVmbc3IP.jpeg",
          color: "#66BB6A",
        },
        {
          title: "Oferta especial para empresas parceiras",
          description: "*Pague R$40 e tenha R$100 para brincar!",
          image:
            "https://stgimgs.blob.core.windows.net/promotion/7ZFQeDIsfFyxl78tgmuTy8LWQLyX8W5ZwNypBHrz.jpeg",
          color: "#42A5F5",
        },
        {
          title: "Carregue R$110 e tenha R$220",
          description:
            "*R$110 em crédito e ganhe mais R$110 em bônus e mais 1000 TICKETS",
          image:
            "https://stgimgs.blob.core.windows.net/promotion/OwI2jPJuzIrw8tAkHBxo2S7xbMwg7jyldoEBAyGO.jpeg",
          color: "#66BB6A",
        },
        {
          title: "Carregue R$110 e tenha R$220",
          description:
            "*R$110 em crédito e ganhe mais R$110 em bônus e mais 1000 TICKETS",
          image:
            "https://stgimgs.blob.core.windows.net/promotion/OtNj5ZbDqC4MPcbwq2AClecdFogznhmQTVmbc3IP.jpeg",
          color: "#66BB6A",
        },
      ],
    };
  },
  mounted() {
    // Inicia o carrossel com avanço automático
    this.startCarouselAutoAdvance();
  },
  methods: {
    startCarouselAutoAdvance() {
      // Define um intervalo para avançar o slide a cada 5 segundos
      this.carouselInterval = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.items.length;
      }, 1000); // 5000 ms (5 segundos)
    },
    stopCarouselAutoAdvance() {
      // Limpa o intervalo quando o componente é destruído para evitar vazamentos de memória
      clearInterval(this.carouselInterval);
    },
  },
  beforeDestroy() {
    // Garante que o intervalo é limpo quando o componente é destruído
    this.stopCarouselAutoAdvance();
  },
};
</script>

<style lang="scss" scoped>
.title-wrap {
  white-space: normal !important;
  font-weight: 500;
  font-size: 1.1em;
  text-transform: uppercase;
  color: #f92b7d;
  text-align: center;
  margin-bottom: 1px;
}

.info-credits {
  font-family: "Public Sans", sans-serif;
  color: #525252;
  font-size: 15px;
  letter-spacing: -0.4px;
  font-weight: 500;
  margin: 0 auto;
  font-weight: 600;
}
</style>
