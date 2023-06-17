# Reusable Carousel (Carrousel) - README

Este proyecto consiste en un carrousel (slider) reutilizable desarrollado utilizando HTML, CSS y JavaScript. Proporciona una manera sencilla de agregar un carrousel interactivo a tus sitios web.

## Características

- Interfaz de usuario intuitiva y fácil de usar.
- Funciona en todos los navegadores modernos.
- Totalmente personalizable con CSS.
- Soporta imágenes y contenido HTML como diapositivas.
- Opciones para la navegación automática y controles de navegación.

## Requisitos previos

Antes de utilizar este carrousel, asegúrate de tener instalado lo siguiente:

- Un editor de código o entorno de desarrollo para modificar el código (recomendado).
- Un navegador web actualizado para visualizar el carrousel.

## Uso

1. Descarga los archivos HTML, CSS y JS del carrousel.
2. En tu archivo HTML, agrega los enlaces a los archivos CSS y JS en la sección `<head>`:

```html
<link rel="stylesheet" href="new.css">
<script src="new.js"></script>
```

3. Añade el siguiente código HTML en el lugar donde desees mostrar el carrousel:

```html
<section class="carrousel" data-id="0">
        <div class="carrousel-title">
            <p><strong>Titulo</strong></p>
            <p>Ver Todo</p>
        </div>
        <div class="carrousel-container">
            <button class="carrousel-button" data-type="true"><</button>
            <div class="slides">
                <div class="slides-container" data-id="0">
                    <!-- Aqui va los contenidos -->
                    <section class="card">
                        <img src="./placeholder.png" alt="">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor</p>
                    </section>
                </div>
            </div>
            <button class="carrousel-button" data-type="false">></button>
        </div>
    </section>
```

4. Dentro del elemento con la clase `slides`, añade las diapositivas utilizando la siguiente estructura:

```html
<div class="slides-container" data-id="0">
    <!-- Aqui va los contenidos -->
    <section class="card">
        <img src="./placeholder.png" alt="">
        <h3>Title</h3>
        <p>Lorem ipsum dolor</p>
    </section>
</div>
```

Puedes ajustar estas opciones según tus necesidades.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error, tienes alguna idea para mejorar el carrousel o quieres añadir nuevas características, no dudes en abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT). Si utilizas este carrousel en tu proyecto, agradecemos un enlace o atribución al repositorio original.

---

¡Disfruta de tu carrousel reutilizable! Si tienes alguna pregunta o necesitas ayuda, no dudes en comunicarte con nosotros.