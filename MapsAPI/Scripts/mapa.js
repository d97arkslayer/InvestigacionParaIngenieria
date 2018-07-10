var map;
var resultados = {};
var index = 0;
document.getElementById("generate").addEventListener("click", generar);
document.getElementById("historicos").addEventListener("click", historia);
document.getElementById("riesgo").addEventListener("click", riesgo);

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 5.070275, lng: -75.513817 },
        zoom: 8
    });
    var manizales = { lat: 5.070275, lng: -75.513817 };
    var armenia = { lat: 4.535000, lng: -75.675689 };
    var pereira = { lat: 4.808717, lng: -75.690601 };
    var nevado = { lat: 4.887229, lng: -75.3221968 };
    var salento = { lat: 4.677605, lng: -75.429631 };
    var marulanda = { lat: 5.0170266, lng: -75.3307706 };
    var aguadas = { lat: 5.6139725, lng: -75.6060845 };
    var riosucio = { lat: 5.4054486, lng: -75.6893268 };
    var filadelfia = { lat: 5.228613, lng: -75.5570851 };
    var anserma = { lat: 5.259581, lng: -75.807551 };
    var belalcazar = { lat: 4.980947, lng: -75.814248 };
    var manzanares = { lat: 5.222467, lng: -75.117709 };
    var laDorada = { lat: 5.329017, lng: -74.751991 };
    var norcasia = { lat: 5.673492, lng: -74.806923 };
    var pensilvania = { lat: 5.427459, lng: -75.257362 };
    var santaRosa = { lat: 4.923665, lng: -75.619004 };
    var america = { lat: 4.760936, lng: -75.408330 };
    var cartago = { lat: 4.782247, lng: -75.898202 };
    var puebloRico = { lat: 5.289517, lng: -76.194308 };
    var mistrato = { lat: 5.454956, lng: -75.936129 };
    var quinchia = { lat: 5.311396, lng: -75.720523 };
    var santuario = { lat: 4.998185, lng: -75.921023 };
    var filandia = { lat: 4.691292, lng: -75.690556 };
    var quimbaya = { lat: 4.636542, lng: -75.766774 };
    var laTebaida = { lat: 4.4407777, lng: -75.867024 };
    var alpes = { lat: 4.342733, lng: -75.778738 };
    var genova = { lat: 4.149554, lng: -75.813151 };
    var pijao = { lat: 4.149554, lng: -75.813151 };
    var calarca = { lat: 4.465486, lng: -75.592679 };

    //var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
    /* var marker = new google.maps.Marker({ position: manizales, map: map });
     var marker2 = new google.maps.Marker({ position: armenia, map: map });
     var marker3 = new google.maps.Marker({ position: pereira, map: map });*/
    /*var marker4 = new google.maps.Marker({ position: nevado, map: map });
    var marker5 = new google.maps.Marker({ position: aguadas, map: map });
    var marker6 = new google.maps.Marker({ position: riosucio, map: map });
    var marker7 = new google.maps.Marker({ position: filadelfia, map: map });
    var marker8 = new google.maps.Marker({ position: anserma, map: map });
    var marker9 = new google.maps.Marker({ position: belalcazar, map: map });
    var marker10 = new google.maps.Marker({ position: manzanares, map: map });
    var marker11 = new google.maps.Marker({ position: laDorada, map: map });
    var marker12 = new google.maps.Marker({ position: norcasia, map: map });
    var marker13 = new google.maps.Marker({ position: pensilvania, map: map });
    */

    /*
    var marker14 = new google.maps.Marker({ position: santaRosa, map: map });
    var marker15 = new google.maps.Marker({ position: america, map: map });
    var marker16 = new google.maps.Marker({ position: cartago, map: map });
    var marker17 = new google.maps.Marker({ position: puebloRico, map: map });
    var marker18 = new google.maps.Marker({ position: mistrato, map: map });
    var marker19 = new google.maps.Marker({ position: quinchia, map: map });
    var marker20 = new google.maps.Marker({ position: santuario, map: map });
    */

    /*
    var marker21 = new google.maps.Marker({ position: salento, map: map });
    var marker21 = new google.maps.Marker({ position: filandia, map: map });
    var marker22 = new google.maps.Marker({ position: quimbaya, map: map });
    var marker23 = new google.maps.Marker({ position: laTebaida, map: map });
    var marker24 = new google.maps.Marker({ position: alpes, map: map });
    var marker25 = new google.maps.Marker({ position: genova, map: map });
    var marker25 = new google.maps.Marker({ position: pijao, map: map });
    var marker26 = new google.maps.Marker({ position: calarca, map: map });

    */
    //

    var redCoords = [
        aguadas, riosucio, filadelfia, anserma, belalcazar,
        nevado, manzanares, laDorada, norcasia, pensilvania
    ];
    new google.maps.Polygon({
        map: map,
        paths: redCoords,
        strokeColor: '#7092BE',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        fillColor: '#7092BE',
        fillOpacity: 0.35,
        //draggable: true,
        geodesic: true
    });


    var redCoords = [
        santaRosa, america, cartago, puebloRico, mistrato, quinchia, santuario
    ];
    new google.maps.Polygon({
        map: map,
        paths: redCoords,
        strokeColor: '#804040',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        fillColor: '#804040',
        fillOpacity: 0.35,
        //draggable: true,
        geodesic: true
    });


    var redCoords = [
        salento, filandia, quimbaya, laTebaida, alpes, genova, pijao, calarca
    ];
    new google.maps.Polygon({
        map: map,
        paths: redCoords,
        strokeColor: '#004000',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        fillColor: '#004000',
        fillOpacity: 0.35,
        //draggable: true,
        geodesic: true
    });
}

