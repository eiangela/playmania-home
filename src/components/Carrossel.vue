<template>
  >
  <v-slide-group show-arrows>
    <v-slide-group-item v-for="(item, index) in items" :key="index">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="6" md="4" lg="4">
            <v-card width="340" height="500" class="border" elevation="3">
              <v-img :src="item.image"></v-img>
              <v-card-title class="pt-3 text-center title-wrap">
                  {{  item.title }}
               </v-card-title>
              <v-card-text class="text-center ">
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
</template>

<script>
export default {
  data() {
    return {
      hideDelimiters: false,
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
          description:
            "*Pague R$40 e tenha R$100 para brincar!",
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
};
</script>

<style lang="scss">
.title-wrap {
  white-space: normal !important;
}

</style>