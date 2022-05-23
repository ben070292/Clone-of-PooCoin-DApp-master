import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
           <div className="header_left">
               <div className="header_centerleft">
                    <img
                    src="https://poocoin.app/images/logo/poocoin512.png"
                    />  
                    <div className="title">
                        <span>
                            <Link to="/Charts"> 
                                PooCoin
                                <br/>
                                Charts
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="header_centercenter">
                    <div>Binance (BSC)</div>
                    <div>Polygon (Matic)</div>   
                    <div>KuChain (KCC)</div>   
                </div>
                <div className="header_centerright">
                    <img
                        src="https://poocoin.app/images/logo/poocoin512.png"
                    />
                    <span>$ 2.36</span>
                    <a href="https://t.me/poocointokenchat">
                        <img src="https://poocoin.app/images/logos/telegram.svg" height="25"/>
                    </a>
                </div>
            </div>
            <div className="header_middle">
                <a><Link to="/Charts">Charts</Link></a>
                <a><Link to="/Trade">Trade</Link></a>
                <a>Multi Chart</a>
                <a>About</a>
                <a><Link to="/Tools">Tools</Link></a>
                <a>Premium</a>
                <a><Link to="/ad">Advertise</Link></a>
                <a href="https://t.me/Poocoin_Pricebot">
                    <a>Free Price Bot</a>
                </a>
            </div>
            <div className="header_right">
                <button className="button">
                    Connect
                </button>
            </div>
        </div>
    )       
}

export default Header
