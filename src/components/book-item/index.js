import './book-item-style.css'
import {useState} from "react";
import {useDataStorageContext} from "../../context/data-storage-context";
import {Link} from "react-router-dom";


const BookItem = ({bookId, bookData}) => {
    const [isOpenInfo, setOpenInfo] = useState(false);

    const {dispatch, dataActions} = useDataStorageContext();
    const {name, author, year,genre,info} = bookData;

    const toggleOpenInfo = () => {
        setOpenInfo(!isOpenInfo);
    }

    const removeBook = () => dispatch(dataActions.removeBook(bookId));

    return (
        <div className='book_item'>
            <span className='book_item__text'>{name}</span>
            <span className='book_item__text'>{author}</span>
            <span className='book_item__options'>{genre}</span>
            <span className='book_item__number'>{year}</span>
            
            <div className='book_item__operations'>
                <span onClick={toggleOpenInfo}>{isOpenInfo ? 'Закрити' : 'Відкрити'} Опис</span>
                <Link to={`/edit-book/${bookId}`}>Редагувати</Link>
                <span onClick={removeBook}>Видалити</span>
            </div>
            {isOpenInfo && <div>{info}</div>}
        </div>
    )
}

export default BookItem;
