async function updateBotStatus (exchange: string, account: string, status: string)
{
    const body =
    {
        exchange,
        account,
        status
    };

    const fetchResponse = await fetch(
        'http://localhost:8000/bots',
        {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    );

    const responseJson = await fetchResponse.json();

    return responseJson;
}

export { updateBotStatus };
