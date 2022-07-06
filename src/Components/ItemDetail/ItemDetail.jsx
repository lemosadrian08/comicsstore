import './ItemDetail.css'


const ItemDetail =({id,title,description,writer,penciler,published,pictureURL})=>{
    return(
    <div className='itemDetailCountainer'>
        <h2 className="titleDetail">{title}</h2>
        <img className="imgDetail" src={pictureURL} alt={title} />
        <p className="publishedDetail">Published: {published}</p>
        <p className="writerDetail">Writer: {writer}</p>
        <p className="pencilerDetail">Penciler: {penciler}</p>
        <p className="descriptionDetail">{description}</p>
    </div>
    )
    
}

export default ItemDetail