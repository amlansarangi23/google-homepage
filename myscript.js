      document.body.style.backgroundImage = 'url("./assets/background.jpeg")';
      function ChangeBG() {
        var y = document.body.style.backgroundImage;
        if (y == 'url("./assets/background.jpeg")') {
          document.body.style.backgroundImage = 'url("./assets/background2.jpg")';
        } else if (y == 'url("./assets/background2.jpg")') {
          document.body.style.backgroundImage = 'url("./assets/background3.jpg")';
        } else {
          document.body.style.backgroundImage = 'url("./assets/background.jpeg")';
        }
      }