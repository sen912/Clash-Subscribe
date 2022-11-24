function operator(proxies, targetPlatform) {
    const regex = /tcp/gi

    return proxies.map(proxy => {
        if (proxy.name.match(regex) && !("ws" in proxy)) {
            proxy['network'] = 'http'
            proxy['http-opts'] = {
                'headers': {
                    method: 'GET',
                    Host: ['a.189cn']
                },
                'path': ['/']
            }
        }
        proxy['network'] = 'ws'
        proxy['ws-opts'] = {
            'headers': {
                Host: ['a.189cn']
            },
            'path': ['/']
        }

        return proxy;
    });
}

function filter(proxies, targetPlatform) {
    return proxies.map(proxy => {
        // Return true if the current proxy is selected

        return true;
    });
}