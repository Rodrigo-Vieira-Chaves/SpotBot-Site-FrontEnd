import { Navigate, Outlet } from 'react-router-dom';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { MainBackground } from '../components/MainBackground';
import { SpotBotSiteLogo } from '../components/Images/SpotBotSiteLogo';
import { UserDataContext } from '../providers/UserDataProvider';
import { useContext } from 'react';

function MainPage ()
{
    const userInfo = useContext(UserDataContext);

    return (
        // userInfo.isLogged
        true
            ? <MainBackground className="gap-16">
                <div className="flex justify-between items-center w-full">
                    <SpotBotSiteLogo />
                    <Button label="Logout"/>
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
            : <Navigate to="/" replace />
    );
}

export { MainPage };