function generar() {
    initMap();
    let latitud = Math.random() * (-74.618270 - (-76.134008)) + (-76.134008);
    let longitud = Math.random() * (5.786126 - 4.070182) + 4.070182;
    let magnitud = Math.random() * (10 - 1) + 1;
    resultados[index] = { latitud: latitud, longitud: longitud, magnitud: magnitud };
    index++;
    if (magnitud > 8) {
        new google.maps.Marker({
            animation: google.maps.Animation.BOUNCE,
            label: Math.round(magnitud, -1) + "",
            position: { lat: longitud, lng: latitud },
            map: map
        });
    } else {
        new google.maps.Marker({
            label: Math.round(magnitud, -1) + "",
            position: { lat: longitud, lng: latitud },
            map: map
        });
    }
    var color = '#088A08';
    if (magnitud > 4) {
        color = '#FFFF00';
    }
    if (magnitud > 7) {
        color = '#FF0000';
    }
    var cityCircle = new google.maps.Circle({
        strokeColor: color,
        strokeOpacity: 0.4,
        strokeWeight: 1,
        fillColor: color,
        fillOpacity: 0.35,
        map: map,
        center: { lat: longitud, lng: latitud },
        radius: magnitud * 10000 / 3
    });

    console.log(longitud + " " + latitud + " " + magnitud);
}

function historia() {
    initMap();
    for (var i in resultados) {
        let magnitud = resultados[i].magnitud;
        let latitud = resultados[i].latitud;
        let longitud = resultados[i].longitud
        if (magnitud > 8) {
            new google.maps.Marker({
                animation: google.maps.Animation.BOUNCE,
                label: Math.round(magnitud, -1) + "",
                position: { lat: longitud, lng: latitud },
                map: map
            });
        } else {
            new google.maps.Marker({
                label: Math.round(magnitud, -1) + "",
                position: { lat: longitud, lng: latitud },
                map: map
            });
        }
        var color = '#088A08';
        if (magnitud > 4) {
            color = '#FFFF00';
        }
        if (magnitud > 7) {
            color = '#FF0000';
        }
        var cityCircle = new google.maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.4,
            strokeWeight: 1,
            fillColor: color,
            fillOpacity: 0.35,
            map: map,
            center: { lat: longitud, lng: latitud },
            radius: magnitud * 10000 / 3
        });
    }
}

function init2() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 5.070275, lng: -75.513817 },
        zoom: 8
    });
}

function riesgo() {
    init2();
    for (var i in resultados) {
        let magnitud = resultados[i].magnitud;
        let latitud = resultados[i].latitud;
        let longitud = resultados[i].longitud
        if (magnitud > 5) {
            if (magnitud > 8) {
                new google.maps.Marker({
                    animation: google.maps.Animation.BOUNCE,
                    label: Math.round(magnitud, -1) + "",
                    position: { lat: longitud, lng: latitud },
                    map: map
                });
            } else {
                new google.maps.Marker({
                    label: Math.round(magnitud, -1) + "",
                    position: { lat: longitud, lng: latitud },
                    map: map
                });
            }
            var color = '#088A08';
            if (magnitud > 4) {
                color = '#FFFF00';
            }
            if (magnitud > 7) {
                color = '#FF0000';
            }
            var cityCircle = new google.maps.Circle({
                strokeColor: color,
                strokeOpacity: 0.4,
                strokeWeight: 1,
                fillColor: color,
                fillOpacity: 0.35,
                map: map,
                center: { lat: longitud, lng: latitud },
                radius: magnitud * 10000 / 3
            });
        }
    }
}