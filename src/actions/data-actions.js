const DATA_ACTION_GROUP = 'DATA_ACTIONS';

export const ADD_BOOK_ACTION = `${DATA_ACTION_GROUP}/ADD_BOOK`;
export const SAVE_BOOK_ACTION = `${DATA_ACTION_GROUP}/SAVE_BOOK`;
export const REMOVE_BOOK_ACTION = `${DATA_ACTION_GROUP}/REMOVE_BOOK`;

const dataActions = {
    addBook: book => ({
        type: ADD_BOOK_ACTION,
        payload: {book}
    }),
    saveBook: (bookId, book) => ({
        type: SAVE_BOOK_ACTION,
        payload: {bookId, book}
    }),
    removeBook: bookId => ({
        type: REMOVE_BOOK_ACTION,
        payload: {bookId}
    })
}
export default dataActions;
