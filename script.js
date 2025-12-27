/* =========================
   VARIÁVEIS
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || []

const list = document.getElementById("product-list")
const cartItems = document.getElementById("cart-items")
const totalSpan = document.getElementById("total")
const neighborhoodSelect = document.getElementById("neighborhood")
const cartCount = document.getElementById("cart-count")

const deliveryFees = {
  "Centro": 5,
  "Jardim América": 7,
  "Vila Nova": 8,
  "Jardim das Flores": 10,
  "Outros": 12
}

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})

/* =========================
   RENDER PRODUTOS
========================= */

function renderProducts(products) {
  list.innerHTML = ""

  products.forEach(product => {
    list.innerHTML += `
      <li class="product-card">
        <img src="${product.src}">
        <p>${product.name}</p>
        <p class="item-price">${currency.format(product.price)}</p>
        <button onclick="addToCart(${product.id}, this)">Adicionar</button>
      </li>
    `
  })
}

/* =========================
   FILTRO
========================= */

function filterCategory(category) {
  if (category === "all") {
    renderProducts(menuOptions)
    return
  }

  const filtered = menuOptions.filter(
    product => product.category === category
  )

  renderProducts(filtered)
}

/* =========================
   CARRINHO
========================= */

function addToCart(id, btn) {
  if (!isOpen()) {
    showClosedToast()
    return
  }

  const product = menuOptions.find(p => p.id === id)
  if (!product) return

  const item = cart.find(i => i.id === id)

  if (item) {
    item.qty++
  } else {
    cart.push({ ...product, qty: 1 })
  }

  animateToCart(btn)
  saveCart()
  showToast()
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
  renderCart()
}

function renderCart() {
  cartItems.innerHTML = ""
  let total = 0

  cart.forEach(item => {
    total += item.price * item.qty

    cartItems.innerHTML += `
      <li>
        ${item.name} ${currency.format(item.price)}
        <div class="qty-control">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </li>
    `
  })

  const fee = deliveryFees[neighborhoodSelect.value] || 0
  document.getElementById("delivery-fee").textContent =
    `Entrega: ${currency.format(fee)}`

  totalSpan.textContent = currency.format(total + fee)
  cartCount.textContent = cart.reduce((acc, i) => acc + i.qty, 0)
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id)
  if (!item) return

  item.qty += delta
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id)
  }

  saveCart()
}

/* =========================
   CHECKOUT
========================= */

function toggleCheckout() {
  document.getElementById("checkout").classList.toggle("hidden")
}

function checkout() {
  if (!isOpen()) {
    showClosedToast()
    return
  }

  const name = document.getElementById("client-name").value.trim()
  const address = document.getElementById("client-address").value.trim()
  const neighborhood = neighborhoodSelect.value

  if (!name || !address || !neighborhood) {
    alert("Preencha nome, bairro e endereço")
    return
  }

  let msg = `Pedido Dev Burguer%0A`
  msg += `Cliente: ${name}%0A`
  msg += `Endereço: ${address}%0A%0A`

  cart.forEach(item => {
    msg += `${item.qty}x ${item.name} ${currency.format(item.price * item.qty)}%0A`
  })

  msg += `%0ATotal: ${totalSpan.textContent}`

  window.open(
    `https://wa.me/554188944763?text=${msg}`,
    "_blank"
  )
}

/* =========================
   ANIMAÇÃO
========================= */

function animateToCart(button) {
  const img = button.parentElement.querySelector("img")
  const cartBox = document.querySelector(".checkout-fab")

  const clone = img.cloneNode(true)
  const r1 = img.getBoundingClientRect()
  const r2 = cartBox.getBoundingClientRect()

  clone.classList.add("fly-img")
  clone.style.left = r1.left + "px"
  clone.style.top = r1.top + "px"

  document.body.appendChild(clone)

  requestAnimationFrame(() => {
    clone.style.transform =
      `translate(${r2.left - r1.left}px, ${r2.top - r1.top}px) scale(0.2)`
    clone.style.opacity = "0"
  })

  setTimeout(() => clone.remove(), 800)
}

/* =========================
   HORÁRIO
========================= */

const opening = { open: 18, close: 23 }

function isOpen() {
  const hour = new Date().getHours()
  return hour >= opening.open && hour < opening.close
}

function showClosedToast() {
  const toast = document.getElementById("closed-toast")
  toast.classList.add("show")
  setTimeout(() => toast.classList.remove("show"), 2500)
}

/* =========================
   TOAST
========================= */

function showToast() {
  const toast = document.getElementById("toast")
  toast.classList.add("show")
  setTimeout(() => toast.classList.remove("show"), 2000)
}

/* =========================
   INIT
========================= */

renderProducts(menuOptions)
renderCart()
neighborhoodSelect.addEventListener("change", renderCart)
