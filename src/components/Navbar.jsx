import { CiMenuBurger } from "react-icons/ci";

import { useEffect, useState } from "react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })

    return (
        <nav className={scrolled ? "scrolled nav-container" : 'nav-container'}>
            <div>
                <p>
                    <a href="#profile">Kai<b>D3v</b></a>
                </p>
            </div>
            <div className="lg-screen-div">
                <ul>
                    <li><a href="#works">Trabalhos</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
            <div className="sm-screen-div">
                <CiMenuBurger size={25} color={scrolled ? "black" : "white"}/>
            </div>
        </nav>
    )
}

export default Navbar