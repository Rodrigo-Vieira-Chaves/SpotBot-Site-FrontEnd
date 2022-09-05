/* eslint-disable no-negated-condition */
/* eslint-disable no-nested-ternary */
import { BotStatus, updateBotStatus } from '../../apiCalls/updateBotStatus';
import { Modal, ModalData, ModalReferenceType } from '../Modal';
import { useRef, useState } from 'react';
import { Button } from '../Button';

interface ButtonsConfig
{
    firstLabel: string;
    secondLabel: string;
    firstColor: string;
    secondColor: string;
    firstOnClick: () => Promise<void>;
    secondOnClick: () => Promise<void>;
}

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
    const statusTextColor = status === 'Active' ? 'text-[#28C724]' : status !== 'Waiting Payment' ? 'text-[#DA4C4C]' : '';

    async function updateBotRow (status: BotStatus)
    {
        const result = await updateBotStatus('FTX', account, status);

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

    function makeButtons (params: ButtonsConfig)
    {
        return (
            <>
                <Button className={`w-[100%] h-1/2 bg-[${params.firstColor}] text-[0.625rem] sm:text-base leading-[100%]`} label={params.firstLabel} onClick={params.firstOnClick} />
                <Button className={`w-[100%] h-1/2 bg-[${params.secondColor}] text-[0.625rem] sm:text-base leading-[100%]`} label={params.secondLabel} onClick={params.secondOnClick} />
            </>
        );
    }

    const buttonsWhenIDLE = makeButtons(
        {
            firstColor: '#28C724',
            firstLabel: 'Start',
            firstOnClick: () => updateBotRow('Active'),
            secondColor: '#7194FF',
            secondLabel: 'Delete',
            secondOnClick: () => props.onDeleteClick('FTX', account)
        }
    );

    const buttonsWhenACTIVE = makeButtons(
        {
            firstColor: '#DA4C4C',
            firstLabel: 'Stop',
            firstOnClick: () => updateBotRow('Idle'),
            secondColor: '#DA4C4C',
            secondLabel: 'Stop after Trade',
            secondOnClick: () => updateBotRow('Stop after Trade')
        }
    );

    const buttonsWhenSTOPAfterTRADE = makeButtons(
        {
            firstColor: '#28C724',
            firstLabel: 'Active',
            firstOnClick: () => updateBotRow('Active'),
            secondColor: '#DA4C4C',
            secondLabel: 'Stop',
            secondOnClick: () => updateBotRow('Idle')
        }
    );

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
                {status === 'Idle' ? buttonsWhenIDLE
                    : status === 'Active' ? buttonsWhenACTIVE
                        : status === 'Stop after Trade' ? buttonsWhenSTOPAfterTRADE
                            : ''}
            </div>
        </div>
    );
}

export { BotRow };
