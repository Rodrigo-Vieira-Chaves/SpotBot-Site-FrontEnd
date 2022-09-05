import { MouseEventHandler, useRef, useState } from 'react';
import { APIInput } from './Inputs/APIInput';
import { Button } from './Button';
import { FormsBox } from './FormsBox';
import { InputReferenceType } from './Inputs/InputReferenceType';

interface BotCreationModalReferenceType
{
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    apiKeyInputRef: React.MutableRefObject<InputReferenceType>;
    apiSecretInputRef: React.MutableRefObject<InputReferenceType>;
    subAccountInputRef: React.MutableRefObject<InputReferenceType>;
}

interface BotCreationModalData
{
    reference?: React.MutableRefObject<BotCreationModalReferenceType>
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

function BotCreationModal (props?: BotCreationModalData)
{
    const [ showModal, setShowModal ] = useState(false);

    const apiKeyInputRef = useRef({} as InputReferenceType);
    const apiSecretInputRef = useRef({} as InputReferenceType);
    const subAccountInputRef = useRef({} as InputReferenceType);

    if (props?.reference) props.reference.current = { setShowModal, apiKeyInputRef, apiSecretInputRef, subAccountInputRef };

    return (
        <>
            {
                showModal &&
                <div className="absolute left-0 top-0 w-screen h-screen bg-black/50">
                    <div className={`flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 m-auto gap-3 bg-[#23292C] border-4 border-[#41525A] p-5
                                     transform transition-all translate-y-2/4 ease-in-out duration-1000 ${props?.className ? props.className : ''}`}>
                        <h2 className={'text-[#7194FF] font-bold text-2xl text-center'}>Bot Creation</h2>
                        <FormsBox className="sm:w-full lg:w-full">
                            <APIInput reference={apiKeyInputRef} />
                            <APIInput reference={apiSecretInputRef} placeholder="API Secret" />
                            <APIInput reference={subAccountInputRef} placeholder="SubAccount" initialSubMessage="(Optional)" optional={true} />
                        </FormsBox>
                        <div className="flex justify-center items-center gap-5 mt-6 w-[80%]">
                            <Button className="w-28 font-medium text-sm break-words" label="Create Bot" onClick={props?.onClick ? props.onClick : () => setShowModal(false)} />
                            <Button className="w-28 bg-[#E24B2D] font-medium text-sm" label="Cancel" onClick={() => setShowModal(false)} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export { BotCreationModal };
export type { BotCreationModalData, BotCreationModalReferenceType };
