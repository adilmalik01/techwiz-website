import "./navbar.css";

const Navbar = () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.sub');
        menu.classList.toggle('open');
    };

    return (
        <>
            <div className="navbar">
                <img className="logo" src="logo.jpg" alt="Logo" />
                <div className="sub">
                    <div>Home</div>
                    <div>Design Styles</div>
                    <div>Interior Gallery</div>
                    <div>Products</div>
                    <div>Contact Us</div>
                    <div>Feedback</div>
                    <div>About Us</div>
                    <div>Site Map</div>
                </div>
                <div className="mbl-div">
                    <div className="hamburger" onClick={toggleMenu}>
                        &#9776; {/* Hamburger icon */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
