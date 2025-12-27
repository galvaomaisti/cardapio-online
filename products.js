/* ===============================
   PRODUTOS MVP (FIXOS)
================================ */

const menuOptions = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Burger Clássico",
    price: 25,
    category: "hamburgers",
    src: "./src/amburger.jpg"
  },
  {
    id: 2,
    name: "Burger Duplo",
    price: 32,
    category: "hamburgers",
    src: "./src/Haburguer-Duplo.jpg"
  },
  {
    id: 3,
    name: "X-Bacon",
    price: 28,
    category: "hamburgers",
    src: "./src/xbacon.png"
  },
  {
    id: 4,
    name: "Refrigerante",
    price: 7,
    category: "bebidas",
    src: "./src/Bebidas.jpg"
  },
  {
    id: 5,
    name: "Milkshake",
    price: 12,
    category: "bebidas",
    src: "./src/Milkshake.jpeg"
  },
  {
    id: 6,
    name: "Porção de Batata Frita",
    price: 15,
    category: "porcoes",
    src: "./src/Batata-Frita.jpg"
  },
  {
    id: 7,
    name: "Combo Família",
    price: 60,
    category: "porcoes",
    src: "./src/Combo-Supremo.jpg"
  },
  {
    id: 8,
    name: "Vegano Burger",
    price: 28,
    category: "veganos",
    src: "./src/xvegan.png"
  },
  {
    id: 9,
    name: "xSalada Vegano",
    price: 28,
    category: "veganos",
    src: "./src/xsalada.jpeg"
  },
  {
    id: 10,
    name: "Burger Duplo Smash",
    price: 35,
    promoPrice: 29,
    category: "hamburgers",
    src: "./src/Burger Duplo Smash.png",
    featured: true
  }
]
