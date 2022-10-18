// ubah warna judul
const tUbahWarna = document.querySelector ('#judul .tUbahWarna');
const h1 = document.querySelector ('#judul h1');

tUbahWarna.addEventListener('click', function() {
  h1.classList.toggle('judul-goldenrod');
});
// akhir ubah warna judul


// acak warna
const tAcakWarna = document.querySelector ('#acakWarna .tAcakWarna');
tAcakWarna.addEventListener ('click', function() {
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
// akhir acak warna


// slide warna
const sMerah = document.querySelector ('.div-kotak input[name=sMerah]');
const sHijau = document.querySelector ('.div-kotak input[name=sHijau]');
const sBiru = document.querySelector('.div-kotak input[name=sBiru]');

sMerah.addEventListener('input', function() {
  document.body.style.backgroundColor = 'rgb('+ sMerah.value +','+ sHijau.value +','+ sBiru.value +')';
});

sHijau.addEventListener('input', function() {
  document.body.style.backgroundColor = 'rgb('+ sMerah.value +','+ sHijau.value +','+ sBiru.value +')';
});

sBiru.addEventListener('input', function() {
  document.body.style.backgroundColor = 'rgb('+ sMerah.value +','+ sHijau.value +','+ sBiru.value +')';
});
// akhir slide warna


// sentuh warna
const sentuhWarna = document.getElementById('sentuhWarna');

sentuhWarna.addEventListener('mousemove', function(event) {
  const xPos = Math.round(event.clientX / window.innerWidth * 255);
  const yPos = Math.round(event.clientY / window.innerHeight * 255);
  sentuhWarna.style.backgroundColor = 'rgb(128,'+ xPos +','+ yPos +')';
});
// akhir sentuh warna