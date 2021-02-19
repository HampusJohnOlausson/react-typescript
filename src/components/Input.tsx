import React, { ChangeEvent, CSSProperties, FormEventHandler } from 'react'

interface Props{
    value: string;
    onChange: (value: string) => void;
}

export const Input = (props: Props) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
        props.onChange(event.target.value);
    }

    return (
        <div>
            <input style={rootStyle} type="text" value={props.value} onChange={handleChange} />
        </div>
    )
}


const rootStyle: CSSProperties = {
    borderRadius: '1rem',
    width: '50%',
    padding: '1rem',
    outline: 'none',

};

export default Input