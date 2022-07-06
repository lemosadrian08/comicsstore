import { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { SpinnerDotted } from 'spinners-react';
import './ItemDetailContainer.css'

const comicDatos = {id:'0', title:'Venom (2018) #1', description:"In the wake of S.H.I.E.L.D.'s collapse, an ancient and primordial evil has been awakened beneath the streets of New York, and with it, something equally evil has awakened in that most Wicked of Webslingers - VENOM! Still a Lethal Protector of the innocents in New York, this never-before-seen threat could force Venom to relinquish everything it holds dear - including Eddie Brock! Join two of the hottest creators in comics today, Donny Cates and Ryan Stegman, for a VENOM adventure a thousand years in the making!", writer: 'Donny Cates', penciler:'Ryan Stegman', published:'May 09, 2018', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg'}


const promise = new Promise ((res,rej)=>{
    setTimeout(()=>{
        res(comicDatos)
    }, 2000);
})


const ItemDetailContainer =()=>{

    const [comic,setComic]=useState([]);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        promise.then((data)=>{
            setComic(data)
        }).catch(()=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
    });


    return(
    <>

    {loading? <div className='spinnerContainer'><SpinnerDotted color='#004dff'/></div> :
            error? <p>Error</p> :
            <ItemDetail key={comic.id} id={comic.id} title={comic.title} description={comic.description} writer={comic.writer} penciler={comic.penciler} published={comic.published} pictureURL={comic.pictureURL} />}
    </>
    )
}

export default ItemDetailContainer