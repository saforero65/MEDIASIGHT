<template>
    <div id="scene-container">
        <transition name="fade">
            <div class="modal-overlay" v-if="showModal"></div>
        </transition>
        <div class="position-absolute">
            <transition name="fade">
                <div v-if="showModal" class="modal_proyectos">
                    <h1>Contenido del modal</h1>                    
                    <div class="carrusel">
                        <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            controls
                            indicators
                            background="#fff"
                            img-width="1024"
                            img-height="480"
                        >
                        <b-carousel-slide>
                            <template #img>
                            <img
                                class="d-block img-fluid w-100"
                                width="1024"
                                height="480"
                                src="https://picsum.photos/1024/480/?image=52"
                                alt="image slot"
                            >
                            <p> HOLA </p>
                            </template>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <template #img>
                            <img
                                class="d-block img-fluid w-100"
                                width="1024"
                                height="480"
                                src="https://picsum.photos/1024/480/?image=54"
                                alt="image slot"
                            >
                            <p> HOLA </p>
                            </template>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <template #img>
                            <img
                                class="d-block img-fluid w-100"
                                width="1024"
                                height="480"
                                src="https://picsum.photos/1024/480/?image=58"
                                alt="image slot"
                            >
                            <p> HOLA </p>
                            </template>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <template #img>
                            <img
                                class="d-block img-fluid w-100"
                                width="1024"
                                height="480"
                                src="https://picsum.photos/1024/480/?image=55"
                                alt="image slot"
                            >
                            <p> HOLA </p>
                            </template>
                        </b-carousel-slide>
                        </b-carousel>
                    </div>
                    <button @click="showModal = false">Cerrar</button>
                </div>
            </transition>
            <button class="posicion_boton" @click="showModal = true"> Open modal </button>
        </div>
    </div>
</template>
<script>
// import Firebase from "firebase";

export default {    
    data() {
        return {
            showModal: false,
            sliding: null
        };
    },
    methods: {
    },

};
</script>
<style >
.posicion_boton{
    position: fixed;
    bottom: 0;
    right: 0;
}
.modal-overlay {
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
}
.modal_proyectos{
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
    width:80rem;
    height: 80rem;
}
/* img{
    width: 10%;
} */
</style>