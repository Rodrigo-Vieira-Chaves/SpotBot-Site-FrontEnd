async function createBot (exchange: string, account: string, apiKey: string, apiSecret: string)
{
    const body =
    {
        exchange,
        account,
        apiKey,
        apiSecret
    };

    const fetchResponse = await fetch(
        'http://localhost:8000/bots',
        {
            method: 'POST',
            credentials: 'include',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    );

    const responseJson = await fetchResponse.json();

    return responseJson;
}

export { createBot };
