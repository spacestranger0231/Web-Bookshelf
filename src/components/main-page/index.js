import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddBook from "../add-book";
import EditBook from "../edit-book";
import Books from "../books";
import Menu from "../menu";
import Genres from '../genres'; 
import './main-style.css'

const MainPage = () => {
    return (
        <div className='main'>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/add-book' element={<AddBook/>}></Route>
                    <Route path='/edit-book/:bookId' element={<EditBook/>}></Route>
                    <Route path='/genres' element={<Genres/>}></Route>
                    <Route path='/' element={<Books />}></Route>
                </Routes>
            </BrowserRouter>
         
            
        </div>   
    );

}
export default MainPage;
