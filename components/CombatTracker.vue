<template>
  <div id="players-list">
    {{ list }}
  </div>
  <form id="add-player-form">
    <input placeholder="Character Name" />
    <select>
      <!-- this could probably pull these from the API -->
      <option value="cleric">Cleric</option>
      <option value="monk">Monk</option>
      <option value="ranger">Ranger</option>
      <option value="rogue">Rogue</option>
      <option value="sorcerer">Sorcerer</option>
      <option value="wizard">Wizard</option>
    </select>
    <br />
    <button @click="compilePlayerObject" type="button">Add Character</button>
  </form>
</template>
<script lang="ts" setup>
import { useCombatStore } from "@/store/combat";

const combat = useCombatStore();
const list = combat.playersList;

const props = defineProps({
  players: {
    type: [Array],
    default: [],
  },
});

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
