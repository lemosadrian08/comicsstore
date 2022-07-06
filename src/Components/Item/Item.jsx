import './Item.css'

const Item =({id, title, description, pictureURL})=>{
    return(
        <>
        <div className='itemContainer'>
        <h2  className='itemTitle'>{title}</h2>
        <img src={pictureURL}  alt={title} className='itemImage'/>
        <p className='itemDescription'>{description}</p>
        </div>
        
        </>
        
    )
}

export default Item