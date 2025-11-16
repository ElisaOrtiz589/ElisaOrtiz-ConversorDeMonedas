# Conversor de Monedas Nacional

Este proyecto es una aplicación web simple desarrollada como parte de una evaluación de conocimientos en JavaScript para la web. La aplicación permite a los usuarios convertir montos desde Pesos Chilenos (CLP) a otras monedas (Dólar y Euro) y visualizar un historial de las fluctuaciones de la moneda seleccionada.

## Características Principales

La aplicación cumple con todos los requerimientos solicitados:

1.  **Obtención de datos desde API externa**:
    *   Se conecta a la API pública `https://mindicador.cl` para obtener los tipos de cambio actualizados utilizando el método `fetch` de JavaScript.

2.  **Cálculo y visualización de la conversión**:
    *   Permite al usuario ingresar un monto en CLP.
    *   Calcula de forma precisa la conversión a la moneda seleccionada.
    *   Muestra el resultado final directamente en la interfaz de usuario (DOM).

3.  **Soporte para múltiples monedas**:
    *   El selector (`<select>`) permite elegir entre Dólar y Euro, y el sistema realiza la conversión correctamente para cualquiera de las opciones.

4.  **Manejo de errores (`try-catch`)**:
    *   La lógica de la petición a la API está envuelta en un bloque `try...catch` para gestionar posibles fallos (ej. problemas de red, API no disponible).
    *   Si ocurre un error, se muestra un mensaje descriptivo al usuario en la interfaz.

5.  **Implementación de Gráfico Histórico**:
    *   Utiliza la librería **Chart.js** para renderizar un gráfico de líneas.
    *   El gráfico muestra el historial de valores de los últimos 10 días para la moneda que ha sido consultada, proporcionando un contexto visual de su comportamiento.

## Tecnologías Utilizadas

*   **HTML5**: Para la estructura semántica del contenido.
*   **CSS3**: Para el diseño y la presentación visual de la aplicación.
*   **JavaScript (ES6+)**: Para toda la lógica funcional, incluyendo manipulación del DOM, eventos, y peticiones asíncronas (`async/await`).
*   **Chart.js**: Una librería externa para la creación de gráficos interactivos.

## ¿Cómo usar?

1.  Abre el archivo `index.html` en tu navegador web.
2.  Ingresa el monto en Pesos Chilenos (CLP) que deseas convertir en el campo de texto.
3.  Selecciona la moneda de destino (Dólar o Euro) en el menú desplegable.
4.  Haz clic en el botón "Buscar".
5.  El resultado de la conversión aparecerá en pantalla, y el gráfico se actualizará mostrando el historial de la moneda seleccionada.

---

*Desarrollado como parte del desafío evaluado del curso "JavaScript para la Web".*# ElisaOrtiz-ConversorDeMonedas
