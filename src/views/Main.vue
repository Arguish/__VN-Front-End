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
          @click=""
          class="m-2 px-4 bg-slate-500 rounded-full hover:bg-slate-600 active:bg-slate-400"
        >
          Añadir grupo
        </button>
        <div>
          <h1>---V--- Grupos ---V---</h1>
          <div
            id="groupItem"
            v-for="(item, index) in userGroups"
            class="relative flex justify-center items-center hover:bg-slate-950 transition-all"
          >
            <h1
              class="text-sm text-center border-2 border-orange-100 rounded-md p-2"
            >
              {{ item._id }}
            </h1>
            <button
              @click="() => deleteThisGroup($event, item._id)"
              class="absolute right-1 px-1 text-center border-2 border-red-500 text-red-500 bg-red-500/40 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div class="w-4/5 border-orange-100 border-2 rounded-xl m-4">Todos</div>
    </div>
  </div>
</template>

<script>
import { getUserGroups, deleteGroup } from "../services/services.js";
export default {
  name: "Main",
  data: () => ({
    user: {},
    userGroups: [],
    activeGroup: "",
  }),
  methods: {
    async newToDo() {},

    setLocalUser() {
      const userdata = JSON.parse(localStorage.getItem("User"));
      this.user = userdata;
    },
  },
  async created() {
    this.setLocalUser();
    this.userGroups = await getUserGroups(this.user);
  },
  async deleteThisGroup(ev, id) {
    deleteGroup(id);
  },
};
</script>

<style scoped>
#groupItem > button {
  visibility: collapse;
}
#groupItem:hover > h1 {
  opacity: 40%;
}
#groupItem:hover > button {
  visibility: visible;
}
</style>
