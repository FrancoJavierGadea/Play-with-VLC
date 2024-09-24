
import {spawn} from "node:child_process";
import path from "node:path";
import togglePause from "./vlc-http-request/TogglePause.js";
import setVolume from "./vlc-http-request/Volume.js";
import toggleFullscreen from "./vlc-http-request/ToggleFullscreen.js";
import toggleRepeat from "./vlc-http-request/ToggleRepeat.js";
import getInfo from "./vlc-http-request/GetInfo.js";

export class VLCPlay {

    constructor(params = {}){

        const {
            vlcPath = process.env.VLC_HOME,
            port = 8080
        } = params;

        this.vlc = path.join(vlcPath, 'vlc');

        this.port = port;
        this.host = '127.0.0.1';
        this.password = '1812';

        this.url = new URL(`http://${this.host}:${this.port}/requests/status.xml`);
    }

    //MARK: Play
    #vlcProcess = null;

    play(file, flags = []){

        if(!file) return;

        this.#vlcProcess = spawn(this.vlc, [
            '--intf', 'dummy', 
            '--extraintf', 'http',
            '--http-host', this.host, 
            '--http-port', this.port, 
            '--http-password', this.password,
            '--play-and-exit', ...flags,
            file
        ]);

        this.#vlcProcess.stdout.on('data', (data) => {

            console.log(`VLC output: ${data}`);
        });
        
        this.#vlcProcess.stderr.on('data', (data) => {
        
            console.error(`VLC error: ${data}`);
        });
        
        this.#vlcProcess.on('close', (code) => {
        
            console.log(`VLC process exited with code ${code}`);
        });
    }

    //MARK: Stop
    stop(){

        if(this.#vlcProcess){

            this.#vlcProcess.kill();
            this.#vlcProcess = null;
        }
    }

    //MARK: Controls
    async togglePause(){

        const result = await togglePause({url: this.url.href, password: this.password});

        console.log(result);
    }

    async setVolume(value){

        const result = await setVolume({url: this.url.href, password: this.password, value});

        console.log(result);
    }

    async toggleFullscreen(){

        const result = await toggleFullscreen({url: this.url.href, password: this.password});

        console.log(result);
    }

    async toggleRepeat(){

        const result = await toggleRepeat({url: this.url.href, password: this.password});

        console.log(result);
    }

    async getInfo(){

        const result = await getInfo({url: this.url.href, password: this.password});
        
        console.log(result);
    }
}


