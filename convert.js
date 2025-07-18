const sharp = require('sharp');

sharp('./assets/hero.jpg') // pastikan path dan file sesuai
  .webp({ quality: 75 }) // kompresi WebP dengan kualitas 75
  .toFile('./public/hero.webp') // output di folder public
  .then(() => {
    console.log('✅ Konversi selesai!');
  })
  .catch(err => {
    console.error('❌ Gagal konversi:', err);
  });