/* eslint-disable max-len */
/* eslint-disable no-negated-condition */
/* eslint-disable no-nested-ternary */
import { Modal, ModalData, ModalReferenceType } from '../Modal';
import { useRef, useState } from 'react';
import { BotStatus } from '../../apiCalls/BotStatus';
import { Button } from '../Button';
import { startBot } from '../../apiCalls/startBot';
import { stopBotOrStopAfterTrade } from '../../apiCalls/stopBotOrStopAfterTrade';

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
    const [ rowStatus, setRowStatus ] = useState(props.botStatus ? props.botStatus : BotStatus.IDLE);
    const [ buttonLoading, setButtonLoading ] = useState(false);

    const account = props.accountName ? props.accountName : 'main';
    const statusTextColor = rowStatus === 'Active' ? 'text-[#28C724]' : rowStatus !== 'Waiting Payment' ? 'text-[#DA4C4C]' : '';

    async function updateBotRow (status?: BotStatus.IDLE | BotStatus.STOP_AFTER_TRADE)
    {
        if (buttonLoading) return;

        let result = undefined;

        setButtonLoading(true);

        if (status) result = await stopBotOrStopAfterTrade('FTX', account, status);
        else result = await startBot('FTX', account);

        setButtonLoading(false);

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

        setRowStatus(result.data.status);
    }

    function makeButtons (params: ButtonsConfig)
    {
        return (
            <>
                <Button className={`w-[100%] h-1/2 bg-[${params.firstColor}] text-[0.625rem] sm:text-base leading-[100%]`} label={buttonLoading ? '...' : params.firstLabel} onClick={params.firstOnClick} />
                <Button className={`w-[100%] h-1/2 bg-[${params.secondColor}] text-[0.625rem] sm:text-base leading-[100%]`} label={buttonLoading ? '...' : params.secondLabel} onClick={params.secondOnClick} />
            </>
        );
    }

    const buttonsWhenIDLE = makeButtons(
        {
            firstColor: '#28C724',
            firstLabel: 'Start',
            firstOnClick: () => updateBotRow(),
            secondColor: '#7194FF',
            secondLabel: 'Delete',
            secondOnClick: () => props.onDeleteClick('FTX', account)
        }
    );

    const buttonsWhenACTIVE = makeButtons(
        {
            firstColor: '#DA4C4C',
            firstLabel: 'Stop',
            firstOnClick: () => updateBotRow(BotStatus.IDLE),
            secondColor: '#DA4C4C',
            secondLabel: 'Stop after Trade',
            secondOnClick: () => updateBotRow(BotStatus.STOP_AFTER_TRADE)
        }
    );

    const buttonsWhenSTOPAfterTRADE = makeButtons(
        {
            firstColor: '#28C724',
            firstLabel: 'Active',
            firstOnClick: () => updateBotRow(),
            secondColor: '#DA4C4C',
            secondLabel: 'Stop',
            secondOnClick: () => updateBotRow(BotStatus.IDLE)
        }
    );

    return (
        <div className={`w-full h-24 flex justify-around items-center text-center bg-[#41525A] p-2.5 ${props.className ? props.className : ''}`}>
            <Modal reference={modalRef} title={modalData.title} isOneButtonModal={modalData.isOneButtonModal} confirmButtonLabel={modalData.confirmButtonLabel}
                description={modalData.description} onClick={modalData.onClick} />
            <div className="botRowPart break-all">{props.botName}</div>
            <div className={`botRowPart font-bold ${statusTextColor}`}>{rowStatus}</div>
            <div className="botRowPart">{props.exchange}</div>
            <div className="botRowPart break-all">{account}</div>
            <div className="botRowPart break-all">0%</div>
            <div className="botRowPart flex-col gap-2">
                {
                    rowStatus === 'Idle' ? buttonsWhenIDLE
                        : rowStatus === 'Active' ? buttonsWhenACTIVE
                            : rowStatus === 'Stop after Trade' ? buttonsWhenSTOPAfterTRADE
                                : ''
                }
            </div>
        </div>
    );
}

export { BotRow };
