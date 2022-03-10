import { Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import CatData from './CatData';

   function Views() {
    return(
        <div>
            <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/CatData' element={<CatData/>} />
            <Route path='*' element={<div id="not_found_msg"> 404 Not Found!</div>}/> 
            </Routes>
            
        </div>  

    );
}

export default Views; 