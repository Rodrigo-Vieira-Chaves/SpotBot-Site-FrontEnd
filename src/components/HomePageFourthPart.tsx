import { Button } from './Button';
import { Title } from './Title';
import { useNavigate } from 'react-router-dom';

function HomePageFourthPart ()
{
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center gap-7 w-full mt-24 text-center">
            <Title id="pricing" title="Pricing" className="w-full" />
            <p>We charge 25% of the gains per month, if the bot does not deliver any gains, you don’t need to pay ;).</p>
            <p>We accept payment in USDC through the <strong>BSC</strong> network.</p>
            <Button label="Start Trading" onClick={() => navigate('/register')} />
        </div>
    );
}

export { HomePageFourthPart };
