import { ModalData, ModalReferenceType } from '../components/Modal';
import { useRef, useState } from 'react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { FormsBox } from '../components/FormsBox';
import { InputReferenceType } from '../components/Inputs/InputReferenceType';
import { MainBackground } from '../components/MainBackground';
import { NameInput } from '../components/Inputs/NameInput';
import { PasswordInput } from '../components/Inputs/PasswordInput';
import { SpotBotSiteLogo } from '../components/Images/SpotBotSiteLogo';
import { Title } from '../components/Title';
import { createAccount } from '../apiCalls/createAccount';

function RegisterPage ()
{
    const modalRef = useRef({} as ModalReferenceType);
    const nameInputRef = useRef({} as InputReferenceType);
    const birthdayInputRef = useRef({} as InputReferenceType);
    const cpfInputRef = useRef({} as InputReferenceType);
    const emailInputRef = useRef({} as InputReferenceType);
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

        const result = await createAccount(
            nameInputRef.current.value,
            birthdayInputRef.current.value.replaceAll('/', '-'),
            emailInputRef.current.value,
            cpfInputRef.current.value,
            passwordInputRef.current.value
        );

        if (result.success)
        {
            setModalData(
                {
                    title: '',
                    description: 'Uma nova conta foi criada para esse cliente!',
                    confirmButtonLabel: 'Ok',
                    isErrorModal: true,
                }
            );
        }
        else
        {
            setModalData(
                {
                    title: '',
                    description: result.message,
                    confirmButtonLabel: 'Ok',
                    isErrorModal: true,
                }
            );
        }

        modalRef.current.setShowModal(true);
    }

    return (
        <MainBackground className="justify-between">
            <SpotBotSiteLogo />
            <div className="flex justify-center items-center w-full mt-10">
                <FormsBox>
                    <Title className="mb-10" title="Sign Up"/>
                    <NameInput className="mb-5" reference={nameInputRef} placeholder="Login" />
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
