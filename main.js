var konten = document.getElementById('konten').value;
var button = document.getElementById('button').addEventListener("click",fungsi)

function fungsi(){
  var konten = document.getElementById('konten').value;
  switch (konten) {
    case "motor":
    var motor = ['HONDA','YAMAHA','KAWASAKI']
    motor.forEach(tampilMobil)
    function tampilMobil(item, index){
      document.getElementById('mobil').innerHTML += index+':'+ item +'<br>'
    }
      break;
    case "mobil":
    var mobil = ['BMW','AVANZA','TOYOTA']
    mobil.forEach(tampilMobil)
    function tampilMobil(item, index){
      document.getElementById('mobil').innerHTML += index+':'+ item +'<br>'
    }
    default:
    // document.getElementById('mobil').innerHTML = 'gada'
  }
}
