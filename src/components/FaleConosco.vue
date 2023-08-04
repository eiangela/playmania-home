<template>
  <div>
    <img
      class="faleconosco-clube"
      src="https://hsiteplaymania.azurewebsites.net/assets/img/ico-faleconosco.png"
      @click="showForm = true"
    />

    <img
      class="voltartopo-clube"
      src="https://hsiteplaymania.azurewebsites.net/assets/img/go-top.png"
      :class="{ show: showVoltarTopo }"
      @click="scrollToTop"
    />

    <form
      v-if="showForm"
      @submit.prevent="submitForm"
      class="form-container rounded-lg"
    >
      <v-text-field
        v-model="name.value"
        label="Nome"
        variant="solo"
        required
      ></v-text-field>

      <v-text-field
        v-model="phone.value"
        label="Telefone"
        variant="solo"
        required
      ></v-text-field>

      <v-text-field
        v-model="email.value"
        label="E-mail"
        variant="solo"
        required
      ></v-text-field>

      <v-select
        v-model="select.value"
        :items="items"
        label="Selecione uma opção"
        variant="solo"
        required
      ></v-select>

      <v-textarea
        v-model="message.value"
        label="Mensagem"
        variant="solo"
        required
      >
      </v-textarea>

      <v-btn
        class="float-right"
        color="#fff"
        variant="tonal"
        type="submit"
        @click="submitForm"
      >
        Enviar

        <v-dialog
          v-model="dialog"
          activator="parent"
          width="500"
          class="text-center"
        >
          <v-card>
            <v-card-text> Contato enviado com sucesso. </v-card-text>
            <v-card-actions>
              <v-btn
                class="teste-btn"
                color="#EC407A"
                variant="tonal"
                block
                @click="dialog = false"
                >Fechar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      showVoltarTopo: false,
      showForm: false,
      showSuccessDialog: false,
      name: { value: "" },
      phone: { value: "" },
      email: { value: "" },
      select: { value: "" },
      message: { value: "" },
      items: [
        "Sobre o clube",
        "Sobre Vouchers",
        "Meus cartões",
        "Playtime",
        "Pagamentos",
        "Parcerias",
        "Outros",
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.showVoltarTopo = true;
      } else {
        this.showVoltarTopo = false;
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

canSubmit() {
  if (
    this.name.value.trim() !== "" &&
    this.phone.value.trim() !== "" &&
    this.email.value.trim() !== "" &&
    this.select.value.trim() !== "" &&
    this.message.value.trim() !== ""
  ) {
    // Todos os campos estão preenchidos, podemos exibir o diálogo de sucesso
    return true;
  } else {
    // Algum campo não foi preenchido, não exibimos o diálogo
    return false;
  }
},

submitForm() {
  if (this.canSubmit()) {
    // Se todos os campos obrigatórios estão preenchidos, então exibe o diálogo
    console.log("Form submitted:");
    console.log("Name:", this.name.value);
    console.log("Phone:", this.phone.value);
    console.log("Email:", this.email.value);

    // Reset dos campos após o envio
    this.handleReset();

    // Fechando o formulário após o envio (opcional)
    this.showForm = false;

    // Exibindo o diálogo de sucesso
    this.dialog = true;
  } else {
    // Se algum campo obrigatório não foi preenchido, não exibe o diálogo
    alert('Preencha todos os campos obrigatórios.');
  }
},
    handleReset() {
      // Limpar os campos
      this.name.value = "";
      this.phone.value = "";
      this.email.value = "";
      this.select.value = "";
      this.message.value = "";


    },
  },
};
</script>

<style lang="scss" scoped>
.faleconosco-clube {
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  left: 50px;
  cursor: pointer;
}

.voltartopo-clube {
  z-index: 99;
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.voltartopo-clube.show {
  opacity: 1;
}

.form-container {
  position: fixed;
  z-index: 1000;
  bottom: 120px;
  left: 100px;
  background-color: #ec407a;
  padding: 20px;
  border: 1px solid #ccc;
  font-family: "Public Sans", sans-serif;
}

</style>
