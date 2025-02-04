<template>
  <div class="participant-selector">
    <h2>Bienvenue au Tournoi {{ tournamentId }}</h2>
    <label for="participant-select">Sélectionnez votre nom :</label>
    <select id="participant-select" v-model="selectedParticipant">
      <option disabled value="">-- Choisissez votre nom --</option>
      <option v-for="participant in participants" :key="participant.id" :value="participant">
        {{ participant.name }} {{ participant.surname }}
      </option>
    </select>

    <button :disabled="!selectedParticipant" @click="goToPlayerDashboard">
      Accéder à mon espace
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const tournamentId = route.params.id;

const participants = ref([
  { id: 1, name: 'Alice', surname: 'Dupont' },
  { id: 2, name: 'Bob', surname: 'Martin' },
  { id: 3, name: 'Charlie', surname: 'Durand' }
]); // Exemple de participants

const selectedParticipant = ref(null);

function goToPlayerDashboard() {
  const participantName = `${selectedParticipant.value.name}${selectedParticipant.value.surname}`;
  router.push(`/tournament/${tournamentId}/${participantName}`);
}
</script>

<style scoped>
.participant-selector {
  margin: 20px;
  text-align: center;
}

select {
  padding: 5px;
  margin: 10px;
}

button {
  background-color: #004643;
  color: white;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
