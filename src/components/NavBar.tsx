import { Button } from './Button';
import { SpotBotSiteLogo } from './Images/SpotBotSiteLogo';

interface PropTypes
{
    className?: string;
}

function NavBar (props?: PropTypes)
{
    return (
        <nav className={`flex justify-between items-center w-full ${props?.className ? props.className : ''}`}>
            <SpotBotSiteLogo />
            <ul className="flex justify-center items-center gap-16 text-base">
                <li>Coins</li>
                <li>FAQ</li>
                <li>Pricing</li>
                <li>Telegram</li>
            </ul>
            <div className="flex justify-center items-center">
                <Button className="mr-8 bg-transparent border-4 border-[#7194FF]" label="LOGIN" />
                <Button label="SIGNUP" />
            </div>
        </nav>
    );
}

export { NavBar };
