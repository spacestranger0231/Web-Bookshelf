import './style.css';

const GenreItem = ({genreId, genreData}) => {
    const {name, icon} = genreData;
   
    return (
        <div className='genre_item'>
            <img src={icon}/>
            <div className='genre_item__info'>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default GenreItem;