// Primero, comprueba si la API de mensajes SMS es compatible con el dispositivo
if ("SMS" in window) {
    // Usa la API de mensajes SMS para obtener los mensajes
    window.SMS.listSMS({}, function(data){
      var smsList = document.getElementById("sms-list");
      // Recorre los mensajes y agrega cada uno a la lista
      for (var i = 0; i < data.length; i++) {
        var sms = data[i];
        var listItem = document.createElement("li");
        listItem.innerHTML = "Número: " + sms.address + "<br>Mensaje: " + sms.body;
        smsList.appendChild(listItem);
      }
    }, function(error){
      console.log(error);
    });
  } else {
    console.log("La API de mensajes SMS no está disponible en este dispositivo.");
  }
  