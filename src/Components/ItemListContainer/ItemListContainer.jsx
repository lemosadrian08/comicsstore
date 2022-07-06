import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import { SpinnerDotted } from 'spinners-react';
import './ItemListContainer.css'


const comicsDatos = [
    {id:'0', title:'Venom (2018) #1', description:'In the wake of S.H.I.E.L.D.s collapse, an ancient and primordial evil has been awakened beneath the...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg'},
    {id:'1', title:'The Amazing SpiderMan (2018) #1', description:'An alien invasion hits New York City and the only one who can stop it is…Spider-Man?! And if even thats...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/b/90/5b3feb60f1a30/clean.jpg'},
    {id:'2', title:'Absolute Carnage (2019) #1', description:'After turning Venoms world upside down a year ago, DONNY CATES and RYAN STEGMAN are about to...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/8/f0/5d4050d57ee1a/clean.jpg'},
    {id:'3', title:'Immortal Hulk (2018) #1', description:'The FIRST issue of the Immortal Hulk! Al Ewing and Joe Bennetts critically-acclaimed and best-selling...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/5b0f16d976240/clean.jpg'},
    {id:'4', title:'Avengers (2018) #1', description:'Thor Odinson. Steve Rogers. Tony Stark. The Big Three of the Avengers are reunited at last! And...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/1/20/5af0aacb41ae3/clean.jpg'},
    {id:'5', title:'Thor (2020) #1', description:'A BRAND-NEW, SUPERSTAR CREATIVE TEAM TAKES THE KING OF ASGARD TO NEW REALMS OF GLORY! The prince is...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/8/b0/5e00da382a27d/clean.jpg'},
    {id:'6', title:'Silver Surfer: Black (2019) #1', description:'Spinning out of GUARDIANS OF THE GALAXY #1, almost the entire galaxy’s defenders have been blown...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/7/80/5cf6d5584e794/clean.jpg'},
    {id:'7', title:'Cosmic Ghost Rider (2018) #1', description:'EXPLODING FROM THE PAGES OF THANOS! Frank Castle was the Punisher. A deal with the devil made him...', pictureURL: 'https://i.annihil.us/u/prod/marvel/i/mg/3/70/5b340884f147b/clean.jpg'},
]
 


const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res (comicsDatos)
    }, 2000);
});

const ItemListContainer =({greeting})=>{

    const [ comics, setComics ] = useState([])
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        promise.then((data)=>{
            setComics(data)       
        }).catch(()=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
    })


    const onAdd =(counter)=>{
        counter > 0 && alert(`agregaste ${counter}`);
    }

    return(
        <>
        <p>{greeting}</p>       
        <ItemCount stock={5} initial={0} onAdd={onAdd} />
        {loading? <div className='spinnerContainer'><SpinnerDotted color='#004dff'/></div> :
            error? <p>Error</p> :
             <ItemList comics={comics} />
        }
       </>
    )
};


export default ItemListContainer