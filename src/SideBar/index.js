import "./index.css"
import { RiComputerLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const SideBar=(props)=>{
    

    const {onChangesidebar, expanded=false}=props

    const sidebarToggle=()=>{
        onChangesidebar();
    }

    return(

       <div className="sidebar-background">
        <div className="card-icons">
            <div className="profile-success-container">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-about-me-img.png" alt="profile" className="profile-img" />
            </div>
            <div className="icons">
                <div className="sidebar-item">
                    <CiSearch className="nav-item-mobile-link"/> 
                    {expanded && <p className="sidebar-description">Search Icon</p>}
                </div>
                <div className="sidebar-item">
                    <RiComputerLine className="nav-item-mobile-link"/>
                    {expanded && <p className="sidebar-description">Search Icon</p>}
                </div>
                <div className="sidebar-item">
                    <FaRegQuestionCircle className="nav-item-mobile-link"/>
                    {expanded && <p className="sidebar-description">Search Icon</p>}
                </div>
                <div className="sidebar-item">
                    <FaCalendarDay className="nav-item-mobile-link"/>
                </div>
                <div className="sidebar-item">
                    <LuBuilding2 className="nav-item-mobile-link"/>
                </div>
                <div className="sidebar-item">
                    <AiFillDollarCircle className="nav-item-mobile-link"/>
                </div>
                <div className="sidebar-item">
                    <FaHeadphones className="nav-item-mobile-link"/>
                </div>
            </div>
         </div>
            <IoIosSettings className="nav-item-mobile-link" onClick={sidebarToggle}/>
      </div> 
    )
}
export default SideBar