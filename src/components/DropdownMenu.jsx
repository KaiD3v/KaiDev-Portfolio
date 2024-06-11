import React from 'react';

const DropdownMenu = ({ isActive, scrolled }) => {
    return (
        isActive ? (
            <div className={scrolled ? 'dropdown dropdown-on-scroll' : 'dropdown'}>
                <ul>
                    <li><a href="#works">Trabalhos</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        ) : null
    );
}

export default DropdownMenu;
