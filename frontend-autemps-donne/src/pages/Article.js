import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import '../css/article.css'; 

function Article() {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/beneficiary/articles/${id}`);
        if (response.ok) {
          const articleData = await response.json();
          setArticle(articleData);
        } else {
          throw new Error('Failed to fetch article');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>; 
  }

  return (
    <div class="bodyarticle">
        
        <Link to="/Dashboardb">
        <button className="dashboard-button">Go to Dashboard</button>
      </Link>
    <div className="article-container">
      <h2>{article.titre}</h2>
      <img src={`/${article.image}`} alt={article.titre} className="article-image" />
      <p>{article.contenu}</p>
      <p><strong>Auteur:</strong> {article.auteur}</p>
      <p><strong>Date de création:</strong> {article.date_creation}</p>
    </div> </div>
  );
}

export default Article;
