import { ModalData, ModalReferenceType } from '../components/Modal';
import { useContext, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import { HomePageFirstPart } from '../components/HomePageFirstPart';
import { HomePageFourthPart } from '../components/HomePageFourthPart';
import { HomePageSecondPart } from '../components/HomePageSecondPart';
import { HomePageThirdPart } from '../components/HomePageThirdPart';
import { InputReferenceType } from '../components/Inputs/InputReferenceType';
import { MainBackground } from '../components/MainBackground';
import { UserDataContext } from '../providers/UserDataProvider';
import { authenticateUser } from '../apiCalls/authenticateUser';
import { useNavigate } from 'react-router-dom';

function HomePage ()
{
    const navigate = useNavigate();

    const userInfo = useContext(UserDataContext);

    const modalRef = useRef({} as ModalReferenceType);
    const cpfInputRef = useRef({} as InputReferenceType);
    const passwordInputRef = useRef({} as InputReferenceType);

    const [ modalData, setModalData ] = useState({} as ModalData);

    async function executeLogin ()
    {
        const cpfValid = cpfInputRef.current.isValid();
        const passwordValid = passwordInputRef.current.isValid();

        if (!(cpfValid && passwordValid)) return;

        const result = await authenticateUser(cpfInputRef.current.value as string, passwordInputRef.current.value as string);

        if (!result.success)
        {
            setModalData(
                {
                    title: '',
                    description: result.message,
                    confirmButtonLabel: 'Ok',
                    isErrorModal: true,
                }
            );

            modalRef.current.setShowModal(true);

            return;
        }

        result.data.account.password = passwordInputRef.current.value;
        userInfo.setUserLogged(result.data);
        navigate('/main/extract');
    }

    return (
        <MainBackground>
            <HomePageFirstPart />
            <HomePageSecondPart />
            <HomePageThirdPart />
            <HomePageFourthPart />
            <Footer />
        </MainBackground>
    );
}

export { HomePage };
