import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import { useTasks } from '../context/ContextWeb'
import {useParams} from 'react-router-dom'
import '../styles/Docentes.css'

function Docentes() {

    const {getDocente} = useTasks();
    const params = useParams();
    const [docente, setDocente] = useState([]);

    useEffect(() => {
        const loadDocente = async () => {
            if(params.id){
                const docente = await getDocente(params.id);
                console.log(docente);
                setDocente(docente);
            }
        };
        loadDocente();
    }, [params.id]);


    return (
        <section className="secion">
            <h2 className="secion__titulo">Docentes</h2>
            <div className="secion__container-doc">
                {docente.map((doc) => 
                        <Link className="secion-doc" to="/material" key={doc.ID_DOCENTE}>
                            <h2 className="secion__doc-name">{doc.NOMBRE_DOC}</h2>
                        </Link>
                )}
            </div>
        </section>
    )
}

export default Docentes

//rfce para crear function