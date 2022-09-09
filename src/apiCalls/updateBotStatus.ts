type BotStatus = 'Idle' | 'Active' | 'Stop after Trade' | 'Waiting Payment' | 'Error';

async function updateBotStatus (exchange: string, account: string, status: BotStatus)
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
            credentials: 'include',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    );

    const responseJson = await fetchResponse.json();

    return responseJson;
}

export { updateBotStatus };
export type { BotStatus };
