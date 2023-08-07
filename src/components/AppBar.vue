<template>
  <v-app-bar :elevation="6" color="#F96CCF">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <img
            class="logo-playmania-header"
            src="https://hsiteplaymania.azurewebsites.net/assets/img/logo.png"
            alt="Logotipo Playmania"
            width="210"
            height="50"
          />
          <nav>
            <a href="" class="mr-7 decoration">OFERTAS</a>
            <a href="" class="mr-7 decoration">FAÇA SUA FESTA AQUI</a>
            <a href="" class="decoration">MINHA ÁREA</a>
          </nav>

          <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn
                color="#fff"
                variant="tonal"
                class="menu-login decoration"
                v-bind="props"
              >
                Entre/Cadastre-se
              </v-btn>
            </template>

            <v-card min-width="390" color="#F96CCF">
              <v-list bg-color="#F96CCF">
                <v-list-item>
                  <v-text-field variant="solo" density="compact" label="CPF"></v-text-field>
                  <v-text-field
                    class="mb-n3"
                    variant="solo"
                    label="SENHA"
                    density="compact"
                  ></v-text-field>
                  <a class="decoration" href="#">Esqueci minha senha</a>
                  <v-btn
                    class="float-right"
                    color="#fff"
                    variant="tonal"
                    @click="menu = false"
                  >
                    ENTRAR
                  </v-btn>
                </v-list-item>
              </v-list>

              <v-divider color="#fff"></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="#fff"
                  width="390"
                  variant="tonal"
                  @click="menu = false"
                >
                  Entrar pelo Facebook
                </v-btn>
              </v-card-actions>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="#fff"
                  width="390"
                  variant="tonal"
                  @click="menu = false"
                >
                  Cadastre-se agora
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    menu: false,
  }),
};
</script>

<style lang="scss" scoped>
.decoration {
  text-decoration: none;
  color: #fff;
  font-family: "Public Sans", sans-serif;
  font-size: 13px;
  font-weight: 600;
}

.logo-playmania-header {
  margin-right: 100px;
}

.menu-login {
  margin-left: 100px;
}
</style>
