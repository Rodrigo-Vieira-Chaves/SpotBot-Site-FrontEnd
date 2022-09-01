interface PropTypes
{
    title: string;
    id?: string;
    className?: string;
}

function Title (props: PropTypes)
{
    return (
        <h2 id={props.id} className={`text-[#7194FF] font-bold text-3xl text-center ${props.className ? props.className : ''}`}>{props.title}</h2>
    );
}

export { Title };
