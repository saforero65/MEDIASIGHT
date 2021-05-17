<template>
  <div>
    <header class="position-absolute">
      <router-link to="/">
        <img
          class="logo_main"
          src="@/assets/img/logo_main.png"
          alt="logo_principal"
        />
        <img
          class="logo_main"
          src="@/assets/img/logo_20_años.png"
          alt="mouse"
        />
      </router-link>
    </header>
    <footer class="position-absolute">
      <ul>
        <li>
          <img
            @mouseover="informacion = true"
            @mouseleave="informacion = false"
            class="info_controls"
            src="@/assets/img/icons/informacion.svg"
            alt="mouse"
          />
        </li>
        <li>
          <img
            @mouseover="mouse = true"
            @mouseleave="mouse = false"
            v-b-modal.modal-lg
            class="info_controls"
            src="@/assets/img/icons/mouse.svg"
            alt="mouse"
          />
          <!-- <b-button v-b-modal.modal-lg variant="primary">lg modal</b-button> -->
          <b-modal
            v-model="show"
            title="Instrucciones de Navegacion 3D"
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            id="modal-lg"
            size="lg"
            >Hello Large Modal!
            <div class="icon-scroll"></div>
          </b-modal>
        </li>
      </ul>
      <div>
        <p v-if="informacion" class="Info_Footer">
          UMNG 2021-1<br />Bogotá D.C.
        </p>
        <p v-if="mouse" class="Info_Footer">
          Clic derecho para rotar<br />Scroll para zoom
        </p>
      </div>
    </footer>
    <template>
      <div class="sliding--menu__wrapper slide--right">
        <input type="checkbox" id="navigation" />
        <label
          class="bm-burger-button"
          for="navigation"
          @click="menu = false"
          v-if="menu"
        >
          <img
            src="@/assets/img/icons/menu.svg"
            alt="menu"
            width="35vh"
            class="imagen_menu"
          />
        </label>
        <label
          class="bm-burger-button"
          for="navigation"
          @click="menu = true"
          v-else
        >
          <img src="@/assets/img/icons/menu.svg" alt="menu" width="35vh" />
        </label>
        <nav>
          <ul class="menu_nav">
            <li>
              <a
                href="#"
                @click="(showC = !showC), (showA = false), (showP = false)"
                >Perfiles</a
              >
            </li>
            <li>
              <a
                href="#"
                @click="(showA = !showA), (showC = false), (showP = false)"
                >Contáctanos</a
              >
            </li>
            <li>
              <div v-if="user == null">
                <a @click="cambiar_estado()">Login</a>
              </div>
              <div
                v-else
                class="nombre_usuario"
                @click="(showA = false), (showC = false), (showP = !showP)"
              >
                <div class="img_perfils">
                  <img
                    class="img_perfil"
                    :src="getImageUrl(avatar)"
                    alt="imagen perfil"
                  />
                </div>
                <a>
                  {{ splitedStr[0] }}
                </a>
              </div>
            </li>
          </ul>
          <div class="info">
            <transition name="slide-fade">
              <div v-if="showC">
                <div class="about">
                  <h3>Perfil del aspirante</h3>
                  <p>
                    Debe tener pensamiento lógico y crítico, y fuerte
                    inclinación por la tecnología, con habilidad para las
                    matemáticas, la física, la informática, la comunicación y la
                    expresión gráfica. Además, debe tener capacidad de análisis,
                    aprendizaje autónomo, creatividad, responsabilidad,
                    compromiso y liderazgo, que le permitan asumir nuevos retos
                    en su formación profesional.
                  </p>
                  <h3>Perfil del egresado</h3>
                  <p>
                    El ingeniero en multimedia de la Universidad Militar Nueva
                    Ganada está en capacidad de utilizar los estándares de
                    ingeniería computacionales y de multimedia, para desarrollar
                    productos innovadores en términos de diseño, interactividad,
                    uso, realismo e inteligencia, como cualidades de la calidad
                    de la experiencia para el usuario final. Además, cuenta con
                    la idoneidad para analizar, evaluar e investigar situaciones
                    reales de su campo profesional, de manera crítica y
                    reflexiva, y con compromiso social y ético, con el fin de
                    establecer oportunidades de avance tecnológico y científico
                    en la ingeniería en multimedia, así como con habilidades
                    administrativas y gerenciales, que le posibilitan su
                    integración en el entorno laboral y la creación de empresa.
                  </p>
                </div>
                <div class="logos_info">
                  <ul>
                    <li>
                      <img
                        src="@/assets/img/logo_main.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <img
                        src="@/assets/img/logo_mul.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <a href="https://www.umng.edu.co/inicio" target="_blank">
                        <img src="@/assets/img/logo_umng.png" alt="logo_umng"
                      /></a>
                    </li>
                    <li>
                      <img
                        src="@/assets/img/logo_20_años.png"
                        alt="logo_20_años"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="showA">
                <div class="contactus">
                  <h3>Contáctanos</h3>
                  <p>Desarrolladores del proyecto:</p>
                  <div class="nombres">
                    <ul>
                      <li>
                        <img src="@/assets/img/foto.png" alt="foto1" />
                        <p>Javier Santiago Bocanegra</p>
                      </li>
                      <li>
                        <img src="@/assets/img/foto.png" alt="foto2" />
                        <p>Santiago Forero Zapata</p>
                      </li>
                      <li>
                        <img src="@/assets/img/foto.png" alt="foto3" />
                        <p>Natalia Gómez Malaver</p>
                      </li>
                      <li>
                        <img src="@/assets/img/foto.png" alt="foto4" />
                        <p>Vanessa Escobar Mora</p>
                      </li>
                    </ul>
                  </div>
                  <div class="paginas_url">
                    <ul>
                      <li>
                        <img
                          src="@/assets/img/icons/facebook.svg"
                          alt="foto3"
                        />
                        <a
                          href="https://www.facebook.com/lamilitar/"
                          target="_blank"
                        >
                          Universidad Militar Nueva Granada</a
                        >
                      </li>
                      <li>
                        <img
                          src="@/assets/img/icons/instagram.svg"
                          alt="foto3"
                        />
                        <a
                          href="https://www.instagram.com/unimilitar/"
                          target="_blank"
                        >
                          @unimilitar</a
                        >
                      </li>
                      <li>
                        <img src="@/assets/img/icons/twitter.svg" alt="foto3" />
                        <a href="https://twitter.com/lamilitar" target="_blank">
                          UMNG - @lamilitar</a
                        >
                      </li>
                      <li>
                        <img src="@/assets/img/icons/lupa.svg" alt="foto3" />
                        <a
                          href="https://www.umng.edu.co/inicio"
                          target="_blank"
                        >
                          Universidad Militar Nueva Granada</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="logos_info">
                  <ul>
                    <li>
                      <img
                        src="@/assets/img/logo_main.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <img
                        src="@/assets/img/logo_mul.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <a href="https://www.umng.edu.co/inicio" target="_blank">
                        <img src="@/assets/img/logo_umng.png" alt="logo_umng" />
                      </a>
                    </li>
                    <li>
                      <img
                        src="@/assets/img/logo_20_años.png"
                        alt="logo_20_años"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="showP">
                <div class="perfil">
                  <ul>
                    <li>
                      <img
                        src="@/assets/img/icons/usuariob.svg"
                        alt="logo_20_años"
                      />
                      <a @click="cambiar_estado4()"> Perfil </a>
                    </li>
                    <li @click.prevent="logout">
                      <img
                        src="@/assets/img/icons/cerrar-sesion.svg"
                        alt="logo_20_años"
                      />
                      <a> Cerrar Sesion </a>
                    </li>
                  </ul>
                </div>
                <div class="logos_info">
                  <ul>
                    <li>
                      <img
                        src="@/assets/img/logo_main.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <img
                        src="@/assets/img/logo_mul.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <a href="https://www.umng.edu.co/inicio" target="_blank">
                        <img src="@/assets/img/logo_umng.png" alt="logo_umng"
                      /></a>
                    </li>
                    <li>
                      <img
                        src="@/assets/img/logo_20_años.png"
                        alt="logo_20_años"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>
        </nav>
      </div>
    </template>
    <FondoMain :statuspadre="status" :statuspadre4="status2" />
  </div>
