# Play with VLC

Ejemplo de como iniciar `VLC` desde la consola y controlar la reproduccion a traves de **peticiones HTTP**

<br>

### VLC Path

Puedes indicar la **ruta** a la carpeta donde esta instalado `VLC` manualmente

```js
import path from "node:path";

new VLCPlay({

    vlcPath: path.normalize('C:/Program Files/VideoLAN/VLC');
});
```

o establecer la **variable de entorno** `VLC_HOME` con la ruta a la carpeta 
