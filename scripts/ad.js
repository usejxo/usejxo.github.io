// Check if the ad has already been shown before (permanently)
if (!localStorage.getItem('jxoAdShown')) {
    // Mark it as shown forever
    localStorage.setItem('jxoAdShown', 'true');
  
    // Create a container for the menu
    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '50%';
    menu.style.left = '50%';
    menu.style.transform = 'translate(-50%, -50%)';
    menu.style.width = '700px';
    menu.style.height = '400px';
    menu.style.background = 'rgba(0, 0, 0, 0.8)';
    menu.style.borderRadius = '20px';
    menu.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.7)';
    menu.style.overflow = 'hidden';
    menu.style.zIndex = '1000';
    document.body.appendChild(menu);
  
    // Create video element inside the menu
    const video = document.createElement('video');
    video.src = 'https://jxoj.github.io/Jxo-OS/video/ad.mp4';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    menu.appendChild(video);
  
    // Create the close button
    const closeBtn = document.createElement('div');
    closeBtn.textContent = '✕';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '15px';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '1001';
    closeBtn.style.fontFamily = 'sans-serif';
    closeBtn.style.textShadow = '0 0 5px #000';
    menu.appendChild(closeBtn);
  
    // Close the menu when the X is clicked
    closeBtn.onclick = () => {
      menu.remove();
    };
  }
  