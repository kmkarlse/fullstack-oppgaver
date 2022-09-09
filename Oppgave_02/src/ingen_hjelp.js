import { users } from './util.js';

// TODO: Hent HTML #id med getElementById
const searchInput = document.getElementById('name');
const filterInput = document.getElementById('age');
const filterButton = document.getElementById('filter');
const userUl = document.getElementById('users');

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = searchInput.value;
  if (searchName) {
    // Bruk .find for å finne navnet til den brukeren som matcher søkeordet
    const searchResult = users.find(u => u.name.includes(searchName) );
    if (searchResult) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
      createTableUI(searchResult);

    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = "ingen ting ble funnet"

    }
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
    createTableUI(users);

  }
};

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = Number(filterInput.value);
  if (filterValue && Number(filterValue)) {
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = users.filter(a => a.age > filterValue);

    if (filterResult && filterResult.length > 0) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
      createTableUI(filterResult);

    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = 'fant ingen alder';

    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
    createTableUI(users);

  }
};

console.log("filter");

const main = () => {
  createTableUI(users);
};

main();

searchInput.addEventListener('keyup', handleSearch);
filterButton.addEventListener('click', handleFilter);