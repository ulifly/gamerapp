/* eslint-disable camelcase */

const btn_pc = document.querySelector('#pc');
const btn_ps5 = document.querySelector('#ps5');
const btn_switch = document.querySelector('#switch');
const btn_xbox = document.querySelector('#xbox');

/* api key */
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    'X-RapidAPI-Key': '486352d137msh3692cf99937cd0fp170510jsnc095db6365ea',
  },
};

// obtener juegos pc

const get_free_games_pc = () => {
  fetch('https://gamerpower.p.rapidapi.com/api/giveaways?platform=pc', options)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((gamedata) => {
      showHtml(gamedata);
    })
    .catch((err) => {
      console.log(`error captured ${err}`);
    });
};

// obtener juegos ps5

const get_free_games_ps5 = () => {
  fetch('https://gamerpower.p.rapidapi.com/api/giveaways?platform=ps5', options)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((gamedata) => {
      showHtml(gamedata);
    })
    .catch((err) => {
      console.log(`error captured ${err}`);
    });
};

// obtener juegos switch

const get_free_games_switch = () => {
  fetch(
    'https://gamerpower.p.rapidapi.com/api/giveaways?platform=switch',
    options,
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((gamedata) => {
      showHtml(gamedata);
    })
    .catch((err) => {
      console.log(`error captured ${err}`);
    });
};

// obtener juegos xbox

const get_free_games_xbox = () => {
  fetch(
    'https://gamerpower.p.rapidapi.com/api/giveaways?platform=xbox-series-xs',
    options,
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((gamedata) => {
      showHtml(gamedata);
    })
    .catch((err) => {
      console.log(`error captured ${err}`);
    });
};

// render cards

showHtml = (gamefiles) => {
  const content = document.querySelector('#content-cardsG');
  let html = '';
  gamefiles.forEach((gamefile, index) => {
    const {
      title,
      image,
      description,
      type,
      instructions,
      end_date,
      platforms,
      open_giveaway_url,
    } = gamefile;
    if (type === 'Game') {
      const collapseId = `collapseExample${index}`;
      html += `
      <div class="text-bg-custom mb-3">
        <div class="row g-0">
          <div class="col-img col-md-4">
            <img src="${image}" class="img-fluid rounded-start">
          </div>
          <div class="col-md-8">
            <div class="card-body">
            <h6 class="card-title">${title}</h6>
            <p class="card-text">tipo: ${type}</p>
             <p class="d-inline-flex gap-1">
               <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                 descripción
               </button>
             </p>
              <div class="collapse" id="${collapseId}">
                <div class="card card-body">
                  ${description}
                  <br>
                  <br>
                  instrucciones:
                  <br>
                  ${instructions}
                </div>

             <p class="card-text">plataforma: ${platforms}</p>
              <p class="card-text">Termina ${end_date}</p>
            
             </div>
             <a href="${open_giveaway_url}" target="_blank"><button class="btn btn-outline-danger">get</button></a>
         </div>
        </div>
       </div>
        `;
    } else {

    }
  });
  content.innerHTML = html;
};

// escucha de botones
btn_pc.addEventListener('click', get_free_games_pc);
btn_ps5.addEventListener('click', get_free_games_ps5);
btn_switch.addEventListener('click', get_free_games_switch);
btn_xbox.addEventListener('click', get_free_games_xbox);
