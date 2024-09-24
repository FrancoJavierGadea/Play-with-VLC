

### Toggle Pause

```js
const url = 'http://127.0.0.1:9090/requests/status.xml' + '?' + new URLSearchParams({
    'command': 'pl_pause',
})
.toString();

const password = 'password';

const response = await fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${btoa(`:${this.password}`)}`
    }
});
```

**curl**: [Ver pause.bat](./curl/pause.bat)

<br>


### Toggle Fullscreen

```js
const url = 'http://127.0.0.1:9090/requests/status.xml' + '?' + new URLSearchParams({
    'command': 'fullscreen',
})
.toString();

const password = 'password';

const response = await fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${btoa(`:${this.password}`)}`
    }
});
```
**curl**: [Ver fullscreen.bat](./curl/fullscreen.bat)

<br>


### Toggle Repeat

```js
const url = 'http://127.0.0.1:9090/requests/status.xml' + '?' + new URLSearchParams({
    'command': 'pl_repeat',
})
.toString();

const password = 'password';

const response = await fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${btoa(`:${this.password}`)}`
    }
});
```
**curl**: [Ver repeat.bat](./curl/repeat.bat)



### Volumen

- Subir  20 unidades el volumen

    ```js
    const url = 'http://127.0.0.1:9090/requests/status.xml' + '?' + new URLSearchParams({
        'command': 'volume',
        'val': '+20'
    })
    .toString();

    const password = 'password';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${btoa(`:${this.password}`)}`
        }
    });
    ```
    **curl**: [Ver volume-plus-20.bat](./curl/volume-plus-20.bat)

<br>

- Bajar 20 unidades el volumen

    ```js
    const url = 'http://127.0.0.1:9090/requests/status.xml' + '?' + new URLSearchParams({
        'command': 'volume',
        'val': '-20'
    })
    .toString();

    const password = 'password';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${btoa(`:${this.password}`)}`
        }
    });
    ```
    **curl**: [Ver volume-minus-20.bat](./curl/volume-minus-20.bat) 

<br>

- Volumen al 100%

    ```js
    const url = 'http://127.0.0.1:9090/requests/status.xml' + '?' + new URLSearchParams({
        'command': 'volume',
        'val': 256
    })
    .toString();

    const password = 'password';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${btoa(`:${this.password}`)}`
        }
    });
    ```
    **curl**: [Ver set-volume.bat](./curl/set-volume.bat)