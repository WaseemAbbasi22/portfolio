
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from  "./components";

const  App = ()=> {

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
   <Navbar/>
   <div className="relative z-0">
    <Hero/>
    <About/>
    <StarsCanvas/>
 </div>
  <Experience/>
  <Tech/>
   <Works/>
   {/* <Feedbacks/> */}
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
    
   </div>
   </BrowserRouter>
  )
}

export default App
