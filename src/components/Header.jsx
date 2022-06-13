import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import { format} from 'date-fns'
const Header = () => {
    
    const date = format(new Date(), "dd-MM-yyyy HH:mm");
    
    return ( 
        <div className="header">
            <FontAwesomeIcon className="icon" icon={faHouse} fontSize="50px" color="white" />
            <p>{date}</p>
        </div>
     );
}
 
export default Header;