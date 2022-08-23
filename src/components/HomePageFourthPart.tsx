import { Button } from './Button';
import { Title } from './Title';

function HomePageFourthPart ()
{
    return (
        <div className="flex flex-col justify-center items-center gap-14 w-full mt-24 text-center">
            <Title title="Pricing" className="w-full" />
            <p>We charge 25% of the gains per month, if the bot does not deliver any gains, you don’t need to pay ;).</p>
            <p>We accept payment in USDC through the <strong>BSC</strong> network.</p>
            <Button label="Start Trading"/>
        </div>
    );
}

export { HomePageFourthPart };
