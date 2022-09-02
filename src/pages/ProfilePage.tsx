import { ModalReferenceType, Modal, ModalData } from '../components/Modal';
import { useContext, useRef, useState } from 'react';
import { Button } from '../components/Button';
import { FormsBox } from '../components/FormsBox';
import { InputReferenceType } from '../components/Inputs/InputReferenceType';
import { OutletBackground } from '../components/OutletBackground';
import { PasswordInput } from '../components/Inputs/PasswordInput';
import { UserDataContext } from '../providers/UserDataProvider';
import { changePassword } from '../apiCalls/changePassword';

function ProfilePage ()
{
    const userInfo = useContext(UserDataContext);

    const modalRef = useRef({} as ModalReferenceType);
    const currentPasswordInputRef = useRef({} as InputReferenceType);
    const newPasswordInputRef = useRef({} as InputReferenceType);
    const newPasswordConfirmationInputRef = useRef({} as InputReferenceType);

    const [ modalData, setModalData ] = useState({} as ModalData);

    async function executePasswordChange ()
    {
        const currentPasswordValid = currentPasswordInputRef.current.isValid();
        const newPasswordValid = newPasswordInputRef.current.isValid();
        const newPasswordConfirmationValid = newPasswordConfirmationInputRef.current.isValid();

        if (!(currentPasswordValid && newPasswordValid && newPasswordConfirmationValid)) return;

        if (!(newPasswordInputRef.current.value === newPasswordConfirmationInputRef.current.value))
        {
            newPasswordConfirmationInputRef.current.inputSubMessageRef?.current.setErrorSubMessage('As senhas devem ser iguais');

            return;
        }

        const result = await changePassword(userInfo.userLogged, currentPasswordInputRef.current.value, newPasswordInputRef.current.value );

        if (result.success)
        {
            setModalData(
                {
                    title: '',
                    description: 'Password changed successfully.',
                    confirmButtonLabel: 'Ok',
                    isOneButtonModal: true,
                }
            );
        }
        else
        {
            setModalData(
                {
                    title: 'Error',
                    description: result.message,
                    confirmButtonLabel: 'Ok',
                    isOneButtonModal: true,
                }
            );
        }

        modalRef.current.setShowModal(true);
    }

    return (
        <OutletBackground className="overflow-y-auto">
            <Modal reference={modalRef} title={modalData.title} isOneButtonModal={modalData.isOneButtonModal} confirmButtonLabel={modalData.confirmButtonLabel}
                description={modalData.description} onClick={modalData.onClick} />
            <p className="text-[#7194FF] font-bold text-base mb-3">Change Password</p>
            <FormsBox>
                <PasswordInput reference={currentPasswordInputRef} placeholder="Current Password" />
                <PasswordInput reference={newPasswordInputRef} placeholder="New Password" />
                <PasswordInput reference={newPasswordConfirmationInputRef} placeholder="Confirm new Password" />
                <Button className="mt-2.5" label="Change" onClick={executePasswordChange}></Button>
            </FormsBox>
        </OutletBackground>
    );
}

export { ProfilePage };
