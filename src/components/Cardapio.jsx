// imports que o professor vai passar
import styles from './Cardapio.module.css'
import { useState, useEffect } from 'react'

function Cardapio() {


  //useState que o professor vai passar
  const [pratos, setPratos] = useState([]);
   const [carregando, setCarregando] = useState(true);


  // useEffect que o professor vai passar
 useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      .then(response => response.json())
      .then(data => {
        setPratos(data.meals);
        setCarregando(false);
      })
      .catch(error => {
        console.error('Erro ao buscar os pratos:', error);
        setCarregando(false);
      });
  }, []);

  // carregamento que o professor vai passar
if (carregando) {
  return <p className={styles.loading}>Procurando os melhores pratos para você...</p>;
}

  return (
    <div className={styles.container}>
      <h1>Cardápio Canadense</h1>
     
      <div className={styles.grid}>
        {pratos.map(item => (
          <div key={item.idMeal} className={styles.card}>
            
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cardapio