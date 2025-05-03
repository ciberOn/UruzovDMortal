import { ARENA } from "./constants.js";

export class Game {
    init(){
        this.initCanvas();
    }

    initCanvas() {
        const canvas = document.getElementById('canvas');
        canvas.width = ARENA.WIDTH;
    }
}