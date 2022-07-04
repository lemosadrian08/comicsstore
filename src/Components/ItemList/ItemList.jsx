import Item from '../Item/Item.jsx'
import './ItemList.css'

const ItemList =({comics})=>{
    return(
        <div className='ItemList'>
            {comics.map((comic)=><Item key={comic.id} id={comic.id} title={comic.title} description={comic.description} pictureURL={comic.pictureURL} />  )}
        </div>
    )
}

export default ItemList