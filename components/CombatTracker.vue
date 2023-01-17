<template>
  <div>Count: {{ classes.count }}</div>
  <div id="players-list">
    <div v-for="player in list">
      <p>{{ player.name }}</p>
      <p>{{ player.charClass }}</p>
      <p>HP: {{ player.hp }} / {{ player.hp }}</p>
    </div>
  </div>
  <form id="add-player-form">
    <input placeholder="Character Name" v-model="name" />
    <select v-model="charClass">
      <option v-for="type in classes.results" v-bind:value="type.index">
        {{ type.name }}
      </option>
    </select>
    <br />
    <input maxLength="3" v-model="hp" placeholder="HP" @keydown="onHPInput" />
    <br />
    <button @click="compilePlayerObject" type="button">Add Character</button>
  </form>
</template>

<script lang="ts" setup>
import { useCombatStore } from "@/store/combat";

const combat = useCombatStore();
const list = combat.playersList;
let name = ref();
let charClass = ref();
let hp = ref();

const response = await useFetch("https://www.dnd5eapi.co/api/classes");
const { data: classes } = response;

function addPlayer(player: Object) {
  combat.addPlayer(player);
}

function compilePlayerObject() {
  if (name.value && charClass.value && hp.value) {
    addPlayer({
      name: name.value,
      charClass: charClass.value,
      hp: hp.value,
    });
    // clear input fields
    name.value = "";
    charClass.value = "";
    hp.value = "";
  }
}

function onHPInput(e: KeyboardEvent) {
  if (
    !(e.keyCode >= 48 && e.keyCode <= 57) &&
    e.keyCode !== 127 &&
    e.keyCode !== 8
  ) {
    e.preventDefault();
  }
}
</script>
