import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { useEffect, useState } from "react"

import DropdownMenu from "./DropdownMenu";

const Navbar = ({ isActive, handleDropDown }) => {
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
        <>
            <nav className={scrolled ? "scrolled nav-container" : 'nav-container'}>
                <div>
                    <p>
                        <a href="/">Kai<b>D3v</b></a>
                    </p>
                </div>
                <div className="lg-screen-div">
                    <ul>
                        <li><a href="/#projects">Trabalhos</a></li>
                        <li><a href="/#projects">Projetos</a></li>
                        <li><a href="/#contact">Contato</a></li>
                    </ul>
                </div>
                <div className="sm-screen-div">
                    {!isActive && <CiMenuBurger size={25} color={scrolled ? "black" : "white"} onClick={handleDropDown} />}
                    {isActive && <IoMdClose size={25} color={scrolled ? "black" : "white"} onClick={handleDropDown} />}
                </div>
            </nav>
            <DropdownMenu scrolled={scrolled} isActive={isActive} />
        </>
    )
}

export default Navbar