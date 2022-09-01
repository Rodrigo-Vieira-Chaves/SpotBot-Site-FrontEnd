/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Icon } from '../components/Icon';
import { LogoutIcon } from '../components/Images/LogoutIcon';
import { MainBackground } from '../components/MainBackground';
import { SpotBotSiteLogo } from '../components/Images/SpotBotSiteLogo';
import { Title } from '../components/Title';
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
            ? <MainBackground className="lg:flex-row gap-8">
                <div className="flex flex-col w-full lg:w-1/5 gap-8 lg:gap-16">
                    <div className="flex lg:flex-col justify-between items-center w-full h-full gap-2">
                        <div className="w-1/3 lg:hidden"></div>
                        <Title title={`${userInfo.userLogged}`} />
                        <div className="flex justify-center items-center gap-1 w-1/3 lg:w-full" onClick={executeLogout}>
                            <LogoutIcon className="w-7 h-7" />
                            <p>Logout</p>
                        </div>
                    </div>
                    <ul className="flex lg:flex-col justify-center items-center lg:gap-8 w-full text-base">
                        <li className="w-full flex justify-center lg:justify-start items-center"><NavLink className="flex justify-center items-center gap-1" to={'/main/profile'}><Icon iconName="IdentificationCard" weight={true} size={30} />My account</NavLink></li>
                        <li className="w-full flex justify-center lg:justify-start items-center"><NavLink className="flex justify-center items-center gap-1" to={'/main/bots'}><Icon iconName="Robot" weight={true} size={30} />Bots</NavLink></li>
                        <li className="w-full flex justify-center lg:justify-start items-center"><NavLink className="flex justify-center items-center gap-1" to={'/main/billing'}><Icon iconName="Wallet" weight={true} size={30} />Billing</NavLink></li>
                    </ul>
                </div>
                <Outlet />
            </MainBackground>
            : isLogged === 'false'
                ? <Navigate to="/" replace />
                : <MainBackground className="justify-center items-center">
                    <SpotBotSiteLogo />
                </MainBackground>
    );
}

export { MainPage };
