import { BotCreationModal, BotCreationModalReferenceType } from '../BotCreationModal';
import { Modal, ModalData, ModalReferenceType } from '../Modal';
import { useContext, useEffect, useRef, useState } from 'react';
import { BotRow } from './BotRow';
import { Icon } from '../Icon';
import { UserDataContext } from '../../providers/UserDataProvider';
import { createBot } from '../../apiCalls/createBot';
import { getUserBotsList } from '../../apiCalls/getUserBotsList';

function BotsTable ()
{
    const userInfo = useContext(UserDataContext);

    const modalRef = useRef({} as ModalReferenceType);
    const creationModalRef = useRef({} as BotCreationModalReferenceType);

    const [ modalData, setModalData ] = useState({} as ModalData);

    const [ bots, setBots ] = useState([] as React.ReactNode[]);

    async function populateBotTable ()
    {
        const bots = await getUserBotsList();
        const botsList: React.ReactNode[] = [];

        if (!bots.success)
        {
            setModalData(
                {
                    title: 'Error',
                    description: bots.message,
                    confirmButtonLabel: 'Ok',
                    isOneButtonModal: true,
                }
            );

            modalRef.current.setShowModal(true);

            return;
        }

        for (const bot of bots.data) botsList.push(<BotRow key={bot.botID} userLogin={userInfo.userLogged} exchange={bot.exchange} accountName={bot.account} />);

        setBots(botsList);
    }

    async function executeBotCreation ()
    {
        const apiKey = creationModalRef.current.apiKeyInputRef.current;
        const apiSecret = creationModalRef.current.apiSecretInputRef.current;
        const subAccount = creationModalRef.current.subAccountInputRef.current;

        const apiKeyValid = apiKey.isValid();
        const apiSecretValid = apiSecret.isValid();
        const subAccountValid = subAccount.isValid();

        if (!(apiKeyValid && apiSecretValid && subAccountValid)) return;

        const result = await createBot('FTX', subAccount.value, apiKey.value, apiSecret.value);

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
        populateBotTable();
    }

    useEffect(() =>
    {
        populateBotTable();
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-3">
            <BotCreationModal reference={creationModalRef} onClick={executeBotCreation} />
            <Modal reference={modalRef} title={modalData.title} isOneButtonModal={modalData.isOneButtonModal} confirmButtonLabel={modalData.confirmButtonLabel}
                description={modalData.description} onClick={modalData.onClick} />
            {bots}
            <Icon iconName="PlusCircle" color="#7194FF" weight={true} size={96} onClick={() => creationModalRef.current.setShowModal(true)} />
        </div>
    );
}

export { BotsTable };
