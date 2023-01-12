// store/combat.js

import { defineStore } from "pinia";

export const useCombatStore = defineStore({
  id: "combat-store",
  state: () => {
    return {
      classList: [],
      playersList: [],
    };
  },
  actions: {
    addPlayer(player) {
      this.playersList.push(player);
    },
  },
  getters: {
    players: (state) => state.playersList,
  },
});
