import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';



const ItemDetail =({id,title,description,pictureURL,price})=>{
    const onAdd =(counter)=>{
        counter > 0 && alert(`agregaste ${counter}`);
    }
    return(
        
        <div className='itemDetailCountainer'>
            <img className="imgDetail" src={pictureURL} alt={title} />
        <div className='itemDetailInfoCountainer'>
            <h2 className="titleDetail">{title}</h2>
            <p className="descriptionDetail">{description}</p>
            <p className="priceDetail">${price}</p>
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
        </div>

        </div>
    )
    
}

export default ItemDetail