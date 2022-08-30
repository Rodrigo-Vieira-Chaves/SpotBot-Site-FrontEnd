import { Footer } from '../components/Footer';
import { HomePageFirstPart } from '../components/HomePageFirstPart';
import { HomePageFourthPart } from '../components/HomePageFourthPart';
import { HomePageSecondPart } from '../components/HomePageSecondPart';
import { HomePageThirdPart } from '../components/HomePageThirdPart';
import { MainBackground } from '../components/MainBackground';

function HomePage ()
{
    return (
        <MainBackground>
            <HomePageFirstPart />
            <HomePageSecondPart />
            <HomePageThirdPart />
            <HomePageFourthPart />
            <Footer />
        </MainBackground>
    );
}

export { HomePage };
