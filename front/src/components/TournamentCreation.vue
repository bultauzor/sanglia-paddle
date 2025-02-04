<script lang="ts">
import {defineComponent, ref} from "vue";
import PlayerList from "./PlayerList.vue";

export default defineComponent({
  components: {PlayerList},
  setup() {
    const tournamentName = ref('');
    const playerListRef = ref(null);

    const startTournament = () => {
      const players = playerListRef.value?.players || [];

      if (!tournamentName.value.trim()) {
        alert('Veuillez entrer un nom pour le tournois.');
        return;
      }

      if (players.length < 3 || players.length > 10) {
        alert('Le nombre de participants doit être compris entre 3 et 10.');
        return;
      }

      const tournamentData = {
        name: tournamentName.value,
        participants: players
      };

      console.log("Envoi des données à l'API:", tournamentData);
    };

    return { tournamentName, playerListRef, startTournament };
  }
});
</script>

<template>
  <h1>Création d'un tournois</h1>
  <h2>Nom du tournois :</h2>
  <input type="text" v-model="tournamentName" placeholder="Nom" />
  <h2>Participants :</h2>
  <PlayerList ref="playerListRef" />
  <button @click="startTournament">Démarrer le tournois</button>
</template>

<style scoped>
h1 {
  color: #004643;
}
h2 {
  margin-top: 50px;
}
button {
  margin: 20px;
}
</style>