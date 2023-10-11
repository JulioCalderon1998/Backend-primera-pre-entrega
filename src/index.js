import express from 'express';
import ProductsRouter from './router/product.routes.js';
import CartsRouter from './router/cart.routes.js';


const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/carts", CartsRouter)
app.use("/api/products", ProductsRouter)

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})