<template>
  <div>
    <h3>Votre prochain match :</h3>
    <p>{{ match.player1.name }} [{{match.player1.phone}}] vs {{ match.player2.name }} [{{match.player2.phone}}]</p>
  </div>
</template>

<script>
export default {
  props: ['match']
};
</script>

<style scoped>
h2 {
  color: #9b2226;
}

div {
  margin: 50px;
}
</style>