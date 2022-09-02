interface PropTypes
{
    label: string;
    className?: string;
}

function HeaderLabel (props: PropTypes)
{
    return (
        <div className={`w-[15%] h-full text-[#7194FF] font-bold text-[0.625rem] sm:text-base lg:text-2xl break-words ${props.className ? props.className : ''}`}>{props.label}</div>
    );
}

export { HeaderLabel };
