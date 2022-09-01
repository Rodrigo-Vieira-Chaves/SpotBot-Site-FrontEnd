import { MouseEventHandler, useState } from 'react';
import { Button } from './Button';

interface ModalReferenceType
{
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalData
{
    title: string;
    description: string;
    confirmButtonLabel: string;
    isOneButtonModal: boolean;
    reference?: React.MutableRefObject<ModalReferenceType>
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Modal (props: ModalData)
{
    const [ showModal, setShowModal ] = useState(false);

    if (props.reference) props.reference.current = { setShowModal };

    return (
        <>
            {
                showModal &&
                <div className="absolute left-0 top-0 w-screen h-screen bg-black/50">
                    <div className={`flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 m-auto bg-[#23292C] border-4 border-[#41525A] p-5
                                     transform transition-all translate-y-3/4 ease-in-out duration-1000 ${props.className ? props.className : ''}`}>
                        <h2 className={'text-[#7194FF] font-bold text-2xl text-center'}>{props.title}</h2>
                        <p className="text-base font-bold text-center mt-6">{props.description}</p>
                        {!props.isOneButtonModal && <p className="text-base font-bold text-center">Deseja continuar?</p>}
                        <div className="flex justify-center items-center gap-5 mt-6 w-[80%]">
                            {!props.isOneButtonModal && <Button className="w-28 bg-[#E24B2D] font-medium text-sm" label="Cancelar" onClick={() => setShowModal(false)} />}
                            <Button className="w-28 font-medium text-sm" label={props.confirmButtonLabel} onClick={props.onClick ? props.onClick : () => setShowModal(false)} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export { Modal };
export type { ModalData, ModalReferenceType };
