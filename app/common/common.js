class Common {
    html(ctx, next) {
        console.log(ctx.cookies.get('SESSION')); 
        ctx.cookies.set('name', 'klice')
        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./dist/index.html');
    
        return next();
    }

    static() {
        ctx.render('test')
    }
}

module.exports = new Common()

