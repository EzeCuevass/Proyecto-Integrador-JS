// Middleware para fijarse si el usuario que entra es admin
function requiereAuth(req, res, next) {
    if (!req.session.usuarioId) {
        return res.redirect("/admin/login");
    }
    next();
}

module.exports = requiereAuth;