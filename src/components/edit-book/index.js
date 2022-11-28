import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDataStorageContext} from "../../context/data-storage-context";
import Books from "../books";
import './edit-book-style.css'
import Select from "react-select";

const EditBook = () => {
    const {state, dispatch, dataActions} = useDataStorageContext();

    const currentBookId = useParams().bookId;
    const [bookId, setBookId] = useState(currentBookId);
    const {books, genres} = state;
    const bookData = books[bookId];

    const [name, setName] = useState(bookData.name);
    const [author, setAuthor] = useState(bookData.author);
    const [year, setYear] = useState(bookData.year);
    const [genreIds, setGenreIds] = useState(bookData.genreIds);
    const [info, setInfo] = useState(bookData.info);

    if (!currentBookId) {
        return null;
    } else if (currentBookId !== bookId) {
        setBookId(currentBookId);

        const newBookData = books[currentBookId];
        setName(newBookData.name);
        setAuthor(newBookData.author);
        setYear(newBookData.year);
        setInfo(newBookData.info);
    }

    const handleNameChange = event => {
        if(name.length>=0&&name.length<=20)
        setName(event.target.value);
        else{
        alert('Неправильне введення');
        }
        
    }

    const handleAuthorChange = event => {
        if(author.length>=0&&author.length<=20)
        setName(event.target.value);
        else{
        alert('Неправильне введення');
        }
        
    }

    const handleYearChange = event => {
        const year = +event.target.value;
        if (!isNaN(year) &&  year >= 0 && year<= 2022) {
            setYear(year);
        }
    }

    const handleInfoChange = event => {
        setInfo(event.target.value);
    }

    const handleGenresChange = selectedGenreOptions => {
        const updateGenreIds = selectedGenreOptions.map(({value}) => +value);
        setGenreIds(updateGenreIds);
    }

    const saveBook = () => {
        const book = {name, author, year,genreIds, info};
        dispatch(dataActions.saveBook(bookId, book));
    }

    const options = Object.entries(genres).map(([genreId, genreData]) => ({
        value: genreId,
        label: genreData.name
    }));

    
    const selectedGenreOptions = genreIds.map(genreId => ({
        value: `${genreId}`,
        label: genres[genreId].name
    }));

    return (
        <>
            <Link to='/'>Повернутись до полиці</Link>
            <div className='edit-book'>
                <label>Назва:</label><input type='text' value={name} onChange={handleNameChange}/>
                <label>Автор:</label><input type='text' value={author} onChange={handleAuthorChange}/>
                <label>Рік:</label><input type='text' value={year} onChange={handleYearChange}/>
                <label>Жанр:</label><Select options={options} defaultValue={selectedGenreOptions} onChange={handleGenresChange} isMulti />
                <label>Опис:</label><input type='text' value={info} onChange={handleInfoChange}/>
                <button onClick={saveBook}>Зберегти книгу</button>
            </div>
            <Books/>
        </>
    );
}

export default EditBook;
