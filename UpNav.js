import './Upnav.css'

function UpNav() {
    return ( 
        <>
        <ul className="up">
            <li className="shopkart"style={{fontSize:'50px'}}>ShopKart</li>
            <li className='right'>WISHLIST</li>
            <li style={{marginTop:'20px'}}>BAG</li>
        </ul>
        
        </>
     );
}

export default UpNav;