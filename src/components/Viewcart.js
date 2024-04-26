import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/Cartslice'

export default function Viewcart() {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.cart)

    function removeToCart(id){
        dispatch(remove(id))

    }
  return (
    <div>
         <div className='grid grid-cols-4  '>
            {products.map(function(product){
                return (
                 <div className='m-2'>
                    <div className="card h-100 text-center mb-12" >
                       <img src={product.image} className="card-img-top w-full" alt="..."
                        style={{width : 100 , height : 130, marginLeft:120}}/>
                   <div className="card-body">
                        <h5 className="card-title  mt-2">{product.title}</h5>
                      {/* <p className="card-text">{product.description}</p> */}
                    <button  className="btn btn-danger ml-2 mt-2" onClick={()=>removeToCart(product.id)}>Remove from Cart</button>
               </div>
             </div>
        </div>

                )
             
  }  )}
        </div>


    </div>
  )
}
