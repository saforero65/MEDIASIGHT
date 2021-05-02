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
            class="info_controls"
            src="@/assets/img/icons/informacion.svg"
            alt="mouse"
          />
        </li>
        <img
          class="info_controls"
          src="@/assets/img/icons/mouse.svg"
          alt="mouse"
        />
        <li></li>
      </ul>
    </footer>
    <template>
      <div class="sliding--menu__wrapper slide--right">
        <input type="checkbox" id="navigation" />
        <label class="bm-burger-button" for="navigation">
          <span class="bm-burger-bars line-style" style="top: 0%"></span>
          <span class="bm-burger-bars line-style" style="top: 50%"></span>
          <span class="bm-burger-bars line-style" style="top: 100%"></span>
        </label>
        <nav>
          <ul class="menu_nav">
            <li>
              <a href="#" @click="(showA = false), (showC = !showC)"
                >Perfiles</a
              >
            </li>
            <li>
              <a href="#" @click="(showC = false), (showA = !showA)"
                >Contáctanos</a
              >
            </li>
            <li>
              <div v-if="user == null">
                <!-- <router-link to="/login"> Iniciar sesión </router-link> -->
                <a @click="cambiar_estado()">Login</a>
              </div>
              <div v-else>
                <a @click="(showA = false), (showC = false), (showP = !showP)" class="perfil">
                  {{ user.displayName || user.email }}
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
                        class="info_controls"
                        src="@/assets/img/logo_main.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <img
                        class="info_controls"
                        src="@/assets/img/logo_mul.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <a href="https://www.umng.edu.co/inicio" target="_blank">
                        <img
                          class="info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                      /></a>
                    </li>
                    <li>
                      <img
                        class="info_controls"
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
                  <p>
                    HOLA Lorem ipsum dolor, sit amet consectetur adipi sicing
                    elit. Repellat nesciunt, beatae fugit quisquam.
                  </p>
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
                        class="info_controls"
                        src="@/assets/img/logo_main.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <img
                        class="info_controls"
                        src="@/assets/img/logo_mul.png"
                        alt="logo_multimedia"
                      />
                    </li>
                    <li>
                      <a href="https://www.umng.edu.co/inicio" target="_blank">
                        <img
                          class="info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                      /></a>
                    </li>
                    <li>
                      <img
                        class="info_controls"
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
export default {
  data() {
    return {
      status: true,
      status2: true,
      status3: true,
      user: null,
      showC: false,
      showA: false,
      showP: false,
    };
  },
  components: {
    FondoMain,
  },
  methods: {
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
        });
      window.location.href = "/";
    },
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>
<style scoped >
header {
  display: flex;
}
.logo_main {
  max-width: 50%;
  min-width: 15%;
  object-fit: contain;
  margin: 1rem 0 0 1rem;
  width: 115px;
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
  right: 51vh;
  margin-top: 1.8%;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background: #222;
  width: 100%;
  height: auto;
  margin: 4% 0 0 0;
  padding: 0;
  font-size: 90%;
  color: #fff;
}
.menu_nav a {
  color: #fff;
  display: inline-flex;
  padding: 15% 0;
}
.menu_nav a:hover {
  background: #111;
}
.bm-burger-button {
  min-width: 2rem;
  width: 2.5rem;
  min-height: 2.4%;
  height: 1.5rem;
  position: fixed;
  /* transition: all .5s 200ms ease-in; */
  margin: 1.8% 1% 0 0;
  cursor: pointer;
}
.bm-burger-bars {
  background: #222;
  margin: 0;
}
.line-style {
  height: 16%;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
} /*.slide-fade-leave-active*/
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
}
.logos_info ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  width: auto;
  height: auto;
  margin: 0;
  padding: 5% 5%;
}
.logos_info li {
  width: 16%;
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
  width: auto;
  height: auto;
  max-height: 75vh;
  padding: 4% 6%;
  margin: 0;
  background-color: black;
  color: #fff;
  font-size: 80%;
}
.about h3,
.contactus h3 {
  margin-bottom: 5%;
  /* font-size: 200%; */
}
.contactus ul,
.contactus a {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
}
.nombres,
.contactus p {
  margin: 0 0 5% 0;
}
.nombres li {
  display: inline-grid;
  justify-items: center;
  max-width: 38%;
  min-height: 7rem;
  margin: 1% 4%;
}
.nombres img {
  width: 55%;
}
.nombres p {
  text-align: center;
  margin: 8% 0;
  min-width: 100%;
  max-width: 80%;
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
  margin: 0 0 10% 0;
}
.info_controls {
  object-fit: contain;
  margin: 0 1rem;
  min-width: 1.5rem;
  cursor: pointer;
}
.point {
  position: absolute;
  top: 50%;
  left: 50%;
  /* pointer-events: none; */
}
.point .label {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #00000077;
  border: 1px solid #ffffff77;
  color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  line-height: 40px;
  font-weight: 100;
  font-size: 14px;
  cursor: pointer;
  transform: scale(0, 0);
  transition: transform 0.3s;
}
.point .text {
  position: absolute;
  top: 30px;
  left: -120px;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  background: #00000077;
  border: 1px solid #ffffff77;
  color: #ffffff;
  line-height: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.point:hover .text {
  opacity: 1;
}
.point.visible .label {
  transform: scale(1, 1);
}
.perfil {
  cursor: pointer;
}
.perfil li, .perfil ul{
  display: flex;
  list-style: none;
  margin: 2%;
  padding: 0;
  align-items: center;
  flex-wrap: wrap;
  font-size: 110%;
  cursor: pointer;
}
.perfil img {
  min-width: 4%;
  max-width: 7%;
  margin: 2% 5%;
}
.perfil li:hover {
  font-size: 118%;
}
</style>