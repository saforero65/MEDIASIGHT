<template>
  <div id="scene-container">
    <div class="position-absolute">
      <transition name="fade">
         <div class="modal_profesores" v-show="active">
           <h1>Contenido del modal</h1>
        </div>
      </transition>
      <button class="posicion_boton_Profesores" @mouseover ="mouseOver" @mouseleave = "active = false" >
        Open modal P
      </button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: false,
    };
  },
  methods: { 
    mouseOver: function()
    {this.active = !this.active;}
  }};
</script>
<style >
.posicion_boton_Profesores {
  position: fixed;
  bottom: 10%;
  right: 0;
  
}
.modal_profesores {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 3%;
  border-radius: 10px;
  z-index: 101;
}
</style>