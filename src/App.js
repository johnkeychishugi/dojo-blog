import './App.css';

function App() {
  const title = 'Welcome to the new blog'; 
  const likes = 50;
  // const person = {name : 'John', age:24};
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person.name }</p> */}
        <p>{ 10 }</p>
        <p>{ "Hello John" }</p>
        <p>{ [1,2,3,5,5,6,] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link } >Google site</a>
      </div> 
    </div>
  );
}

export default App;
