// So app.js is basically getting your all components assembled here
import Header from './components/header'
import {Body} from './components/Body'
import {Footer} from './components/Footer'
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
  const onDel=(dog)=>{
    console.log(`DELETEO ${dog} ...`);
  }
  let cats=[{n:1,dogs:"meow"},{n:2,dogs:"bark"}];
  return (
    <>
      <Header title='Sending a title via props'/>
      <Body cont='Say Hello Santa' cats={cats} onDel={onDel}/>
      <Footer/>
    </>
  );
}


export default App;
