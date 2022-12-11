import { AppBarComponent } from './components/AppBarComponent'
import { Content } from './components/content'
import { SignIn } from './components/Signin';
import { SignUp } from './components/Signup';
import { Calendar } from './components/Calendar';
import { Footer } from './components/footer';
import {AppBarComponentLogout} from './components/AppBarWithLogout';
import { UserData } from './components/UserPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<><AppBarComponent /><Footer/></>} />
          <Route path="main" element={<><AppBarComponentLogout /><Content/></>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="renttime" element={<Calendar/>}/>
          <Route path="me" element={<UserData/>}/>
          
        </Routes>

        
      </BrowserRouter>


    </div>
  );
}

export default App;