</template>
<script>
import Firebase from "firebase";
import FondoMain from "@/components/layout/FondoMain";
import { db } from "@/firebase/init";
export default {
  data() {
    return {
      show: false,
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "light",
      headerTextVariant: "dark",
      bodyBgVariant: "dark",
      bodyTextVariant: "dark",
      // footerBgVariant: "warning",
      // footerTextVariant: "dark",
      menu: true,
      status: true,
      status2: true,
      status3: true,
      user: null,
      showC: false,
      showA: false,
      showP: false,
      informacion: false,
      mouse: false,
      id: null,
      nombre: null,
      correo: null,
      tipo: null,
      avatar: null,
      splitedStr: "",
    };
  },
  components: {
    FondoMain,
  },
  methods: {
    getImageUrl(imageId) {
      return `${imageId}`;
    },
    cambiar_estado() {
      this.status = false;
      console.log(`estado pagina principal${this.status}`);
    },
    cambiar_estado4() {
      this.status2 = false;
      console.log(`estado pagina principal${this.status}`);
    },
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          // this.status3 = false;
          // console.log(`estado pagina principal${this.status}`);
          // // this.$router.push({ name: "/" });
          window.location.href = "/";
        });
    },
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        db.collection(user.email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data().nombre}`);
              this.id = `${doc.id}`;
              this.nombre = `${doc.data().nombre}`;
              this.correo = `${doc.data().correo}`;
              this.tipo = `${doc.data().tipo}`;
              this.avatar = `${doc.data().avatar}`;
              this.splitedStr = this.nombre.split(" ");
            });
          });
      } else {
        this.user = null;
      }
    });
  },
};
</script>
<style scoped >
.img_perfil {
  margin: 0.5rem;
  clip-path: circle(50% at 50% 50%);
  width: 3rem;
}
header {
  font-family: "Roboto Mono", monospace;
  display: flex;
}
.logo_main {
  max-width: 12vh;
  min-width: 8vh;
  object-fit: contain;
  margin: 1rem 0 0 1rem;
  width: 15vh;
}
.sliding--menu__wrapper.slide--right {
  margin-left: auto;
  margin-right: 0;
  width: 4rem;
}
.sliding--menu__wrapper input[type="checkbox"] {
  display: none;
}
.sliding--menu__wrapper.slide--right input[type="checkbox"]:checked ~ nav {
  margin-right: 0;
  margin-left: auto;
}
.sliding--menu__wrapper.slide--right input[type="checkbox"]:checked ~ label {
  right: 26%;
}
.sliding--menu__wrapper.slide--right nav {
  position: fixed;
  width: 25%;
  height: 100%;
  transition: all 200ms ease-in;
  right: 0;
  margin: 0 -25% 0 0;
}
.menu_nav {
  font-family: "Roboto Mono", monospace;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  background: #fff;
  width: 100%;
  min-height: 6vh;
  max-height: auto;
  margin: 2vh 0 0 0;
  padding: 0;
  font-size: 1.8vh;
  color: #000;
  cursor: pointer;
  border-top-left-radius: 7px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.493);
}
.menu_nav a {
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  margin: 0.5vh 0;
  max-width: 11rem;
  min-width: 2rem;
}
.menu_nav a:hover {
  /* background: #111; */
  font-size: 2vh;
  font-weight: 600;
}
.nombre_usuario {
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bm-burger-button {
  width: 4.2vh;
  height: 2.4vh;
  right: 1rem;
  position: fixed;
  transition: 0.3s;
  margin: 3.71vh 0 0 0;
  cursor: pointer;
}
.bm-burger-bars {
  background: #222;
  margin: 0;
}
.line-style {
  height: 0.2vh;
  max-width: 4.2vh;
  min-width: 2.2vh;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-2vh);
  opacity: 0;
}
.logos_info {
  background-color: white;
  height: auto;
  border-bottom-left-radius: 7px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.493);
}
.logos_info ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  width: auto;
  height: auto;
  margin: 0;
  padding: 2vh;
}
.logos_info li {
  width: 7vh;
  height: auto;
}
.logos_info img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  margin: 0;
}
.about,
.contactus,
.perfil {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.493);
  width: auto;
  height: auto;
  max-height: 75vh;
  padding: 3vh 3vh;
  margin: 0;
  background-color: black;
  color: #fff;
  font-size: 1.7vh;
}
.about h3,
.contactus h3 {
  margin-bottom: 2vh;
  font-size: 3vh;
}
.contactus ul,
.contactus a {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: #fff;
}
.contactus a:hover {
  font-size: 1.76vh;
}
.nombres,
.contactus p,
.about p {
  margin: 0 0 2.5vh 0;
  text-align: justify;
}
.nombres ul {
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.nombres li {
  display: inline-grid;
  justify-items: center;
  height: auto;
  margin: 0.5vh 2vh;
  width: 35%;
}
.nombres img {
  max-width: 8vh;
  min-width: 5vh;
}
.nombres p {
  text-align: center;
  margin: 1.5vh 0;
}
.paginas_url img {
  width: 5%;
  margin: 2%;
}
.paginas_url li a {
  margin-left: 8%;
}
footer {
  bottom: 0;
}
footer ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 1vh 0;
}
.info_controls {
  object-fit: contain;
  margin: 0 0.2rem 0 1rem;
  width: 1.5rem;
  cursor: help;
}
.perfil {
  cursor: pointer;
}
.perfil li,
.perfil ul {
  display: flex;
  list-style: none;
  margin: 0.5vh;
  padding: 0;
  align-items: center;
  flex-wrap: wrap;
  font-size: 2vh;
  cursor: pointer;
}
.perfil img {
  min-width: 4%;
  max-width: 7%;
  margin: 2% 5%;
}
.perfil li:hover {
  font-size: 2.5vh;
}
.Info_Footer {
  position: fixed;
  bottom: 5vh;
  height: auto;
  margin: 0 0 0 2vh;
  padding: 1vh;
  font-size: 1.5vh;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid black;
}
.img_perfils {
  filter: drop-shadow(-1px 4px 3px rgba(20, 20, 0, 0.5));
}

.imagen_menu {
  filter: invert(1);
}
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}

.icon-scroll {
  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 50%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
}
.icon-scroll:before {
  content: "";
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
</style>