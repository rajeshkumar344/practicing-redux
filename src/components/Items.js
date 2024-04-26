import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/Cartslice'

export default function Items() {
  const dispatch = useDispatch()
    const [products,setProducts] = React.useState([])
    const [search,setSearch] =React.useState("")

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data=>setProducts(data))
 
    },[])
    function addToCart(product){
      dispatch(add(product))

    }
    function prevent(event){
      event.preventDefault()
    }
  return (
    <div className='m-4'>
       <div>
       <form className="d-flex justify-center" onSubmit={prevent}>
        <input className="form-control me-2 w-96" type="search" placeholder="Search" aria-label="Search"
        onChange={(e)=>setSearch(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
       </div>
        {/* {JSON.stringify(products)} */}
        <div className='grid grid-cols-4 '>
            {products.map(function(product){
              if (product.title.toLowerCase().includes(search.toLowerCase())){
                return (
                 <div className='m-2'>
                    <div className="card   h-100 text-center mb-12" >
                       <img src={product.image} className="card-img-top w-full" alt="..."
                       style={{width : 100 , height : 130, marginLeft :120}}/>
                   <div className="card-body">
                        <h5 className="card-title  mt-2">{product.title}</h5>
                      {/* <p className="card-text">{product.description}</p> */}
                    <button  className="btn btn-primary ml-4 mt-2" onClick={()=>{addToCart(product)}}>Add To Cart</button>
               </div>
             </div>
        </div>

                )}
             
  }  )}
        </div>

    </div>
  )
}
