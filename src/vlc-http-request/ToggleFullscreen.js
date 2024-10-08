

export default async function toggleFullscreen({url, password} = {}) {
    
    const request = url + '?' + new URLSearchParams({
        'command': 'fullscreen'
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

        const fullscreen = new RegExp(/<fullscreen>(.*?)<\/fullscreen>/g)
            .exec(statusXML)?.at(1);

        return {fullscreen};
    }
}