async function operator(proxies = []) {
    const _ = lodash
    const regex = /tcp/gi

    return proxies.map((proxy = {}) => {
        if (proxy.name.match(regex) && (!"ws" in proxy)) {
            _.set(proxy, 'network', 'http')
            _.set(proxy, 'http-opts.headers.method', 'GET')
            _.set(proxy, 'http-opts.path', ['/'])
            _.set(proxy, 'http-opts.headers.Host', ['a.189.cn'])
        }
        _.set(proxy, 'network', 'ws')
        _.set(proxy, 'ws-opts.path', '/')
        _.set(proxy, 'ws-opts.headers.Host', 'a.189.cn')

        return proxy;
    });
}

function filter(proxies, targetPlatform) {
    return proxies.map(proxy => {
        // Return true if the current proxy is selected

        return true;
    });
}