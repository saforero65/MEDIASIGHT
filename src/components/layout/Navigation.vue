<template>
  <div>
    <header class="position-absolute">
      <a href="/">
        <img
          class="logo_main"
          src="@/assets/img/logo_main.png"
          alt="logo_principal"
        />
      </a>
      <template v-if="user">
        <div class="sliding--menu__wrapper slide--right">
          <input type="checkbox" id="navigation" />
          <label id="hamburger--icon" for="navigation">
            <span class="icon-menu"></span>
          </label>

          <nav>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li @click.prevent="logout">
                <a href="/"> Cerrar Sesion </a>
              </li>
              <li>
                <a href="/#/dashboard">{{ user.displayName || user.email }} </a>
              </li>
            </ul>
          </nav>
        </div>
      </template>
      <template v-else>
        <div class="sliding--menu__wrapper slide--right">
          <input type="checkbox" id="navigation" />
          <label id="hamburger--icon" for="navigation">
            <span class="icon-menu"></span>
          </label>

          <nav>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="/#/login"> Login </a>
              </li>
            </ul>
          </nav>
        </div>
      </template>
    </header>
    <div>
      <template>
        <div>
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <div v-for="item in proyectos" v-bind:key="item.id">
              <b-carousel-slide v-if="item.data.estado == 'aprobado'">
                <template #img>
                  <div>
                    <img
                      class="d-block img-fluid w-100"
                      :src="getImageUrl(item.data.imagen)"
                      alt="image slot"
                    />
                    <h2>{{ item.data.nombre_proyecto }}</h2>
                    <h3>{{ item.data.materia }}</h3>
                    <p>
                      {{ item.data.descripcion }}
                    </p>
                  </div>
                </template>
              </b-carousel-slide>
            </div>
            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          </b-carousel>

          <p class="mt-4">
            Slide #: {{ slide }}<br />
            Sliding: {{ sliding }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
    
<script>
import Firebase from "firebase";
import { db } from "@/firebase/init";
export default {
  data() {
    return {
      user: null,
      proyectos: [],
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    getImageUrl(imageId) {
      return `${imageId}`;
    },
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          // this.$router.push({ name: "home" });
          window.location.href = "/";
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
    this.proyectos = [];
    db.collection("proyectos_admin")
      .get()
      .then((r) => {
        r.docs.map((item) => {
          this.proyectos.push({
            id: item.id,
            data: item.data(),
          });
        });
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
  margin: 1vh 0;
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
  padding: 0;
  margin: 0;
  list-style: none;
  background: #222;
  overflow: hidden;
  width: 250px;
  height: 100%;
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
  width: 5rem;
  height: 60px;
  position: fixed;
  z-index: 2;
  transition: all 200ms ease-in;
  margin-top: 2vh;
  background-image: url(~@/assets/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
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
  background: #111;
  z-index: 1;
}

.sliding--menu__wrapper.slide--right {
  top: 0;
  right: 0;
  margin-left: auto;
  margin-right: 5rem;
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

.sliding--menu__wrapper.slide--right nav ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 2vh 0;
  list-style: none;
  background: #222;
  overflow: hidden;
  width: 50vh;
  height: 6vh;
}

.sliding--menu__wrapper.slide--right input[type="checkbox"]:checked ~ nav {
  margin-right: 0;
  margin-left: auto;
}

.sliding--menu__wrapper.slide--right input[type="checkbox"]:checked ~ label {
  right: 50vh;
  margin-left: auto;
  margin-top: 2vh;
}
.img_cards {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.img-fluid {
  height: 200px;

  object-fit: contain;
}
</style>