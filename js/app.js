 
 // NAVEGACION

//  const nav = document.querySelector("#nav");
//  const abrir = document.querySelector("#abrir");
//  const cerrar = document.querySelector("#cerrar");
 
//  abrir.addEventListener("click", () => {
//      nav.classList.add("visible");
//  })
 
//  cerrar.addEventListener("click", () => {
//      nav.classList.remove("visible");
//  })

// owl carousel


$(document).scroll(function() {
  var y = $(this).scrollTop();
  var windowHeight = $(window).height(); // Get window height

  if (y > windowHeight / 10) {
    $(".chevron").hide();
  } else {
    $(".chevron").show();
  }
});

// $(window).scroll(function() {
//   var y = $(this).scrollTop();
//   var windowHeight = $(window).height(); // Obtener la altura de la ventana

//   if (y > windowHeight / 50) {
//     $(".whatsapp").show();
//   } else {
//     $(".whatsapp").hide();
//   }
// });



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();


  document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById('navbar-toggler');
    const togglerIcon = document.getElementById('toggler-icon');
    const offcanvas = document.getElementById('navbarNav');
  
    navbarToggler.addEventListener('click', function () {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
  
      if (!isExpanded) {
        togglerIcon.classList.remove('bi-plus');
        togglerIcon.classList.add('bi-x');
        togglerIcon.classList.remove('x-to-plus');
        togglerIcon.classList.add('plus-to-x');
      } else {
        togglerIcon.classList.remove('bi-x');
        togglerIcon.classList.add('bi-plus');
        togglerIcon.classList.remove('plus-to-x');
        togglerIcon.classList.add('x-to-plus');
      }
    });
  
    offcanvas.addEventListener('hidden.bs.offcanvas', function () {
      togglerIcon.classList.remove('bi-x');
      togglerIcon.classList.add('bi-plus');
      togglerIcon.classList.remove('plus-to-x');
      togglerIcon.classList.add('x-to-plus');
    });
  });

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    //var imagen = document.getElementById('imagen')
    if (this.window.scrollY > 0) {
      header.classList.add('scrolled');
      //imagen.src = 'img/logo-new-white.svg';

    } else {
      header.classList.remove('scrolled');
      //imagen.src = 'img/logo-new-white.svg';
    }

});

window.addEventListener('scroll', function(){
  var header = document.querySelector('.header');
  //var imagen = document.getElementById('imagen')
  if (this.window.scrollY > 0) {
    header.classList.add('scrolled');
    //imagen.src = 'img/logo-new-white.svg';

  } else {
    header.classList.remove('scrolled');
    //imagen.src = 'img/logo-new-white.svg';
  }

});



// PopUp
// Seleccionar elementos del DOM
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// Abrir popup al hacer clic en la imagen
openPopup.addEventListener("click", () => {
  popup.classList.add("active");
});

// Cerrar popup al hacer clic en el botón de cerrar
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Cerrar popup al hacer clic fuera del contenido del popup
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

// Seleccionar el formulario
const appointmentForm = document.getElementById("appointmentForm");

// Agregar evento de validación al enviar el formulario
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar el envío por defecto

  // Obtener valores de los campos
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value.trim();

  // Validar cada campo
  let isValid = true;
  let errorMessage = "";

  resetErrors();

  // Validar nombre
  if (name === "") {
    isValid = false;
    showError("name", "Por favor, ingresa tu nombre.");
  }

  // Validar correo electrónico
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    isValid = false;
    showError("email", "Por favor, ingresa un correo electrónico válido.");
  }

  // Validar fecha (ahora con calendario)
  const currentDate = new Date().toISOString().split("T")[0]; // Fecha actual en formato yyyy-mm-dd
  if (date === "" || date < currentDate) {
    isValid = false;
    showError("date", "Por favor, selecciona una fecha válida.");
  }

  // Validar hora
  const validTimes = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00"
  ];
  if (!validTimes.includes(time)) {
    isValid = false;
    showError("time", "Por favor, selecciona una hora válida de la lista.");
  }

  // Mostrar mensaje de error o enviar el formulario
  if (isValid) {
    alert("Formulario enviado correctamente.");

    // Cerrar el popup después de la confirmación
    setTimeout(() => {
      popup.classList.remove("active"); // Cierra el popup
    }, 500); // Espera medio segundo antes de cerrar el popup

    appointmentForm.reset(); // Limpiar el formulario
  }
});

function showError(field, message) {
  const fieldGroup = document.getElementById(field + "Group");
  const errorSpan = document.getElementById(field + "Error");

  if (fieldGroup && errorSpan) {
    fieldGroup.classList.add("error");
    errorSpan.textContent = message;
    errorSpan.style.display = "inline";
  }
}

function resetErrors() {
  const formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach(group => {
    group.classList.remove("error"); // Eliminar borde rojo
  });

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(message => {
    message.style.display = "none"; // Ocultar mensajes de error
  });
}
