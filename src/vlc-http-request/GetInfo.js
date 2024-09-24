
export default async function getInfo({url, password} = {}) {
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${btoa(`:${password}`)}`
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

        const fullscreen = new RegExp(/<fullscreen>(.*?)<\/fullscreen>/g)
            .exec(statusXML)?.at(1);

        const volume = new RegExp(/<volume>(.*?)<\/volume>/g)
            .exec(statusXML)?.at(1);

        const state = new RegExp(/<state>(.*?)<\/state>/g)
            .exec(statusXML)?.at(1);

        console.log({
            filename,
            bitrate,
            type,
            fullscreen,
            state,
            volume
        });
    }
}