import { headers } from 'next/headers';

export const getCookieResponse = (response: any, name: string) =>
    (response.headers['set-cookie'] as string[])
        .find(cookie => cookie.includes(name))
        ?.match(new RegExp(`^${name}=(.+?);`))
        ?.[1];

export const getCookieDocument = (name: string) => {
    const cookie: any = {};
    document.cookie.split(';').forEach((el) => {
        const [k, v] = el.split('=');
        cookie[k.trim()] = v;
    });
    return cookie[name];
};

export const checkCookie = () => {
    let sid = null;
    if (getCookieDocument('SID')) {
        sid = getCookieDocument('SID');
    }
    return sid;
};

export const getCookie = (name: string) => {
    document.cookie = `SID=${name}`;
};

export const getHeaders = (sid: number | null) => {
    let headers = {};
    if(sid) {
        headers = {
            Cookie: `SID=${sid};`,
        };
    }

    return headers
};

export const getSid = (sid: number | null, response:any) => {
    let newSid = null;
    if(sid === null) {
        const sidFromRespone = getCookieResponse(response, 'SID')

        if(sidFromRespone) {
            newSid = sidFromRespone
        }
    }

    return newSid;
}