import {useDataStorageContext} from "../../context/data-storage-context";
import BookItem from "../book-item";

const Books = () => {
    const {state: {books}} = useDataStorageContext();
    const bookItems = Object.entries(books).map(([bookId, book]) => <BookItem key={bookId} bookId={bookId} bookData={book}/>);

    return (
        <div>
            {bookItems}
        </div>
    );
}

export default Books;