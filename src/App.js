import React from 'react';

import profile from './resource/200_200.jpg';
import phone from './resource/phone-receiver.png';
import github from './resource/github-logo.png';
import blog from './resource/social-rss.png';
import email from './resource/envelope.png';

import './App.scss';

import InfoComponent from './InfoComponent';

function App() {
  const MyInfo = [
    {
      image : phone,
      ptag : 'Please contact me with email',
      alt : 'phone'
    },
    {
      image : email,
      ptag : 'ysjk2003@gmail.com',
      alt : 'email'
    },
    {
      image : github,
      ptag : 'http://github.com/ysjk2003',
      alt : 'github'
    },
    {
      image : blog,
      ptag : 'https://parkshistory.tistory.com',
      alt : 'blog'
    }
  ]
  
  const InfoList = MyInfo.map(info => (
    (<InfoComponent image={info.image} ptag={info.ptag} alt={info.alt}></InfoComponent>)
  ))
  return (
    <div className="App">
      <h1>Portfolio</h1>
      <header>
        <img src={profile} alt="profile_picture" />
        <div className="Info">
          <h1>김민규</h1>
          {InfoList}
        </div>
      </header>
    </div>
  );
}

export default App;
