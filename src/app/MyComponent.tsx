'use client';

import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Calendar} from 'primereact/calendar';
import {useContext, useState} from "react";
import {Nullable} from "primereact/ts-helpers";
import {PrimeReactContext} from "primereact/api";

export default function MyComponent() {
    const [value, setValue] = useState('');
    const [date, setDate] = useState<Nullable<Date>>(null);

    const {inputStyle, ripple, changeTheme} = useContext(PrimeReactContext);
    console.log(`>>> inputStyle: ${inputStyle}, ripple: ${ripple}`);

    return (
        <div className="my-wrapper">
            <Calendar value={date} onChange={(e) => setDate(e.value)}/>
            <InputText value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button label="Submit"/>
        </div>
    );
}
