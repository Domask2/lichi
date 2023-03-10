import type { NextApiRequest, NextApiResponse } from 'next';
import { getSid, getHeaders } from '@/utils/utils';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const headers = getHeaders(req.body.sid);
    const response = await axios.post('https://api.lichi.com/cart/list',
        { lang: req.body.lang, shop: req.body.shop },
        { headers },
    );

    const sid = getSid(req.body.sid, response);
    const { data } = response;

    res.status(200).json(
        {
            data,
            sid
        },
    );
};

export default handler;