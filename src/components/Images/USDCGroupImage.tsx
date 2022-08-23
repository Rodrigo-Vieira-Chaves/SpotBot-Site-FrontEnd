import USDCGroup from '../../assets/USDCGroup.svg';

interface PropTypes
{
    className?: string;
}

function USDCGroupImage (props?: PropTypes)
{
    return (
        <img className={`w-72 h-20 ${props?.className ? props.className : ''}`} src={USDCGroup} alt="USDCGroup-image" />
    );
}

export { USDCGroupImage };
