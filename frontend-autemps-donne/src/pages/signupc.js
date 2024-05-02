import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signup.css';  
import '../css/home.css';
import '../css/admin.css';
import logo from '../assets/logo.png';  

function Signupc() {
    const navigate = useNavigate();
    const [role, setRole] = useState('partenaire');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        nom: '',
        mot_de_passe: '',
        confirmPassword: '',
        telephone: '',
        adresse: ''
    });


    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (name === 'confirmPassword' || name === 'mot_de_passe') {
            setErrorMessage('');
        }
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.mot_de_passe !== formData.confirmPassword) {
            setErrorMessage('Les mots de passe ne correspondent pas.');
            return;
        }
        
        else {
            try {
                console.log('FormData:', formData); // Log formData state
                const formDataToSend = createFormData();
                console.log('DATA:', Object.fromEntries(formDataToSend.entries())); // Log FormData data
                const response = await fetch(`http://127.0.0.1:8000/api/partenaire/register`, {
                    method: 'POST',
                    body: JSON.stringify(formDataToSend),
                });
                if (!response.ok) throw new Error('Erreur lors de la soumission du formulaire');
                const data = await response.json();
                navigate('/signupc_success');
            } catch (error) {
                console.error('Submission error:', error.message);
            }
        }
    };
    

    const createFormData = () => {
        const data = new FormData();
        for (const key in formData) {
            if (formData.hasOwnProperty(key) && key !== 'confirmPassword') {
                const value = formData[key];
                if (value != null) {
                    if (key === 'mot_de_passe') {
                        data.append('password', value);
                    } else {
                        data.append(key, value);
                    }
                }
            }
        }
        return data;
    };
    
    

    return (
        <>
            <header>
                <img src={logo} alt="Your Logo" className="logo" />
            </header>
            <div className="form-box">
                <center>
                <div className="breadcrumb">
                    {Array.from({ length: 5 }, (_, i) => i % 2 === 0 ? (
                        <div className="dot" key={i}></div>
                    ) : (
                        <div className="line" key={i}></div>
                    ))}
                </div>
                </center>
               
                    <div>
                        <center>
                            <h1>Inscription</h1>
                            <p><strong>Déjà un compte chez nous ? <a href="/loginc">Connectez-vous</a></strong></p>
                        </center>
                        <div className="button-box">
                        <button 
                        type="button" 
                        onClick={() => setRole('beneficiary')}
                        className={`toggle-btn ${role === 'beneficiary' ? 'active' : ''}`}
                        style={{
                            color: role === 'partenaire' ? 'white' : 'blue', 
                            backgroundColor: role === 'partenaire' ? '#002147' : 'transparent' ,
                            width: '100%'
                        }}>
                        Partenaire
                    </button>

                        </div>
                        <center>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                        </center>

                        <form onSubmit={handleSubmit} className="input-group">
                            <div class="form-group">
                                <div class="input-group email">
                                    <label for="email">Email :</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required  />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <label for="nom">Nom :</label>
                                    <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <label for="telephone">Telephone :</label>
                                    <input type="tel" name="telephone" value={formData.telephone} onChange={handleInputChange}  pattern="[0-9]{10}"
                                    required  />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <label for="adresse">Adresse :</label>
                                    <input type="text" name="adresse" value={formData.adresse} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <label for="mot_de_passe">Mot de passe :</label>
                                    <input type="password" name="mot_de_passe" value={formData.mot_de_passe} onChange={handleInputChange} required  />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <label for="confirmPassword">Confirmation de mot passe :</label>
                                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required  />
                                </div>
                            </div>
                            
                            <center><button class="submit-btn" type="submit" onClick={handleSubmit}>Suivant</button></center>
                        </form>
                    </div>
            </div>
        </>
    );
}

export default Signupc;
