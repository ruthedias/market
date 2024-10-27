import { data } from '../data/products';

export const getAllCategories = () => {
    return data.categories;
};
export const getAllCategoryById = ( id : number ) => {
    return data.categories.find( item => item.id === id);
};