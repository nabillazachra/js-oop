
//membuat variabel array penyimpan data object
var customer = [];

//mengambil element html untuk menampilkan data
var getResult = document.getElementById("show-data");

// class object
class Registration {
  
  //method penyimpan nilai awal
  constructor(id, fullname, nik, place, dob, phone, partner, address){
    this.id = id;
    this.fullname = fullname;
    this.nik = nik;
    this.place = place;
    this.dob = dob;
    this.phone = phone;
    this.partner = partner;
    this.address = address;
  }

  //method untuk merender data atau menampilkan data
  renderData(){
    return `
      <div class="get-todo card">
      <button class="btn-delete" onclick="deleteData(${this.id})">X</button>
        <div class="display-data">${this.fullname} <hr></div>
        <div class="display-data">${this.nik} <hr></div>
        <div class="display-data">
          <table width="100%">
            <tr>
              <td width="50%">${this.place} <hr style="width: 80%"></td>
              <td width="50%">${this.dob} <hr style="width: 80%"></td>
            </tr>
          </table>
        </div>
        <div class="display-data">
          <table width="100%">
            <tr>
              <td width="50%">${this.phone} <hr style="width: 80%"></td>
              <td width="50%">${this.partner} <hr style="width: 80%"></td>
            </tr>
          </table>
        </div>
        <div class="display-data">${this.address}<hr></div>
      </div>
    `;
  }
}


//fungsi untuk menampilkan data
function showData() {

  //variable untuk menampung data yang bisa memanipulasi objek
  var elements = "";

  //membuat kondisi untuk menampilkan gambar jika datanya kosong/belum diinput
  if (customer.length < 1) {
    elements += `<div class="image"><img src="image1.svg" alt="default"></div>`;
  } else {

    //menampilkan perulangan data customer yang telah diinput
    for (var data of customer){

      //memanggil method dari customer
      elements += data.renderData();
    }

  }

  //menempatkan data didalam element html
  getResult.innerHTML = elements;
}


//function untuk menambah data object kedalam array
function addData(e){
  e.preventDefault();

  var inputName = document.getElementById("field-nama").value, 
  inputNik = document.getElementById("field-nik").value, 
  inputPlace = document.getElementById("field-place").value, 
  inputDate = document.getElementById("field-date").value, 
  inputPhone = document.getElementById("field-phone").value, 
  inputPartner = document.getElementById("partner").value, 
  inputAddress = document.getElementById("field-address").value;

  //membuat objek baru untuk menambah data kedalam array menggunakan class
  var cust = new Registration(
      Date.now(),
      inputName, 
      inputNik, 
      inputPlace, 
      inputDate, 
      inputPhone, 
      inputPartner, 
      inputAddress
    );


  //method bawaan untuk menambahkan array baru
  customer.push(cust);

  showData();
}


//fungsi untuk menghapus data dengan mengambil id yang ada di dalam objek
function deleteData(id){

  for (var i = 0; i < customer.length; i++) {
    if (id == customer[i].id) {
      customer.splice(i, 1);
    }
  }

  showData();
}

showData();