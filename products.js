/* ===============================
   PRODUTOS MVP (FIXOS)
================================ */

const menuOptions = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Burger Delta",
    price: 18.9,
    category: "hamburgers",
    src: "./src/amburger.jpg"
  },
  {
    id: 2,
    name: "Burger Monagas",
    price: 21.90,
    category: "hamburgers",
    src: "./src/Haburguer-Duplo.jpg"
  },
  {
    id: 3,
    name: "Burger Zulia",
    price: 23.90,
    category: "hamburgers",
    src: "./src/xbacon.png"
  },
   {
    id: 4,
    name: "Burger Anzoátegui",
    price: 25.90,
    category: "hamburgers",
    src: "./src/Haburguer-Duplo.jpg"
  },
    {
    id: 5,
    name: "Burger Bolivar",
    price: 38.90,
    category: "hamburgers",
    src: "./src/Haburguer-Duplo.jpg"
  },
  {
    id: 6,
    name: "Refrigerante",
    price: 7,
    category: "bebidas",
    src: "./src/Bebidas.jpg"
  },
  {
    id: 7,
    name: "Porção de Batata Frita",
    price: 15,
    category: "porcoes",
    src: "./src/Batata-Frita.jpg"
  },
  {
    id: 8,
    name: "Combo Família",
    price: 60,
    category: "porcoes",
    src: "./src/Combo-Supremo.jpg"
  },
  {
    id: 9,
    name: "Vegano Burger",
    price: 28,
    category: "veganos",
    src: "./src/xvegan.png"
  },
  {
    id: 10,
    name: "xSalada Vegano",
    price: 28,
    category: "veganos",
    src: "./src/xsalada.jpeg"
  },
  {
    id: 11,
    name: "Burger Duplo Smash",
    price: 35,
    promoPrice: 29,
    category: "hamburgers",
    src: "./src/Burger Duplo Smash.png",
    featured: true
  }
]

