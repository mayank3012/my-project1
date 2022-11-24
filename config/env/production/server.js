// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
    url: env('https://salty-lake-32091.herokuapp.com/'),
    proxy: true,
    app: {
        key: env.array('APP_KEYS',['YoH/Ar4iRc7YlIpRcRChoA==,9yxoTEF7sB7nTDm1b/PjiA==,zPWEz7JT+fs48ZnyjYiHHQ==,FWDOI/YG3B4weH/n6Zf/bQ=='])
    }
});


