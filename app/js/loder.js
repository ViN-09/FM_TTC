function showLoader() {
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden"); // tampilkan
  loader.classList.add("loader"); // animasi fade-in
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden"); // sembunyikan
}

async function loading(){
    showLoader(); // Tampilkan loading

setTimeout(() => {
  hideLoader(); // Hilangkan loading setelah 2 detik
}, 1000);

}
