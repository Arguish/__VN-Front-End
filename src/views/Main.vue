<template>
  <div id="Main">
    <div class="flex justify-around items-center">
      <h2 class="text-center mt-12 mb-0 text-4xl">Hello! {{ user.nick }}</h2>
      <h1 class="text-center mt-12 mb-0 text-4xl">ToDo Teams</h1>
    </div>
    <div class="flex justify-between text-center min-h-[80vh]">
      <div
        class="flex flex-col-reverse justify-between w-1/5 border-orange-100 border-2 rounded-xl m-4"
      >
        <button
          class="m-2 px-4 bg-slate-500 rounded-full hover:bg-slate-600 active:bg-slate-400"
        >
          Añadir grupo
        </button>
        grupos
      </div>
      <div class="w-4/5 border-orange-100 border-2 rounded-xl m-4">Todos</div>
    </div>
  </div>
</template>

<script>
import { register, loggin } from "../services/services.js";
export default {
  name: "Main",
  data: () => ({
    user: {},
    userGroups: [],
  }),
  methods: {
    setLocalUser() {
      const userdata = JSON.parse(localStorage.getItem("User"));
      console.log(userdata);
      this.user = userdata;
    },

    async getUserGroups(id) {
      console.log(id);
    },
  },
  created() {
    this.setLocalUser();
    this.getUserGroups(this.user._id);
  },
};
</script>

<style></style>
