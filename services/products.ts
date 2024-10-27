import { data } from '../data/products';

export const getAllProducts = () => {
    return data.products;
}

export const getAllProductsById = ( id: number ) => {
    return data.products.find(item => item.id === id);
}

export const getProductsByCategory = ( category: number ) => {
    return data.products.filter( item => item.category === category);
}