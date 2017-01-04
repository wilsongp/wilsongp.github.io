angular
.module('myAppDep')
.constant('endpoints', {
    personalApiUrl: {
        url: 'https://wilsongp.net/personal/api',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    }
});