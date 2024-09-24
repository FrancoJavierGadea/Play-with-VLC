import { VLCPlay } from "./VLCPlay.js";
import path from "node:path";


const song = path.normalize("C:/Users/1812/Music/es/Andres Calamaro - La parte de adelante.mp3");

const video = path.join(import.meta.dirname, "./assets/Piano - Kassia - Shostakovich Waltz 2.mp4");

const VLC = new VLCPlay();

VLC.play(video);


const KEYS = {
    CTRL_C: '\u0003',
    ARROW_UP: '\u001b[A',
    ARROW_DOWN: '\u001b[B',
    ARROW_LEFT: '\u001b[D',
    ARROW_RIGHT: '\u001b[C',
    SPACE: ' '
};

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {

    switch (key) {

        case KEYS.CTRL_C:
            VLC.stop();
            process.exit();
          
        case 'p':
        case 'P':
        case KEYS.SPACE:
            VLC.togglePause();
            break;

        case KEYS.ARROW_UP:
            VLC.setVolume('+20');
            break;

        case KEYS.ARROW_DOWN:
            VLC.setVolume('-20');
            break;

        case 'f':
        case 'F':
            VLC.toggleFullscreen();
            break;

        case 'r':
        case 'R':
            VLC.toggleRepeat();
            break;

        case 'i':
        case 'I':
            VLC.getInfo();
            break;
    }
});