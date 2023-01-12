<template>
  <div>Count: {{ classes.count }}</div>
  <div id="players-list">
    {{ list }}
  </div>
  <form id="add-player-form">
    <input placeholder="Character Name" />
    <select>
      <!-- this could probably pull these from the API -->
      <option v-for="type in classes.results" v-bind:value="type.index">
        {{ type.name }}
      </option>
    </select>
    <br />
    <button @click="compilePlayerObject" type="button">Add Character</button>
  </form>
</template>
<script lang="ts" setup>
import { useCombatStore } from "@/store/combat";

const combat = useCombatStore();
const list = combat.playersList;

const response = await useFetch("https://www.dnd5eapi.co/api/classes");

const { data: classes } = response;

function addPlayer(player: Object) {
  combat.addPlayer(player);
}

function compilePlayerObject() {
  addPlayer({
    name: "Billy Bob",
    class: "Ranger",
  });
}
</script>
