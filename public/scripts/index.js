// Escucha el botón para generar el código QR
document.getElementById("qrButton").addEventListener("click", function () {
    fetch('https://passez.onrender.com/create-qr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.qrCode) {
            // Actualiza el src de la imagen con el QR generado
            document.getElementById("qrCodeImage").src = data.qrCode;
        } else {
            throw new Error(data.message || 'Error desconocido al generar el código QR');
        }
    })
    .catch(error => {
        console.error("Error al generar el código QR:", error);
        alert(`Error al generar el código QR: ${error.message}`);
    });
});

// Escucha el botón para generar el código numérico
document.getElementById("numpadButton").addEventListener("click", function () {
    fetch('https://passez.onrender.com/create-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.code) {
            // Muestra el código numérico generado
            document.getElementById("numericCodeDisplay").innerText = data.code;
            
            // Abre el modal para mostrar el código
            const modal = new bootstrap.Modal(document.getElementById('modalNumpad'));
            modal.show();
        } else {
            throw new Error(data.message || 'Error desconocido al generar el código numérico');
        }
    })
    .catch(error => {
        console.error("Error al generar el código numérico:", error);
        alert(`Error al generar el código numérico: ${error.message}`);
    });
});
