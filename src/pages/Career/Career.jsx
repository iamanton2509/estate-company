import {useState} from 'react';

import MyInput from '../../components/UI/input/MyInput';
import MyButton from '../../components/UI/button/MyButton';
import MyForm from '../../components/UI/form/MyForm';
import MySelect from '../../components/UI/select/MySelect';

import './style.css';

const Career = () => {

    const [profession, setProfession] = useState('');

    const changeProfession = (profession) => {
        setProfession(profession);
    }

    return (
        <div className="container">
            <h2 className="title">Use your criteria to get an offer from us</h2>
            <MyForm method='post' autoComplete='off'>
                <MyInput type="text" placeholder="Your firstname"/>
                <MyInput type="text" placeholder="Your lastname"/>
                <MyInput type="number" placeholder="Your age"/>
                <MyInput type="text" placeholder="Your education"/>
                <MySelect value={profession} onChange={changeProfession} options={[
                    {value: 'Software developer', name: 'Software developer'},
                    {value: 'value2', name: 'Support specialist'},
                    {value: 'value3', name: 'Data manager'},
                    {value: 'value4', name: 'PR manager'},
                    {value: 'value5', name: 'Maintenance mechanic'},
                    {value: 'value6', name: 'Database administrator and/or architect'},
                    {value: 'value7', name: 'Client advisor- nordstrom'},
                    {value: 'value8', name: 'Quality manager'},
                    {value: 'value9', name: 'Information security analyst'},
                    {value: 'value10', name: 'Visual merchandiser'},
                    {value: 'value11', name: 'Architect'},
                    {value: 'value12', name: 'UI designer'},
                    {value: 'value13', name: 'Rieltor'}
                ]} defaultValue='Your profession:' />

                <MyInput type="text" placeholder="Your last job"/>

                <MyInput type="text" placeholder="Your phone"/>
                <MyInput type="text" placeholder="Your email" />

                <MyButton onClick={event => event.preventDefault()}>Get a dream job</MyButton>
            </MyForm>
        </div>
    );
}

export default Career;