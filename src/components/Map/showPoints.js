// show point

export const showPoints = (markers) => {
  let markersFeatures = markers.map((ft) => {
      return {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ft.lon, ft.lat]
        },
        "properties": {
          "title": ft.name
        }
      }
    });

  window.map.addSource('pointsElements', {
    type: 'geojson',
    data: {
      "type": "FeatureCollection",
      "features": markersFeatures
    }
  });
  window.map.addLayer({
    id: "circles",
    type: "circle",
    source: "pointsElements",
    paint: {
      "circle-color": "#ffed1c",
      "circle-radius": 10,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#000"
    }
  });
  window.map.addLayer({
    id: "points",
    type: "symbol",
    source: "pointsElements",
    "layout": {
      "text-field": "{title}",
      "icon-keep-upright": true,
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }, "paint": {
      "text-color": "#ffed1c",
      "text-halo-color": "rgba(0,0,0,0.7)",
      "text-halo-width": 5,
      "text-halo-blur": 7
    }
  });
};