// Photo Hover Reactions
const reactions = ['❤️', '💕', '💖','💖','🩵','🤍','💗','🩷','❤️‍🩹','❣️'];

function createReaction(event) {
  const reaction = document.createElement('div');
  const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
  const randomOffset = (Math.random() - 0.5) * 100;
  
  reaction.className = 'reaction';
  reaction.textContent = randomReaction;
  reaction.style.left = event.pageX + 'px';
  reaction.style.top = event.pageY + 'px';
  reaction.style.setProperty('--tx', randomOffset + 'px');
  
  document.body.appendChild(reaction);
  
  // Remove the reaction element after animation completes
  setTimeout(() => {
    reaction.remove();
  }, 1500);
}

// Add hover listener to images with 'hoverable' class only
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img.hoverable');
  
  images.forEach(img => {
    // Add mousemove listener for reactions
    img.addEventListener('mousemove', function(event) {
      // Create reaction on every mousemove (throttled effect)
      if (Math.random() > 0.7) { // 30% chance on each move
        createReaction(event);
      }
    });
  });
});
