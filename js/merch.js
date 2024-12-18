"use strict";

// Læs merchdata fra merch.json
fetch('data/merch.json')
    .then(response => response.json())
    .then(merchItems => {
        generateMerch(merchItems);
    })
    .catch(error => {
        console.error('Error fetching merch items:', error);
    });

// Generér merchvarer i HTML
function generateMerch(merchItems) {
    const merchContainer = document.querySelector(".merch");
    
    merchItems.forEach(item => {
        const merchHTML = `
            <div>
                <ul>
                    <li><img src="${item.image}" loading="lazy" alt="${item.alt}"></li>
                </ul>
            </div>
        `;
        merchContainer.innerHTML += merchHTML;
    });
}

