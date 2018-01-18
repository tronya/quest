export const moveCamera = (markers,currentPoint) => {
  let bearing = Math.floor(Math.random() * 360) + 1;
  window.map.flyTo({
    center: [markers[currentPoint].lon, markers[currentPoint].lat],
    zoom: 16,
    bearing,
    pitch: 100,
    speed: 0.2,
    curve: 1,
  });
};