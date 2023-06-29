<script>
import { register, loggin } from "../services/services.js";

export default {
  name: "Loggin",
  data: () => ({
    nick: "",
    mail: "",
    pass1: "",
    pass2: "",
  }),
  methods: {
    logHand() {
      if (this.mail === "" || this.pass1 === "") {
        alert("No se pueden dejar campos vacios");
      } else {
        loggin(this.mail, this.pass1);
      }
    },
    regHand() {
      if (this.pass1 !== this.pass2) {
        alert("Error pass matching");
      } else if (this.nick === "" || this.mail === "" || this.pass1 === "") {
        alert("No se pueden dejar campos vacios");
      } else {
        register(this.nick, this.mail, this.pass1);
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <div id="Loggin" class="overflow-hidden">
    <h1 class="text-center mt-12 mb-0 text-6xl">ToDo Teams</h1>
    <div class="flex justify-around items-center overflow-hidden h-[80vh] my-0">
      <hr />
      <form class="flex flex-col justify-center text-center gap-12">
        <div class="flex flex-col justify-center text-center gap-2">
          <p>Nombre</p>
          <input type="text" v-model="nick" placeholder="Nick..." />
          <p>Mail</p>
          <input type="mail" v-model="mail" placeholder="somthing@domain.com" />
          <p>Pass</p>
          <input type="password" v-model="pass1" placeholder="1234" />
          <p>Pass confirmation</p>
          <input type="password" v-model="pass2" placeholder="1234" />
        </div>
        <button
          @click="
            (e) => {
              e.preventDefault();
              regHand();
            }
          "
        >
          Registrarse
        </button>
      </form>
      <hr class="border-r-2 h-96" />
      <form class="flex flex-col justify-center text-center gap-12">
        <div class="flex flex-col justify-center text-center gap-2">
          <p>Mail</p>
          <input type="mail" v-model="mail" placeholder="somthing@domain.com" />
          <p>Pass</p>
          <input type="password" v-model="pass1" placeholder="1234" />
        </div>
        <button
          @click="
            (e) => {
              e.preventDefault();
              logHand();
            }
          "
        >
          Conectar
        </button>
      </form>
      <hr />
    </div>
  </div>
</template>

<style></style>
