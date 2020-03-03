import React from 'react';
import db from './config/firebase';


function breakfastMenu() {
    
    db.collection('Almuerzo').get().then((snapShots) => {
      snapShots.forEach(doc => {
        console.log(doc.data());
      })
    });

    return (
      <div>
          <p></p>    
      </div>
    );
  }

  export default breakfastMenu;


