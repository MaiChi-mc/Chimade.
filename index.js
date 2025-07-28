// var cart = [];

// function addToBasket() {
//     var name = document.querySelector('.pro-name').innerText;
//     var price = parseFloat(document.querySelector('.pro-price').innerText.replace(/[^\d.]/g, ''));
//     var quantity = 1;

//     var product = {
//         name: name,
//         price: price,
//         quantity: quantity
//     };

//     cart.push(product);

//     updateCart();
// }

// function updateCart() {
//     var cartItems = document.querySelector('.cart-items');
//     var cartTotalPrice = document.querySelector('.cart-total-price');

//     cartItems.innerHTML = '';

//     var totalAmount = 0;

//     for (var i = 0; i < cart.length; i++) {
//         var product = cart[i];

//         var cartRow = document.createElement('div');
//         cartRow.classList.add('cart-row');

//         var cartRowContent = `
//             <span class="cart-item cart-column">${product.name}</span>
//             <span class="cart-price cart-column">${product.price} Đ</span>
//             <span class="cart-quantity cart-column">${product.quantity}</span>
//             <button class="remove-button cart-column" onclick="removeProductFromCart(${i})">Xóa</button>
//         `;
//         cartRow.innerHTML = cartRowContent;

//         cartItems.appendChild(cartRow);

//         var subtotal = product.price * product.quantity;

//         totalAmount += subtotal;
//     }

//     cartTotalPrice.innerText = totalAmount + 'VNĐ';

//     openCartModal();
// }

// function openCartModal() {
//     var modal = document.getElementById('myModal');
//     modal.style.display = 'block';

//     var closeButton = document.querySelector('.close');
//     closeButton.addEventListener('click', function () {
//         closeCartModal();
//     });
// }

// function closeCartModal() {
//     var modal = document.getElementById('myModal');
//     modal.style.display = 'none';
// }

// function removeProductFromCart(index) {
//     cart.splice(index, 1);
//     updateCart();
// }

// function togglePaymentBox() {
//     var paymentBox = document.querySelector('.modal-content');
//     paymentBox.classList.toggle('show-payment');
// }

// function makePayment() {
//     var cartTotalPrice = document.querySelector('.cart-total-price').innerText;
//     alert('Payment successful! Total amount: ' + cartTotalPrice);
// }

const buttons = document.querySelectorAll('.product-item button');
console.log(buttons)

buttons.forEach(function(button, index) {
  console.log(button, index);
});