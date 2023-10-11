


fetch('data.json')
  .then((r)=> r.json())
  .then((json) => {
      for (const data of json) {
        area = document.getElementById(data.category.toLowerCase());
        area.querySelector('strong').innerHTML = data.score;
        area.parentElement.parentElement.querySelector('.row-left img').setAttribute('src',data.icon);
      }
    }
  );