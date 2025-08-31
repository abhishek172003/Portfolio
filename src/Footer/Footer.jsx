import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FOOTER_INFO } from '../constants/constant';

function Footer(){
    return(
        <div style={{margin:"2em"}}>
            <p style={{textAlign:"center"}}>{FOOTER_INFO.text} <FontAwesomeIcon icon={faCopyright} /> {FOOTER_INFO.year}</p>
        </div>
    );
}

export default Footer;