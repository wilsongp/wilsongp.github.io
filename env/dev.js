angular
.module('myAppDep')
.constant('endpoints', {
    personalApiUrl: {
        url: 'http://wilsongp.net/personal/api',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    }
});