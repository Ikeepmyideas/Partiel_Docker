import React, { useEffect, useState } from 'react';
import '../css/admin.css';
import NavMenu from './navMenu';
import viewIcon from '../assets/voir_all.png';
import addIcon from '../assets/add.png';
import horlogeIcon from '../assets/horloge.png';
import { Link, useLocation } from 'react-router-dom';

function Event() {
    const [activities, setActivities] = useState([]);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        fetch('https://au-temps-donne-api.onrender.com/api/admin/activites')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                return response.json();
            })
            .then(data => {
                setActivities(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, []);

    return (
        <>
            <NavMenu />
            <section className="content">
                <div className="lists">
                    <div className="list_type">
                        <Link to="/allEvents" className={currentPath === '/allEvents' ? 'active' : ''} style={currentPath === '/allEvents' ? { color: '#D23939' } : {}}>Activités publiques </Link>
                        <Link to="/activiteprv" className={currentPath === '/beneficiaires' ? 'active' : 'link_list'} style={currentPath === '/beneficiaires' ? { color: '#D23939' } : null}>Activités privés </Link>
                        <Link to="/list_partenaires" className={`link_list ${currentPath === '/list_partenaires' ? 'active' : ''}`} style={currentPath === '/list_partenaires' ? { color: '#D23939' } : {}}>Formations</Link>
                        <Link to="/Historique" className={`link_list ${currentPath === '/list_partenaires' ? 'active' : ''}`} style={currentPath === '/list_partenaires' ? { color: '#D23939' } : {}}>Historique</Link>
                    </div>
                    <div className="box-container">
                        {activities.map((activity, index) => (
                            <div key={index} className="elm_box">
                                <div className="infos">
                                    <div className="info">
                                        <img height="180px" src={`assets/${activity.image}`} style={{ borderRadius: '25px' }} />
                                        <div className="info-container">
                                            <div className="hour">
                                                <img id="img-time" height="20px" src={horlogeIcon} />
                                                <p className="time">{(activity.date_activite)}  {activity.heure_debut}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info2">
                                        <h3>{activity.titre}</h3>
                                        <hr />
                                        <p>{activity.description}</p>
                                        <div className="adresse">
                                            <p>{activity.lieu.adresse}</p>
                                            <p>{activity.lieu.code_postal} {activity.lieu.ville}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/activity-details/${activity.ID_Activite}`} className="view">Voir plus<img className="voir-all-icon" height="15px" width="17px" src={viewIcon} alt="Voir tout" /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Event;
