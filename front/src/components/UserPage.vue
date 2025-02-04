<template>
  <div>
    <h1>Tableau de bord du tournois: <br>{{ tournament.name }}</h1>
    <TournamentOverview :pools="tournament.pools" />
    <NextMatch :match="tournament.nextMatch" />
    <ScoreInput :match="tournament.nextMatch" @submit-score="updateScore" />
  </div>
</template>

<script>
import TournamentOverview from './TournamentOverview.vue';
import NextMatch from './NextMatch.vue';
import ScoreInput from './ScoreInput.vue';

export default {
  components: { TournamentOverview, NextMatch, ScoreInput },
  props: ['tournament'],
  data(){
    return {
      tournament: {
        id: 1,
        name: "Tournoi d'Hiver 2025",
        pools: [
          {
            id: "A",
            name: "Poule A",
            players: [
              {id: 1, name: "Alice Dupont", phone: "0601020304", points: 4},
              {id: 2, name: "Bob Martin", phone: "0602030405", points: 2},
              {id: 3, name: "Charlie Durand", phone: "0603040506", points: 3}
            ]
          },
          {
            id: "B",
            name: "Poule B",
            players: [
              {id: 4, name: "David Lemoine", phone: "0604050607", points: 1},
              {id: 5, name: "Emma Bernard", phone: "0605060708", points: 5},
              {id: 6, name: "Frank Petit", phone: "0606070809", points: 3}
            ]
          }
        ],
        nextMatch: {
          id: 103,
          player1: {id: 1, name: "Alice Dupont", phone: "0601020304"},
          player2: {id: 3, name: "Charlie Durand", phone: "0603040506"},
          scheduledAt: "2025-02-10T15:00:00Z",
          status: "upcoming"
        }
      }
    }
  },
  methods: {
    updateScore(score) {
      console.log('Score soumis:', score);
    }
  }
};
</script>

<style scoped>
h1 {
  color: #004643;
  margin-bottom: 20px;
}
</style>