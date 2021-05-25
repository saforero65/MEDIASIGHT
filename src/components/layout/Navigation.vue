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
            class="info_controls"
            src="@/assets/img/icons/mouse.svg"
            alt="mouse"
          />
        </li>
      </ul>
      <div>
        <p v-if="informacion" class="Info_Footer1">
          UMNG 2021-1<br />Bogotá D.C.
        </p>
        <div v-if="mouse" class="Info_Footer">
          <div class="clic">
            <img src="@/assets/img/gifs/clic.gif" alt="" />
            <p>
              Mantenga el clic izquierdo presionado para moverse en la habitación
            </p>
          </div>
          <div class="clic">
            <p>Use el scroll del mouse para hacer zoom en la habitación</p>
            <img src="@/assets/img/gifs/scroll.gif" alt="" />
          </div>
        </div>
      </div>
    </footer>
    <template>
      <div class="sliding--menu__wrapper slide--right">
        <input type="checkbox" id="navigation" />
        <label
          class="bm-burger-button"
          for="navigation"
        >
          <img
            src="@/assets/img/icons/menu.svg"
            alt="menu"
            width="35vh"
            class="imagen_menu"
          />
        </label>
        <nav>
          <ul class="menu_nav">
            <li>
              <a
                href="#"
                @click="(showC = !showC), (showA = false), (showP = false)"
                >Acerca de</a
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
                <a @click="cambiar_estado()">Iniciar sesión</a>
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
                <span>
                  {{ splitedStr[0] }}
                </span>
              </div>
            </li>
          </ul>
          <div class="info">
            <transition name="slide-fade">
              <div v-if="showC">
                <div class="about">
                  <h3>Ingeniería en Multimedia</h3>
                  <div class="cont_info">
                    <a
                      href="https://www.umng.edu.co/documents/20127/432682/Ing+en+Multimedia+copia.pdf/027fbe6e-b046-00c1-4a97-81a520f299ae?t=1589289836585"
                      target="_blank"
                    >
                      <img src="@/assets/img/icons/folleto.svg" alt="Folleto" />
                      <h4>Folleto del programa</h4></a
                    >
                  </div>
                  <div class="cont_info">
                    <a
                      href="https://www.umng.edu.co/web/guest/programas/pregrados/ingenieria-multimedia"
                      target="_blank"
                    >
                      <img
                        src="@/assets/img/icons/info_general.svg"
                        alt="Informacion general"
                      />
                      <h4>Información General</h4></a
                    >
                  </div>
                  <div class="cont_info">
                    <a
                      href="https://www.umng.edu.co/documents/20127/463311/Plan+de+estudios+IngMultimedia.pdf/280c5b1f-3d57-2598-86a4-81b7be79300f?t=1574191474428"
                      target="_blank"
                    >
                      <img
                        src="@/assets/img/icons/plan_estudios.svg"
                        alt="Plan de estudios"
                      />
                      <h4>Plan de estudios</h4></a
                    >
                  </div>
                  <div>
                    <div v-if="user">
                      <h2 class="comentarios">Comentarios</h2>
                      <b-form-textarea
                        class="comentario"
                        id="textarea-no-resize"
                        placeholder="Escribe aqui tu comentario"
                        rows="5"
                        v-model="comentario"
                        no-resize
                      ></b-form-textarea>
                      <div class="box_valoracion">
                        <form>
                          <p id="estrellas" class="clasificacion">
                            <input
                              id="radio1"
                              type="radio"
                              name="estrellas"
                              value="5"
                            /><!--
    --><label class="estrella" @click="estrellas = 5" for="radio1">★</label
                            ><!--
    --><input
                              id="radio2"
                              type="radio"
                              name="estrellas"
                              @click="estrellas = 4"
                              value="4"
                            /><!--
    --><label class="estrella" for="radio2">★</label
                            ><!--
    --><input
                              id="radio3"
                              type="radio"
                              name="estrellas"
                              @click="estrellas = 3"
                              value="3"
                            /><!--
    --><label class="estrella" for="radio3">★</label
                            ><!--
    --><input
                              id="radio4"
                              type="radio"
                              name="estrellas"
                              @click="estrellas = 2"
                              value="2"
                            /><!--
    --><label class="estrella" for="radio4">★</label
                            ><!--
    --><input
                              id="radio5"
                              type="radio"
                              name="estrellas"
                              @click="estrellas = 1"
                              value="1"
                            /><!--
    --><label class="estrella" for="radio5">★</label>
                          </p>
                        </form>

                        <button class="boton_valoracion" @click="enviar()">
                          Enviar
                        </button>
                      </div>
                      <div class="advertencia">
                        <p style="color: white">{{ error }}</p>
                        <b-spinner
                          v-show="carga"
                          variant="secondary"
                          label="Loading..."
                        ></b-spinner>
                      </div>
                    </div>
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
              <div v-if="showA">
                <div class="contactus">
                  <h3>Contáctanos</h3>
                  <div class="nombres">
                    <ul>
                      <li>
                        <p>Product owner:</p>
                        <img src="@/assets/img/Fotos/Marlon.jpg" alt="foto1" />
                        <p>Marlon Steven Pinto Pinto</p>
                      </li>
                      <li>
                        <p>Scrum master:</p>
                        <img src="@/assets/img/Fotos/Javier.jpg" alt="foto1" />
                        <p>Javier Santiago Bocanegra</p>
                      </li>
                    </ul>
                  </div>
                  <p><b>Desarrolladores del proyecto:</b></p>
                  <div class="nombres">
                    <ul class="nombresD">
                      <li>
                        <img src="@/assets/img/Fotos/Santiago.jpg" alt="foto2" />
                        <p>Santiago Forero Zapata</p>
                      </li>
                      <li>
                        <img src="@/assets/img/Fotos/Natalia.jpg" alt="foto3" />
                        <p>Natalia Gómez Malaver</p>
                      </li>
                      <li>
                        <img src="@/assets/img/Fotos/Vanessa.jpg" alt="foto4" />
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
                      <a> Cerrar sesión </a>
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
      carga: false,
      comentario: "",
      estrellas: 0,
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
      error: "",
    };
  },
  components: {
    FondoMain,
  },
  methods: {
    enviar() {
      if (this.comentario && this.estrellas) {
        this.carga = true;
        db.collection("valoracion")
          .add({
            nombre: this.nombre,
            correo: this.correo,
            estrellas: this.estrellas,
            comentario: this.comentario,
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.estrellas = null;
            this.comentario = null;
            var ele = document.getElementsByName("estrellas");
            for (var i = 0; i < ele.length; i++) ele[i].checked = false;
            this.error = "";
            this.carga = false;
          })
          .catch((error) => {
            this.error = error.message;
            console.error("Error adding document: ", error);
          });
      } else {
        console.log("algun campo esta vacio");
        this.error = "Llene todos los campos";
      }
    },
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
.menu_nav a,
.menu_nav span {
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
.nombre_usuario:hover {
  font-size: 2vh;
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
.contactus h3 {
  margin-bottom: 10;
  font-size: 3vh;
}
.about h3,
.comentarios {
  margin-bottom: 2vh;
  font-size: 3vh;
}
.comentarios {
  padding-top: 1rem;
  border-top: 1px solid white;
}
.comentario {
  height: auto;
  resize: none;
  background: #ffffff0f;
  color: white;
}
.about h4:hover {
  font-size: 2vh;
}
.about img {
  min-width: 2vh;
  max-width: 4vh;
  min-height: 2vh;
  max-height: 4vh;
}
.about h4 {
  font-size: 1.9vh;
  margin-left: 2vh;
}
.cont_info {
  padding: 2vh;
  border-top: 1px solid gray;
}
.about a {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
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
.contactus p {
  margin: 1.5vh 0 1.5vh 0;
  text-align: justify;
}
.nombres ul {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
}
.nombres li {
  display: inline-grid;
  justify-items: center;
  height: auto;
  margin: 0.5vh 1vh;
  width: 35%;
}
.nombresD li {
  width: 7rem;
}
.nombres img {
  border-radius: 50%;
  max-width: 5vh;
  min-width: 2vh;
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
  padding: 1vh 5vh;
  font-size: 1.5vh;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  font-size: 2vh;
  font-family: "Consolas", monospace;
  text-align: justify;
}
.Info_Footer1 {
  position: fixed;
  bottom: 5vh;
  height: auto;
  margin: 0 0 0 1vh;
  padding: 1vh;
  font-size: 1.5vh;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  font-size: 2vh;
  font-family: "Consolas", monospace;
  text-align: justify;
}
.Info_Footer img {
  min-width: 5vh;
  max-width: 20vh;
  margin: 0 0;
}
.clic {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5vh;
  max-width: 50vh;
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
#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

.estrella {
  font-size: 40px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
  height: 40px;
}

label:hover,
label:hover ~ label {
  color: orange;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
.box_valoracion {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.boton_valoracion {
  height: 3em;
  width: 5rem;
  margin: auto 0.5rem;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 10px;
}
.boton_valoracion:hover {
  background: white;
  color: black;
}
.advertencia {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
}
</style>