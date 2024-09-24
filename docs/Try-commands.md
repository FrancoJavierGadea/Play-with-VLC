
## Audios

Reproduce el audio en segundo plano sin UI, y cuando termina cierra el proceso

Ver el **administrador de tareas** para terminarlo

```sh
> vlc --intf dummy --play-and-exit "./src/assets/Piano - Kassia - Shostakovich Waltz 2.mp3"
```

<br>


## Videos

Reproduce el video con la minima UI, sin ningun tipo de control y sin permitir cerrar la ventana

cuando termina cierra el proceso

Ver el **administrador de tareas** para terminarlo

```sh
> vlc --intf dummy --play-and-exit "./src/assets/Piano - Kassia - Shostakovich Waltz 2.mp4"
```

<br>

tambien podemos hacer que se reprodusca unicamente el audio del video

```sh
> vlc --intf dummy --play-and-exit --no-video "./src/assets/Piano - Kassia - Shostakovich Waltz 2.mp4"
```