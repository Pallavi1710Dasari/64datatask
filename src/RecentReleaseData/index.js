import "./index.css"
const RecentReleaseData=(props)=>{
    const {eachItem}=props
    const {id, date, heading, description}=eachItem
    return(
        <li className="list-items">
            <h1 className="list-date">{date}</h1>
            <h1 className="list-head">{heading}</h1>
            <p className="list-des">{description}</p>
        </li>
    )
}
export default RecentReleaseData