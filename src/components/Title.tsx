interface PropTypes
{
    title: string;
    className?: string;
}

function Title (props: PropTypes)
{
    return (
        <h1 className={`text-[#7194FF] font-bold text-5xl text-center ${props.className ? props.className : ''}`}>{props.title}</h1>
    );
}

export { Title };
