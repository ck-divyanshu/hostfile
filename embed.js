// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the "user-container" class
    const userContainers = document.querySelectorAll(".user-container");
  
    // User layout data for multiple users
    const userLayouts = {
      1: {
        title: 'User 1 Layout',
        border_size: '1',
        border_round: '1',
        full_screen: 'false',
        image: [
          {
            file_name: 'https://example.com/user1/image1.jpg',
            img_id: 1,
          },
          {
            file_name: 'https://example.com/user1/image2.jpg',
            img_id: 2,
          },
        ],
      },
      2: {
        title: 'User 2 Layout',
        border_size: '2',
        border_round: '2',
        full_screen: 'true',
        image: [
          {
            file_name: 'https://example.com/user2/image1.jpg',
            img_id: 1,
          },
          {
            file_name: 'https://example.com/user2/image2.jpg',
            img_id: 2,
          },
        ],
      },
      // Add more users and layouts here
    };
  
    // Function to render a user's layout based on their ID and append it to the user container div
    function renderUserLayout(userId, container) {
      const layoutData = userLayouts[userId];
      if (!layoutData) {
        console.log(`User with ID ${userId} does not have a layout.`);
        return;
      }
  
      // Create and append layout elements (same as in your original code)
      const layoutDiv = document.createElement('div');
      layoutDiv.id = userId;
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = layoutData.title;
  
      const borderSizeElement = document.createElement('p');
      borderSizeElement.textContent = `Border Size: ${layoutData.border_size}`;
  
      const borderRoundElement = document.createElement('p');
      borderRoundElement.textContent = `Border Round: ${layoutData.border_round}`;
  
      const fullScreenElement = document.createElement('p');
      fullScreenElement.textContent = `Full Screen: ${layoutData.full_screen}`;
  
      const imageListDiv = document.createElement('div');
      imageListDiv.className = 'image-list';
      layoutData.image.forEach((imageData, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageData.file_name;
        imgElement.alt = `Image ${index + 1}`;
        imageListDiv.appendChild(imgElement);
      });
  
      layoutDiv.appendChild(titleElement);
      layoutDiv.appendChild(borderSizeElement);
      layoutDiv.appendChild(borderRoundElement);
      layoutDiv.appendChild(fullScreenElement);
      layoutDiv.appendChild(imageListDiv);
  
      // Append the layout to the user's specific container div
      container.appendChild(layoutDiv);
    }
  
    // Loop through each user container and render the corresponding layout
    userContainers.forEach(container => {
      const userId = container.getAttribute("data-user-id");
      renderUserLayout(userId, container);
    });
  });
  