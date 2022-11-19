import React from 'react'
import { useState } from 'react'
import "../../styles/components/Navbar.css"


function SiteNavbarEn() {
    
    const [showMenu, setShowMenu] = useState(false);
    const menuButton = () => {
        setShowMenu(!showMenu);
    };

    // Define MobileMenu component
        const MobileMenu = () => {
            return (
                <nav className='mobile-menu'>
                    <ul id='responsive-menu'>
                        <a href="#about-me" className='list' onClick={menuButton}>
                            <li>About Me</li>
                        </a>
    
                        <a href="#skills" className='list' onClick={menuButton}>
                            <li>My Skills</li>
                        </a>
    
                        <a href="#my-projects" className='list' onClick={menuButton}>
                            <li>My Projects</li>
                        </a>
    
                        <a href="/">
                            <img src="./img/french-flag.png" alt="" />
                        </a>
                    </ul>
                </nav>
            );
        };

    return (
        <>
            <nav className='topnav'>
                <a href="#header">
                    <h1>OtR</h1>
                </a>

                <ul className='menu'>
                    <a href="#about-me" className='list'>
                        <li>About Me</li>
                    </a>

                    <a href="#skills" className='list'>
                        <li>My Skills</li>
                    </a>

                    <a href="#my-projects" className='list'>
                        <li>My Projects</li>
                    </a>

                    <a href="/">
                        <img src="./img/french-flag.png" alt="" />
                    </a>
                </ul>

                {/* This button only shows up on small screens. It is used to open the mobile menu */}
                <button className='show-mobile-menu-button' onClick={menuButton}>
                    <img src="./img/menu.png" alt="menu"/>
                </button>
            </nav>

            {/* The mobile menu and the close button */}
            {showMenu && <MobileMenu />}
            {showMenu && (
                <button className='close-mobile-menu-button' onClick={menuButton}>
                    <img src="./img/close.png" alt="menu"/>
                </button>
            )}
        </>
    );
  

    // return (

    //     <>

    //         <nav className='desktop-screen-size'>
    //             <a href="#header">
    //                 <h1>OtR</h1>
    //             </a>


    //             <div className='responsive-menu-button' onClick={openMenu}>
    //                 <img src="./img/menu.png" alt="menu"/>
    //             </div>

                // <ul id='responsive-menu'>
                //     <a href="#about-me" className='list'>
                //         <li>A propos de moi</li>
                //     </a>

                //     <a href="#skills" className='list'>
                //         <li>Mes compétences</li>
                //     </a>

                //     <a href="#my-projects" className='list'>
                //         <li>Mes projets</li>
                //     </a>

                //     <a href="/en">
                //         <img src="./img/english-flag.png" alt="" />
                //     </a>

                //     <LanguageButton/>
                // </ul>    
    //         </nav>        
              
    //     </>
    // )
}

export default SiteNavbarEn