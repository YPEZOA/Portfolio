import React, { Component } from 'react';
import Button from './components/Button'; 
import data from './constants/data';
import './App.css';
import Information from './components/Information';

class ColorSyncApp extends Component {
  render (){
    return (
      <div className="App">
        { data.information.map((data, key) => {
          const { fullName , career, bio } = data;
            return (
              <Information 
                fullName={fullName}
                career={career}
                bio={bio}
                key={key}
              />
            )
          })
        }
        <Button name={'Certification'}/>
      </div>
    )
  }
}

ColorSyncApp.displayName = 'ColorSyncApp';

export default ColorSyncApp;
