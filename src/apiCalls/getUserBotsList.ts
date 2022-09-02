async function getUserBotsList ()
{
    const fetchResponse = await fetch(
        'http://localhost:8000/bots',
        {
            method: 'GET',
            credentials: 'include',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        }
    );

    const responseJson = await fetchResponse.json();

    return responseJson;
}

export { getUserBotsList };
