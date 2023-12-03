document.addEventListener("DOMContentLoaded", function () {
    // JSON veriyi bir JavaScript nesnesine dönüştürme
    var jsonData = '{"name": "Mehmet", "age": 21, "city": "istanbul"}';
    var obj = JSON.parse(jsonData);

  
    var jsonDataDiv = document.getElementById("jsonData");
    jsonDataDiv.innerHTML = "<h2>Kişisel Bilgiler</h2>";
    jsonDataDiv.innerHTML += "<p>Adı: " + obj.name + "</p>";
    jsonDataDiv.innerHTML += "<p>Yaş: " + obj.age + "</p>";
    jsonDataDiv.innerHTML += "<p>Şehir: " + obj.city + "</p>";
});