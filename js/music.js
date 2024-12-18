"use strict";

// henter albumdata fra albums.json
fetch('data/albums.json')
    .then(response => response.json())
    .then(albums => {
        generateAlbums(albums);
    })
    .catch(error => {
        console.error('Error fetching albums:', error);
    });

// albums i HTML
function generateAlbums(albums) {
    const albumContainer = document.getElementById("album-container");
    albums.forEach((album, index) => {
        const albumHTML = `
            <div>
                <ul>
                    <li>
                    <img src="${album.cover}" alt="cover"></li>
                    <li><p class="text">${album.title}</p></li>
                    <li><p class="text">${album.year}</p></li>
                    <li>
                        <a class="button" 
                           href="#" 
                           data-index="${index}" 
                           onclick="showPopup(event, ${index})">
                           Stream
                        </a>
                    </li>
                </ul>
            </div>
        `;
        albumContainer.innerHTML += albumHTML;
    });

    // gemmer albums i en variabel for pop-up adgang
    window.albumData = albums;
}

