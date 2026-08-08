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