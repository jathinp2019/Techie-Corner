import React from 'react'
import { createContext, useState } from 'react'
import { ProductArray , getProductData } from './pages/Products'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
})

export function CartProvider({ children }) {

    const [CartProducts, setCartProducts] = useState([])

    function getProductQuantity(id) {
        const quantity = CartProducts.find(product => product.id === id)?.quantity
        if (quantity === undefined) {
            return 0;
        }

        return quantity
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id)

        if(quantity === 0){
            setCartProducts([
                ...CartProducts,
                {
                    id:id,
                    quantity: 1
                }
            ])
        } else {
            setCartProducts(
                CartProducts.map(
                    product => product.id === id ? {...product,quantity: product.quantity + 1 }:product
                )
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            CartProducts => CartProducts.filter(currentProduct=>{
                return currentProduct.id != id;
            })
        )
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id)
        if(quantity == 1){
            deleteFromCart(id)
        }
        else {
            setCartProducts(
                CartProducts.map(
                    product => product.id === id ? {...product,quantity: product.quantity - 1 }:product
                )
            )
        }
    }


    function getTotalCost(){
         let totalCost = 0
         CartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
         })
         return totalCost
    }
    const contextValue = {
        items: CartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider