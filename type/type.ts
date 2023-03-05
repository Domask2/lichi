export interface aDataType {
    amount: number;
    article: string;
    available: boolean;
    barcode: string;
    block: boolean;
    care: string[];
    category_ids: string[];
    colors: {
        name: string;
        amount: number;
        value: string;
        show: boolean;
        price: string;
    };
    colors_all: any[];
    count: string;
    currency: {
        id: number;
        prefix: string;
        prefix_symbol: string;
        postfix: string;
        postfix_symbol: string;
    };
    date_create: string;
    details_name: {
        lining: string;
        materials: string;
    };
    format_price: string[];
    gift: boolean;
    id: number;
    is_action: boolean;
    is_ffm: boolean;
    item_id: number;
    item_id_hash: string;
    material_descriptions: {
        mark_down: string;
        html: string;
        text: string;
    };
    measurements: {
        XS: string[];
        S: string[];
        M: string[];
        L: string[];
    };
    measurements_unit: string;
    name: string;
    name_old: string;
    original_price: number;
    otherData: any[];
    parent_category_ids: string[][];
    photos: string;
    photos_all: any[];
    popular: number;
    price: number;
    saleaction: boolean;
    season: any;
    size_details: any[];
    sizes: string;
    sizes_all: {
        [key: number]: {
            amount: number;
            barcode: string;
            id: number;
            show: boolean;
            subscribe: boolean;
        };
    };
    soldout: boolean;
    template: string;
    video_cover: any[];
    videos: any[];
};

export interface ProductsType {
    aData: aDataType[]
    iCount: number
    iCountSale: number
    iNonSalePrice: number
    iSalePrice: number
    iSummaryPrice: number
};