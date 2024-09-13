let saldo = 0;


function tambahSaldo(){
    let jumlahTambah = parseFloat(window.prompt('masukan jumlah saldo yang ingin di tambahkan : '))
    saldo += jumlahTambah;
    alert(`saldo baru anda adalah ${saldo}`);
    return saldo;
    
};


function kurangiSaldo(){
    let jumlahKurang = parseFloat(window.prompt('masukan jumlah saldo yang ingin di kurangi : '))
    saldo -= jumlahKurang;
    alert(`saldo baru anda adalah ${saldo}`);
    return saldo;
};


window.onload = function(){
    
    tambahSaldo();
    kurangiSaldo()
    
}




