import React, { Component } from 'react';
import './App.css';
import Information from './components/Information';
import data from './constants/data.js'

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
      </div>
    )
  }
}

ColorSyncApp.displayName = 'ColorSyncApp';

export default ColorSyncApp;
