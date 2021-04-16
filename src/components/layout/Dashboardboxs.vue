<template >
  <div class="background">
    <div class="menu_box">
      <div class="perfil">
        <img
          class="img_perfil"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="imagen perfil"
        />
        <h2 class="perfil_name">{{ nombre }}</h2>
        <h3 class="perfil_type">{{ tipo }}</h3>
      </div>
      <template v-if="correo == 'admin@unimilitar.edu.co'">
        <div class="menu">
          <div>
            <h3 class="title_menu">MENÚ</h3>
            <ul class="list">
              <a class="link" href="/#/dashboard">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/usuario.svg"
                    alt="imagnen_perfil"
                  />Perfil
                </li>
              </a>
              <router-link class="link" to="/dashboard">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Administrar Proyectos
                </li>
              </router-link>
              <router-link class="link" to="/dashboard">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Administrar Contenido
                </li>
              </router-link>
            </ul>
          </div>
          <a class="link" href="/">
            <img
              class="img_footer"
              src="@/assets/img/logo_main.png"
              alt="imagen_perfil"
            />
          </a>
        </div>
      </template>
      <template v-else>
        <div class="menu">
          <div>
            <h3 class="title_menu">MENÚ</h3>
            <ul class="list">
              <router-link class="link" to="/dashboard">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/usuario.svg"
                    alt="imagnen_perfil"
                  />Perfil
                </li>
              </router-link>
              <router-link class="link" to="/dashboard">
                <li class="menu_item">
                  <img
                    class="img_item"
                    src="@/assets/img/icons/boton-agregar.svg"
                    alt="imagnen_perfil"
                  />Agregar un Proyecto
                </li>
              </router-link>
            </ul>
          </div>
          <a class="link" href="/">
            <img
              class="img_footer"
              src="@/assets/img/logo_main.png"
              alt="imagen_perfil"
            />
          </a>
        </div>
      </template>
    </div>
    <div class="perfil_content">
      <div class="head_content">
        <div>
          <h1 class="content_title">Vista General de la Cuenta</h1>
          <h3 class="content_subtitle">Perfil</h3>
        </div>

        <template v-if="user">
          <div class="dropdown">
            <img
              class="img_menu"
              src="@/assets/img/icons/menu.svg"
              alt="imagnen_perfil"
            />
            <div class="dropdown-content">
              <a href="/#/home">Pagina Principal</a>
              <div @click.prevent="logout">
                <a href="/#/home">Cerrar Sesion </a>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="content_box">
        <div class="box1">
          <img
            class="img_perfil2"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="imagen perfil"
          />
          <button class="boton_edit">EDITAR PERFIL</button>
        </div>
        <div class="content">
          <h3 class="label">NOMBRE</h3>
          <p class="label_content">{{ nombre }}</p>
          <h3 class="label">E-MAIL</h3>
          <p class="label_content">{{ correo }}</p>
          <h3 class="label">ROL</h3>
          <p class="label_content">Miembro</p>
          <h3 class="label">TIPO</h3>
          <p class="label_content">{{ tipo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Firebase from "firebase";
import { db } from "@/firebase/init";
export default {
  data() {
    return {
      user: null,
      tabla: document.getElementById("tabla"),
      id: null,
      nombre: null,
      correo: null,
      tipo: null,
    };
  },

  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          // this.$router.push({ name: "home" });
          window.location.href = "/#/home";
        });
    },
  },
  created() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);

        db.collection(user.email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data().nombre}`);
              this.id = `${doc.id}`;
              this.nombre = `${doc.data().nombre}`;
              this.correo = `${doc.data().correo}`;
              this.tipo = `${doc.data().tipo}`;
            });
          });
        console.log(db.collection(user.email));
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style>
.background {
  font-family: "Roboto Mono", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #243241;
  width: 100%;
  height: 100vh;
}
.menu_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: white;
  width: 15%;
  border-radius: 15px;
  height: 95%;
  margin-right: 2vh;
}
.content_box {
  display: flex;
  align-items: center;
  height: 80%;
}
.perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
}
.img_perfil {
  margin-top: 2rem;
  clip-path: circle(50% at 50% 50%);
  width: 70%;
}
.img_perfil2 {
  border-radius: 15px;
  width: 30vh;
  height: 50vh;
  object-fit: cover;
}
.perfil_name {
  font-size: 18px;
  font-weight: 300;
  text-transform: capitalize;
  margin: 2vh 0;
}
.perfil_type {
  text-align: center;
  padding-bottom: 2vh;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  border-bottom: 1.5px solid #a8abb750;
  width: 70%;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  width: 100%;
  /* padding: 0 15%; */
}
.title_menu {
  font-size: 15px;
  font-weight: 900;
  padding-left: 15%;
  margin: 1rem 0;
}
.list {
  padding: 0;
}
.menu_item {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  text-decoration: none;
  list-style: none;
  /* margin: 1rem 0; */
  padding: 0.7rem 15%;
  width: 100%;
  color: black;
}
.menu_item:hover {
  background: #f5f5f5;
  font-weight: 400;
}
.img_item {
  width: 11%;
  margin-right: 6px;
}
.link {
  display: contents;
}
.link:hover {
  text-decoration: none;
}
.img_footer {
  margin: 2rem auto;
  width: 25%;
}
.label_content {
  font-size: 15px;
  font-weight: 200;
  margin: 5px 0 20px 0;
}
.label {
  font-size: 15px;
  font-weight: 600;
  margin: 15px 0 0 0;
}
.content {
  height: 50%;
  margin: auto 0;
}
.perfil_content {
  background: white;
  width: 80%;
  border-radius: 15px;
  height: 95%;
}
.content_title {
  font-size: 40px;
  font-weight: bold;
}
.content_subtitle {
  font-size: 20px;
  font-weight: 300;
}
.head_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 0 1.8rem 3.75rem;
  border-bottom: 1.5px solid #a8abb750;
}
.boton_edit {
  background: none;
  border-radius: 25px;
  height: 4.5vh;
  width: 60%;
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5vh;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid;
  margin-top: 3rem;
}
.box1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 0 3.5rem;
}
.img_menu {
  width: 30px;
  margin-right: 4rem;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
  margin-left: -8rem;
}
</style>