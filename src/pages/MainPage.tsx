/* eslint-disable no-nested-ternary */
import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { MainBackground } from '../components/MainBackground';
import { SpotBotSiteLogo } from '../components/Images/SpotBotSiteLogo';
import { UserDataContext } from '../providers/UserDataProvider';
import { logout } from '../apiCalls/logout';

function MainPage ()
{
    const userInfo = useContext(UserDataContext);
    const [ isLogged, setIsLogged ] = useState('loading');

    async function checkIfUserIsLogged ()
    {
        const result = await userInfo.isLogged();
        setIsLogged(String(result));
    }

    async function executeLogout ()
    {
        await logout();
        userInfo.setUserLogged('');
        setIsLogged('false');
    }

    checkIfUserIsLogged();

    return (
        isLogged === 'true'
            ? <MainBackground className="gap-16">
                <div className="flex justify-between items-center w-full">
                    <SpotBotSiteLogo />
                    <Button label="Logout" onClick={executeLogout} />
                </div>
                <div className="flex justify-between items-start w-full">
                    <ul className="flex flex-col justify-center items-start gap-16 w-1/5 text-2xl">
                        <li className="flex justify-center items-center"><Icon iconName="IdentificationCard" color="#7194FF" weight={false} size={48} />My account</li>
                        <li className="flex justify-center items-center"><Icon iconName="Robot" color="#7194FF" weight={false} size={48} />Bots</li>
                        <li className="flex justify-center items-center"><Icon iconName="Wallet" color="#7194FF" weight={false} size={48} />Billing</li>
                    </ul>
                    <Outlet />
                </div>
            </MainBackground>
            : isLogged === 'false'
                ? <Navigate to="/" replace />
                : <MainBackground className="justify-center items-center">
                    <SpotBotSiteLogo />
                </MainBackground>
    );
}

export { MainPage };
