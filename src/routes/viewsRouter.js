import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => 
    res.render('index', {}
    //va con objeto vacio porque en las plantillas podriamos usar la capacidad de autocompletarse otorgandole un valor a renderizarse en lugar de un objeto vacio, pero en éste caso, es mejor el objeto vacio
))

export default router