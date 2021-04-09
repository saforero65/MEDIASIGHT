<template>
  <div>
    <template v-if="user">
      <div>{{ user.email }}</div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nombre</th>
            <th scope="col">correo</th>
            <th scope="col">tipo</th>
          </tr>
        </thead>
        <tbody id="tabla">
          <tr>
            <th scope="row">{{ id }}</th>
            <td>{{ nombre }}</td>
            <td>{{ correo }}</td>
            <td>{{ tipo }}</td>
          </tr>
        </tbody>
      </table>
    </template>
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

      id: null,
      nombre: null,
      correo: null,
      tipo: null,
    };
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
