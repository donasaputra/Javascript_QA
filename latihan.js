alert('selamat datang dikelas ini');
var nama = prompt('masukkan nama kamu');
document.write('selamat datang Kak ' + nama + '<br>');
document.write('silahkan belajar'+'<br>');
var bil1 = parseInt(prompt('masukkan bilangan pertama '));
var bil2 = parseInt(prompt('masukkan bilangan ke 2','<br>'));
//document.write('hasil penjumlahan adalah ', bil1+bil2+'<br>');
var bil3 = bil1+bil2;
document.write(bil1>bil2)
var bil1 = 20;
var bil2 = 20;
var bil3 = bil1+bil2;
document.write('bilangan pertama adalah ' + bil1 +
'<br>');
document.write('bilangan kedua adalah ' + bil2 +
'<br>');
///////////////////////////////
document.write(bil1>bil2, '<br>');
document.write(bil1<bil2, '<br>');

document.write(!(bil1>bil2 && bil1<bil2));

var bil1 = parseInt(prompt('Masukkan bilangan pertama '));
var bil2 = parseInt(prompt('Masukkan bilangan kedua '));
var bil3 = bil1 + bil2;
document.write('hasil penjumlahan bilangan pertama dan kedua adalah ', bil3);

var nilai = parseInt(prompt('Masukkan angka anda '));

if(nilai >75) {
    document.write('Selamat Anda lulus')
} else 
 document.write ('Maaf Anda gagal')
///////////////////////////////
let angka1 = parseInt(prompt('Masukkan bilangan pertama '));
let angka2 = parseInt(prompt('Masukkan bilangan kedua '));
let angka3 = parseInt(prompt('Masukkan bilangan ketiga '));

document.write('Angka 1 lebih besar dari angka 2 dan angka 3 ',angka1>angka2 && angka1>angka3,'<br>')
document.write('Angka 1 kurang dari angka 2 dan angka 3 ',angka1>angka2 && angka1>angka3)
///////////////////////////////
alert('test');
var bil1 = parseInt(prompt('Masukkan bilangan pertama '));
var bil2 = parseInt(prompt('Masukkan bilangan kedua '));
var bil3 = bil1 + bil2;
document.write('hasil penjumlahan bilangan pertama dan kedua adalah ', bil3);

var nilai = parseInt(prompt('Masukkan angka anda '));
///////////////////////////////
if(nilai >75) {
    document.write('Selamat Anda lulus')
} else 
document.write ('Maaf Anda gagal')
///////////////////////////////
let angka1 = parseInt(prompt('Masukkan bilangan pertama '));
let angka2 = parseInt(prompt('Masukkan bilangan kedua '));
let angka3 = parseInt(prompt('Masukkan bilangan ketiga '));

document.write('Angka 1 lebih besar dari angka 2 dan angka 3 ',angka1>angka2 && angka1>angka3,'<br>')
document.write('Angka 1 kurang dari angka 2 dan angka 3 ',angka1>angka2 && angka1>angka3)

var namaVariable ='1234';
document.write(typeof(namaVariable) +
'<br>');
namaVariable = 1234;
document.write(typeof(namaVariable) + 
'<br>');
namaVariable = true;
// document.write(typeof(namaVariabel));

var namaPengunjung = prompt('Silahkan masukkan nama kamu ',"dojobers setia");

document.write('Hai ' + namaPengunjung + ',Selamat datang di dojobox' + '<br>');

var konfirmasi = confirm("mau tetap disinikan ?");
var hasil = (konfirmasi==true)? "iya donk" : "gak deh.."

document.write(hasil, "<br>")

var nilai = prompt('masukkan angka :');
// if(nilai % 2 ==0){
//     document.write(nilai + ' merupakan bilangan genap')
// }else if(nilai % 2 ==){
//     document.write(nilai + ' merupakan bilangan ganjil')
// }
///////////////////////////////
var nilaiKepuasan = parseInt(prompt('masukkan nilai kepuasan kamu', '0-100'));

switch(true){
    case (nilaiKepuasan>=90):
        document.write('Nilai kamu adalah A')
        break
    case (nilaiKepuasan>=80):
        document.write('Nilai kamu adalah B')
        break
    case (nilaiKepuasan>=70):
        document.write('Nilai kamu adalah C')
        break
    case (nilaiKepuasan>=60):
        document.write('Nilai kamu adalah D')
        break
    default:
        document.write('Nilai kamu adalah E')
}


