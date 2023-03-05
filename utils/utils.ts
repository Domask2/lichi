export const getCookieResponse = (response: any, name: string) => {
    return (response.headers['set-cookie'] as string[])
        .find(cookie => cookie.includes(name))
        ?.match(new RegExp(`^${name}=(.+?);`))
        ?.[1];
};

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
