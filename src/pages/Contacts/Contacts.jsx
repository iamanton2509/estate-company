import {useState} from 'react';

import MyButton from '../../components/UI/button/MyButton';
import MyInput from '../../components/UI/input/MyInput';
import MyModal from '../../components/UI/modal/MyModal';

import './contacts.css';

const Contacts = () => {

    const [modal, setModal] = useState(false);

    const getForm = (e) => {
        e.preventDefault();
        setModal(false);
    }

    return (
        <main className="section">
            <div className="container">
                <h1 className="contacts-title">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="contact-title">New York, USA - main office</h2>
                        <h3 className="branch-title">Branches:</h3>
                        <br />
                        <ul className="branches">
                            <li>London, United Kingdom</li>
                            <li>Houston, USA</li>
                            <li>Madrid, Spain</li>
                            <li>Praha, Czech</li>
                            <li>Brusell, Belgium</li>
                        </ul>
                    </li>
                    <li className="content-list__item">
                        <h2 className="contact-title">Email</h2>
                        <p>realeastate@gmail.com</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="contact-title">Phone</h2>
                        <p>+13205765580</p>
                    </li>
                </ul>

                <h1 className="call-title">We may call you back later, enter the input, leave your info and wair for a call!</h1>
                <MyButton className='openModalBtn' onClick={() => setModal(true)}>Have you got any question?</MyButton>

                <MyModal visible={modal} setVisible={setModal}>
                    <h3 style={{textAlign: 'center', fontSize: 20, marginBottom: 20, width: 250}}>Leave your contact details on our website so we can call you back and help you find your dream property. We value your time and will work around your schedule. Thank you for considering our services.</h3>
                    <MyInput type="text" placeholder="Your name"></MyInput>
                    <MyInput type="text" placeholder="Your phone"></MyInput>
                    <MyInput type="text" placeholder="Where are you from?"></MyInput>
                    <MyInput type="text" placeholder="Where should we call you?"></MyInput>

                    <MyButton onClick={getForm}>Ask a question</MyButton>                
                </MyModal>
                
            </div>
        </main>
    );
}

export default Contacts;