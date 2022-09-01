interface PropTypes
{
    className?: string;
    children?: React.ReactNode;
}

function OutletBackground (props?: PropTypes)
{
    return (
        <div className={`flex flex-col justify-start items-center w-full h-full border-4 border-[#41525A] p-4 ${props?.className ? props.className : ''}`}>
            {props?.children}
        </div>
    );
}

export { OutletBackground };
