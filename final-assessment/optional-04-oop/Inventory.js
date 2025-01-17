/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor(){
        this.items = [];
    };

    // Method addItems
    addItem(item){
        // Menambahkan item ke dalam array items
        this.items.push(item)
    };

    // Method removeItem
    removeItem(id){
        this.items = this.items.filter(item => item.id !== id);
    };

    // Method untuk menampilkan daftar item dalam bentuk string
    listItems(){
        return this.items.map(item => item.displayDetails())
    };
}


// Jangan hapus kode di bawah ini!
export default Inventory;
