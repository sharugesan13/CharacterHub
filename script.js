const characters = [
    { name: "Character 1", image: "images/char1.png" },
    { name: "Character 2", image: "images/char2.png" }
];

const container = document.getElementById("character-container");

characters.forEach(c => {
    const div = document.createElement("div");
    div.className = "character-card";
    div.innerHTML = `<img src="${c.image}" alt="${c.name}"><h3>${c.name}</h3>`;
    container.appendChild(div);
});
