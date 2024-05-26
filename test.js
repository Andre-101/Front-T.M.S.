const starButton = document.getElementById('startButton');


//EVENTOS
addEventListener('click', startMQTT);


//FUNCIONES
// Función para iniciar la conexión y suscripción MQTT
function startMQTT() {
    // URL del broker MQTT
    const brokerUrl = 'broker.hivemq.com'; // URL del broker MQTT

    // Conectarse al broker MQTT
    const client = mqtt.connect(brokerUrl);

    client.on('connect', function () {
        console.log('Conectado al broker MQTT');

        // Suscribirse al tema donde se publican los datos del sensor
        const topic = 'test/101/beta';
        client.subscribe(topic, function (err) {
            if (!err) {
                console.log(`Suscrito al tema ${topic}`);
            }
        });
    });

    // Manejar mensajes recibidos
    client.on('message', function (topic, message) {
        // Convertir el mensaje en un string
        const sensorData = message.toString();
        console.log(`Datos recibidos del sensor: ${sensorData}`);

        // Mostrar los datos en el navegador
        document.getElementById('sensorData').innerText = `Datos del sensor: ${sensorData}`;
    });

    // Manejar errores de conexión
    client.on('error', function (error) {
        console.error(`Error de conexión: ${error}`);
    });
}


