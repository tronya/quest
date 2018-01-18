import mapBox from "mapbox";

export const mapRoute = (points) => {
  let mapboxClient = new mapBox("pk.eyJ1IjoidHJvbnlhIiwiYSI6ImNpdXNteHUwdzAwMWkyenBmamRlbTk2Zm8ifQ.aFKT4IOHyPCPRt_GNfUYnw");

  return new Promise((success) => {
    mapboxClient.getDirections(points, {
      profile: 'cycling',
      alternatives: false,
      geometry: 'polyline'
    }, function (err, results) {
      var route = results.routes[0].geometry;

      window.map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: route
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          'line-width': 7,
          'line-color': '#ffed1c',
          'line-opacity': 0.8
        }
      });
      success(results);
    })

  })



};