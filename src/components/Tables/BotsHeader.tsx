import { HeaderLabel } from './HeaderLabel';

function BotsHeader ()
{
    return (
        <div className="w-full flex justify-around items-center text-center">
            <HeaderLabel label="Bot Name" />
            <HeaderLabel label="Status" />
            <HeaderLabel label="Exchange" />
            <HeaderLabel label="Account" />
            <HeaderLabel label="Profit" />
            <HeaderLabel label="" />
        </div>
    );
}

export { BotsHeader };
