import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

function Header({ setIsAsideVisible, isAsideVisible }) {
    const handleToggleAside = () => {
        setIsAsideVisible(!isAsideVisible);
        console.log(isAsideVisible);
    };

    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <label htmlFor="menu" className="icono"><i className='bx bx-menu'></i></label>
            <input type="checkbox" id="menu" className="menu-checkbox" checked={isAsideVisible} onChange={handleToggleAside}/>
            <button className='btnLogin' onClick={() => navigate('/login')}>Admin</button>
        </nav>
    );
}

export default Header;
