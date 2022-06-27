import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemListContainer =({greeting})=>{

    const onAdd =(counter)=>{
        counter > 0 && alert(`agregaste ${counter}`);
      } 

    return(
        <>
        <p>{greeting}</p>       
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
        </>
    )
};


export default ItemListContainer