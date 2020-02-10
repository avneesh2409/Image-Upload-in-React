import React, { useEffect,useState } from 'react'



export default function Contact() {
    const [count, setCount] = useState(1)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(results => results.json())
        .then(data => {
          const {name} = data.results[0];
          setFirstName(name.first);
          setLastName(name.last);
        });
}, [count])
    return (
        <div>
            <h1>{count}</h1>
    <h1>firstname :-{firstName}  LastName :- {lastName}</h1>
            <button onClick={()=>setCount(count => parseInt(count) + 1)}>click me</button>
        </div>
    )
}
