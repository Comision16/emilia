module.exports = {
    about : (req,res) => {
        return res.render('about',{
            title : 'About'
        })
    },
    contact : (req,res) => {
        return res.render('contact',{
            title : 'Contact'
        })
    }
}