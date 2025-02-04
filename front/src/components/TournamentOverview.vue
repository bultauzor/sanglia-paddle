<template>
  <h2 class="title">Vue d'ensemble des poules</h2>
  <div class="overview">
    <div v-for="pool in pools" :key="pool.id" class="pool">
      <h2>{{ pool.name }}</h2>
      <table>
        <thead>
        <tr>
          <th>Joueur</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="player in pool.players" :key="player.id">
          <td>{{ player.name }}</td>
          <td>{{ player.points }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pools']
};
</script>

<style scoped>
.title {
  margin-top: 50px;
  margin-bottom: 0;
}

h2 {
  color: #007343;
}

h3 {
  margin-top: 10px;
}

.overview {
  display: flex;
  justify-content: center;
  flex-direction: row;

  .pool {
    margin-left: 20px;
    margin-right: 20px;
  }
}

</style>