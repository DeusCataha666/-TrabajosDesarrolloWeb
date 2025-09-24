const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "Laptop", desc: "32GB RAM", img: "/Guia_3/parte2/assets/image/laptop.png", price: "$1200"},
    {titulo: "Mouse", desc: "Inalámbrico", img: "/Guia_3/parte2/assets/image/mause.png", price: "$25"},
    {titulo: "Teclado", desc: "Mecánico", img: "/Guia_3/parte2/assets/image/keyboard.png", price: "$75"},
    {titulo: "Monitor", desc: "4K UHD", img: "/Guia_3/parte2/assets/image/monitor.png", price: "$300"}
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".img").src = p.img;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".price").textContent = p.price;
    contenedor.appendChild(clon);
  });