import homePageImage from '../../assets/homePageImage.svg';

interface PropTypes
{
    className?: string;
}

function HomePageImage (props?: PropTypes)
{
    return (
        <img className={props?.className} src={homePageImage} alt="homePage-image" />
    );
}

export { HomePageImage };
