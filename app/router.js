const common = require('./common/common')

const table = require('./common/table')

module.exports = (router) => {
    // router.get('/', common.html)
    // router.get('/static', common.static)

    router.get('/api/table-list/', table.list)
}

