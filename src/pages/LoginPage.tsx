import { Modal, ModalData, ModalReferenceType } from '../components/Modal';
import { useContext, useRef, useState } from 'react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { FormsBox } from '../components/FormsBox';
import { InputReferenceType } from '../components/Inputs/InputReferenceType';
import { LoginInput } from '../components/Inputs/LoginInput';
import { MainBackground } from '../components/MainBackground';
import { PasswordInput } from '../components/Inputs/PasswordInput';
import { Title } from '../components/Title';
import { UserDataContext } from '../providers/UserDataProvider';
import { authenticateLogin } from '../apiCalls/authenticateLogin';
import { useNavigate } from 'react-router-dom';

function LoginPage ()
{
    const navigate = useNavigate();

    const userInfo = useContext(UserDataContext);

    const modalRef = useRef({} as ModalReferenceType);
    const nameInputRef = useRef({} as InputReferenceType);
    const passwordInputRef = useRef({} as InputReferenceType);

    const [ modalData, setModalData ] = useState({} as ModalData);

    async function executeLogin ()
    {
        const nameValid = nameInputRef.current.isValid();
        const passwordValid = passwordInputRef.current.isValid();

        if (!(nameValid && passwordValid)) return;

        const result = await authenticateLogin(
            nameInputRef.current.value,
            passwordInputRef.current.value
        );

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

        userInfo.setUserLogged(result.data.userName);

        navigate('/main/bots');
    }

    return (
        <MainBackground className="overflow-y-auto">
            <Modal reference={modalRef} title={modalData.title} isOneButtonModal={modalData.isOneButtonModal} confirmButtonLabel={modalData.confirmButtonLabel}
                description={modalData.description} onClick={modalData.onClick} />
            <div className="flex justify-center items-center w-full h-full">
                <FormsBox>
                    <Title className="mb-10" title="Login"/>
                    <LoginInput className="mb-5" reference={nameInputRef} placeholder="Login" />
                    <PasswordInput reference={passwordInputRef} placeholder="Password" />
                    <Button className="mt-16" label="Enter" onClick={executeLogin}></Button>
                </FormsBox>
            </div>
            <Footer />
        </MainBackground>
    );
}

export { LoginPage };
