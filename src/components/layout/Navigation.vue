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
                  <div class="contactus">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam, iste nihil soluta sapiente vitae, repudiandae quasi odio ea commodi animi pariatur. Velit iure quaerat corporis dicta.</p>
                  </div>
                  <div class="logos_info">
                    <ul>
                      <li>
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_main.png"
                          alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_mul.png"
                          alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <a 
                          href = "https://www.umng.edu.co/inicio" target="_blank"><img
                          class= "info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                        /></a>
                      </li>
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_20_años.png"
                          alt="logo_20_años"
                        />
                      <li>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="showA">
                  <div class= "about">
                    <h3>Nosotros</h3>
                    <p>HOLA Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam.</p>
                    <div>
                      <ul>
                        <li> Nombre </li>
                        <li> Nombre </li>
                        <li> Nombre </li>
                        <li> Nombre </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li> <a href=# target="_blank"> Universidad Militar Nueva Granada</a>  </li>
                        <li> <a href=# target="_blank"> @unimilitar</a> </li>
                        <li> <a href=# target="_blank"> UMNG- @lamilitar</a> </li>
                        <li> <a href = "https://www.umng.edu.co/inicio" target="_blank"> Universidad Militar Nueva Granada</a> </li>
                      </ul>
                    </div>
                  </div>
                  <div class="logos_info">
                    <ul>
                      <li>
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_main.png"
                          alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_mul.png"
                          alt="logo_multimedia"
                        />
                      </li>
                      <li>
                        <a 
                          href = "https://www.umng.edu.co/inicio" target="_blank"><img
                          class= "info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                        /></a>
                      </li>
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_20_años.png"
                          alt="logo_20_años"
                        />
                      <li>
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
  margin-top: 3vh;
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
  height: 1.4rem;
  position: fixed;
  /* transition: all .5s 200ms ease-in; */
  margin-top: 3vh;
  cursor: pointer;
}
.bm-burger-bars {
    background: #222;
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
  font-size: 20px;
  width: auto;
  height: auto;
  padding: 2rem;
  margin: 0;
  background-color: black;
  color:#fff;
}
.about ul {
  display: flex;
  justify-content: center;
  list-style: none;
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

</style>