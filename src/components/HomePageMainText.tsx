import { Button } from './Button';
import { Title } from './Title';
import { useNavigate } from 'react-router-dom';

interface PropTypes
{
    className?: string;
}

function HomePageMainText (props?: PropTypes)
{
    const navigate = useNavigate();

    return (
        <div className={`flex flex-col justify-center items-center gap-14 ${props?.className ? props.className : ''}`}>
            <Title title="A non-leveraged bot that will never be liquidated" />
            <p>Spotbot is a cryptocurrency bot that operates on spot markets only by using a conservative DCA strategy. It does not use any leverage and will not be liquidated.</p>
            <Button label="Get Started" onClick={() => navigate('/register')} />
        </div>
    );
}

export { HomePageMainText };
