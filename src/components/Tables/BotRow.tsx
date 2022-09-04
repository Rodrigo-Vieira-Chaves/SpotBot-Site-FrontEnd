/* eslint-disable no-negated-condition */
/* eslint-disable no-nested-ternary */
import { BotStatus, updateBotStatus } from '../../apiCalls/updateBotStatus';
import { Modal, ModalData, ModalReferenceType } from '../Modal';
import { useRef, useState } from 'react';
import { Button } from '../Button';

interface PropsType
{
    className?: string;
    botName: string;
    exchange: string;
    accountName?: string;
    onDeleteClick: (exchange: string, account: string) => Promise<void>;
    botStatus?: BotStatus;
}

function BotRow (props: PropsType)
{
    const modalRef = useRef({} as ModalReferenceType);
    const [ modalData, setModalData ] = useState({} as ModalData);
    const [ status, setStatus ] = useState(props.botStatus ? props.botStatus : 'IDLE' as BotStatus);

    const account = props.accountName ? props.accountName : 'main';
    const statusTextColor = status === 'ACTIVE' ? 'text-[#28C724]' : status !== 'Waiting Payment' ? 'text-[#DA4C4C]' : '';

    async function startBot ()
    {
        const result = await updateBotStatus('FTX', account, 'ACTIVE');

        if (!result.success)
        {
            setModalData(
                {
                    title: 'Error',
                    description: result.message,
                    confirmButtonLabel: 'Ok',
                    isOneButtonModal: true,
                }
            );

            modalRef.current.setShowModal(true);

            return;
        }

        setStatus(result.data.status);
    }

    return (
        <div className={`w-full h-24 flex justify-around items-center text-center bg-[#41525A] p-2.5 ${props.className ? props.className : ''}`}>
            <Modal reference={modalRef} title={modalData.title} isOneButtonModal={modalData.isOneButtonModal} confirmButtonLabel={modalData.confirmButtonLabel}
                description={modalData.description} onClick={modalData.onClick} />
            <div className="botRowPart break-all">{props.botName}</div>
            <div className={`botRowPart font-bold ${statusTextColor}`}>{status}</div>
            <div className="botRowPart">{props.exchange}</div>
            <div className="botRowPart break-all">{account}</div>
            <div className="botRowPart break-all">0%</div>
            <div className="botRowPart flex-col gap-2">
                <Button className="w-[100%] h-1/2 bg-[#28C724] text-[0.625rem] sm:text-base leading-[100%]" label="Start" onClick={startBot} />
                <Button className="w-[100%] h-1/2 text-[0.625rem] sm:text-base leading-[100%]" label="Delete" onClick={() => props.onDeleteClick('FTX', account)} />
            </div>
        </div>
    );
}

export { BotRow };
