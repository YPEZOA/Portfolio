import React, { Component } from 'react';
import './App.css';
//Components
import Information from './components/Information';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
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
        <Skills/>
        { data.experience.map((data, key) => {
          const { job, aboutJob, date } = data;
            return(
              <Experience 
                job={job}
                aboutJob={aboutJob}
                date={date}
                key={key}/>
                );
              })
         }
         <Footer/>
         
      </div>)
  }
}

ColorSyncApp.displayName = 'ColorSyncApp';

export default ColorSyncApp;
