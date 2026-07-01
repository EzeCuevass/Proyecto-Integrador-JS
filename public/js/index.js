// Login - mostrar error si existe
const errorDiv = document.querySelector("[data-error]");
if (errorDiv) {
    const error = errorDiv.dataset.error;
    if (error) setTimeout(() => alert(error), 100);
}

// Login - boton de acceso rapido
const quickBtn = document.getElementById("quickAccess");
if (quickBtn) {
    quickBtn.onclick = () => {
        document.getElementById("email").value = "admin@email.com";
        document.getElementById("password").value = "admin123";
    };
}

// Formulario Producto  
const imagenInput = document.getElementById("imagen");
if (imagenInput) {
    imagenInput.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(ev) {
                document.getElementById("preview").style.display = "block";
                document.getElementById("previewImg").src = ev.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
}

// Formulario prodcuto (editar)
const container = document.getElementById("productoFormContainer");
if (container && container.dataset.mode === "editar") {
    const cargarBtn = document.getElementById("cargarBtn");
    const cargarId = document.getElementById("cargarId");

    cargarBtn.onclick = async function() {
        const id = cargarId.value;
        if (!id) return alert("Ingresá un ID");

        const res = await fetch("/productos/" + id);
        if (!res.ok) return alert("Producto no encontrado");

        const prod = await res.json();
        document.getElementById("productoId").value = prod.id;
        document.getElementById("nombre").value = prod.nombre;
        document.getElementById("categoria").value = prod.categoria;
        document.getElementById("precio").value = prod.precio;

        if (prod.imagen) {
            document.getElementById("preview").style.display = "block";
            document.getElementById("previewImg").src = "/uploads/" + prod.imagen;
        }

        document.getElementById("productoForm").action = "/admin/productos/" + prod.id + "/editar";
    };
}
