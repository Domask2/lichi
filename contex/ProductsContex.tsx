import { createContext, useState, useContext, useMemo, ReactNode, useRef } from 'react';
import { addProduct, getProducts, removeProduct } from '@/api/api';
import { initProduct, ProductsContextType, ProductsType } from '@/type/type';

const ProductsContext = createContext<ProductsContextType>({
    products: initProduct,
    loading: false,
    getListProducts: () => {
    },
    addProducts: () => {
    },
    removeProducts: () => {
    },
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<ProductsType>(initProduct);
    const [loading, setLoading] = useState(false);

    const getListProducts = async () => {
        await getProducts()
            .then((res) => {
                setProducts(res.data.data.api_data);
                setLoading(false);
            });
    };

    const addProducts = async (id: number) => {
        setLoading(true);
        await addProduct(id);
        await getListProducts();
    };

    const removeProducts = async (id: number, all: boolean) => {
        setLoading(true);
        await removeProduct(id, all);
        await getListProducts();
    };

    const value = useMemo(() => ({
        products,
        getListProducts,
        addProducts,
        removeProducts,
        loading,
    }), [products, setProducts, loading]);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
