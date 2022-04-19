const text = document.getElementById('text');
const button = document.getElementById('button');

const worlds = ["Dystopian", "Utopian", "Chaotic", "Peaceful", "Corrupt", "Ancient", "Futuristic", "Crime infested", "Sci-fi", "Real"]
const qualities = ["Dangerous", "Wild", "Advanced", "Lost", "Flying", "Armored", "Walking", "Magical", "Broken", "Beautiful", "Luxurious", "Dying"]
const colors = [["Gold", "#FFD700"], ["Chilli Pepper", "#C11B17"], ["Crystal Blue", "#5CB3FF"], ["Aquamarine", "#7FFFD4"], ["Army Green", "#4B5320"], ["Neon Yellow", "#FFFF33"], ["Caramel", "#C68E17"], ["Pumpkin Orange", "#F87217"], ["Rose Gold", "#ECC5C0"], ["Hot Deep Pink", "#F52887"], ["Magenta", "#FF00FF"], ["Cotton Candy", "#FCDFFF"], ["Deep Emerald Green", "#046307"], ["Bronze", "#CD7F32"], ["Salmon", "#FA8072"], ["Lavender Blue", "#E3E4FA"], ["Egg Shell", "#FFF9E3"], ["Brown Sand", "#EE9A4D"], ["Slime Green", "#BCE954"], ["Polyfjord Blue", "#78C0FF"]]
const motives = ["Creature", "Weapon", "Toy", "Vehicle", "Robot", "City", "Monster", "Humanoid"]
const art_styles = ["Voxelated", "Realistic", "Lowpoly", "Abstract", "Miniature", "Isometric"]

// In a (world) world, a (quality) (color) (motive) is rendered in a (art style) art style.

button.addEventListener('click', () => {
  color = colors[Math.floor(Math.random() * colors.length)]; 
  text.innerHTML = `In a ${worlds[Math.floor(Math.random() * worlds.length)]} world, a ${qualities[Math.floor(Math.random() * qualities.length)]} <span class="color">${color[0]}</span> ${motives[Math.floor(Math.random() * motives.length)]} is rendered in a ${art_styles[Math.floor(Math.random() * art_styles.length)]} art style.`;
  const color_span = document.querySelector('.color');
  var css = `.color:hover{ background-color: ${color[1]}}`;
  var style = document.createElement('style');

  if (style.styleSheet) {
      style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);
});