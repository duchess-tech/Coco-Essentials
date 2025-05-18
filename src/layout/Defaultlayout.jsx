import { useContext, useState} from "react";
import Cartcontext from "../cartcontext";
import Footer from "../components/footer";
import MainNavbar from "../components/mainNav"
import PropTypes from 'prop-types';
import SideMenu from "../components/menu";
import Sidebar from "../components/sidebar";

const Defaultlayout = ({children}) => {

    const { isOpen, setIsOpen, Back} = useContext(Cartcontext);
    const [isSideOpen, setSideOpen] = useState(false)
  
    return (
        <div className="">
            <MainNavbar logoSrc="/cocoLogo1.png" setIsOpen={setIsOpen} isOpen={isOpen} Back={Back} isSideOpen={isSideOpen} setSideOpen={setSideOpen}
            />
             <SideMenu/>
            {isSideOpen && <Sidebar  isSideOpen={isSideOpen} setSideOpen={setSideOpen}/>}
            {children}
            <Footer   logoSrc="/cocoLogo1.png"/>

        </div>
    )
}

Defaultlayout.propTypes =  {
    children: PropTypes.node.isRequired,
}
  

  
export default Defaultlayout