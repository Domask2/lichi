import { createContext, useState, useContext, useMemo, ReactNode } from 'react';

export type ProductsContextType = {
    products: any;
    setProducts: any
};

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    setProducts: () => {
    },
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<[]>([]);

    const value = useMemo(() => ({ products, setProducts }), [products, setProducts]);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
