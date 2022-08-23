import YenGroup from '../../assets/YenGroup.svg';

interface PropTypes
{
    className?: string;
}

function YenGroupImage (props?: PropTypes)
{
    return (
        <img className={`w-72 h-20 ${props?.className ? props.className : ''}`} src={YenGroup} alt="YenGroup-image" />
    );
}

export { YenGroupImage };
