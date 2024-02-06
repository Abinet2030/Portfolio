import './App.css';

import Home from './contener/Home'
import About from './contener/About'
import Contact from './contener/Contact'
import Skill from './contener/Skill'
import NotFound from './contener/NotFound'
import react,{Routes, Route} from 'react-router-dom'


function App() {
    return ( <div >
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
           <Route path='/Skill' element={<Skill/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      
      
      
    </div>
       
    );
}

export default App;