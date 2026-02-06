// Buena practica: Borrar versionamiento y credenciales para ambiente de prueba o produccion

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;

// Clave API y cadena de conexión hardcodeadas (mala práctica)

// Si existira un archivo .env, se podrían cargar estas variables desde ahí, pero en este caso están hardcodeadas para simular un ambiente de desarrollo inseguro

// No exponer informacion sensible en consola

// Función principal de inicialización
function inicializar() {
    console.log("Inicializando sistema de registro...");
    // No exponer credenciales en consola
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    console.log("Datos capturados:");
    // No esponer informacion sensible en consola
    console.log("- Timestamp: " + new Date().toISOString());
    
    // Validaciones correctas en todos los campos (defensa en profundidad)

    // Nombre(s)
    if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{2,50}$/.test(nombre)) {
        alert("Nombre inválido. Solo letras y espacios (2 a 50 caracteres).");
        return;
    }

    // Primer apellido
    if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{2,50}$/.test(apellido1)) {
        alert("Primer apellido inválido. Solo letras y espacios (2 a 50 caracteres).");
        return;
    }

    // Segundo apellido
    if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{2,50}$/.test(apellido2)) {
        alert("Segundo apellido inválido. Solo letras y espacios (2 a 50 caracteres).");
        return;
    }

    // Teléfono (exactamente 10 dígitos)
    if (!/^[0-9]{10}$/.test(telefono)) {
        alert("Teléfono inválido. Debe contener exactamente 10 dígitos numéricos.");
        return;
    }

    // CURP (formato oficial)
    if (!/^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z]{2}$/.test(curp)) {
        alert("CURP inválida. Verifica que tenga 18 caracteres en mayúsculas.");
        return;
    }

    // Correo electrónico
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Correo electrónico inválido. Ingresa un correo válido.");
        return;
    }


    // No dejar codigo viejo comentado, eliminarlo para evitar confusiones
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        // No se debe guardar la api key en cada registro
        // No generar tokens en frontend
    };
    
    // No mostrar informacion en transito 
    // No mostrar el token generado en frontend
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    // Mala practica: Menor privilegio, no mostrar mensajes detallados en producción
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    // mala practica: Menor privilegios, no mostrar mensajes detallados en producción
    console.log("Registro guardado exitosamente");
    console.log("====================================");
    
    // Simulación de envío a servidor (hardcoded URL)
    // No dejar código de simulación de envío a servidor, eliminar antes de subir a producción
}

// Función para agregar fila a la tabla
// Funcion corregida para evitar XSS (Cross-Site Scripting)
function agregarFilaTabla(registro) {
    const tabla = document.getElementById('tablaRegistros');

    const fila = document.createElement('tr');

    const tdNombre = document.createElement('td');
    tdNombre.textContent = registro.nombreCompleto;

    const tdTelefono = document.createElement('td');
    tdTelefono.textContent = registro.telefono;

    const tdCurp = document.createElement('td');
    tdCurp.textContent = registro.curp;

    const tdEmail = document.createElement('td');
    tdEmail.textContent = registro.email;

    fila.appendChild(tdNombre);
    fila.appendChild(tdTelefono);
    fila.appendChild(tdCurp);
    fila.appendChild(tdEmail);

    tabla.appendChild(fila);

    console.log("Fila agregada a la tabla");
}


// Función que simula envío a servidor
// Eliminar funciones de debugging o diagnostico antes de subir a producción, estas funciones pueden exponer información sensible sobre el sistema o el entorno de desarrollo, lo cual representa un riesgo de seguridad si se deja en el código fuente accesible en producción.

// Eliminar funciones de debugging o diagnostico antes de subir a producción, estas funciones pueden exponer información sensible sobre el sistema o el entorno de desarrollo, lo cual representa un riesgo de seguridad si se deja en el código fuente accesible en producción.

// Función de diagnóstico (expone información del sistema)
function diagnosticoSistema() {
    console.log("=== DIAGNÓSTICO DEL SISTEMA ===");
    console.log("Navegador:", navigator.userAgent);
    console.log("Plataforma:", navigator.platform);
    console.log("Idioma:", navigator.language);
    console.log("Cookies habilitadas:", navigator.cookieEnabled);
    console.log("Memoria usada:", performance.memory ? performance.memory.usedJSHeapSize : "N/A");
    // No exponer credenciales en consola, eliminar antes de subir a producción
    console.log("===============================");
}

// Ejecutar diagnóstico al cargar
diagnosticoSistema();


// No dejar funciones de diagnóstico o debugging en el código de producción, eliminar antes de desplegar a producción

// Variable global adicional
// No dejar variables globales innecesarias, eliminar o encapsular en funciones para evitar contaminación del espacio global

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    // Mala practica: Exponer variables globales en consola para "debugging", antes de subirlas a produccion, eliminar estas lineas

});

// Eliminar funciones de diagnóstico o debugging antes de subir a producción, estas funciones pueden exponer información sensible sobre el sistema o el entorno de desarrollo, lo cual representa un riesgo de seguridad si se deja en el código fuente accesible en producción.

// No exponer versiones del sistema ni informacion personal sobre el desarrollador en el codigo fuente