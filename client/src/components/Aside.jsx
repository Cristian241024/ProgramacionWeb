import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { useTasks } from '../context/ContextWeb';
import libro from '../assets/libro.svg';
import flecha from '../assets/flecha.svg';
import '../styles/Aside.css';

function Aside({ isVisible }) {
    const navigate = useNavigate();
    const { nivel, loadNivel, materias, loadMaterias } = useTasks();

    useEffect(() => {
        loadNivel();
        loadMaterias();
    }, [loadNivel, loadMaterias]);

    const desplegar = useCallback((event) => {
        const element = event.currentTarget;
        element.classList.toggle('arrow');
        const menu = element.nextElementSibling;
        const height = menu.clientHeight === 0 ? menu.scrollHeight : 0;
        menu.style.height = `${height}px`;
    }, []);

    return (
        <aside className={`aside ${isVisible ? 'visible' : 'hidden'}`} id="aside">
            <ul className="list">
            {nivel.map((niv) => (
                <li className="list__item" key={niv.ID_NIVEL}>
                    <div className="list__button" onClick={desplegar}>
                        <img src={libro} className="list__img" alt="Libro" />
                        <span className="nav__link">Nivel {niv.SEMESTRE}</span>
                        <img src={flecha} className="list__arrow" alt="Flecha" />
                    </div>
                    <ul className='list__show'>
                        {materias.filter(materia => materia.ID_NIVEL === niv.ID_NIVEL).map(materia => (
                        <li className="list__inside" key={materia.ID_MATERIA}>
                            <Link to={`/docentes/${materia.ID_MATERIA}`} className="nav__link nav__link-inside">{materia.NOMBRE_MATERIA}</Link>
                        </li>
                        ))}
                    </ul>
                </li>
            ))}
            </ul>
        </aside>
    );
}

export default Aside;


/*

const [selectedNivel, setSelectedNivel] = useState(null);
const handleNivelClick = (idNivel) => {
        setSelectedNivel(selectedNivel === idNivel ? null : idNivel);
    };
onClick={() => handleNivelClick(niv.ID_NIVEL)}
{`list__show ${selectedNivel === niv.ID_NIVEL ? 'list__show--active' : ''}`}
*/

