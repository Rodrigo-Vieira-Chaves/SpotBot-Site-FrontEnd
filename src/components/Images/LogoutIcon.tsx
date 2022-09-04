import logout_icon from '../../assets/logout_icon.svg';

interface PropTypes
{
    className?: string;
}

function LogoutIcon (props?: PropTypes)
{
    return (
        <img className={`w-4 h-4 ${props?.className ? props.className : ''}`} src={logout_icon} alt="Logout-image" />
    );
}

export { LogoutIcon };
