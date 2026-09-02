// ============================
// GALERÍA DEL PROYECTO
// ============================

document.addEventListener("DOMContentLoaded", function () {

    const currentImage = document.getElementById("currentImage");
    const thumbnails = document.querySelectorAll(".gallery-thumbnails img");

    if (currentImage && thumbnails.length > 0) {

        thumbnails.forEach(function (thumbnail) {

            thumbnail.addEventListener("click", function () {

                // Cambiar imagen principal
                currentImage.src = this.src;

                // Quitar clase active
                thumbnails.forEach(function (thumb) {
                    thumb.classList.remove("active");
                });

                // Agregar clase active a la seleccionada
                this.classList.add("active");

            });

        });

    }

});

// ============================
// MODAL DE SERVICIOS
// ============================

const serviceModal = document.getElementById("serviceModal");
const serviceModalClose = document.getElementById("serviceModalClose");

const modalServiceImage = document.getElementById("modalServiceImage");
const modalServiceTitle = document.getElementById("modalServiceTitle");
const modalServiceDescription = document.getElementById("modalServiceDescription");
const modalServiceDetails = document.getElementById("modalServiceDetails");

const serviceLinks = document.querySelectorAll(".service-link[data-service]");

const servicesData = {

    subestaciones: {

        title: "Diseño de Subestaciones",

        image: "assets/img/servicios/diseño_subestaciones.jpeg",

        description:
            "Desarrollamos ingeniería para subestaciones eléctricas de media y alta tensión, así como para celdas de media tensión (Metal-Clad, Metal-Enclosed, Switchgear, interruptores en vacío, SF₆ y RMU), desde la definición de criterios de diseño hasta la ingeniería de detalle y documentación técnica.Diseñamos soluciones considerando la integración de equipos de potencia, protección, medición, control y puesta a tierra, de acuerdo con los requerimientos específicos de cada proyecto.",

        details: `
            <ul>
                <li>Diseño y configuración de subestaciones eléctricas.</li>
                <li>Celdas de media tensión (Metal-Clad, Metal-Enclosed, Switchgear, interruptores en vacío, SF₆ y RMU).</li>
                <li>Diagramas unifilares y esquemas de conexión.</li>
                <li>Sistemas de protección, medición y control.</li>
                <li>Arreglos y distribución de equipos.</li>
                <li>Diseño de sistemas de puesta a tierra.</li>
                <li>Canalizaciones y rutas de cableado.</li>
                <li>Selección y especificación de equipos.</li>
                <li>Planos de ingeniería y diagramas de control.</li>
                <li>Memorias de cálculo y documentación técnica.</li>
                <li>Aplicación de normas NOM, NMX, CFE, IEC e IEEE, según corresponda.</li>
            </ul>
        `

    },

    ingenieria: {

        title: "Ingeniería Eléctrica",

        image: "assets/img/servicios/ingenieria_electrica.jpeg",

        description:
            "Desarrollamos proyectos de ingeniería eléctrica adaptados a las necesidades técnicas y operativas de cada instalación, integrando criterios de diseño, cálculo, selección de equipos y documentación técnica.Nuestra ingeniería abarca sistemas de fuerza, distribución, control e iluminación, desde las etapas conceptuales hasta el desarrollo de ingeniería de detalle, buscando soluciones seguras, funcionales, eficientes y técnicamente viables.",

        details: `
            <ul>
                <li>Ingeniería conceptual, básica y de detalle.</li>
                <li>Diagramas unifilares.</li>
                <li>Diagramas de control y conexión.</li>
                <li>Cuadros de carga y balance de cargas.</li>
                <li>Cálculo y selección de conductores.</li>
                <li>Cálculo y selección de canalizaciones.</li>
                <li>Selección y dimensionamiento de equipos eléctricos.</li>
                <li>Diseño de alimentadores y circuitos derivados.</li>
                <li>Diseño de sistemas de distribución eléctrica.</li>
                <li>Diseño de tableros eléctricos.</li>
                <li>Sistemas de fuerza y control.</li>
                <li>Diseño de sistemas de iluminación.</li>
                <li>Cálculos y distribución de luminarias.</li>
                <li>Diseño de alumbrado interior y exterior.</li>
                <li>Planos eléctricos.</li>
                <li>Memorias de cálculo.</li>
                <li>Especificaciones técnicas.</li>
                <li>Catálogos y listas de materiales.</li>
                <li>Integración de documentación técnica para construcción y ejecución.</li>
            </ul>
        `

    },

    CFE: {

        title: "Gestión ante CFE",

        image: "assets/img/servicios/gestion_cfe.jpeg",

        description:
            "Brindamos asesoría y acompañamiento técnico en los procesos relacionados con la Comisión Federal de Electricidad (CFE), desde la definición de requerimientos y preparación del proyecto hasta el seguimiento de trámites y atención de observaciones. Apoyamos a nuestros clientes en la gestión de nuevos servicios, ampliaciones, modificaciones y aumentos de carga, incluyendo la integración y seguimiento de proyectos a través de SISPROTER, conforme a los requerimientos técnicos y administrativos aplicables.",

        details: `
            <ul>
                <li>Gestión de nuevos servicios eléctricos.</li>
                <li>Contratación de servicios en media y alta tensión.</li>
                <li>Aumentos y modificaciones de carga.</li>
                <li>Ampliación de servicios existentes.</li>
                <li>Gestión y seguimiento de proyectos mediante SISPROTER.</li>
                <li>Integración y revisión de documentación para SISPROTER.</li>
                <li>Elaboración y revisión de proyectos eléctricos para trámite.</li>
                <li>Revisión de requerimientos técnicos de CFE.</li>
                <li>Seguimiento de solicitudes y trámites.</li>
                <li>Atención y seguimiento de observaciones.</li>
                <li>Coordinación técnica con las áreas correspondientes de CFE.</li>
                <li>Asesoría durante el proceso de conexión y puesta en operación.</li>
            </ul>
        `

    },

    puesta: {

        title: "Sistemas de Puesta a Tierra",

        image: "assets/img/servicios/puesta_tierra.jpeg",

        description:
            "Diseño y cálculo de sistemas de puesta a tierra destinados a mejorar la seguridad de las instalaciones y proteger equipos y personas.",

        details: `
            <ul>
                <li>Diseño de sistemas de puesta a tierra.</li>
                <li>Cálculo de los sistemas requeridos.</li>
                <li>Evaluación de las condiciones de la instalación.</li>
                <li>Enfoque en seguridad y protección eléctrica.</li>
            </ul>
        `

    },

    estudios: {

        title: "Estudios Eléctricos",

        image: "assets/img/servicios/calidad_energia.jpeg",

        description:
            "Realizamos estudios eléctricos especializados para analizar el comportamiento de instalaciones y sistemas de potencia, identificar condiciones de riesgo y validar su operación bajo diferentes escenarios. Los resultados permiten verificar diseños, optimizar la operación, seleccionar adecuadamente equipos y establecer criterios de protección, contribuyendo a una instalación más segura y confiable.",

        details: `
            <ul>
                <li>Estudio de flujo de carga.</li>
                <li>Estudio de cortocircuito.</li>
                <li>Coordinación y selectividad de protecciones.</li>
                <li>Estudios de puesta a tierra.</li>
                <li>Cálculo de mallas de puesta a tierra.</li>
                <li>Análisis de tensiones de paso y contacto.</li>
                <li>Estudios de calidad de energía.</li>
                <li>Análisis de armónicos y distorsión.</li>
                <li>Análisis de factor de potencia.</li>
                <li>Análisis de desbalance de tensión y corriente.</li>
                <li>Análisis de variaciones de tensión.</li>
                <li>Cálculo de caída de tensión.</li>
                <li>Evaluación de capacidad de conductores y equipos.</li>
                <li>Análisis de condiciones de operación del sistema.</li>
                <li>Estudios para selección y ajuste de protecciones.</li>
            </ul>
        `

    },

    calidad: {

        title: "Pruebas Eléctricas",

        image: "assets/img/servicios/calidad.jpeg",

        description:
            "Ejecutamos pruebas, mediciones e inspecciones eléctricas para evaluar la condición de equipos e instalaciones, identificar posibles fallas y verificar su correcto funcionamiento antes y durante su operación. Utilizamos equipos especializados y metodologías de prueba adecuadas para cada aplicación, proporcionando información técnica para diagnóstico, mantenimiento y puesta en servicio.",

        details: `
            <ul>
                <li>Pruebas VLF en cables de media tensión.</li>
                <li>Resistencia de aislamiento.</li>
                <li>Resistencia de devanados.</li>
                <li>Relación de transformación (TTR).</li>
                <li>Factor de potencia y tan δ.</li>
                <li>Resistencia de contactos.</li>
                <li>Pruebas a transformadores.</li>
                <li>Pruebas a interruptores.</li>
                <li>Pruebas a cables de media tensión.</li>
                <li>Pruebas y verificación de relevadores de protección.</li>
                <li>Pruebas funcionales de sistemas eléctricos.</li>
                <li>Termografía infrarroja de equipos e instalaciones eléctricas.</li>
                <li>Inspección termográfica de tableros, conexiones, transformadores y equipos de distribución.</li>
                <li>Medición de resistividad del terreno.</li>
                <li>Medición de resistencia de sistemas de puesta a tierra.</li>
                <li>Continuidad de conductores de protección y puesta a tierra.</li>
                <li>Diagnóstico y evaluación de instalaciones eléctricas.</li>
                <li>Pruebas para puesta en servicio.</li>
            </ul>
        `

    }

};


serviceLinks.forEach(link => {

    link.addEventListener("click", function () {

        const service = servicesData[this.dataset.service];

        if (!service) return;

        modalServiceImage.src = service.image;

        modalServiceImage.alt = service.title;

        modalServiceTitle.textContent = service.title;

        modalServiceDescription.textContent = service.description;

        modalServiceDetails.innerHTML = service.details;

        serviceModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeServiceModal(){

    serviceModal.classList.remove("active");

    document.body.style.overflow = "";

}


serviceModalClose.addEventListener("click", closeServiceModal);


serviceModal.addEventListener("click", function(event){

    if(event.target === serviceModal){

        closeServiceModal();

    }

});