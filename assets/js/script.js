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
            "Diseño de subestaciones eléctricas orientado a garantizar seguridad, eficiencia y confiabilidad en la distribución de energía.",

        details: `
            <ul>
                <li>Diseño y desarrollo de subestaciones eléctricas.</li>
                <li>Definición de soluciones de acuerdo con las necesidades del proyecto.</li>
                <li>Consideración de criterios de seguridad y confiabilidad.</li>
                <li>Cumplimiento de normativas y requerimientos aplicables.</li>
            </ul>
        `

    },

    ingenieria: {

        title: "Ingeniería Eléctrica",

        image: "assets/img/servicios/ingenieria_electrica.jpeg",

        description:
            "Desarrollo de proyectos de ingeniería eléctrica con soluciones adaptadas a las necesidades técnicas y operativas de cada instalación.",

        details: `
            <ul>
                <li>Desarrollo de ingeniería eléctrica.</li>
                <li>Diseño de soluciones para instalaciones eléctricas.</li>
                <li>Integración de criterios técnicos y de seguridad.</li>
                <li>Soluciones orientadas a la eficiencia y confiabilidad.</li>
            </ul>
        `

    },

    CFE: {

        title: "Gestión ante CFE",

        image: "assets/img/servicios/gestion_cfe.jpeg",

        description:
            "Asesoría y gestión de trámites relacionados con la contratación, ampliación y modificación de servicios eléctricos ante la Comisión Federal de Electricidad.",

        details: `
            <ul>
                <li>Gestión de trámites ante CFE.</li>
                <li>Contratación de servicios eléctricos.</li>
                <li>Aumentos y modificaciones de carga.</li>
                <li>Asesoría durante el proceso de gestión.</li>
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
            "Ofrecemos servicios de inspección termográfica para la evaluación de instalaciones eléctricas, subestaciones, tableros, transformadores y equipos críticos. Nuestro personal certificado utiliza tecnología de última generación para identificar condiciones anormales de temperatura, permitiendo detectar de manera temprana posibles fallas y tomar acciones correctivas antes de que se conviertan en incidentes operativos. Este servicio contribuye a incrementar la seguridad, confiabilidad y continuidad de la operación, reduciendo costos asociados a paros no programados y mantenimientos correctivos.",

        details: `
            <ul>
                <li>Estudios de cortocircuito.</li>
                <li>Flujo de carga.</li>
                <li>Coordinación de protecciones.</li>
                <li>Análisis de calidad de energía.</li>
            </ul>
        `

    },

    calidad: {

        title: "Calidad de Energía",

        image: "assets/img/servicios/calidad.jpeg",

        description:
            "Ofrecemos servicios especializados de evaluación y análisis de calidad de la energía eléctrica para instalaciones industriales, comerciales e institucionales. Mediante equipos de medición y monitoreo de alta precisión, identificamos problemas como variaciones de tensión, hundimientos y sobretensiones, desbalances de voltaje y corriente, factor de potencia deficiente, armónicos y otros fenómenos que pueden afectar el desempeño y la vida útil de los equipos eléctricos. Nuestros estudios permiten diagnosticar las condiciones de operación de las instalaciones, determinar el cumplimiento de los parámetros aplicables y desarrollar soluciones orientadas a mejorar la eficiencia energética, la confiabilidad de los sistemas y la continuidad operativa. Contamos con personal capacitado y experiencia en el análisis de redes eléctricas, garantizando resultados precisos y recomendaciones técnicas adaptadas a las necesidades de cada cliente.",

        details: `
            <ul>
                <li>Evaluación del desempeño eléctrico.</li>
                <li>Identificación de problemas de calidad de energía.</li>
                <li>Análisis de condiciones de operación.</li>
                <li>Recomendaciones para mejorar la confiabilidad.</li>
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