<template>
  <div id="scene-container">
    <transition name="fade">
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>
    <div class="position-absolute">
      <transition name="fade">
        <div v-if="showModal" class="modal_proyectos">
          <h1>Contenido del modal</h1>

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
          <button @click="showModal = false">Cerrar</button>
        </div>
      </transition>
      <button class="posicion_boton" @click="showModal = true">
        Open modal
      </button>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase/init";

export default {
  data() {
    return {
      proyectos: [],
      showModal: false,
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
  },
  created() {
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
.posicion_boton {
  position: fixed;
  bottom: 0;
  right: 0;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}
.modal_proyectos {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 3%;
  border-radius: 10px;
  z-index: 101;
}
.carrusel_p {
  width: 80rem;
  height: 80rem;
}
/* img{
    width: 10%;
} */
</style>