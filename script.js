window.addEventListener('load', () => {
  const arrow = document.querySelector('#arrow');
  const distanceLabel = document.getElementById('distanceLabel');

  // Coordinates of restroom relative to start (used only for display/rotation logic)
  const restroomPosition = { x: 30, y: 5 };

  // Calculate angle to restroom
  const angleRadians = Math.atan2(restroomPosition.y, restroomPosition.x);
  const angleDegrees = angleRadians * (180 / Math.PI);

  // Calculate distance
  const distance = Math.sqrt(
    restroomPosition.x ** 2 + restroomPosition.y ** 2
  );
  distanceLabel.innerText = `Restroom: ${distance.toFixed(1)}m ➤`;

  // Rotate arrow based on device compass
  window.addEventListener(
    'deviceorientationabsolute',
    (event) => {
      const heading = event.alpha;
      if (heading !== null && arrow) {
        const rotation = angleDegrees - heading;
        arrow.setAttribute('rotation', `0 ${rotation.toFixed(1)} 0`);
      }
    },
    true
  );
});
