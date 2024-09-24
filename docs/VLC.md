

Crea un archivo `vlc-help.txt` en la ruta actual
```sh
> vlc --help
```


Reproducir desde la consola

```sh
> vlc path/to/song.mp3
```

- `--no-audio` Desabilita el audio, solo se reproduce el video
- `--no-video` Desabilita el video, solo se reproduce el audio
  
- `--fullscreen` Abre en patalla completa

- `--repeat` Repetir indefinidamente el video o audio en bucle

- `--start-paused` Inicia pausado

- `--play-and-stop` Reproduce y pone en pausa el terminar
- `--play-and-exit` Reproduce y cierra al terminar


#### Volumen

`--no-volume-save` Inicia con volumen al 100% ignorando el volumen previamente guardado

**Windows**:  Windows Multimedia Device output

`--mmdevice-volume=<float [0.0 ... 1.25]>`





## VLC interfaces / modulos

`-I` `--intf` Nos permite agregar el modulo principal

`--extraintf` Nos permite agregar un modulo secundario


<br><br>

### VLC Dummy

```sh
> vlc --intf dummy path/to/song.mp3
```

Reproduce los **audios** sin la UI, como un proceso en segundo plano

Reproduce los **videos** con la minima UI, mostrando unicamente el video, sin controles ni menus

> agregando `--no-video` tenemos solo el **audio** del video en segundo plano


<br><br>




- [VLC Command line](https://wiki.videolan.org/Documentation:Command_line/)
- [VLC http interface](https://wiki.videolan.org/Documentation:Modules/http_intf/)
- [VLC http requests](https://wiki.videolan.org/VLC_HTTP_requests/)
- [VLC Dummy](https://wiki.videolan.org/Documentation:Modules/dummy/)