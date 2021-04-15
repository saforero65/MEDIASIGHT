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
      <div>
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
    </div>
    </footer>
      <template v-if="user"> <!--  -->
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
                <a href="#" @click="showA = false, showC = !showC">Contact us</a>
              </li>
              <li>
                <a href="#" @click="showC = false, showA = !showA">About us</a>
              </li>
              <li>
                <router-link to="/login"> Iniciar sesión </router-link>
              </li>
            </ul>
            <div class="info">
              <transition name="slide-fade">                
                <div v-if="showC">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam, iste nihil soluta sapiente vitae, repudiandae quasi odio ea commodi animi pariatur. Velit iure quaerat corporis dicta.</p>
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
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                        />
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
              <!-- </transition>
              <transition name="slide-fade"> -->
                <div v-if="showA">
                  <p>HOLA Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam, iste nihil soluta sapiente vitae, repudiandae quasi odio ea commodi animi pariatur. Velit iure quaerat corporis dicta.</p>
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
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                        />
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
      <template v-else> <!--  -->
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
                <a href="#" @click="showA = false, showC = !showC">Contact us</a>
              </li>
              <li>
                <a href="#" @click="showC = false, showA = !showA">About us</a>
              </li>
              <li>
                <router-link to="/login"> Iniciar sesión </router-link>
              </li>
            </ul>
            <div class="info">
              <transition name="slide-fade">                
                <div v-if="showC">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam, iste nihil soluta sapiente vitae, repudiandae quasi odio ea commodi animi pariatur. Velit iure quaerat corporis dicta.</p>
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
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                        />
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
              <!-- </transition>
              <transition name="slide-fade"> -->
                <div v-if="showA">
                  <p>HOLA Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nesciunt, beatae fugit quisquam, iste nihil soluta sapiente vitae, repudiandae quasi odio ea commodi animi pariatur. Velit iure quaerat corporis dicta.</p>
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
                        <img
                          class= "info_controls"
                          src="@/assets/img/logo_umng.png"
                          alt="logo_umng"
                        />
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

.sliding--menu__wrapper {
  overflow: hidden;
  top: 0;
  left: 0;
  margin-right: auto;
}
.sliding--menu__wrapper nav {
  position: fixed;
  width: 250px;
  height: 100%;
  transition: all 200ms ease-in;
  z-index: 2;
  top: 0;
  left: 0;
  margin: 0 0 -250px;
}
.sliding--menu__wrapper nav ul {
  list-style: none;
  background: #222;
  overflow: hidden;
  width: 250px;
}
.sliding--menu__wrapper nav a {
  color: #fff;
  display: inline-flex;
  padding: 15px;
}
.sliding--menu__wrapper nav a:hover {
  background: #111;
}
.sliding--menu__wrapper label {
  display: block;
  width: 2.5rem;
  height: 1.4rem;
  position: fixed;
  z-index: 2;
  transition: all 200ms ease-in;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
}

.bm-burger-bars {
    background: #222;
}
.line-style {
    height: 17%;
    left: 0;
    position: absolute;
    right: 0;
    width: 2.5rem;
}

.sliding--menu__wrapper .obfuscator {
  visibility: hidden;
  transition: all 200ms ease-in;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
  transition-duration: 0.5s;
}
.sliding--menu__wrapper input[type="checkbox"] {
  display: none;
}
.sliding--menu__wrapper input[type="checkbox"]:checked ~ nav {
  margin-left: 0;
}
.sliding--menu__wrapper input[type="checkbox"]:checked ~ label {
  left: 260px;
}
.sliding--menu__wrapper {
  visibility: visible;
  pointer-events: auto;
  z-index: 1;
}
.sliding--menu__wrapper.slide--right {
  top: 0;
  right: 0;
  margin-left: auto;
  margin-right: 0;
  width: 4rem;
}
.sliding--menu__wrapper.slide--right nav {
  position: fixed;
  width: 50vh;
  height: 100%;
  transition: all 200ms ease-in;
  z-index: 2;
  top: 0;
  right: 0;
  margin: 0 -50vh 0 0;
  margin-left: auto;
}
.menu_nav {
  display: flex;
  justify-content: space-around;
  margin: 2vh 0 0 0;
  padding: 0;
  height: 6vh;
}
.sliding--menu__wrapper.slide--right nav ul {
  display: flex;
  list-style: none;
  background: #222;
  overflow: hidden;
  width: 50vh;
}
.sliding--menu__wrapper.slide--right input[type="checkbox"]:checked ~ nav {
  margin-right: 0;
  margin-left: auto;
}
.sliding--menu__wrapper.slide--right input[type="checkbox"]:checked ~ label {
  right: 51vh;
  margin-left: auto;
  margin-top: 3vh;
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
.info p{
  font-size: 20px;
  color:#fff;
  width: auto;
  height: auto;
  padding: 5vh 5vh;
  margin: 0;
  background-color: black;
}
.logos_info ul{
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 0;
  padding: 0;
  height: auto;
}
.logos_info img {
  list-style: none;
  width: 5rem;
  margin: 1rem;
}

footer {
  bottom: 0;
}
footer ul {
  display: flex;
  list-style: none;
  padding: 0;
}
.info_controls {
  object-fit: contain;
  margin: 0 1rem;
  width: 2rem;
  cursor: pointer;
}

</style>