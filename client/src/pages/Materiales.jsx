import {Link} from 'react-router-dom';

function Materiales() {
    return (
        <section className="secion">
        <h2 className="secion__titulo">Recursos</h2>
        <div className="secion__container-doc">
            <Link className="secion-doc" to="/archivos">
                <h2 className="secion__doc-name">Examenes</h2>
            </Link>
            <Link className="secion-doc" to="/archivos">
                <h2 className="secion__doc-name">Libros</h2>
            </Link>
            <Link className="secion-doc" to="/archivos">
                <h2 className="secion__doc-name">Enlaces</h2>
            </Link>
            <Link className="secion-doc" to="/archivos">
                <h2 className="secion__doc-name">Material extra</h2>
            </Link>
        </div>
    </section>
    )
}

export default Materiales
