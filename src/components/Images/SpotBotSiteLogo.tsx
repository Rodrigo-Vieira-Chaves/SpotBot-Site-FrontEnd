import SpotBotLogo from '../../assets/logo.svg';

interface PropTypes
{
    className?: string;
}

function SpotBotSiteLogo (props?: PropTypes)
{
    return (
        <img className={props?.className} src={SpotBotLogo} alt="SpotBot-Site-Logo" />
    );
}

export { SpotBotSiteLogo };
