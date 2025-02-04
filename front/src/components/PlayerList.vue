<template>
  <div class="player-table">
    <table>
      <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Numéro de Téléphone</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player, index) in players" :key="index">
        <td>{{ player.lastName }}</td>
        <td>{{ player.firstName }}</td>
        <td>{{ player.phone }}</td>
        <td>
          <button @click="editPlayer(index)">Modifier</button>
          <button @click="deletePlayer(index)">Supprimer</button>
        </td>
      </tr>
      </tbody>
    </table>

    <form @submit.prevent="isEditing ? updatePlayer() : addPlayer()">
      <input type="text" v-model="newPlayer.lastName" placeholder="Nom" required />
      <input type="text" v-model="newPlayer.firstName" placeholder="Prénom" required />
      <input type="number" v-model="newPlayer.phone" placeholder="Numéro de Téléphone" required />
      <button type="submit">{{ isEditing ? 'Enregistrer' : 'Ajouter' }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [],
      newPlayer: { lastName: '', firstName: '', phone: '' },
      isEditing: false,
      editingIndex: null,
    };
  },
  methods: {
    addPlayer() {
      this.players.push({ ...this.newPlayer });
      this.resetForm();
    },
    deletePlayer(index) {
      this.players.splice(index, 1);
    },
    editPlayer(index) {
      this.newPlayer = { ...this.players[index] };
      this.isEditing = true;
      this.editingIndex = index;
    },
    updatePlayer() {
      this.players.splice(this.editingIndex, 1, { ...this.newPlayer });
      this.resetForm();
    },
    resetForm() {
      this.newPlayer = { lastName: '', firstName: '', phone: '' };
      this.isEditing = false;
      this.editingIndex = null;
    }
  }
};
</script>

<style scoped>
.player-table {
  max-width: 80%;
  margin: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  border-bottom: solid 1px #004643;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
}

form input {
  font-size: medium;
}

form {
  display: flex;
  flex-direction: row;
}
input {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
</style>
