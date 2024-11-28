document.addEventListener("DOMContentLoaded", () => {
    console.log('documento listo');
    const opciones = document.querySelectorAll(".opcion")
    const submenus = document.querySelectorAll(".submenu")
    const iconos = document.querySelectorAll(".icono-menu")
    const etiquetas = document.querySelectorAll('.etiqueta-opcion')
    const menuDesplegable = document.getElementById('menu-hamburguesa')
    const navegacion = document.getElementById('navegacion')

    menuDesplegable.addEventListener('click', () => {
        const img = menuDesplegable.querySelector('img')

        if(img.src.includes('icon-hamburger.svg')) {
            img.src = 'src/images/icon-close.svg'
        } else {
            img.src ='src/images/icon-hamburger.svg'
        }

        navegacion.classList.toggle('hidden')
    })

    opciones.forEach(opcion => {
        opcion.addEventListener("click", () => {
            const submenu = opcion.nextElementSibling
            const icono = opcion.querySelector('.icono-menu')
            const etiqueta = opcion.parentElement
            const isCurrentlyShown = opcion.classList.contains('mostrar') // Verifica si ya está mostrado

            // Ocultar todos los submenus y desactivar clases activas
            submenus.forEach(menu => {
                menu.classList.add('hidden')
            });
            opciones.forEach(op => {
                op.classList.remove('mostrar')
            })
            iconos.forEach(img => {
                img.classList.remove('activo')
                img.classList.add('inactivo')
            });
            etiquetas.forEach(li => {
                li.classList.remove('max-md:border-b-2', 'max-md:pb-5')
            })

            // Si la opción no estaba mostrada antes, mostrarla
            if (!isCurrentlyShown) {
                submenu.classList.remove('hidden')
                opcion.classList.add('mostrar')
                icono.classList.remove('inactivo')
                icono.classList.add('activo')
                etiqueta.classList.add('max-md:border-b-2', 'max-md:pb-5')
            }
        })
    });
})