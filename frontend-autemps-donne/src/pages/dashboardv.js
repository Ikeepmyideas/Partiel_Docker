import React, { useEffect, useState } from 'react';
import '../css/homepagev.css';
import view from '../assets/voir_all.png';
import logoImage from '../assets/logo.png';
import home from '../assets/home-.png';
import profile from '../assets/profile.png';
import settings from '../assets/settings.png';
import exit from '../assets/exit.png';
import { Link, useLocation } from 'react-router-dom';
import useDocumentTitle from './hooks/useDocumentTitle'; 
import add from '../assets/add_membre.png';
import membre from '../assets/membre.png';
import event from '../assets/gestion.png';
import board from '../assets/fatrows.png';
import list from '../assets/1fatrows.png';
import calendar from '../assets/calendar-light.png';
import blog from '../assets/doc.png';
import loop from '../assets/loop.png';
import chat from '../assets/chat_.png';
import notif from '../assets/notif.png';
import mard from '../assets/messages.png';


function Dashboardv() {
  const [profileImagePath, setProfileImagePath] = useState('');
  const [articles, setArticles] = useState([]);
  const logout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/volunteer/logout', {
        method: 'GET',
        credentials: 'include'
      });

      if (response.ok) {
        window.location.href = '/loginb';
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  useEffect(() => {
   


  }, []);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('http://localhost:8000/api/beneficiary/articles');
        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            window.location.href = '../connexion/login.html'; 
          } else {
            throw new Error('Network response was not ok');
          }
        }
        const articlesData = await response.json();
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  useEffect(() => {
    document.querySelector('.next').addEventListener('click', function () {
      const carousel = document.querySelector('.carousel');
      const scrollWidth = carousel.offsetWidth / 3; // Width of one article
      carousel.scrollBy({
        left: scrollWidth, // Scrolls one article width to the right
        behavior: 'smooth'
      });
    });

    document.querySelector('.prev').addEventListener('click', function () {
      const carousel = document.querySelector('.carousel');
      const scrollWidth = carousel.offsetWidth / 3; // Width of one article
      carousel.scrollBy({
        left: -scrollWidth, // Scrolls one article width to the left
        behavior: 'smooth'
      });
    });
  }, []);
  return (
    <>
    <body className='bodyhomepagev'>
          <nav className="nav-max">
      <ul className='menu'>
        <li>
          <img src={logoImage} alt="Logo" id="logo-menu" />
        </li>
        <hr className="hr1"/>
        <li className="menu_title">
          <strong><span>MENU</span></strong>
        </li>
        <li>
        <Link to="/Dashboardb">

            <img className="image" src={home} alt="Dashboard"/>
            <span>Dashboard</span>
            </Link>
        </li>
        <li>
        <Link to="/profileb">

            <img className="image" src={profile} alt="Status"/>
            <span>Profile</span>
            </Link>
        </li>

 
        <hr className="hr2"/>
        <li className="menu_title">
          <strong><span>SUPPORT</span></strong>
        </li>
        <li>
            <img src={settings} alt="Settings"/>
            <span>Paramètres</span>
        </li>
        <li onClick={logout}>
      <img src={exit} alt="Exit"/>
      <span>Déconnexion</span>
    </li>
      </ul>
    </nav>
    <section id="horiz">
      <div className="nav_img">
        <img src={board} alt="Board Icon"/>
        <Link className="nav-link" to="/dashboard">Board</Link>
      </div>
      <div className="nav_img">
        <img src={list} alt="List Icon"/>
        <Link className="nav-link" to="/list">List</Link>
      </div>
      <div className="nav_img">
        <img src={calendar} alt="Calendar Icon"/>
        <Link className="nav-link" to="/calendarb">Calendar</Link>
      </div>
      <div className="nav_img">
        <img src={blog} alt="Blog Icon"/>
        <Link className="nav-link" to="/blog">Blog</Link>
      </div>
      <div className="search-container">
          <input type="text" placeholder="Search..."/>
          <img height="20px" src={loop} alt="Search Icon"/>
      </div>
      <div id="right1">
          <img height="20px" src={chat} alt="Chat Icon"/>
      </div>
      <div id="right2">
          <img height="10px" src={notif} alt="Notification Icon"/>
      </div>
      <div className="circle_profile">
          <Link to="/profileb">
            {profileImagePath ?(
              <img id="picprofile" src={profileImagePath} alt="Profile" />
            ): (
              <img id="picprofile" src={profileImagePath} alt="Profile" />
            )}
          </Link>
        </div>
    </section>
      <section id="containerbeneficiary">
      <section class="blocnotifs">
    <h1>Dernières notifications</h1>
    <div class="tache_impaire">Distribution alimentaire demain a 9h00 <p class="when">07h00</p></div><br/>
    <div class="tache_paire">[ Rappel ] <p class="when">Hier, 09:00</p></div>
  </section>
  <section class="bloccoming">
    <center><h1>A Venir</h1></center>
    <center> <p class="next_event">Aujourd'hui - 5 février 2024</p></center>
      <div class="kra">
        <h4 id="Jour">10:00</h4>
        <div>
          <p id="titre">Distribution alimentaire</p>
          <p id="adress">Place du Marché</p>
          <p id="ville">92300</p>
        </div>
      </div>
      <div class="kra">
        <h4 id="Jour">14:00</h4>
        <div>
          <p id="titre">Aide scolaire</p>
          <p id="adress">Marly-Gomont</p>
          <p id="ville">02120</p>
        </div>
      </div>
      <center><button class="seeMoreevents">Voir Plus</button></center>
  </section>
 

  </section>
  <h1 id="derniersarticles">Derniers articles sur nos actions</h1>

<section className="blocblog">
  <div className="carousel" id="carousel">
    {articles.map((article, index) => (
      <div className="article" key={index}>
        <br/>
        <img src={`${article.image}`} className="photoArticle" alt={`Article ${index}`} />
        <p className="title">{article.titre}</p>
        <center><p className="discover">Voir plus</p></center>
      </div>
    ))}
  </div>
  <button className="prev">&#10094;</button>
  <button className="next">&#10095;</button>
</section>

</body>
    </>
  );
}

export default Dashboardv;
