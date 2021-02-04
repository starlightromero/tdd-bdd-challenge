// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return 'Hello'
}

const area = (w, h) => w * h >= 0 ? w * h : null

const perimeter = (w, h) => w >= 0 && h >= 0 ? w * 2 + h * 2 : null

const circleArea = r => r >= 0 ? (Math.PI * r) ** 2 : null

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => shoppingCart

const addItemToCart = item => shoppingCart.push(item)

const getNumItemsInCart = () => {
  let numItems = 0
  for (const item of shoppingCart) {
    numItems += item.quantity
  }
  return numItems
}

const removeItemFromCart = item => {
  const index = shoppingCart.findIndex(el => el === item)
  return shoppingCart.splice(index, 1)[0]
}

const getCartTotal = () => {
  let total = 0
  for (const item of shoppingCart) {
    total += item.price
  }
  return total
}

module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToCart,
  getNumItemsInCart,
  removeItemFromCart,
  getCartTotal
}
