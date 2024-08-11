import React from 'react';
import {Link} from 'react-router-dom';

const listStyle={
    paddingRight:'50px'
}

const Header = () =>(
    <div id= "headerid" className="header" style={{display: 'flex',flexDirection: 'row'}}>
        <div className="logo-container" >
            <img className='logo' src ="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"  style={{width:200, height:200}}/>
        </div>
        <div >
            <ul style={{display:'flex', flexDirection:'row', padding:100,listStyleType:'none' }}>
                <li style={listStyle}><Link to={'./'}>Home</Link></li>
                <li style={listStyle}><Link to={'./about'}>About Us</Link></li>
                <li style={listStyle}><Link to={'/contact'}>Contact Us</Link></li>
                {/* <li style={listStyle}><Link to={'/body'}>Cart</Link></li> */}
            </ul>
        </div>
    </div>
)

export default Header;

