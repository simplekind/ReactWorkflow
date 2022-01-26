// So app.js is basically getting your all components assembled here
import Header from './components/header'
import {Body} from './components/Body'
import {Footer} from './components/Footer'
import {About} from './components/About'
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
  // etc.
} from "react-router-dom"; 

function App() {
  // Again below is an JSX, to insert HTML with JS
  // so bascially we are writing JS inside {} in our HTMl
  // in order to avoid confusion between common keywords such as
  // class from HTML(selector) and one from JS (OOPS)
  // So for the ones in HTML have different keywords resv. for them
  // here like for this case className 

  // for the ones that doesnt have a closing tag
  // we add '/' in the ending of that tag:
  // eg: <hr target='_blank' />
  // if (1) useState(); // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
  
  // So how use States works?
  // It re renders whole component
  // const [currState,funcToUpdateState] = useState(value_of_state_you_want_to_be_changed_is_stored_in_currState);
  
  const onDel=(cat)=>{
    console.log(`DELETEO ${cat.dogs} ...`);
    updateState(cats.filter((e)=>{return e!=cat}) ) ; // deletes cat from the cats
  }
  const [cats,updateState]=useState([{n:1,dogs:"meow"},{n:2,dogs:"bark"},{n:3,dogs:"mouu"},{n:4,dogs:"grrrhh"},{n:5,dogs:"go-brrr"}]);
  
  return (
    <>
    <Router>
      <Header title='Sending a title via props'/>
      <Routes>
        <Route path="/" render={()=>{
          return(
          <>
           <Body cont='Say Hello Santa' cats={cats} onDel={onDel}/>
           <Footer/>
          </>
          )
        }}>
        </Route>
        <Route path='/Link'>
          <Link/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}


export default App;
