import { Title } from './Title';

function HomePageThirdPart ()
{
    return (
        <>
            <Title id="FAQ" title="Frequently Asked Questions" className="w-full mt-52" />
            <div className="flex justify-around items-center gap-28 w-full mt-16">
                <div className="flex flex-col gap-20 w-1/2 h-full text-center">
                    <div className="flex flex-col gap-4 w-full h-full">
                        <Title title="How much money do I need to start the bot?" className="w-full text-3xl" />
                        <p>The bot needs a minimum of 200$ to be able to operate properly in each account or sub-account.</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full">
                        <Title title="How much money do I need to start the bot?" className="w-full text-3xl" />
                        <p>Currently the bot trades on FTX only, in the future Binance will also be supported. You just have to create an API Key and Secret to start trading.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-1/2 h-full text-center">
                    <Title title="How much the bot make?" className="w-full text-3xl" />
                    <p>Crypto is a volatile market, it is just not possible to predict, even less guarantee any gains, though the bot showed gains between 3% to 6% per month in our internal tests.</p>
                    <p><strong>! Warning !</strong></p>
                    <p>It is <strong>NOT</strong> guaranteed the bot will deliver these results, we from SpotBot team will make our best to deliver as much as
                    possible, but we cannot guarantee any results whatsoever!</p>
                </div>
            </div>
        </>
    );
}

export { HomePageThirdPart };
