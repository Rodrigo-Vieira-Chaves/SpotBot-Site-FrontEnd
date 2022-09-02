import { IconContext, IdentificationCard, PlusCircle, Robot, UserCircle, Wallet } from 'phosphor-react';

type IconName = 'IdentificationCard' | 'UserCircle' | 'PlusCircle' | 'Robot' | 'Wallet';

interface PropTypes
{
    iconName: IconName;
    size?: number;
    color?: string;
    weight?: boolean;
    onClick?: () => void;
}

const icons =
{
    IdentificationCard: <IdentificationCard />,
    UserCircle: <UserCircle />,
    PlusCircle: <PlusCircle />,
    Robot: <Robot />,
    Wallet: <Wallet />
};

function Icon (props: PropTypes)
{
    function onClick (event: React.MouseEvent<SVGSVGElement, MouseEvent>)
    {
        event.preventDefault();
        if (props.onClick) props.onClick();
    }

    return (
        <IconContext.Provider value=
            {
                {
                    color: props.color ? props.color : 'white',
                    size: props.size ? props.size : 32,
                    weight: props.weight ? 'fill' : 'regular',
                    onClick: (event) => onClick (event)
                }
            }>
            {icons[props.iconName]}
        </IconContext.Provider>
    );
}

export { Icon };
export type { IconName };
