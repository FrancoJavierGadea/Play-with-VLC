### VLC HTTP

Nos permite controlar la reproduccion de un audio o video a traves de peticiones HTTP

Peticiones `HTTP` `GET` indicando el comando en los **query params** a:

```text
http://127.0.0.1:9090/requests/status.xml
```

### Iniciar con la linea de comandos

```sh
> vlc --extraintf http --http-port 9090 --http-password password --repeat "./src/assets/Piano - Kassia - Shostakovich Waltz 2.mp4"
```

Accede al navegador con:

```txt
http://:password@127.0.0.1:9090/requests/status.xml
```

o fetch:

```js
const url = 'http://127.0.0.1:9090/requests/status.xml';
const password = 'password';

const response = await fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${btoa(`:${password}`)}`
    }
})
```

<br><br>

### Comandos como query params

- **Toggle pause**

    ```txt
    ?command=pl_pause
    ```
    ```js
    new URLSearchParams({
        'command': 'pl_pause'
    })
    .toString();
    ```

- **Toggle repeat**

    ```txt
    ?command=pl_repeat
    ```
    ```js
    new URLSearchParams({
        'command': 'pl_repeat'
    })
    .toString();
    ```

- **Toggle Fullscreen**

    ```txt
    ?command=fullscreen
    ```
    ```js
    new URLSearchParams({
        'command': 'fullscreen'
    })
    .toString();
    ```

- **Volume**

    ```txt
    ?command=volume&val=<val>
    ```
    ```js
    let val = 256

    new URLSearchParams({
        'command': 'volume',
        'val': val
    })
    .toString();
    ```

    Usando `+10` y `-10` se aumenta o se reduce `10` unidades de forma relativa al volumen actual

    Tambien podemos definirlo especificamente: 
    
    - con un numero `[0 ... 512]`

    - con un porcentaje `[0% ... 200%]`
  
    > `256` es equivalente a `100%`


#### Docs

- `VLC\lua\http\requests\README.txt`