import {useState} from "react";
import './style-add-book.css';
import {useDataStorageContext} from "../../context/data-storage-context";
import Books from "../books";
import Select from 'react-select'

const AddBook = () => {
    const {state: {genres}, dispatch, dataActions} = useDataStorageContext();

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(0);
    const [genreIds, setGenreIds] = useState([]);
    const [info, setInfo] = useState('');

    const handleNameChange = event => {
        if(name.length>=0&&name.length<=20)
        setName(event.target.value);
        else{
        alert('Неправильне введення');
        }
        
    }

    const handleAuthorChange = event => {
        if(author.length>=0&&author.length<=10)
        setAuthor(event.target.value);
        else{
        alert('Неправильне введення');
        }
    }

    const handleYearChange = event => {
        const year = +event.target.value;
        if (!isNaN(year) &&  year >= 0 && year <= 2022) {
            setYear(year);
        }
    }

    const handleInfoChange = event => {
        setInfo(event.target.value);
    }

    const handleGenresChange = selectedGenreOptions => {
        const updatedGenreIds = selectedGenreOptions.map(({value}) => +value);
        setGenreIds(updatedGenreIds);
    }

    const addBook = () => {
        const book = {name, author, year, info};
        dispatch(dataActions.addBook(book));
    }

    const options = Object.entries(genres).map(([genreId, genreData]) => ({
        value: genreId,
        label: genreData.name
    }));


    return (
        <>
            <div className='add-book'>
                <label>Назва:</label><input type='text' value={name} onChange={handleNameChange} />
                <label>Автор:</label><input type='text' value={author} onChange={handleAuthorChange}/>
                <label>Рік:</label><input type='text' value={year} onChange={handleYearChange}/>
                <label>Жанр:</label><Select options={options} onChange={handleGenresChange} isMulti />
                <label>Опис:</label><input type='text' value={info} onChange={handleInfoChange}/>       
                <button className="but" onClick={addBook}>До полиці</button>
            </div>
            <Books/>
        </>
    );
}

export default AddBook;
