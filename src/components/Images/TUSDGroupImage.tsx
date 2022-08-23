import TUSDGroup from '../../assets/TUSDGroup.svg';

interface PropTypes
{
    className?: string;
}

function TUSDGroupImage (props?: PropTypes)
{
    return (
        <img className={`w-72 h-20 ${props?.className ? props.className : ''}`} src={TUSDGroup} alt="TUSDGroup-image" />
    );
}

export { TUSDGroupImage };
