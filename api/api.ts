import axios from 'axios';
import { checkCookie, getCookie } from '@/utils/utils';

enum api {
    'LANG' = 1,
    'SHOP' = 1
}

export const getProducts = () => {
    const sid = checkCookie();
    return axios.post('api/listProducts', { lang: api.LANG, shop: api.SHOP, sid })
        .then((res) => {
            if (res.data.sid) {
                getCookie(res.data.sid);
            }
            return res;
        });
};

export const addProduct = (id: number) => {
    const sid = checkCookie();
    return axios.post('api/addProduct', { lang: api.LANG, shop: api.SHOP, id, sid });
};

export const removeProducts = (id: number, all: boolean) => {
    const sid = checkCookie();
    return axios.post('api/deleteProduct', { lang: api.LANG, shop: api.SHOP, id, sid, all });
};