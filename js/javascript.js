document.getElementById('registro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    const nombre = document.querySelector('input[type="text"]');
    const correo = document.querySelector('input[type="email"]');
    const contrasena = document.querySelector('input[type="password"]');
    
    if (nombre.value === '' || correo.value === '' || contrasena.value === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

   
    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Cargando...';
    document.querySelector('.form-container').appendChild(loadingMessage);
    
    
    setTimeout(function() {
        loadingMessage.textContent = 'Registro exitoso!';
       
    }, 2000);  
});
