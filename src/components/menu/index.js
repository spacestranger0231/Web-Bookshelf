import './menu-style.css';
import shawDraggableRectangle from '../draggable';
import {useNavigate} from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate();
const navigateToAll = () => {
    navigate('/');
};

const navigateToAdd = () => {
    navigate('/add-book');
};

const navigateToGenres = () => {
    navigate('/genres');
};
    return (
        <div className='menu'>
            <ul>
                <li><button id='all' onClick={navigateToAll}>Полиця</button></li>
                <li><button id='add' onClick={navigateToAdd}>Додати книгу</button></li>
                <li><button id='genre' onClick={navigateToGenres}>Жанри</button></li>
                <li><button id='btn1' onClick={shawDraggableRectangle}>Draggable</button></li>
            </ul>
        </div>
    )
}

export default Menu;