import './Item.css'

const Item =({id, title, description, pictureURL})=>{
    return(
        <>
        <div className='itemContainer'>
        <p  className='itemTitle'>{title}</p>
        <img src={pictureURL}  alt={title} className='itemImage'/>
        <p className='itemDescription'>{description}</p>
        </div>
        
        </>
        
    )
}

export default Item