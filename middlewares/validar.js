const validarProducto = (req, res, next) => {
    console.log(req.body);
    
    const { nombre, precio, categoria } = req.body;
    const errores = [];

    if (!nombre || nombre.trim() === "") {
        errores.push("El nombre es obligatorio");
    }
    if (nombre.length <= 2) {
        errores.push("El nombre debe tener mas de 2 caracteres")
    }
    if (!precio || precio <= 0) {
        errores.push("El precio debe ser un número positivo");
    }
    if (!categoria || categoria.trim() === "") {
        errores.push("La categoría es obligatoria");
    }
    if (categoria.length <= 2) {
        errores.push("La categoria debe tener mas de 2 caracteres")
    }
    if (errores.length > 0) {
        return res.status(400).json({ errores });
    }

    next();
};

module.exports = validarProducto;