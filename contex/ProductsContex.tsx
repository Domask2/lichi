import { createContext, useState, useContext, useMemo, ReactNode } from 'react';
import { addProduct, getProducts } from '@/api/api';
import { aDataType, ProductsType } from '@/type/type';

export type ProductsContextType = {
    products: ProductsType;
    getListProducts: () => void
    addProducts: (id: number) => void
};

const initProduct = {
    aData: [],
    iCount: 0,
    iCountSale: 0,
    iNonSalePrice: 0,
    iSalePrice: 0,
    iSummaryPrice: 0,
};

const ProductsContext = createContext<ProductsContextType>({
    products: initProduct,
    getListProducts: () => {},
    addProducts: () => {},
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

    const value = useMemo(() => ({ products, getListProducts, addProducts }), [products, setProducts]);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
