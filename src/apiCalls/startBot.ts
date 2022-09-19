async function startBot (exchange: string, account: string)
{
    const body =
    {
        exchange,
        account
    };

    const fetchResponse = await fetch(
        'http://localhost:8000/bots/startBot',
        {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    );

    const responseJson = await fetchResponse.json();

    return responseJson;
}

export { startBot };
