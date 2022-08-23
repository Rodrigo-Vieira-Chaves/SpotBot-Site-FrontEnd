import BitcoinGroup from '../../assets/BitcoinGroup.svg';

interface PropTypes
{
    className?: string;
}

function BitcoinGroupImage (props?: PropTypes)
{
    return (
        <img className={`w-72 h-20 ${props?.className ? props.className : ''}`} src={BitcoinGroup} alt="BitcoinGroup-image" />
    );
}

export { BitcoinGroupImage };
