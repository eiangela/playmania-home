<template>
  <v-app-bar :elevation="6" color="#EC407A">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <img
            class="logo-playmania-header"
            src="https://hsiteplaymania.azurewebsites.net/assets/img/logo.png"
            alt="Logotipo Playmania"
            width="238"
            height="57"
          />
          <nav>
            <a href="" class="mr-7 decoration">OFERTAS</a>
            <a href="" class="mr-7 decoration">FAÇA SUA FESTA AQUI</a>
            <a href="" class="decoration">MINHA ÁREA</a>
          </nav>

          <v-btn append-icon="mdi-account" class="button-login" color="#fff" variant="tonal">
            Entre/Cadastre-se
          </v-btn>

        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style>
.decoration {
  text-decoration: none;
  color: #fff;
  font-family: "Public Sans", sans-serif;
  font-size: 13px;
}

.logo-playmania-header {
  margin-right: 100px;
}

.button-login {
  margin-left: 100px;
}
</style>
