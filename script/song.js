const albumSongs = {
    "Kill 'Em All (1983)": ["Hit the Lights", "The Four Horsemen", "Jump in the Fire", "Whiplash"],
    "Ride the Lightning (1984)": ["Fight Fire with Fire", "Ride the Lightning", "Fade to Black", "Creeping Death"],
    "Master of Puppets (1986)": ["Battery", "Master of Puppets", "The Thing That Should Not Be", "Welcome Home (Sanitarium)"],
    "...And Justice for All (1988)": ["Blackened", "...And Justice for All", "One", "Harvester of Sorrow"],
    "Metallica (The Black Album) (1991)": ["Enter Sandman", "Sad But True", "The Unforgiven", "Nothing Else Matters"],
    "Load (1996)": ["Ain't My Bitch", "Until It Sleeps", "King Nothing", "Hero of the Day"],
    "Reload (1997)": ["Fuel", "The Memory Remains", "The Unforgiven II", "Low Man's Lyric"],
    "St. Anger (2003)": ["Frantic", "St. Anger", "Some Kind of Monster", "Invisible Kid"],
    "Death Magnetic (2008)": ["That Was Just Your Life", "The End of the Line", "The Day That Never Comes", "Cyanide"],
    "Hardwired... to Self-Destruct (2016)": ["Hardwired", "Atlas, Rise!", "Now That We're Dead", "Moth into Flame"],
    "72 Seasons (2023)": ["72 Seasons", "Shadows Follow", "Screaming Suicide", "Lux Æterna"]
};

document.addEventListener("DOMContentLoaded", () => {
    const albumList = document.querySelectorAll("ul li");
    
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "black";
    popup.style.color = "white";
    popup.style.padding = "20px";
    popup.style.border = "2px solid red";
    popup.style.boxShadow = "0px 0px 15px red";
    popup.style.display = "none";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "10px";
    closeButton.style.background = "red";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";
    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });
    popup.appendChild(closeButton);
    
    albumList.forEach(album => {
        album.classList.add("album-item");
        album.addEventListener("click", () => {
            const albumName = album.textContent;
            const songList = albumSongs[albumName] || [];
            
            let songHtml = `<h3>${albumName}</h3><ul>`;
            songList.forEach(song => {
                songHtml += `<li>${song}</li>`;
            });
            songHtml += "</ul>";
            
            popup.innerHTML = songHtml;
            popup.appendChild(closeButton);
            popup.style.display = "block";
        });
    });
});
