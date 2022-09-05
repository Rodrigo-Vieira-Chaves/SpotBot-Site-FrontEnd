import { BotCreationModal, BotCreationModalReferenceType } from '../BotCreationModal';
import { Modal, ModalData, ModalReferenceType } from '../Modal';
import { useEffect, useRef, useState } from 'react';
import { BotRow } from './BotRow';
import { Icon } from '../Icon';
import { createBot } from '../../apiCalls/createBot';
import { deleteBot } from '../../apiCalls/deleteBot';
import { getUserBotsList } from '../../apiCalls/getUserBotsList';
import { useNavigate } from 'react-router-dom';

function BotsTable ()
{
    const navigate = useNavigate();

    const modalRef = useRef({} as ModalReferenceType);
    const [ modalData, setModalData ] = useState({} as ModalData);
    const creationModalRef = useRef({} as BotCreationModalReferenceType);

    const [ bots, setBots ] = useState([] as JSX.Element[]);
    const [ tableState, setTableState ] = useState(false);

    async function deleteBotRow (exchange: string, account: string)
    {
        const result = await deleteBot(exchange, account);

        if (result.code === 401) navigate('/');
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

        setTableState(!tableState);
    }

    async function createBotRow ()
    {
        const apiKey = creationModalRef.current.apiKeyInputRef.current;
        const apiSecret = creationModalRef.current.apiSecretInputRef.current;
        const subAccount = creationModalRef.current.subAccountInputRef.current;

        const apiKeyValid = apiKey.isValid();
        const apiSecretValid = apiSecret.isValid();
        const subAccountValid = subAccount.isValid();

        if (!(apiKeyValid && apiSecretValid && subAccountValid)) return;

        const result = await createBot('FTX', subAccount.value, apiKey.value, apiSecret.value);

        if (result.code === 401) navigate('/');
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

        creationModalRef.current.setShowModal(false);
        setTableState(!tableState);
    }

    async function updateBotTable ()
    {
        const result = await getUserBotsList();

        if (result.code === 401) navigate('/');
        if (result.code === 404)
        {
            setBots([] as JSX.Element[]);

            return;
        }

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

        const botsList = [] as JSX.Element[];
        result.data = Array.isArray(result.data) ? result.data : [ result.data ];

        // eslint-disable-next-line max-len
        for (const bot of result.data) botsList.push(<BotRow key={bot.botName} botName={bot.botName} botStatus={bot.status} exchange={bot.exchange} accountName={bot.account} onDeleteClick={deleteBotRow} />);

        setBots(botsList);
    }

    useEffect(() =>
    {
        updateBotTable();
    }, [ tableState ]);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-3">
            <BotCreationModal reference={creationModalRef} onClick={createBotRow} />
            <Modal reference={modalRef} title={modalData.title} isOneButtonModal={modalData.isOneButtonModal} confirmButtonLabel={modalData.confirmButtonLabel}
                description={modalData.description} onClick={modalData.onClick} />
            {bots}
            <Icon iconName="PlusCircle" color="#7194FF" weight={true} size={96} onClick={() => creationModalRef.current.setShowModal(true)} />
        </div>
    );
}

export { BotsTable };
