import { useState, createContext, children } from "react";

// creamos el nevo contexto del carrito
export const CarContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})
 
 // PROVIDER

export const CarProvider =({children}) => {
    const [carrito, setCarrito] = useState([]); // estado local carrito 
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    console.log(carrito);

    //funcion agregar 
    const agregarProducto = (item, cantidad) =>{
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(_prev => (item.precio * cantidad));
        }
    }
    // FUNCION ELIMINAR PRODUCTO DEL CARRITOO
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    };
    // FUNCION PARA VACIAR LE CARRITO
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    };

    //  PARA ENVIAR EL VALoR ACTUAL DEL CARRITO Y LOS METODOS A LOS OCMPONENTES DE LA APP QUE LO NECESITEN
    return (
       <CarContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
       </CarContext.Provider>
    );
}
