<template>
    <div id="scene-container">
    <transition name="fade">
        <div class="modal-overlay" v-if="showModal"></div>
    </transition>
    <div class="position-absolute">
        <transition name="fade">
            <div v-if="showModal" class="modal_proyectos">
                <h1>Proyectos</h1>
                <div class ="carrusel">
                    <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        controls
                        indicators
                        no-animation
                        img-width="1024"
                        img-height="480"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                    >
                        <div v-for="item in proyectos" v-bind:key="item.id">
                            <b-carousel-slide v-if="item.data.estado == 'aprobado'">
                                <template #img>
                                    <div class="contenedor_carrusel">
                                        <img                                            
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
                    </b-carousel>
                </div>
                <a class="posicion_boton_cerrar" @click="showModal = false">
                    <img src="@/assets/img/icons/cerrar.svg" alt="logo_umng"/>
                </a>
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
.posicion_boton_cerrar img{
    width: 3%;
}
.posicion_boton_cerrar {
    position: fixed;
    top: 2%;
    right: 2%;
    transform: translate(98%, -2%);
    cursor: pointer;
}
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.2);
}
.modal_proyectos {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    height: auto;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 2% 4% 3% 4%;
    border-radius: 10px;
    z-index: 101;
}
.modal_proyectos h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5%;
}
.contenedor_carrusel {
    background: rgba(0, 0, 0, 0);
    margin: 0 15%;
}
.carousel{
    position: inherit;
}
.carousel-control-prev, .carousel-control-next {
    top: 15%;
    height: 60%;
}
.contenedor_carrusel img {
    width: 100%;
    height: 48vh;
    object-fit: contain;
    object-position: center center;
    overflow: hidden;
}
/* img{
    width: 10%;
} */
</style>