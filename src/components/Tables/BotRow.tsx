/* eslint-disable no-negated-condition */
/* eslint-disable no-nested-ternary */
import { Button } from '../Button';
import { deleteBot } from '../../apiCalls/deleteBot';

interface PropsType
{
    className?: string;
    userLogin: string;
    exchange: string;
    accountName?: string;
    botStatus?: 'IDLE' | 'ACTIVE' | 'STOP after trade' | 'Waiting Payment';
}

function BotRow (props: PropsType)
{
    const status = props.botStatus ? props.botStatus : 'IDLE';
    const account = props.accountName ? props.accountName : 'main';
    const statusTextColor = props.botStatus === 'ACTIVE' ? 'text-[#28C724]' : props.botStatus !== 'Waiting Payment' ? 'text-[#DA4C4C]' : '';

    async function deleteBotRow ()
    {
        const result = await deleteBot('FTX', account);
        // TODO put onClick on props... to delete, update and start...
    }

    return (
        <div className={`w-full h-24 flex justify-around items-center text-center bg-[#41525A] p-2.5 ${props.className ? props.className : ''}`}>
            <div className="botRowPart break-all">{`${props.userLogin}@${props.exchange}.${account}`}</div>
            <div className={`botRowPart font-bold ${statusTextColor}`}>{status}</div>
            <div className="botRowPart">{props.exchange}</div>
            <div className="botRowPart">{account}</div>
            <div className="botRowPart break-all">0%</div>
            <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
                <Button className="w-full h-1/2 bg-[#28C724] text-[0.625rem] sm:text-base leading-[100%] p-1" label="Start" />
                <Button className="w-full h-1/2 text-[0.625rem] sm:text-base leading-[100%] p-1" label="Delete" onClick={deleteBotRow} />
            </div>
        </div>
    );
}

export { BotRow };
