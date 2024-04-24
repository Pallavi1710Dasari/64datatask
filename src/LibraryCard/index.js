import { IoCardSharp } from "react-icons/io5";
import "./index.css"
const LibraryCard=(props)=>{
    const {eachItem}=props
    const {id, iconClassName, heading, description}=eachItem
    
    return(
        <div className='library-card'>
            <IoCardSharp className={iconClassName}/>
            <h1 className='library-card-heading'>{heading}</h1>
            <p className="library-card-description">{description}</p>
        </div>
    )
}
export default LibraryCard