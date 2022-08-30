import { Modal, ModalData, ModalReferenceType } from '../components/Modal';
import { useRef, useState } from 'react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { FormsBox } from '../components/FormsBox';
import { InputReferenceType } from '../components/Inputs/InputReferenceType';
import { LoginInput } from '../components/Inputs/LoginInput';
import { MainBackground } from '../components/MainBackground';
import { PasswordInput } from '../components/Inputs/PasswordInput';
import { SpotBotSiteLogo } from '../components/Images/SpotBotSiteLogo';
import { Title } from '../components/Title';
import { createLogin } from '../apiCalls/createLogin';
import { useNavigate } from 'react-router-dom';

function RegisterPage ()
{
    const navigate = useNavigate();

    const modalRef = useRef({} as ModalReferenceType);
    const nameInputRef = useRef({} as InputReferenceType);
    const passwordInputRef = useRef({} as InputReferenceType);
    const passwordConfirmationInputRef = useRef({} as InputReferenceType);

    const [ modalData, setModalData ] = useState({} as ModalData);

    async function executeRegistration ()
    {
        const nameValid = nameInputRef.current.isValid();
        const passwordValid = passwordInputRef.current.isValid();
        const passwordConfirmationValid = passwordConfirmationInputRef.current.isValid();

        if (!(nameValid && passwordValid && passwordConfirmationValid)) return;

        if (!(passwordInputRef.current.value === passwordConfirmationInputRef.current.value))
        {
            passwordConfirmationInputRef.current.inputSubMessageRef?.current.setErrorSubMessage('As senhas devem ser iguais');

            return;
        }

        const result = await createLogin(
            nameInputRef.current.value,
            passwordInputRef.current.value
        );

        if (result.success)
        {
            setModalData(
                {
                    title: '',
                    description: 'Your account was created successfully.',
                    confirmButtonLabel: 'Go to login',
                    isOneButtonModal: true,
                    onClick: () => navigate('/login')
                }
            );
        }
        else
        {
            setModalData(
                {
                    title: 'Warning',
                    description: result.message,
                    confirmButtonLabel: 'Ok',
                    isOneButtonModal: true,
                }
            );
        }

        modalRef.current.setShowModal(true);
    }

    return (
        <MainBackground className="justify-between">
            <Modal reference={modalRef} title={modalData.title} isOneButtonModal={modalData.isOneButtonModal} confirmButtonLabel={modalData.confirmButtonLabel}
                description={modalData.description} onClick={modalData.onClick} />
            <SpotBotSiteLogo />
            <div className="flex justify-center items-center w-full mt-10">
                <FormsBox>
                    <Title className="mb-10" title="Sign Up"/>
                    <LoginInput className="mb-5" reference={nameInputRef} placeholder="Login" />
                    <PasswordInput className="mb-5" reference={passwordInputRef} placeholder="Password" />
                    <PasswordInput placeholder="Confirm Password" reference={passwordConfirmationInputRef} />
                    <Button className="mt-16" label="Create Account" onClick={executeRegistration}></Button>
                </FormsBox>
            </div>
            <Footer />
        </MainBackground>
    );
}

export { RegisterPage };
