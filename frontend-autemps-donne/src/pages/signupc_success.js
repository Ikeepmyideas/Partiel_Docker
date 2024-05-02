import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signup.css';  
import logo from '../assets/logo.png';  
import img from '../assets/ins_img.png';
function SignupcSuccess() {

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
                    <h1 >Inscription</h1>
                    </center>
                    <center><img style={{marginTop:'30px', width:'300px'}}src={img}/></center>
                    <center><p style={{marginTop:'50px', color:'#EB5454'}}>Bienvenue dans notre association <strong>Au Temps Donné</strong>! Nous vous remercions chaleureusement d'avoir rejoint notre communauté dédiée à soutenir des initiatives importantes. Votre action contribue grandement à notre cause et nous sommes impatients de collaborer avec vous.</p></center>
                    <center><p style={{marginTop:'50px'}}>Un email de bienvenue vous a été envoyé pour vous fournir plus d'informations sur nos activités. Encore une fois, merci pour votre engagement et votre soutien précieux !</p></center>
                    
                </div>
            </div>
        </>
    );
}

export default SignupcSuccess;