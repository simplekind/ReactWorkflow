// So app.js is basically getting your all components assembled here
import Header from './components/header'
import {Body} from './components/Body'
import {Footer} from './components/Footer'
import {About} from './components/About'
import React,{useState} from 'react' // here we are importing hooks{useState} for our react app

// So basically we use hooks only inside the function and not in classes

import {
  BrowserRouter as Router,
  Route,
  Switch
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
  // if (1) useState(); // is wrong because
  // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
  // so you cannot put it inside conditions/blocks/loops,etc
  // same goes for other hooks as well
  // So how use States works?
  // It re renders whole function component
  // useState returns an array of 2 elements,
  // so we will be destructuring it
  // const [currState,funcToUpdateState] = useState(value_of_state_you_want_to_be_changed_is_stored_in_currState);
  
  const [time,updateTime] = useState(0);
  console.log("A "+ time);
  const onClick= ()=>{
    // updateTime(time-1);
    updateTime(time =>  time-1)
    console.log(time);
    updateTime(time =>  time-1)
    // updateTime(time-1);
    console.log("new time "+time);
  }
  console.log("B "+time);

  const onDel=(cat)=>{
    console.log(`DELETEO ${cat.dogs} ...`);
    updateState(cats.filter((e)=>{return e!=cat}) ) ; // deletes cat from the cats
    // so lets say you use 
  }

  const [cats,updateState]=useState([{n:1,dogs:"meow"},{n:2,dogs:"bark"},{n:3,dogs:"mouu"},{n:4,dogs:"grrrhh"},{n:5,dogs:"go-brrr"}]);
  // this gives the value of state originally in cats
  // and make updateState function a kinda of referntial pointer so that whenever it gets executed it will be able to re render our functional component automatically
  // it also allows updateState function to use cats automatically 
  // if you use them by value let say like in onDel fun where we are supposed to decrement some count variable
  // lets say we start with a default value of time = 0
  // const [time,updateTime] = useState(0);
  // console.log("A "+ time);
  // const onClick= ()=>{
  //   updateTime(time-1);
  //   console.log(time);
  //   updateTime(time-1);
  //   console.log("new time "+time);
  // }
  // console.log("B "+time);
  // So it will first print A 0
  // then B 0
  // When button is clicked, 
  // It will go on to onClick function
  // do everything in it ,
  // When it encounters updateTime , it stores in stack the state to execute the function component again which is count-1=-1 , but doesnt executes until we reach end of onClick function , else it wont make sense much
  // When it encounters again updateTime , it stores in stack the state to execute the function component again which is count-1=-1
  // Basically overriding 
  // so we need something stronger to update our state by refernce and there Arrow Functions came to role:
  // updateState(cnt => cnt-1)
  // updateState(cnt => cnt-1)
  // This will actually update value of count by decrementing 1 every time it renders
  // as in stack it will first store count - 1= -1, then for next updateTime it will store count - 1 = -1 -1 = -2 
  return (
    <>
    <Router>
      <button onClick={onClick}> Click me! {time} </button>
      <Header title='Sending a title via props'/>
      <Switch>
        {/* <Route path="/" render={()=>{  else if u search for '/About' it will go for this one since '/' matches*/}
        <Route exact path="/" render={()=>{
          return(
          <>
           <Body cont='Say Hello Santa' cats={cats} onDel={onDel}/>
           <Footer/>
          </>
          )
        }}>
        </Route>
        <Route exact path='/About'>
          <About/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}


export default App;
