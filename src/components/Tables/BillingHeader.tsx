import { HeaderLabel } from './HeaderLabel';

function BillingHeader ()
{
    return (
        <div className="w-full flex justify-around items-center text-center">
            <HeaderLabel label="ID" />
            <HeaderLabel label="Status" />
            <HeaderLabel label="Period" />
            <HeaderLabel label="Due Date" />
            <HeaderLabel label="Invoice Value" />
            <HeaderLabel label="" />
        </div>
    );
}

export { BillingHeader };
