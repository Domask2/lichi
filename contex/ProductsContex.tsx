import { createContext, useState, useContext, useMemo, ReactNode } from 'react';
import { addProduct, getProducts, removeProduct } from '@/api/api';
import { initProduct, ProductsContextType, ProductsType } from '@/type/type';

const ProductsContext = createContext<ProductsContextType>({
    products: initProduct,
    getListProducts: () => {},
    addProducts: () => {},
    removeProducts: () => {}
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<ProductsType>(initProduct);

    const getListProducts = async () => {
        await getProducts()
            .then((res) => {
                setProducts(res.data.data.api_data);
            });
    };

    const addProducts = async (id: number) => {
        await addProduct(id);
        await getListProducts();
    };

    const removeProducts = async (id: number, all: boolean) => {
        await removeProduct(id, all)
        await getListProducts();
    }

    const value = useMemo(() => ({ products, getListProducts, addProducts, removeProducts }), [products, setProducts]);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
