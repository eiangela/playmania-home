<template>
  <div class="topo-footer-int"></div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="footer-con">
          <div class="footer-top1 mt-7">
            <img
              src="https://hsiteplaymania.azurewebsites.net/assets/img/logo-playcenterfamily.png"
              alt=""
            />
            <p class="mt-1">
              <a href="#">
                <img
                  src="https://hsiteplaymania.azurewebsites.net/assets/img/iconface.png"
                  alt=""
                  target="_blank"
                  class="mr-2"
                />
              </a>
              <a href="#">
                <img
                  src="https://hsiteplaymania.azurewebsites.net/assets/img/iconinst.png"
                  alt=""
                  target="_blank"
                />
              </a>
            </p>
          </div>

          <div class="footer-top2 mt-7">
            <img
              src="https://hsiteplaymania.azurewebsites.net/assets/img/logo-playland.png"
              alt=""
            />
            <p class="mt-1">
              <a href="#">
                <img
                  src="https://hsiteplaymania.azurewebsites.net/assets/img/iconface.png"
                  alt=""
                  target="_blank"
                  class="mr-2"
                />
              </a>
              <a href="#">
                <img
                  src="https://hsiteplaymania.azurewebsites.net/assets/img/iconinst.png"
                  alt=""
                  target="_blank"
                  class="mr-2"
                />
              </a>
              <a href="#">
                <img
                  src="https://hsiteplaymania.azurewebsites.net/assets/img/iconyout.png"
                  alt=""
                  target="_blank"
                />
              </a>
            </p>
          </div>

          <div class="footer-top3 pa-0">
            <ul>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos e condições</a>
              </li>
              <li>
                <a href="#">Dúvidas frequentes</a>
              </li>
            </ul>
          </div>
        </div>
      </v-col>

      <v-col cols="12" class="d-flex justify-center">
        <div class="footer-bottom">
          <p class="line-formact">
            Play One Empreendimentos Ltda • CNPJ: 004.933.060/0001-18 • Rua
            Professor Clemente Pastore, 52, Lapa • 05038-120 - São Paulo - SP
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.topo-footer-int {
  position: relative;
  display: block;
  background-image: url("../assets/images/top-footer.png");
  background-repeat: no-repeat;
  height: 141px;
  z-index: 10;
  margin-top: -4%;
}

.footer-top1 {
  width: 45%;
  float: left;
  text-align: center;
}

.footer-top2 {
  float: left;
  margin-left: -16%;
  text-align: center;
}

.footer-top3 {
  float: left;
  margin-left: 1%;
  text-transform: uppercase;
  font-family: "Public Sans", sans-serif;
  margin-top: 28px;
}

.footer-top3 li {
  list-style: none;
  margin-bottom: 4%;
}

.footer-top3 li a {
  color: #f95fc0;
  font-size: 0.9em;
  font-weight: 700;
  text-decoration: none;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  font-size: 0.8em;
  border-top: 0.05em solid #f95fc0;
  color: #525252;
  font-weight: 500;
}

.line-formact {
  padding-left: 170px;
  padding-right: 170px;
  font-weight: 600;
}
</style>
