

export default async function setVolume({url, password, value} = {}){

    const request = url + '?' + new URLSearchParams({
        'command': 'volume',
        'val': value
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

        const volume = new RegExp(/<volume>(.*?)<\/volume>/g)
            .exec(statusXML)?.at(1);

        return {volume};
    }
}