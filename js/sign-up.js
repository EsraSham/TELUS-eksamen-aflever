"use strict";

    function showAlert() {
        // Hent popup-elementet
        const popup = document.getElementById("notifikation");

        // Vis popup
        popup.style.display = "block";

        // Forhindre formularindsendelse
        return false;
    }

    function closePopup() {
        // Skjul popup
        const popup = document.getElementById("notifikation");
        popup.style.display = "none";
    }

