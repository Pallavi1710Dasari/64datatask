import {Component} from "react"
import Header from "../Header"
import SideBar from "../SideBar"
import Content from "../Content"
import RecentReleasesCard from "../RecentReleasesCard"
import "./index.css"
class Home extends Component{
    state={isExpanded:false}

    onChangesidebar=()=>{
        this.setState((prevState)=>({isExpanded:!prevState.isExpanded}))
    }

    render(){
        const {isExpanded}=this.state
        console.log(isExpanded)
        let sideClassName=isExpanded ? "sidebar-opened" : "sidebar-closed"
        let containerClassName=isExpanded ? "body-container-with-full-sidebar" : "body-container-without-full-sidebar"
        
        return(
            <div className="container">
                <div className={sideClassName}>
                    <SideBar onChangesidebar={this.onChangesidebar} isExpanded = {isExpanded} />
                </div> 
                <div className={containerClassName}>
                    <div className="header-section">
                        <Header/>
                    </div>
                    <div className="content-release-card-container">
                        <div className="content-section">
                        <Content/>
                        </div>
                        <div className="release-section">
                        <RecentReleasesCard/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Home