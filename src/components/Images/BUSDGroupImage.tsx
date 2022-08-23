import BUSDGroup from '../../assets/BUSDGroup.svg';

interface PropTypes
{
    className?: string;
}

function BUSDGroupImage (props?: PropTypes)
{
    return (
        <img className={`w-72 h-20 ${props?.className ? props.className : ''}`} src={BUSDGroup} alt="BUSDGroup-image" />
    );
}

export { BUSDGroupImage };
