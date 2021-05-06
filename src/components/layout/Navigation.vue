<template>
  <div>
    <header class="position-absolute">
      <router-link to="/">
        <img
          class= "logo_main"
          src="@/assets/img/logo_main.png"
          alt="logo_principal"
        />
        <img
          class= "logo_main"
          src="@/assets/img/logo_20_años.png"
          alt="mouse"
        />
      </router-link>
    </header>
    <footer class="position-absolute">
      <ul>
        <li>
          <img @mouseover="informacion = true" @mouseleave="informacion = false"
            class= "info_controls"
            src="@/assets/img/icons/informacion.svg"
            alt="mouse"
          />
        </li>
        <li>
          <img @mouseover="mouse = true" @mouseleave="mouse = false"
            class= "info_controls"
            src="@/assets/img/icons/mouse.svg"
            alt="mouse"
          />
        </li>
      </ul>
      <div >
        <p v-if="informacion" class="Info_Footer">UMNG 2021-1<br>Bogotá D.C.</p>
        <p v-if="mouse" class="Info_Footer">Clic derecho para rotar<br>Scroll para zoom</p>
      </div>
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
                <a href="#" @click="(showC = !showC), (showA = false), (showP = false)">Perfiles</a>
              </li>
              <li>
                <a href="#" @click="(showA = !showA), (showC = false), (showP = false)">Contáctanos</a>
              </li>
              <li>
                <div v-if="user == null">
                  <router-link to="/login"> Iniciar sesión </router-link>
                </div>
                <div v-else class="nombre_usuario">
                  <a @click="(showA = false), (showC = false), (showP = !showP)">
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
                    <p>Debe tener pensamiento lógico y crítico, y fuerte inclinación por la tecnología, con habilidad para las matemáticas, la física, la informática, la comunicación y la expresión gráfica. Además, debe tener capacidad de análisis, aprendizaje autónomo, creatividad, responsabilidad, compromiso y liderazgo, que le permitan asumir nuevos retos en su formación profesional.</p>
                    <h3>Perfil del egresado</h3>
                    <p>El ingeniero en multimedia de la Universidad Militar Nueva Ganada está en capacidad de utilizar los estándares de ingeniería computacionales y de multimedia, para desarrollar productos innovadores en términos de diseño, interactividad, uso, realismo e inteligencia, como cualidades de la calidad de la experiencia para el usuario final. Además, cuenta con la idoneidad para analizar, evaluar e investigar situaciones reales de su campo profesional, de manera crítica y reflexiva, y con compromiso social y ético, con el fin de establecer oportunidades de avance tecnológico y científico en la ingeniería en multimedia, así como con habilidades administrativas y gerenciales, que le posibilitan su integración en el entorno laboral y la creación de empresa.</p>
                  </div>
                  <div class="logos_info">
                    <ul>
                      <li>
                        <img
                          src="@/assets/img/logo_main.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/img/logo_mul.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <a href = "https://www.umng.edu.co/inicio" target="_blank">
                        <img
                          src="@/assets/img/logo_umng.png" alt="logo_umng"
                        /></a>
                      </li>
                      <li>
                        <img
                          src="@/assets/img/logo_20_años.png" alt="logo_20_años"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="showA">
                  <div class= "contactus">
                    <h3>Contáctanos</h3>
                    <p>Desarrolladores del proyecto:</p>
                    <div class = "nombres">
                      <ul>
                        <li>
                          <img src="@/assets/img/foto.png" alt="foto1" />
                          <p> Javier Santiago Bocanegra </p>
                        </li>
                        <li>
                          <img src="@/assets/img/foto.png" alt="foto2" />
                          <p> Santiago Forero Zapata </p>
                        </li>
                        <li>
                          <img src="@/assets/img/foto.png" alt="foto3" />
                          <p> Natalia Gómez Malaver </p>
                        </li>
                        <li>
                          <img src="@/assets/img/foto.png" alt="foto4" />
                          <p> Vanessa Escobar Mora </p>
                        </li>
                      </ul>
                    </div>
                    <div class = "paginas_url">
                      <ul>
                        <li> 
                          <img src="@/assets/img/icons/facebook.svg" alt="foto3" />
                          <a href="https://www.facebook.com/lamilitar/" target="_blank"> Universidad Militar Nueva Granada</a>  
                        </li>
                        <li>
                          <img src="@/assets/img/icons/instagram.svg" alt="foto3" />
                          <a href="https://www.instagram.com/unimilitar/" target="_blank"> @unimilitar</a> 
                        </li>
                        <li>
                          <img src="@/assets/img/icons/twitter.svg" alt="foto3" />
                          <a href="https://twitter.com/lamilitar" target="_blank"> UMNG - @lamilitar</a>
                        </li>
                        <li>
                          <img src="@/assets/img/icons/lupa.svg" alt="foto3" />
                          <a href = "https://www.umng.edu.co/inicio" target="_blank"> Universidad Militar Nueva Granada</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="logos_info">
                    <ul>
                      <li>
                        <img
                          src="@/assets/img/logo_main.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <img
                          src="@/assets/img/logo_mul.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <a 
                          href = "https://www.umng.edu.co/inicio" target="_blank">
                          <img
                          src="@/assets/img/logo_umng.png" alt="logo_umng"
                          />
                        </a>
                      </li>
                      <li>
                        <img
                          src="@/assets/img/logo_20_años.png" alt="logo_20_años"
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
                      <a> Perfil </a>
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
                        <img
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
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
  </div>
</template>
<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      user: null,
      showC: false,
      showA: false,
      showP: false,
      informacion: false,
      mouse: false,
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          // this.$router.push({ name: "home" });
        });
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
<style scoped>
header {
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  background: #222;
  width: 100%;
  min-height: 6vh;
  max-height: auto;
  margin: 2vh 0 0 0;
  padding: 0;
  font-size: 1.8vh;
  color: #fff;
  cursor: pointer;
}
.menu_nav a {
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  margin: 0.5vh 0;
  max-width: 11rem;
  min-width: 2rem;
}
.menu_nav a:hover {
  /* background: #111; */ 
  font-size:2vh;
}
.nombre_usuario {
  word-break: break-word;
}
.bm-burger-button {
  width: 4.2vh;
  height: 2.4vh;
  right: 1rem;
  position: fixed;
  transition: .3s;
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
  transition: all .5s ease;
} /*.slide-fade-leave-active*/
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
{
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
  padding: 2vh;
}
.logos_info li{
  width: 7vh;
  height: auto;
}
.logos_info img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  margin: 0;
}
.about, .contactus, .perfil{
  width: auto;
  height: auto;
  max-height: 75vh;
  padding: 3vh 3vh;
  margin: 0;
  background-color: black;
  color:#fff;
  font-size: 1.7vh;
}
.about h3, .contactus h3{
  margin-bottom: 2vh;
  font-size: 3vh;
}
.contactus ul, .contactus a {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  color:#fff;
} .contactus a:hover {font-size:1.76vh;}
.nombres, .contactus p, .about p {
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
.paginas_url li a{
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
.perfil li, .perfil ul{
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
</style>