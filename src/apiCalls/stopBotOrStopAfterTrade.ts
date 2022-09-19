import { BotStatus } from './BotStatus';

async function stopBotOrStopAfterTrade (exchange: string, account: string, status: BotStatus.IDLE | BotStatus.STOP_AFTER_TRADE)
{
    const body =
    {
        exchange,
        account,
        status
    };

    const fetchResponse = await fetch(
        'http://localhost:8000/bots/stopBotOrStopAfterTrade',
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

export { stopBotOrStopAfterTrade };
