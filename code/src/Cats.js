import React, { Component } from 'react';
import faker from 'faker';

import { db } from './firebase';

class Cats extends Component {

  state = {
    cats: []
  }

  componentDidMount() {
    const headers = {
      'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
    }
    fetch('https://api.thecatapi.com/v1/images/search?limit=10', { headers })
      .then(response => response.json())
      .then(data => {
        data.forEach(catFromApi => {
          const cat = {
            name: faker.name.findName(),
            url: catFromApi.url
          };
          db.ref('/cats').push(cat);
        });
      });

    // db.ref('/cats').orderByChild('name').equalTo('Sid Jacobs').on('value', (snapshot) => { cats with name: 'Sid Jacobs'
    db.ref('/cats').limitToLast(5).once('value', (snapshot) => { // last 5 results
      const cats = [];
      Object.entries(snapshot.val()).forEach(elem => {
        const cat = {
          id: elem[0],
          ...elem[1]
        }
        cats.push(cat);
      });
      this.setState({ cats });
    });
  }

  render() {
    // const { cats } = this.state;
    // const cats = this.state.cats;
    return (
      <div>
        <ul>
          {this.state.cats.map(cat => (
            <li key={cat.id}>{cat.name} <img src={cat.url} alt="" /></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cats;
