const ejs = require('ejs');

const view = async (req,res) => {
    res.render('index')
}

module.exports = {view}