import React from 'react'
import { Sidebardata } from './sidebardata';
import { useState } from 'react';

function Sidebar() {
    const [nav,setnav] = useState(false);

    function sayHello(name) {
        alert(`Name of this page is ${name}`);
      }
    return (
        <>
        <div className={nav ? 'side-bar' : 'side-bar-closed'}>

        <div className="profile">
            <div className="photo">
                <div className={nav ? 'circle' : 'circle-closed'}>
                <i className="fas fa-camera-retro"></i>
                </div>
            </div>
            {nav &&
            <div className="info">
                <button>Upgrade to premium</button>
                <div className="options">
                    <i className="fas fa-cog"></i> <i className="fas fa-power-off"></i> <i className="fas fa-info-circle"></i>
                </div>
            </div>
            
         }
        </div>
            <ul>
            {Sidebardata.map((val)=>
            {
                return (
                    <button>
                    <li className={nav ? 'list' : 'list-closed'} onClick={()=>sayHello(val.name)}>
                    <span className={nav ? 'icon' : 'icon-big'}>{val.icon}</span>
                    {nav &&
                    <span className="tabname">{val.name}</span>
                    }   
                    </li>
                  </button>
                )
            })}
            <li className={nav ? 'none' : 'help'}>
                <span className="box"><i className="fas fa-power-off"></i></span>
            </li>
            </ul>
        </div>
        <div className="toggle" onClick={()=> setnav(!nav)}>
        {nav ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            
        </div>
        </>
    );
}

export default Sidebar
