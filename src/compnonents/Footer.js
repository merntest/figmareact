import '../styles/Footercss.css';
import travelexperts from '../images/Travelexperts.png';
import bookingconf from '../images/bookingconf.png';
import cancellation from '../images/cancellation.png';
import pay from '../images/pay.png';
const Footer = () =>{
    const servicesfooter = [
        {
            id:'1',
            title:'Travel experts',
            tag:'Expert guidance buy our',
            img: travelexperts,
        },
        {
            id:'2',
            title:'booking confirmation',
            tag:'inmediate',
            img: bookingconf,
        },
        {
            id:'3',
            title:'cancellation',
            tag:'24-hour',
            img: bookingconf,
        },
        {
            id:'4',
            title:'Flexible payments',
            tag:'plans',
            img:pay,
        }


    ]
return (
    <div className="ft">
    <p className='texp'> Why to Book with Call Center</p>
    <p className='textp2'>Discover the beauty of pillipines</p>
    <div className='sr'>
        
    </div>
    </div>
)
}
export default Footer;