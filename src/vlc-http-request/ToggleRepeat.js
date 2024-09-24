
export default async function toggleRepeat({url, password} = {}) {
    
    const request = url + '?' + new URLSearchParams({
        'command': 'pl_repeat'
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

        const repeat = new RegExp(/<repeat>(.*?)<\/repeat>/g)
            .exec(statusXML)?.at(1);

        return {repeat};
    }
}