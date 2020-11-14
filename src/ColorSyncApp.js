import React from 'react';
//Components
import Information from './components/Information';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
//data for information about me
import data from './constants/data.js'

const ColorSyncApp = () => {

    return (
      <div className="App">
        <Header data={data}/>
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
        <Skills data={data}/>
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
         <Footer 
            data={data}
         />
         <Scroll/>
      </div>)

}

ColorSyncApp.displayName = 'ColorSyncApp';

export default ColorSyncApp;
