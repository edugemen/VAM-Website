import React, { useEffect } from "react";
import "./NavBar.css";

function NavBar(props) {
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function toggleDarkMode() {
        // setIsDarkMode(!isDarkMode);
        // if (isDarkMode) {
        //     localStorage.setItem("theme", "light");
        //     document.documentElement.setAttribute("data-theme", "light");
        // } else {
        //     localStorage.setItem("theme", "dark");
        //     document.documentElement.setAttribute("data-theme", "dark");
        // }
        // window.dispatchEvent(new Event("storage"));
        let theme = localStorage.getItem("theme") || "light";
        if (theme === "light") {
            theme = "dark";
        } else {
            theme = "light";
        }
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    useEffect(() => {
        setIsDarkMode(localStorage.getItem("theme") === "dark" ? true : false);
        setIsCollapsed(window.innerWidth < 1024);
        window.addEventListener("resize", () => {
            setIsCollapsed(window.innerWidth < 1024);
        });
    }, []);

    if (isCollapsed) {
        return (
            <nav>
                <ul className="space-between">
                    <div className="one">
                        <img className="logo" src="/logo.png" alt="logo" />
                    </div>
                    <li className="two">
                        <a href="/">VAM</a>
                    </li>
                    <li className="one">
                        <img
                            className="icon"
                            src="/menu.svg"
                            alt="menu"
                            onClick={toggleMenu}
                        />
                    </li>
                </ul>
                <ul className={`popup ${isOpen ? "" : "close"}`}>
                    <li>
                        <a href="/clasificacion">Clasificación</a>
                    </li>
                    <li>
                        <a href="/partidos">Últimos partidos</a>
                    </li>
                    <li>
                        <a href="/roquetas">Roquetas</a>
                    </li>
                    <li onClick={toggleDarkMode}>
                        <img
                            className="sunmoon"
                            src={isDarkMode ? "/moon.png" : "/sun.png"}
                            alt={isDarkMode ? "moon" : "sun"}
                        />
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/clasificacion">Clasificación</a>
                    </li>
                    <li>
                        <a href="/partidos">Partidos</a>
                    </li>
                    <li>
                        <a href="/roquetas">Roquetas</a>
                    </li>
                    <img
                        className="sunmoon"
                        src={isDarkMode ? "/moon.png" : "/sun.png"}
                        alt={isDarkMode ? "moon" : "sun"}
                        onClick={toggleDarkMode}
                    />
                </ul>
            </nav>
        );
    }
}

export default NavBar;
