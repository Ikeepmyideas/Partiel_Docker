import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './navMenu';
import addIcon from '../assets/add.png';

function Maraude() {
    const [entrepots, setEntrepots] = useState([]);
    const [partners, setPartners] = useState([]);
    const [ID_Circuit_Ramassage, setID_Circuit_Ramassage] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        heure: '',
        selectedEntrepot: '',
        rayon: ''
    });
    const [selectedCars, setSelectedCars] = useState([]);
    const [firstModalVisible, setFirstModalVisible] = useState(false);
    const [secondModalVisible, setSecondModalVisible] = useState(false);

    useEffect(() => {
        fetchEntrepots();
    }, []);

    const fetchEntrepots = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/admin/entrepots');
            if (!response.ok) {
                throw new Error('Failed to fetch entrepots');
            }
            const data = await response.json();
            setEntrepots(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmitFirstModal = async (event) => {
        event.preventDefault();
        try {
            const formDataWithEntrepot = {
                ville: formData.ville,
                rayon: formData.rayon
            };

            const formDataCreateMaraude = {
                date: formData.date,
                heure: formData.heure
            };

            const response = await fetch('http://localhost:8000/api/admin/createMaraude', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataCreateMaraude)
            });

            
            if (!response.ok) {
                throw new Error('Erreur réseau ou du serveur');
            }
           
            const responseData = await response.json();
            const { ID_Circuit_Ramassage } = responseData.data;
    
            setID_Circuit_Ramassage(ID_Circuit_Ramassage);

            console.log('MAMAM : '+ID_Circuit_Ramassage);

            const responsePartenaire = await fetch('http://localhost:8000/api/admin/getPartenairesNear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataWithEntrepot)
            });

            const partenairesData = await responsePartenaire.json();

            setPartners(partenairesData.data);
    
            setFirstModalVisible(false);
            setSecondModalVisible(true);
        } catch (error) {
            console.error('Error:', error);
            alert('Error during form submission: ' + error.message);
        }
    };

    const handleSubmitSecondModal = async (event) => {
        event.preventDefault();
        try {
            const formDataPartenaireCircuit = {
                listPartenaires: selectedPartners,
                ID_Circuit_Ramassage: ID_Circuit_Ramassage
            };

            const response = await fetch('http://localhost:8000/api/admin/addPartenaireToCircuitRamassage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataPartenaireCircuit)
            });

            if (!response.ok) {
                throw new Error('Erreur réseau ou du serveur');
            }
            setSecondModalVisible(false);
        } catch (error) {
            console.error('Error:', error);
            alert('Error during form submission: ' + error.message);
        }
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedCars([...selectedCars, value]);
        } else {
            setSelectedCars(selectedCars.filter(car => car !== value));
        }
    };

    const [selectedPartners, setSelectedPartners] = useState([]);

    const handlePartnerSelect = (event) => {
        const { options } = event.target;
        const selectedValues = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedValues.push(options[i].value);
            }
        }
        setSelectedPartners(selectedValues);
    };

    return (
        <>
            <NavMenu />
            <section className="content">
                <div className="lists">
                    <div className="table-header">
                        <h3>Gestionnaire des circuits</h3>
                        <Link id="add_link" onClick={() => setFirstModalVisible(true)}>
                            Créer un circuit
                            <img className="voir-all-icon" src={addIcon} alt="Voir tout" />
                        </Link>
                    </div>
                    <div id="popupForm" style={{ display: firstModalVisible ? 'block' : 'none' }}>
                        <form id="publicEventForm" onSubmit={handleSubmitFirstModal}>
                            <h2>Nouveau circuit</h2>
                            <div className="scrollable-content">
                                <label htmlFor="date">Date : </label>
                                <input type="date" id="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                                <label htmlFor="heure">Heure :</label>
                                <input type="time" id="heure" name="heure" value={formData.heure} onChange={(e) => setFormData({ ...formData, heure: e.target.value })} required />
                                <label htmlFor="rayon">Rayon (km) :</label>
                                <input type="number" id="rayon" name="rayon" value={formData.rayon} onChange={(e) => setFormData({ ...formData, rayon: e.target.value })} required />
                                <label htmlFor="ville">Entrepot :</label>
                                <select id="ville" name="ville" value={formData.ville} onChange={(e) => setFormData({ ...formData, ville: e.target.value })} required style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', fontSize: '16px' }}>
                                    <option value="">Sélectionner un entrepot</option>
                                    {entrepots.map((entrepot) => (
                                        <option key={entrepot.ID_Entrepot} value={entrepot.ville}>{entrepot.ville}</option>
                                    ))}
                                </select>
                                <input className="btn_event" type="submit" value="Ajouter" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {secondModalVisible && (
                <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                        <h2>Selectionner les partenaires</h2>
                        <form onSubmit={handleSubmitSecondModal}>
                            <select multiple value={selectedPartners} onChange={handlePartnerSelect} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', fontSize: '16px' }}>
                                {partners.map(partner => (
                                    <option key={partner.ID_Commercant} value={partner.ID_Commercant}>{partner.nom} | {partner.ville} </option>
                                ))}
                            </select>
                            <input type="submit" value="Submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
                        </form>
                        <button onClick={() => setSecondModalVisible(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Maraude;
