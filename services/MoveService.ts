const baseURL = 'http://localhost:8081/moves'

export const moveService = async ({direction}: any) => {
    let response = await fetch(`${baseURL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({direction})
    });

    let result = await response.json();
    
    return result;
};
