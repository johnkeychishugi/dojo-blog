import { useState } from "react"; 

const Home = () => {
    // let name = 'Mario';
    const [name,setName] = useState('Mario');
    const [age,setAge] = useState(24);

    const handleClick = () =>{
        setName('John');
        setAge(29);
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{ name }</p>
            <p>{ age }</p>
            <button onClick={ handleClick }>Click Me</button>
        </div>
     );
}
 
export default Home;