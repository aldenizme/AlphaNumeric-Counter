function countAlphanumerics() {
      const text = document.getElementById('textInput').value;
      const matches = text.match(/[a-z0-9]/gi);
      const count = matches ? matches.length : 0;

      document.getElementById('header').textContent =
        `You have typed ${count} Characters`;
    }









