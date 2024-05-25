import express from 'express';
import cors from 'cors';
import docentesRoutes from './routes/docentes.routes.js';

const app = express();


app.use(cors());
/*app.use(cors({
    origin:['http://127.0.0.1:5500','http://127.0.0.1:5501']
}));*/
app.use(express.json());
app.use(docentesRoutes);


app.set("port", 3050);
app.listen(app.get("port"), ()=>
    console.log("Escuchando al puerto "+app.get("port")));