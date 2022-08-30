import { Button } from './Button';
import { SpotBotSiteLogo } from './Images/SpotBotSiteLogo';
import { useNavigate } from 'react-router-dom';

interface PropTypes
{
    className?: string;
}

function NavBar (props?: PropTypes)
{
    const navigate = useNavigate();

    return (
        <nav className={`flex justify-between items-center w-full ${props?.className ? props.className : ''}`}>
            <SpotBotSiteLogo />
            <ul className="flex justify-center items-center gap-16 text-base">
                <li><a href="#coins">Coins</a></li>
                <li><a href="#FAQ">FAQ</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li>Telegram</li>
            </ul>
            <div className="flex justify-center items-center">
                <Button className="mr-8 bg-transparent border-4 border-[#7194FF]" label="LOGIN" onClick={() => navigate('/login')} />
                <Button label="SIGNUP" onClick={() => navigate('/register')} />
            </div>
        </nav>
    );
}

export { NavBar };
