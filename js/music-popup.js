"use strict;"
// viser pop-up med album detaljer
function showPopup(event, albumIndex) {
    event.preventDefault();

    const album = window.albumData[albumIndex];

    // opdaterer popup'en med album detaljer
    document.getElementById('popup-image').src = album.cover;
    document.getElementById('popup-title').innerText = album.title;
    document.getElementById('popup-year').innerText = album.year;
    document.getElementById('popup-spotify').href = album.spotify;
    document.getElementById('popup-apple').href = album.apple;

    // viser popup'en
    document.getElementById('popup').style.display = 'flex';
}

// lukker pop-up'en
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}