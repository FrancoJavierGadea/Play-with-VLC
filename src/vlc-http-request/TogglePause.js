
export default async function togglePause({url, password} = {}) {
    
    const request = url + '?' + new URLSearchParams({
        'command': 'pl_pause'
    })
    .toString();

    const response = await fetch(request, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${btoa(`:${password}`)}`
        }
    });

    if(response.ok){

        const statusXML = await response.text();

        const state = new RegExp(/<state>(.*?)<\/state>/g)
            .exec(statusXML)?.at(1);

        return {state};
    }
}