import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
    return (
        <div>
            <Header pageTitle="Home" siteTitle="Página Inicial" />
            <Card title="Bem-vindo ao React tst" description="Esta é a página inicial do seu projeto." />
        </div>
    );
};

export default Home;
