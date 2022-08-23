import { MouseEventHandler } from 'react';

interface PropTypes
{
    label: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button (props: PropTypes)
{
    function onClick (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
    {
        event.preventDefault();
        if (props.onClick) props.onClick(event);
    }

    return (
        <button className={`flex justify-center items-center bg-[#7194FF] text-white text-xl font-bold rounded-lg w-44 h-16 ${props.className ? props.className : ''}`}
            onClick={onClick}>{props.label}</button>
    );
}

export { Button };
