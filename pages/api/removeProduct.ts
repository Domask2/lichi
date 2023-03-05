import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { getCookieResponse, getHeaders, getSid } from '@/utils/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const headers = getHeaders(req.body.sid);
    const response = await axios.post('https://api.lichi.com/cart/remove',
        { id: req.body.id, lang: 1, shop: 1, all: req.body.all },
        { headers },
    );

    const sid = getSid(req.body.sid, response);
    const { data } = response;

    res.status(200).json(
        {
            data,
            sid,
        },
    );
};

export default handler;