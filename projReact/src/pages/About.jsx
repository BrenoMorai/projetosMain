import Header from '../components/Header';

const About = () => {
    return (
        <div>
            <Header pageTitle="About" siteTitle="Sobre o Projeto" />
          <div className='card'>
            <p>Este projeto é um exemplo de como criar componentes reutilizáveis no React.</p>
         </div>
        </div>
    );
};

export default About;