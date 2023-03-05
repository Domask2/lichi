import { createContext, useState, useContext, useMemo, ReactNode } from 'react';
import { addProduct, getProducts } from '@/api/api';

export type ProductsContextType = {
    products: any;
    getListProducts: any
    addProducts: any
};

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    getListProducts: () => {},
    addProducts: () => {}
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<[]>([]);

    const getListProducts = async () => {
        await getProducts()
            .then((res) => {
                setProducts(res.data.data.api_data);
            });
    }

    const addProducts = async (id: number) => {
        await addProduct(id);
        await getListProducts()
    }

    const value = useMemo(() => ({ products, getListProducts, addProducts }), [products, setProducts]);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
