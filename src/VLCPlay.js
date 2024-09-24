
import {spawn} from "node:child_process";
import path from "node:path";

export class VLCPlay {

    constructor(params = {}){

        const {
            vlcPath = process.env.VLC_HOME
        } = params;

        this.vlc = path.join(vlcPath, 'vlc');

        this.port = 8080;
        this.host = '127.0.0.1';
        this.password = '1812';

        this.url = new URL(`http://${this.host}:${this.port}/requests/status.xml`);

        this.status = {};
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

    //MARK: Toggle Pause
    async togglePause(){

        const url = this.url.href + '?' + new URLSearchParams({
            'command': 'pl_pause'
        })
        .toString();

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${btoa(`:${this.password}`)}`
            }
        });

        if(response.ok){

            const statusXML = await response.text();

            const state = new RegExp(/<state>(.*?)<\/state>/g)
                .exec(statusXML)?.at(1);

            console.log('State:', state);

            this.status.state = state;
        }
    }

    //MARK: Volume
    async volume(n){

        const url = this.url.href + '?' + new URLSearchParams({
            'command': 'volume',
            'val': n > 0 ? `+${n}` : n
        })
        .toString();

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${btoa(`:${this.password}`)}`
            }
        });

        if(response.ok){

            const statusXML = await response.text();

            const volume = new RegExp(/<volume>(.*?)<\/volume>/g)
                .exec(statusXML)?.at(1);

            console.log('Volume:', volume);

            this.status.volume = volume;
        }
    }

    //MARK: Toggle Fullscreen
    async toggleFullscreen(){

        
    }

    //MARK: Get info
    async getInfo(){

        const response = await fetch(this.url.href, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${btoa(`:${this.password}`)}`
            }
        });

        if(response.ok){

            const statusXML = await response.text();

            const bitrate = new RegExp(/<info name='Bitrate'>(.*?)<\/info>/g)
                .exec(statusXML)?.at(1);

            const filename = new RegExp(/<info name='filename'>(.*?)<\/info>/g)
                .exec(statusXML)?.at(1);

            const type = new RegExp(/<info name='Type'>(.*?)<\/info>/g)
                .exec(statusXML)?.at(1);

            console.log({
                filename,
                bitrate,
                type
            });
        } 
    }
}

