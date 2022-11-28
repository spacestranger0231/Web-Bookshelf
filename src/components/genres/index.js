import { useDataStorageContext } from "../../context/data-storage-context";
import GenreItem from "../genre-item";

const Genres = () => {
    const {state: {genres}} = useDataStorageContext();

    const genreItems = Object.entries(genres).map(([genreId, genre]) => <GenreItem
        key={genreId} genreId={genreId} genreData={genre}/>);

    return (
        <div>
            {genreItems}
        </div>
    )
}

export default Genres;
