<template>
  <div v-if="match" class="match-entry">
    <h3>Entrer le score de votre match :</h3>

    <div v-for="(set, index) in scores.sets" :key="index">
      <span>Set {{ index + 1 }} : </span>
      <input type="number" v-model.number="set.player1" :placeholder="'Score de ' + match.player1.name" min="0" max="6" />
      <input type="number" v-model.number="set.player2" :placeholder="'Score de ' + match.player2.name" min="0" max="6" />
    </div>

    <div v-if="isTie">
      <span>Super Tie-break : </span>
      <input type="number" v-model.number="scores.tiebreak.player1" :placeholder="'Score de ' + match.player1.name" min="0" />
      <input type="number" v-model.number="scores.tiebreak.player2" :placeholder="'Score de ' + match.player2.name" min="0" />
    </div>

    <button @click="submitScore">Enregistrer le score</button>
  </div>
</template>

<script>
export default {
  props: ['match'],
  data() {
    return {
      scores: {
        sets: [
          { player1: null, player2: null },
          { player1: null, player2: null }
        ],
        tiebreak: { player1: null, player2: null }
      }
    };
  },
  computed: {
    isTie() {
      const player1Wins = this.scores.sets.filter(set => set.player1 > set.player2).length;
      const player2Wins = this.scores.sets.filter(set => set.player2 > set.player1).length;
      return player1Wins === player2Wins && this.scores.sets.filter(set => set.player1 == null || set.player2 == null).length === 0;
    }
  },
  methods: {
    submitScore() {
      this.$emit('submit-score', this.scores);
    }
  }
};
</script>

<style scoped>
input {
  margin: 5px;
  padding: 5px;
  min-width: 30%;
}

button {
  background-color: #004643;
  color: white;
  padding: 5px 10px;
  margin: 20px;
}

span {
  font-weight: bold;
  font-size: large;
}
</style>

