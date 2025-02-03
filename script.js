document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los botones de cerrar
  const botonesCerrar = document.querySelectorAll('.modal .close');

  botonesCerrar.forEach(boton => {
    boton.addEventListener('click', () => {
      const modal = boton.closest('.modal');
      modal.style.display = 'none';
    });
  });

  // Mostrar el modal al hacer clic en el enlace
  const linkAutos = document.getElementById('link-autos'); 
  const linkMoto = document.getElementById('link-moto');
  const linkChata = document.getElementById('link-chata');
  const linkMono = document.getElementById('link-mono');
  const linkBici = document.getElementById('link-bici');

  if (linkAutos) { // Verifica si el enlace existe
    linkAutos.addEventListener('click', (event) => {
      event.preventDefault();
      const modalAuto = document.getElementById('modal-auto');
      if (modalAuto) { // Verifica si el modal existe
        modalAuto.style.display = 'block';
      } else {
        console.error('Modal con ID "modal-auto" no encontrado.');
      }
    });
  } else {
    console.error('Enlace con ID "link-autos" no encontrado.');
  };

  if(linkMoto){
    linkMoto.addEventListener('click', (event) => {
      event.preventDefault();
      const modalMoto = document.getElementById('modal-moto');
      if (modalMoto) { // Verifica si el modal existe
        modalMoto.style.display = 'block';
      } else {
        console.error('Modal con ID "modal-moto" no encontrado.');
      }
    });
  }  else {
    console.error('Enlace con ID "link-moto" no encontrado.');
  };

  if(linkChata){
    linkChata.addEventListener('click', (event) => {
      event.preventDefault();
      const modalChata = document.getElementById('modal-chata');
      if (modalChata) { // Verifica si el modal existe
        modalChata.style.display = 'block';
      } else {
        console.error('Modal con ID "modal-chata" no encontrado.');
      }
    });
  }  else {
    console.error('Enlace con ID "link-chata" no encontrado.');
  };
  
  if(linkMono){
    linkMono.addEventListener('click', (event) => {
      event.preventDefault();
      const modalMono = document.getElementById('modal-mono');
      if (modalMono) { // Verifica si el modal existe
        modalMono.style.display = 'block';
      } else {
        console.error('Modal con ID "modal-mono" no encontrado.');
      }
    });
  }  else {
    console.error('Enlace con ID "link-mono" no encontrado.');
  };
  
  if(linkBici){
    linkBici.addEventListener('click', (event) => {
      event.preventDefault();
      const modalBici = document.getElementById('modal-bici');
      if (modalBici) { // Verifica si el modal existe
        modalBici.style.display = 'block';
      } else {
        console.error('Modal con ID "modal-bici" no encontrado.');
      }
    });
  }  else {
    console.error('Enlace con ID "link-bici" no encontrado.');
  };

 // Selecciona el fondo del modal (si existe) o el body
 const modalBackdrop = document.querySelector('.modal-backdrop') || document.body;



// Selecciona el botón "Quiero vender"
const botonesVender = document.querySelectorAll('.vender');
const modalVender = document.getElementById('modal-vender');

botonesVender.forEach(boton => {
  boton.addEventListener('click', () => {
    const modalVender = document.getElementById('modal-vender');
    if (modalVender) {
      modalVender.style.display = 'block';
    } else {
      console.error('Modal no encontrado');
    }
  });
});

const botonesComprar = document.querySelectorAll('.comprar');
botonesComprar.forEach(boton => {
  boton.addEventListener('click', (event) => {
    const vehicle = boton.dataset.vehicle;
    const url = `/${vehicle}.html`; // Ajusta la URL según tu estructura de carpetas
    window.location.href = url;
  });
});

const botonesCotizar = document.querySelectorAll('.btn-cotizar');
const modales = document.querySelectorAll('.modal');

botonesCotizar.forEach(boton => {
  boton.addEventListener('click', (event) => {
    const modalId = boton.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Función para cerrar el modal (por ejemplo, al hacer clic fuera o en un botón de cerrar)
const cerrarModal = () => {
  const modal = document.querySelector('.modal:not(.hidden)');
  if (modal) {
    modal.style.display = 'none';
  }
};

const form = document.getElementById('cotizar-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const vehiculo = document.getElementById('vehiculo').value;
  const modelo = document.getElementById('modelo').value;
  const anio = document.getElementById('anio').value;

  const mensaje = `Quiero cotizar\nNombre: ${nombre}\nVehículo: ${vehiculo}\nModelo: ${modelo}\nAnio: ${anio}\n`; // Agrega los demás campos
  const url = `https://wa.me/541162334008?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
  setTimeout(() => {
    alert('¡Tu solicitud ha sido enviada! La página se recargará en breve.');
    window.location.reload();
  }, 2000);
});

});