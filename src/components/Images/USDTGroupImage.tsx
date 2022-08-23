import USDTGroup from '../../assets/USDTGroup.svg';

interface PropTypes
{
    className?: string;
}

function USDTGroupImage (props?: PropTypes)
{
    return (
        <img className={`w-72 h-20 ${props?.className ? props.className : ''}`} src={USDTGroup} alt="USDTGroup-image" />
    );
}

export { USDTGroupImage };
