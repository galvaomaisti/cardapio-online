function addProduct() {
  const products = JSON.parse(localStorage.getItem("products")) || []

  products.push({
    id: Date.now(),
    name: name.value,
    price: Number(price.value),
    promoPrice: promo.value ? Number(promo.value) : null,
    category: category.value,
    src: img.value
  })

  localStorage.setItem("products", JSON.stringify(products))
  alert("Produto salvo")
}
