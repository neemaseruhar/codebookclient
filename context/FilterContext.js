import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducer/filterReducer";


const initialFilter ={
    productList : [],
    onlyInStock: false,
    bestSeller:false,
    ratings: null,
    sortBy: null
}

export const FilterContext = createContext(initialFilter)

export const FilterProvider = ( {children}) => {
    const [state,dispatch] = useReducer(filterReducer, initialFilter);

    function initialProductList (products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products:products
            }
        })
    }
    function sortBy (products){
        if(state.sortBy === "lowtohigh"){
           return products.sort((a,b) => Number(a.price)- Number(b.price))
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price))
        }
        return products
    }

    function inStock (products){
        return state.onlyInStock ? products.filter((product) => (product.in_stock === true)) : products
    }

    function bestSeller(products){
        return state.bestSeller ?  products.filter((product) => (product.best_seller === true)) : products
    }

    function ratings(products){
        if(state.ratings === "4STARRATING" ){
            return products.filter((product) => product.rating >= 4)
        }
        if(state.ratings === "3STARRATING" ){
            return products.filter((product) => product.rating >= 3)
        }
        if(state.ratings === "2STARRATING" ){
            return products.filter((product) => product.rating >= 2)
        }
        if(state.ratings === "1STARRATING" ){
            return products.filter((product) => product.rating >= 1)
        }
        return products;
    }

    const filteredProductList = sortBy(inStock(bestSeller(ratings(state.productList))))

    const value ={
        products: filteredProductList,
        initialProductList,
        state,
        dispatch
    }

    return(
        <FilterContext.Provider value ={value} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)