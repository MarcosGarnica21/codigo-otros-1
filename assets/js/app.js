const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Estos tres, no estaba siendo llamados correctamente, se debe llamar con "." porque son clases
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //declar la función como async para usar await
  $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);

    $n.textContent = `${data.name}`; // no se estaban usando backticks
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.error(err);
  $n.textContent = `Algo salió mal: ${err.message}`; //.meesage para que muestre le mensaje y accede a $n
}

displayUser('stolinski').catch(handleError);
