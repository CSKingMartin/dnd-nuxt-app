// store/combat.js

import { defineStore } from "pinia";

export const useCombatStore = defineStore({
  id: "combat-store",
  state: () => {
    return {
      active: false,
      initiative: [], // ordered list of monsters and players
      monstersList: [],
      playersList: [],
    };
  },
  actions: {
    addMonster(monster) {
      this.monstersList.push(monster);
    },
    addPlayer(player) {
      this.playersList.push(player);
    },
    /*
      add monster to combat
      start combat
      end combat
      deal damage
      check if any are dead? unsure at this stage of the loop
    */
  },
  getters: {
    players: (state) => state.playersList,
  },
});
