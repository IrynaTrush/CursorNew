export let audio = null;

export function playList() {
  audio = new Audio("../src/audio/item1.mp3");
  audio.play();
}



