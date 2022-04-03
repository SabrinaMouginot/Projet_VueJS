<template>
  <div class="hello">
    <p>Hello from Hello Form component</p>
    <input v-model="pseudo" />
    <button @click="savePseudo">Save your pseudo</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";//on ne peut pas transférer les données , s'il n'y a pas mapMutations
export default {
  name: "HelloForm",
  data: function () {
    return {
      pseudo: "",
    };
  },
  methods: {
    ...mapMutations(["setPseudo"]), //toutes fonctions de vuex ont ... devant.
    savePseudo() {
      console.error("saving pseudo into store", this.pseudo);
      this.setPseudo(this.pseudo); //   le setpseudo va utiliser le mapmutation
    },
  },
};
</script>

<style>
</style>