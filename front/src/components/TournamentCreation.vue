<script lang="ts">
import {defineComponent, ref} from "vue";
import PlayerList from './PlayerList.vue';

interface Player {
  id: number;
  name: string;
}

interface PlayerListComponent {
  players: Player[];
}

export default defineComponent({
  components: {PlayerList},
  setup() {
    const tournamentName = ref('');
    const playerListRef = ref<PlayerListComponent | null>(null);

    const startTournament = async () => {
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
        players: players
      };

      console.log("Envoi des données à l'API:", tournamentData);
      const tournamentId = await fetch('https://app-b11b7cae-b031-42ba-9cb8-cd175360c6ae.cleverapps.io/tournaments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(tournamentData),
      })
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
h2 {
  margin-top: 50px;
}
button {
  margin: 20px;
}
</style>