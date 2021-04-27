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
      <img
        class= "info_controls"
        src="@/assets/img/icons/informacion.svg"
        alt="mouse"
      />
        </li>
      <img
        class= "info_controls"
        src="@/assets/img/icons/mouse.svg"
        alt="mouse"
      />
        <li>
        </li>
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
                <a href="#" @click="showA = false, showC = !showC">Nosotros</a>
              </li>
              <li>
                <a href="#" @click="showC = false, showA = !showA">Contáctanos</a>
              </li>
              <li>
                <div v-if = "user == null">
                  <router-link to="/login"> Iniciar sesión </router-link>
                </div>
                <div v-else>
                  <router-link to="/logout"> Cerrar sesión </router-link>
                </div>
              </li>
            </ul>
            <div class="info">
              <transition name="slide-fade">
                <div v-if="showC">
                  <div class="about">
                    <h3>Nosotros</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam, iste nihil soluta sapiente vitae, repudiandae quasi odio ea commodi animi pariatur. Velit iure quaerat corporis dicta.</p>
                  </div>
                  <div class="logos_info">
                    <ul>
                      <li>
                        <img class= "info_controls"
                          src="@/assets/img/logo_main.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <img  class= "info_controls"
                          src="@/assets/img/logo_mul.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <a href = "https://www.umng.edu.co/inicio" target="_blank">
                        <img class= "info_controls"
                          src="@/assets/img/logo_umng.png" alt="logo_umng"
                        /></a>
                      </li>
                      <li>
                        <img class= "info_controls"
                          src="@/assets/img/logo_20_años.png" alt="logo_20_años"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="showA">
                  <div class= "contactus">
                    <h3>Contáctanos</h3>
                    <p>HOLA Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam.</p>
                    <div class = "nombres">
                      <ul>
                        <li>
                          <img src="@/assets/img/foto.png" alt="foto1" />
                          <p> Javier Santiago Bocagnegra </p>
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
                        <img class= "info_controls"
                          src="@/assets/img/logo_main.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <img class= "info_controls"
                          src="@/assets/img/logo_mul.png" alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <a 
                          href = "https://www.umng.edu.co/inicio" target="_blank">
                          <img class= "info_controls"
                          src="@/assets/img/logo_umng.png" alt="logo_umng"
                          />
                        </a>
                      </li>
                      <li>
                        <img class= "info_controls"
                          src="@/assets/img/logo_20_años.png" alt="logo_20_años"
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
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
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
<style >
header {
  display: flex;
}
.logo_main {
  max-width: 10%;
  min-width: 7rem;
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
  width: 50vh;
  height: 100%;
  transition: all 200ms ease-in;
  right: 0;
  margin: 0 -50vh 0 0;
}
.menu_nav {
  display: flex;
  justify-content: space-around;
  list-style: none;
  background: #222;
  width: 50vh;
  height: auto;
  margin: 2vh 0 0 0;
  padding: 0;
}
.menu_nav a {
  color: #fff;
  display: inline-flex;
  padding: 15px;
}
.menu_nav a:hover {
  background: #111;
}
.bm-burger-button {
  width: 2.5rem;
  height: 2.2%;
  position: fixed;
  /* transition: all .5s 200ms ease-in; */
  margin: 1.8% 0 0 0;
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
    width: 2.5rem;
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
.logos_info ul {
  display: flex;
  justify-content: center;
  list-style: none;
  background-color: white;
  margin: 0;
  padding: 0;
  height: auto;
}
.logos_info img {
  min-width: 3.5rem;
  min-height: 3.5rem;
  margin: 1rem;
}

.about, .contactus{
  width: auto;
  height: auto;
  padding: 1.5rem 2rem;
  margin: 0;
  background-color: black;
  color:#fff;
}
.about h3, .contactus h3{
  margin-bottom: 1rem;
}
.contactus ul, .contactus a {
  list-style: none;
  margin: 0;
  padding: 0;
  color:#fff;
}
.nombres li {
  display: inline-grid;
  justify-items: center;
  width: 40%;
  margin: 4%;
}
.nombres img {
  width: 55%;
}
.nombres p {
  text-align: center;
  margin: 8% 0;
  width: 80%;
}
.paginas_url img {
  width: 1.2rem;
  margin: 0.5rem;
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
  width: 1.7rem;
  cursor: pointer;
}
.point
{
    position: absolute;
    top: 50%;
    left: 50%;
    /* pointer-events: none; */
}

.point .label
{
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

.point .text
{
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

.point:hover .text
{
    opacity: 1;
}

.point.visible .label
{
    transform: scale(1, 1);
}


</style>