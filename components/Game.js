import { makeObservable, observable, action } from "mobx";
import words from "./Words";

export class Game {
  players = [];
  isRunning = false;
  letters = [];
  word = "";
  turnInterval = 1000;

  constructor() {
    makeObservable(this, {
      players: observable,
      isRunning: observable,
      letters: observable,
      word: observable,
      addToGame: action,
      removeFromGame: action,
      startGame: action,
      turnInterval: observable,
      setInterval: action,
    });
  }

  addToGame(player) {
    const index = this.players.findIndex((p) => p.id == player.id);

    if (index != -1) {
      this.removeFromGame(player.id);
    } else {
      this.players.push(player);
    }
  }

  startGame() {
    this.isRunning = true;
    this.word = words[Math.floor(Math.random() * words.length)];
  }

  removeFromGame(playerID) {
    const index = this.players.findIndex((p) => p.id == playerID);

    if (index != -1) {
      this.players.splice(index, 1);
    }
  }

  setInterval(newTime){
    this.turnInterval = newTime;
  }
}
