import { POPULATE_CATS } from './constants';
import faker from 'faker';
import uuid from 'uuid/v1'

export const fetchCats = () => {
  return dispatch => {
    const headers = {
      'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
    }
    fetch('https://api.thecatapi.com/v1/images/search?limit=10', { headers })
      .then(response => response.json())
      .then(data => {
        const cats = [];
        data.forEach(catFromApi => {
          const cat = {
            id: uuid(),
            name: faker.name.findName(),
            url: catFromApi.url
          };
          cats.push(cat);
          // db.ref('/cats').push(cat);
        });
        dispatch(populateCats(cats));
      });
  }
}

export const populateCats = (data) => ({
  type: POPULATE_CATS,
  data
});

