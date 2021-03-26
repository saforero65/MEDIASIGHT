import Vue from "vue";
import Vuex from "vuex";
// import { auth } from '../firebase/init'
// import router from '../router'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        model: null,
        // usuario: '',
        // error: null,
    },
    getters: {
        getModel(state) {
            return state.model
        }
    },
    mutations: {
        setModel(state, newModel) {
            state.model = newModel
        },
        // setUsuario(state, payload) {
        //     state.usuario = payload
        // },
        // setError(state, payload) {
        //     state.error = payload
        // }
    },
    actions: {
        // crearUsuario({ commit }, usuario) {
        //     auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        //         .then(res => {
        //             console.log(res)
        //             const usuario = {
        //                 email: res.user.email,
        //                 uid: res.user.uid
        //             }
        //             commit('setUsuario', usuario)
        //             router.push('/dashboard')
        //         })
        //         .catch(error => {
        //             console.log(error)
        //             commit('setError', error)
        //         })
        // },
        loadModel: function(context, path) {
            console.log('loading model into store', path)

            var loader;

            switch (path.split('.').pop()) {
                case 'gltf':
                    loader = new GLTFLoader();

                    break;
                case 'glb':
                    loader = new GLTFLoader();
                    break;
                default:
                    loader = null;
                    console.log('not a recognized file type');
            }

            // Instantiate a glTF loader
            //const loader = new GLTFLoader();

            // Load a glTF resource
            loader.load(path, function(model) {
                context.commit('setModel', model.scene)
                console.log(model.scene)
            }, function(xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, function(error) {
                console.log('An error happened', error);
            });
        }
    },
});