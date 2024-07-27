
import './App.css';
import Blogs from './component/Blogs';
import Createblog from './component/Createblog';
import {Routes,Route} from 'react-router-dom'
import Context from './component/Context';
import Blogdt from './component/Blogdt';


function App() {
  
  return (
    <div className="App">
     <Context>
     <Routes>
      <Route path='/' element={<Createblog />} />
      <Route path='/Blogs' element={<Blogs />} />
      <Route path='/Blogdt' element={<Blogdt/>}/>
  
    
     </Routes>
     </Context>
     
    
    </div>
  );
}

export default App;
