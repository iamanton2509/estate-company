import {useState, useEffect, createContext, useContext, useRef} from 'react';

// useRef

const Hooks = () => {

    const [inputValue, setInputValue] = useState('');
    const previousInputValue = useRef('');

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h2>Current value: {inputValue}</h2>
            <h2>Previous value: {previousInputValue.current}</h2>
        </>
    );
}

export default Hooks;

// const Hooks = () => {
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

// export default Hooks;


// const Hooks = () => {

//     /* useState */

//     const [text, setText] = useState({
//         firstName: 'Diana',
//         lastName: 'Bobrivets',
//         age: 19,
//         city: 'Kyiv'
//     });
   
//     const updateAge = () => {
//         setText(previousAge => {
//             return {...previousAge, age: text.age + 1}
//         });
//     }

//     /* useEffect */

//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             setCount(count + 1);
//         }, 1000);
//     });

//     useEffect(() => {
//         setCalculation(() => count * 2);
//     }, [count]);

//     return (
//         <div className="container">
//             <div style={{height: 400}}>
//                 <h1 style={{color: 'var(--placeholder-color)'}}>{text.firstName} {text.lastName} is {text.age} years old. She lives in {text.city}</h1>
//                 <button onClick={updateAge}>useState</button>

//                 <br />
//                 <br />
//                 <hr style={{border: '2px solid var(--footer-border)'}} />
//                 <br />

//                 <h1 style={{color: 'var(--footer-border'}}>{count}</h1>
//                 <br />
//                 <h1 style={{color: 'var(--different-blue'}}>{calculation}</h1>

//             </div>
//         </div>
//     );
// }

// export default Hooks;

/* useContext */

// const UserContext = createContext();

// function Component1() {
//     const [user, setUser] = useState("Jesse Hall");

//     return (
//         <UserContext.Provider value={user}>
//             <h1>{`Hello ${user}!`}</h1>
//             <Component2 user={user}/>
//         </UserContext.Provider>
//     );
// }

// function Component2() {
//     return (
//         <>
//             <h1>Component 2</h1>
//             <Component3 />
//         </>
//     );
// }

// function Component3() {
//     return (
//         <>
//             <h1>Component 3</h1>
//             <Component4 />
//         </>
//     );
// }

// function Component4() {
//     return (
//         <>
//             <h1>Component 4</h1>
//             <Component5 />
//         </>
//     );
// }

// function Component5() {
//     const user = useContext(UserContext);

//     return (
//         <>
//             <h1>Component 5</h1>
//             <h2>{`Hello ${user} again!`}</h2>
//         </>
//     );
// }

// export default Component1;