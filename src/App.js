import logo from './logo.svg';
import './App.css';
import pulp from './movie/pulpfiction.jpg';

function Header(props){
  return(
    <header>
      <h1 style={{color: "blue"}}>{props.name}'s Kitchen</h1>
      <p>This is me trying to use this app, I hope I do well today please...</p>
    </header>
    
  );
}

function Page(props){
  return(
    <section>
      <img src="https://github.com/opethdeliverance.png" height={100} alt="profile pic."/>
      
    <p>{props.text} is the best way.</p>
    </section>
  );
}

function Movies(props){
  return(
    <section>
      
    
    <ul style = {{textAlign: "left"}}>
    {props.movies.map( movie => <li key = {movie.id}> {movie.title}</li>)}
    </ul>
    </section>
    
    
  )
}

function Image(props){
  return(
    <section>   
      <p>{props.image}</p>
      <img src={pulp} height={300} alt="logo"/>
    </section>
  );
}

function Footer(props){
  return(
    <p>Copyright {props.date}</p>

  )
}

function Button(props){
  return(
    <button className = "GO!">
      {props.click}
      
    </button>
  )
}

const movies = [
  "T2",
  "Pulp Fiction",
  "Goodfellas",
  "Casino",
  "American Beauty"
]

const movieObjects = movies.map((movie, i) => ({id: 1, title: movie}))

function App() {
  return (
    <div className="App">
      <Header name = "Raiden"/>
      <Page text = "To cook mid-rare"/>
      <Image image = "this is an image..."/>
      <Button click = "wow"/>
      <Movies movies={movieObjects}/>
      <Footer date = {new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
