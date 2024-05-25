import '../styles/Header.css';

function Header({ setIsAsideVisible, isAsideVisible }) {
    const handleToggleAside = () => {
        setIsAsideVisible(!isAsideVisible);
        console.log(isAsideVisible);
    };
    return (
        <nav className="navbar">
            <label htmlFor="menu" className="icono"><i className='bx bx-menu'></i></label>
            <input type="checkbox" id="menu" className="menu-checkbox" checked={isAsideVisible} onChange={handleToggleAside}/>
        </nav>
    );
}

export default Header;
