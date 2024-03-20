import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


export default function Header() {
  return (
    <div className="header-container">
        <div className='header-wrap'>
            < div className='header-left-wrap'>
            < div className='header-right-wrap'>
            <Link style={{display: 'flex', alignItems: 'center' }} to='/'>
                <img
                    style={{width: "154px", height:"20px"}}
                    src= {logo}
                    alt="로고"/>
            </Link>
            <ul>
                <li>
                    <Link className="header-nav-item" to='/movie'>
                        영화
                    </Link>
                </li>
                <li>
                    <Link className="header-nav-item" to='/tv'>
                        TV 프로그램
                    </Link>
                </li>
                <li>
                    <Link className="header-nav-item" to='/person'>
                        인물
                    </Link>
                </li>
            </ul>
        </div>
        <div></div>
    </div>
    </div>
    </div>
  );
}
