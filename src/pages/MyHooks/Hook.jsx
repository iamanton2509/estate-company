import {useState, useEffect, createContext, useContext, useRef} from 'react';

const Hook = () => {

    const [inputValue, setInputValue] = useState('');
    const previousInputValue = useRef('');

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />

            <h2>Current value: {inputValue}</h2>
            <h2>Previous value: {previousInputValue.current}</h2>
        </>
    );
}

// const Hook = () => {
//     const inputElement = useRef();

//     const focusInput = () => {
//         inputElement.current.focus();
//     }

//     return (
//         <>
//             <input type='text' ref={inputElement} />
//             <button onClick={focusInput}>Focus</button>
//         </>
//     );
// }

// const UserContext = createContext();

// const Hook = () => {
//     const [user, setUser] = useState('Diana Bobrivets');

//     return (
//         <UserContext.Provider value={user}>
//             <h1>{`Hello ${user}`}</h1>
//             <Component2 />
//         </UserContext.Provider>
//     );
// }

// const Component2 = () => {
//     return (
//         <>
//             <h1>Component 2</h1>
//             <Component3 />
//         </>
//     );
// }

// const Component3 = () => {
//     return (
//         <>
//             <h1>Component 3</h1>
//             <Component4 />
//         </>
//     );
// }

// const Component4 = () => {
//     return (
//         <>
//             <h1>Component 4</h1>
//             <Component5 />
//         </>
//     );
// }

// const Component5 = () => {

//     const user = useContext(UserContext);

//     return (
//         <>
//             <h1>Component 5</h1>
//             <h1>{`Hello ${user} again!`}</h1>
//         </>
//     );
// }

// const Hook = () => {
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);

//     useEffect(() => {
//         setCalculation(() => count * 2)
//     }, [count]);

//     return (
//         <div className="container">
//             <div style={{height: 400, paddingTop: 20}}>
//                 <h1>Count: {count}</h1>
//                 <h1>Calculation: {calculation}</h1>
//                 <button onClick={e => setCount(count+1)}>Counter</button>
//             </div>
//         </div>
//     );
// }

// const Hook = () => {

//     const [inputValue, setInputValue] = useState('');
//     const [caption, setCaption] = useState('Night');
//     const [person, setPerson] = useState({
//         firstName: 'Diana',
//         lastName: 'Bobrivets', 
//         age: 19,
//         city: 'Kyiv'
//     })

//     const updateAge = () => {
//         setPerson(previousData => {
//             return {...previousData, age: person.age+1}
//         });
//     }
    
//     return (
//         <div className='container'>
//             <div style={{height: 300, paddingTop: 10}}>
//                 <input 
//                     style={{border: '2px solid var(--footer-border)'}} 
//                     type='text' 
//                     value={inputValue}
//                     onChange={(event) => setInputValue(event.target.value)}
//                 />
//                 <br />
//                 <h2>{caption}</h2>
//                 <button onClick={() => setCaption('Morning')}>Swap</button>
//                 <br />

//                 <h2>{person.firstName} {person.lastName} lives in {person.city}. She is {person.age} years old.</h2>
//                 <button onClick={updateAge}>Change her age</button>
//             </div>
//         </div>
//     );
// }

export default Hook;