import React, { Component } from 'react';
import './App.css';
//Components
import Information from './components/Information';
import Header from './components/Header';
import Skills from './components/Skills';
//data
import data from './constants/data.js'

class ColorSyncApp extends Component {
  render (){
    return (
      <div className="App">
        <Header />
        { data.information.map((data, key) => {
          const { fullName , career, bio } = data;
            return (
              <Information 
                fullName={fullName}
                career={career}
                bio={bio}
                key={key}
              />
            );
          })
        }
        {data.skills.map((data, key) => {
          const { name, image } = data;
          console.log(data)
          return(            
            <Skills 
            name={name} 
            image={image}
            key={key}/>
          )
        })}
      </div>)
  }
}

ColorSyncApp.displayName = 'ColorSyncApp';

export default ColorSyncApp;
