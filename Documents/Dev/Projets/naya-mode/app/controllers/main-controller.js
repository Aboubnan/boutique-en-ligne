export const mainController = {
    homePage : (req, res) => {
        res.render('home', {page : "home"})
    },

    clothesPage : (req, res) => {
        res.render('clothes', {page : "clothes"})
    },

    accessoryPage : (req, res) => {
        res.render('accessory', {page : "accessory"})
    },

    shoePage : (req, res) => {
        res.render('shoe', {page : "shoe"})
    },

    contactPage : (req, res) => {
        res.render('contact', {page : "contact"})
    },

    cartPage : (req, res) => {
        res.render('cart', {page : "cart"})
    },
}