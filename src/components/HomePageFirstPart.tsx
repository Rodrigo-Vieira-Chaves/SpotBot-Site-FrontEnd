import { HomePageImage } from './Images/HomePageImage';
import { HomePageMainText } from './HomePageMainText';
import { NavBar } from './NavBar';

function HomePageFirstPart ()
{
    return (
        <>
            <NavBar />
            {/* h-[calc(100%-1rem)]*/}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 mt-16 lg:mt-0 justify-center lg:justify-between items-center w-full">
                <HomePageMainText className="w-full lg:w-1/2 h-full" />
                <div className="flex justify-end w-full lg:w-1/2 h-4/5">
                    <HomePageImage  />
                </div>
            </div>
        </>
    );
}

export { HomePageFirstPart };
