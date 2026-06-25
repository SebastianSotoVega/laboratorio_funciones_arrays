// Arreglo de productos
const productos = [
    { id: 1, nombre: "Laptop Lenovo", precio: 2500, categoria: "Tecnología", stock: 5 },
    { id: 2, nombre: "Mouse inalámbrico", precio: 65, categoria: "Tecnología", stock: 12 },
    { id: 3, nombre: "Teclado mecánico", precio: 180, categoria: "Tecnología", stock: 8 },
    { id: 4, nombre: "Monitor Samsung", precio: 780, categoria: "Tecnología", stock: 4 },
    { id: 5, nombre: "Memoria USB 64 GB", precio: 45, categoria: "Tecnología", stock: 20 },

    { id: 6, nombre: "Cuaderno universitario", precio: 12, categoria: "Útiles", stock: 30 },
    { id: 7, nombre: "Lapicero azul", precio: 2.5, categoria: "Útiles", stock: 50 },
    { id: 8, nombre: "Resaltador amarillo", precio: 5, categoria: "Útiles", stock: 18 },
    { id: 9, nombre: "Mochila escolar", precio: 95, categoria: "Útiles", stock: 7 },
    { id: 10, nombre: "Calculadora científica", precio: 85, categoria: "Útiles", stock: 6 },

    { id: 11, nombre: "Silla ergonómica", precio: 450, categoria: "Oficina", stock: 3 },
    { id: 12, nombre: "Escritorio de madera", precio: 620, categoria: "Oficina", stock: 2 },
    { id: 13, nombre: "Archivador metálico", precio: 350, categoria: "Oficina", stock: 0 },
    { id: 14, nombre: "Lámpara de escritorio", precio: 75, categoria: "Oficina", stock: 10 },
    { id: 15, nombre: "Organizador de documentos", precio: 38, categoria: "Oficina", stock: 15 },

    { id: 16, nombre: "Audífonos Bluetooth", precio: 160, categoria: "Accesorios", stock: 9 },
    { id: 17, nombre: "Cargador portátil", precio: 120, categoria: "Accesorios", stock: 11 },
    { id: 18, nombre: "Soporte para laptop", precio: 90, categoria: "Accesorios", stock: 5 },
    { id: 19, nombre: "Cable HDMI", precio: 35, categoria: "Accesorios", stock: 0 },
    { id: 20, nombre: "Webcam HD", precio: 210, categoria: "Accesorios", stock: 6 }
];

console.log("ARREGLO ORIGINAL DE PRODUCTOS");
console.table(productos);



console.log("1. FOREACH CON FUNCIÓN TRADICIONAL");

productos.forEach(function (producto) {
    console.log(
        `ID: ${producto.id} | Producto: ${producto.nombre} | Precio: S/ ${producto.precio} | Stock: ${producto.stock}`
    );
});


console.log("1. FOREACH CON FUNCIÓN FLECHA");

productos.forEach((producto) => {
    console.log(
        `Producto: ${producto.nombre} - Categoría: ${producto.categoria}`
    );
});


const resultadoForEach = productos.forEach((producto) => {
    return producto.nombre;
});

console.log("Valor devuelto por forEach:", resultadoForEach);


/////////////////////


console.log("2. CREACIÓN DE ETIQUETAS CON MAP");

const etiquetasProductos = productos.map((producto) => {
    return `PRODUCTO: ${producto.nombre} - S/ ${producto.precio}`;
});

console.log("Nueva colección de etiquetas:");
console.table(etiquetasProductos);

////////////

console.log("3. PRODUCTOS FILTRADOS");

const productosTecnologiaDisponibles = productos.filter((producto) => {
    return producto.categoria === "Tecnología" && producto.stock > 0;
});

console.log("Productos de Tecnología con stock disponible:");
console.table(productosTecnologiaDisponibles);

console.log("Arreglo original después de filter:");
console.table(productos);