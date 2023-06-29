<template>
  <div id="Loggin" class="overflow-hidden">
    <h1 class="text-center mt-12 mb-0 text-6xl">ToDo Teams</h1>
    <div class="flex justify-around items-center overflow-hidden h-[80vh] my-0">
      <hr />
      <form class="flex flex-col justify-center text-center gap-12">
        <div class="flex flex-col justify-center text-center gap-2">
          <p>Nombre</p>
          <input type="text" name="" id="" />
          <p>Mail</p>
          <input type="mail" name="" id="" />
          <p>Pass</p>
          <input type="password" name="" id="" />
          <p>Pass confirmation</p>
          <input type="password" name="" id="" />
        </div>
        <button>Registrarse</button>
      </form>
      <hr class="border-r-2 h-96" />
      <form class="flex flex-col justify-center text-center gap-12">
        <div class="flex flex-col justify-center text-center gap-2">
          <p>Mail</p>
          <input type="text" name="" id="" />
          <p>Pass</p>
          <input type="text" name="" id="" />
        </div>
        <button>Conectar</button>
      </form>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loggin",
};
</script>

<style></style>
