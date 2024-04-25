import BussinessList from "../mockdata/BussinessList.json"
import "./index.css"

const ListOfCards=()=>{
    return(
        <div className="card-list-container">
            {BussinessList.map(each=>(
                <div className='card-item' >
                    <img className="imageClassName" alt="Images" src={each.imageSrc}/>
                    <h1 className='card-heading'>{each.heading}</h1>
                    <p className='card-description'>{each.description}</p>
                </div> 
            ))}  
        </div>
    )
}
export default ListOfCards