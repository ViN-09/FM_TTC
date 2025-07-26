function sidebar(){
  document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById("mySidebar");
    const overlay = document.getElementById("overlay");
    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");
  
    // 1. Buat isi sidebar secara dinamis
    sidebar.innerHTML = `
      <div class="sidebar-header">
        <img src="Gambar/telkom.png" alt="Telkomsel Logo" class="logo">
      </div>
      <span class="closebtn" id="closeSidebar">&times;</span>
      <ul class="menu">
      <li id="dashboard"><i class="fas fa-desktop"></i> Dashboard</li>
      <li id="data-tracking"><i class="fas fa-clipboard-list"></i> Data Tracking</li>
      <li id="log-alarm"><i class="fas fa-bell"></i> Alarm</li>
      <li id="data_potensi"><i class="fa-solid fa-file"></i> Data Potensi</li>
      <li id="profil"><i class="fas fa-file-alt"></i>Summary Profil</li>
      <li id="log-out"><i class="fas fa-right-from-bracket"></i> Log Out</li>
      </ul>
    `;
  
    
  
    // 2. Tambahkan event untuk item menu (setelah sidebar dimuat)
    const menuItems = sidebar.querySelectorAll('.menu li');
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        if(!this.id){
  
        }
        else{
          console.log(this.id);
          let menu_select = this.id
          switch (menu_select) {
            case "data-tracking":
              window.location.href = "table-pue.php";
              break;
            case "dashboard":
              loading();
              hideSideBar(sidebar,overlay)
              setTimeout(() => show('dashboard_main'), 500);
              break;
            case "log-alarm":
              window.location.href = "table-alarm.php";
              break;
            case "data_potensi":
              window.location.href = "data_potensi.php?table_name=dp_cctv&head=CCTV";
              break;
            case "log-out":
              window.location.href = "index.html";
              break;
            case "profil":
              loading();
              hideSideBar(sidebar,overlay)
              setTimeout(() => show('profile_main'), 500);
              break;
            case "Jumat":
              console.log("Hari terakhir kerja.");
              break;
            case "Minggu":
              console.log("Hari libur.");
              break;
            default:
              // console.log("Hari tidak dikenali.");
          }
        }
      });
    });
  
    // 3. Fungsi buka / tutup sidebar
    openBtn.onclick = () => {
      sidebar.classList.add("show");
      overlay.classList.add("show");
    };
  
    // Perlu re-ambil closeBtn setelah elemen dibuat
    sidebar.querySelector("#closeSidebar").onclick = () => {
      hideSideBar(sidebar,overlay)
    };
  
    overlay.onclick = () => {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    };
  });
}

function hideSideBar(sidebar,overlay){
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
}

function hideAll(){
  document.querySelectorAll(".dashboard").forEach(el => {
  el.classList.add("hidden");
});
}

function show(id){
  hideAll();
  const elemen = id
  console.log(elemen);

  const elem = document.getElementById(id);
console.log(elem.classList); 

  document.getElementById(elemen).classList.remove("hidden");
}

