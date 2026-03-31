window.addEventListener("load", () => {
  document.body.style.visibility = "visible";
});

gsap.from(".fto", {
x: -50,
  opacity: 0.1,
  duration: 2,
  stagger: 0.2
});

gsap.from(".sobre-mi", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 1
});

function copiarCorreo() {
    const email = "gabocampos582@gmail.com";
    const boton = document.getElementById("btnCorreo");
    const textoOriginal = boton.innerText;

    // 1. Copia el texto al portapapeles
    navigator.clipboard.writeText(email).then(() => {
      
      // 2. Cambia el texto del botón
      boton.innerText = "¡Copiado!";
      boton.style.backgroundColor = "#597add"; // Opcional: cambia a color verde
      
      // 3. Vuelve al estado original después de 2 segundos (2000 ms)
      setTimeout(() => {
        boton.innerText = textoOriginal;
        boton.style.backgroundColor = ""; // Vuelve al color original
      }, 2000);

    }).catch(err => {
      console.error('Error al copiar: ', err);
    });
  }