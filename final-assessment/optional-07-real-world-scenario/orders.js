// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
 
  // Buat objek pesanan baru 
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: items.reduce((sum, item) => sum + item.price, 0),
    status: 'Mohon Menunggu'
  };
 
  // Tambahkan pesanan ke array orders
  orders.push(newOrder);

  return newOrder;

}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);

  // update order
  if(order){
    order.status = status;
  };
  
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);

  if (index !== -1){
    orders.slice(index, 1)
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
