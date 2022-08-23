import EuroGroup from '../../assets/EuroGroup.svg';

interface PropTypes
{
    className?: string;
}

function EuroGroupImage (props?: PropTypes)
{
    return (
        <img className={`w-72 h-20 ${props?.className ? props.className : ''}`} src={EuroGroup} alt="EuroGroup-image" />
    );
}

export { EuroGroupImage };
