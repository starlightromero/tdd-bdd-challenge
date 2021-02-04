const chai = require('chai')
const mocha = require('mocha')
const utils = require('../utils')
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it('should say hello', function () {
  const hello = utils.sayHello()
  expect(hello).to.be.a('string')
  expect(hello).to.equal('Hello')
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it('should return the area of a rectangle', function () {
  const area = utils.area(3, 4)
  expect(area).to.be.a('number')
  expect(area).to.equal(12)
})

it('should return area as null', function () {
  const area = utils.area(-1, 10)
  expect(area).to.be.null
})

it('should return the perimeter of a rectangle', function () {
  const perimeter = utils.perimeter(3, 4)
  expect(perimeter).to.be.a('number')
  expect(perimeter).to.equal(14)
})

it('should return perimeter as null', function () {
  const perimeter = utils.perimeter(-1, 10)
  expect(perimeter).to.be.null
})

it('should return the radius of a circle', function () {
  const circleArea = utils.circleArea(3)
  expect(circleArea).to.be.a('number')
  expect(circleArea).to.equal((Math.PI * 3) ** 2)
})

it('should return radius as null', function () {
  const circleArea = utils.circleArea(-1)
  expect(circleArea).to.be.null
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it('Should create a new (object) Item with name and price', function () {
  const item = utils.createItem('apple', 0.99)
  expect(item).to.be.a('object')
  expect(item).to.have.property('name', 'apple')
  expect(item).to.have.property('price', 0.99)
  expect(item).to.have.property('quantity', 1)
})

it('Should return an array containing all items in cart', function () {
  const item = utils.createItem('orange', 0.79)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(1)
})

it('Should add a new item to the shopping cart', function () {
  const item = utils.createItem('orange', 0.79)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(1)
})

it('Should return the number of items in the cart', function () {
  const item = utils.createItem('orange', 0.79)
  utils.addItemToCart(item)
  const length = utils.getNumItemsInCart()
  expect(length).to.be.a('number')
  expect(length).to.equal(1)
})

it('Should remove items from cart', function () {
  const orange = utils.createItem('orange', 0.79)
  const plum = utils.createItem('plum', 1.29)
  utils.addItemToCart(orange)
  utils.addItemToCart(plum)
  const removedItem = utils.removeItemFromCart()
  const cart = utils.getShoppingCart()
  expect(removedItem).to.be.a('object')
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(1)
})

// ========================================================
// Stretch Challenges
// ========================================================

it('Should update the count of items in the cart', function () {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(0)
  const orange = utils.createItem('orange', 0.79)
  utils.addItemToCart(orange)
  expect(cart).to.have.lengthOf(1)
  const plum = utils.createItem('plum', 1.29)
  utils.addItemToCart(plum)
  expect(cart).to.have.lengthOf(2)
})

it('Should validate that an empty cart has 0 items', function () {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a('array')
  expect(cart).to.have.lengthOf(0)
})

it('Should return the total cost of all items in the cart', function () {
  const orange = utils.createItem('orange', 0.79)
  const plum = utils.createItem('plum', 1.29)
  utils.addItemToCart(orange)
  utils.addItemToCart(plum)
  const total = utils.getCartTotal()
  const cart = utils.getShoppingCart()
  expect(total).to.be.a('number')
  expect(total).to.equal(1.29 + 0.79)
})
