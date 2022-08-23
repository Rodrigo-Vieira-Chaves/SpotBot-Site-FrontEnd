interface PropsType
{
    className?: string;
    children?: React.ReactNode;
}

function MainBackground (props?: PropsType)
{
    return (
        <div className={`flex flex-col justify-start items-start dark:bg-[#23292C] text-white text-xl leading-[200%] 
                         w-full h-screen overflow-y-auto p-12 ${props?.className ? props.className : ''}`}>
            {props?.children}
        </div>
    );
}

export { MainBackground };
