import { useState, useContext } from "react";
import { CarContext } from "../../contexx/CarritoContext";
import {db} from "../../service/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal, total} = useContext(CarContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    //------ funciones y validaciones-----------

    const manejadorFormulario = (e) =>{
        e.preventDefault();
    //----- checa que los campps esten  bien llenados--------
    if(!nombre || !apellido || !telefono || !email || !emailConfirmation){
        setError("Complete correctamente todos los campos");
        return;
    }
    //--------- validaciòn de email-------
    if(email !== emailConfirmation){
        setError("Los email no coinciden");
        return;
    }
    //-------- EL OBJETO DE LA ORDEN--------
    const orden ={
        items: carrito.map(producto =>({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad
        })),
        
        total: cantidadTotal,
        nombre,
        apellido,
        telefono,
        email,
        fecha: new Date()

    };
    ///--------se guarda la orden en la bd-------------------

    Promise.all(
        orden.items.map(async (productoOrden)=>{
            const productoRef = doc(db, "inventario",productoOrden.id);
            const productoDoc = await getDoc(productoRef);
            const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef,{
                stock: stockActual - productoOrden.cantidad
            })
    })
    )
        .then(()=>{
            addDoc(collection(db, "ordenes"), orden)
                .then((docRef)=>{
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                })
                .catch((error)=>{
                    console.log("Error al Crear la ORDEN", error);
                    setError("Error al crear la ORDEN...")
                })
        })
        .catch((error)=>{
            console.log("Error al actualizar el Stock");
            setError("Error al actualizar el Stock. Intenta de nuevo")
        })

    }
  return (
    <div> 
        <h3>Verifica tu pedido</h3>
            <form onSubmit={manejadorFormulario}>
                    {carrito.map(producto =>(
                        <div key={producto.id}>
                            <p>
                                {producto.item.nombre} x {producto.cantidad}
                            </p>
                            <p>Precio $ {producto.item.precio}</p>
                            <hr />
                            <h4>Total: $ {total}</h4>
                            <hr />
                            <hr />
                        </div>
                    ))}
                    <hr />
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Apellido</label>
                        <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Telefono</label>
                        <input type="text" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Email Confrimación</label>
                        <input type="email" value={emailConfirmation} onChange={(e)=>setEmailConfirmation(e.target.value)}/>
                    </div>
                    {
                        error && <p style={{color:"red"}}>{error}</p>
                    }
                        <button type="submit">Finalizar compra</button>
            </form>
            {
                ordenId && (
                    <strong>¡Gracias por tu compra!.Tu nùmero de ORDEN es {ordenId}</strong>
                )
            }
    </div>
    )
}
export default Checkout


