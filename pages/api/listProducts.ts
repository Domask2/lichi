import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookieResponse } from '@/utils/utils';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await axios.post('https://api.lichi.com/cart/list',
        { lang: req.body.lang, shop: req.body.shop },
        { headers: req.body.sid === null ? {Cookie: `SID=${req.body.sid};`} : {} },
    );

    const { data } = response;
    res.status(200).json(
        {
            data,
            sid: req.body.sid === null ? getCookieResponse(response, 'SID') : null,
        },
    );
};

export default handler;