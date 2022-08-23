import { UserDataProps } from '../providers/UserDataProvider';
import { checkIfTokenIsExpired } from '../utils/checkIfTokenIsExpired';

async function makeDeposit (ammount: number, userInfo: UserDataProps)
{
    const body =
    {
        ammount,
        source:
        {
            clientCPF: userInfo.userLogged.client.cpf,
            account:
            {
                branch: userInfo.userLogged.account.branch,
                branchDigit: userInfo.userLogged.account.branchDigit,
                accountNumber: userInfo.userLogged.account.accountNumber,
                accountNumberDigit: userInfo.userLogged.account.accountNumberDigit,
            }
        }
    };

    const fetchResponse = await fetch(
        'http://localhost:8000/makeDeposit',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${userInfo.userLogged.token}` },
            body: JSON.stringify(body)
        }
    );

    const responseJson = await fetchResponse.json();

    checkIfTokenIsExpired(responseJson.message, userInfo);

    return responseJson;
}

export { makeDeposit };
