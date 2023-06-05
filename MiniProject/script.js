// Mendapatkan referensi elemen-elemen yang diperlukan
const form = document.querySelector("form");
const tableBody = document.querySelector(".form-data tbody");

// Mendefinisikan fungsi untuk menambahkan data ke tabel
function addDataToTable() {
  // Mendapatkan nilai-nilai input dari form
  const nama = form.nama.value;
  const tanggal = form.tanggal.value;
  const bulan = form.bulan.value;
  const tahun = form.tahun.value;
  const jenisKelamin = form.jenis_kelamin.value;
  const pesan = form.pesan.value;

  // Membuat elemen-elemen HTML untuk baris baru di tabel
  const row = document.createElement("tr");
  const namaCell = document.createElement("td");
  const tglLahirCell = document.createElement("td");
  const jenisKelaminCell = document.createElement("td");
  const pesanCell = document.createElement("td");
  const profileCell = document.createElement("td");
  const deleteCell = document.createElement("td");

  // Mengisi data ke dalam elemen-elemen HTML
  namaCell.textContent = nama;
  tglLahirCell.textContent = `${tanggal}/${bulan}/${tahun}`;
  jenisKelaminCell.textContent = jenisKelamin;
  pesanCell.textContent = pesan;
  profileCell.innerHTML = '<a href="#">Klik Disini</a>';
  deleteCell.innerHTML = '<i class="fas fa-trash"></i>';

  // Menambahkan elemen-elemen ke dalam baris baru
  row.appendChild(namaCell);
  row.appendChild(tglLahirCell);
  row.appendChild(jenisKelaminCell);
  row.appendChild(pesanCell);
  row.appendChild(profileCell);
  row.appendChild(deleteCell);

  // Menambahkan baris baru ke dalam tabel
  tableBody.appendChild(row);

  // Mengosongkan nilai-nilai input setelah data ditambahkan
  form.nama.value = "";
  form.tanggal.value = "";
  form.bulan.value = "";
  form.tahun.value = "";
  form.jenis_kelamin.value = "";
  form.pesan.value = "";
}

// Menambahkan event listener pada form untuk menangani submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addDataToTable();
});

// Menambahkan event listener pada tabel untuk menghapus data
tableBody.addEventListener("click", function (event) {
  const target = event.target;

  // Hanya menghapus data jika elemen yang diklik memiliki class 'fa-trash' (icon delete)
  if (target.classList.contains("fa-trash")) {
    const row = target.closest("tr");
    row.remove();
  }
});
