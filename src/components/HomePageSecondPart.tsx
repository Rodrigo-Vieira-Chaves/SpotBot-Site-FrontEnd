import { BUSDGroupImage } from './Images/BUSDGroupImage';
import { BitcoinGroupImage } from './Images/BitcoinGroupImage';
import { EuroGroupImage } from './Images/EuroGroupImage';
import { TUSDGroupImage } from './Images/TUSDGroupImage';
import { Title } from './Title';
import { USDCGroupImage } from './Images/USDCGroupImage';
import { USDTGroupImage } from './Images/USDTGroupImage';
import { YenGroupImage } from './Images/YenGroupImage';

function HomePageSecondPart ()
{
    return (
        <>
            <Title id="coins" title="These are the coins currently supported" className="w-full mt-16 lg:mt-0" />
            <p className="w-full text-center mt-7">The bot will work to increase your balance in any of the coins mentioned below.</p>
            <div className="flex flex-col gap-8 lg:gap-28 w-full mt-16">
                <div className="flex flex-wrap gap-8 lg:gap-0 justify-around items-center w-full">
                    <BitcoinGroupImage />
                    <USDTGroupImage />
                    <USDCGroupImage />
                    <TUSDGroupImage  />
                </div>
                <div className="flex flex-wrap gap-8 lg:gap-0 justify-around items-center w-full">
                    <BUSDGroupImage />
                    <YenGroupImage />
                    <EuroGroupImage />
                </div>
            </div>
        </>
    );
}

export { HomePageSecondPart };
