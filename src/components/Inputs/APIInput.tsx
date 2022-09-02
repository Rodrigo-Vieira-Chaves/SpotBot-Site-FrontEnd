import { InputSubMessage, ReferenceInputSubMessageType } from './InputSubMessage';
import { useRef, useState } from 'react';
import { Input } from './Input';
import { InputBox } from './InputBox';
import { InputReferenceType } from './InputReferenceType';

interface PropTypes
{
    className?: string;
    placeholder?: string;
    reference?: React.MutableRefObject<InputReferenceType>;
    initialSubMessage?: string;
    optional?: boolean;
}

function APIInput (props: PropTypes)
{
    const [ value, setValue ] = useState('');
    const inputSubMessageRef = useRef({} as ReferenceInputSubMessageType);

    function APIInputOnChange (event: React.ChangeEvent<HTMLInputElement>)
    {
        setValue(event.target.value);
    }

    function isAPIValid ()
    {
        const condition = props.optional || value.length > 0;

        if (condition) inputSubMessageRef.current.setNormalSubMessage(props.initialSubMessage ? props.initialSubMessage : '');
        else inputSubMessageRef.current.setErrorSubMessage('Esse campo não pode estar vazio.');

        return condition;
    }

    if (props?.reference) props.reference.current = { value, isValid: isAPIValid, setValue };

    return (
        <InputBox className={`${props?.className ? props.className : ''}`}>
            <Input type="text" initialValue={value} maxLength={64} placeholder={props.placeholder ? props.placeholder : 'API Key'} InputOnChange={APIInputOnChange} />
            <InputSubMessage initialSubMessage={props.initialSubMessage} reference={inputSubMessageRef} />
        </InputBox>
    );
}

export { APIInput };
