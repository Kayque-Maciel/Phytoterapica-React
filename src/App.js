import './App.css';
import Header from "./Components/Header" 
import Menu from './Components/Menu';
import Imagem from './Components/Imagem';
import Produtos from './Components/Produtos';
import Inscrevase from './Components/Inscrevase';
import Informacoes from './Components/Informacoes';
import Footer from './Components/Footer';
import Products from './Components/Products';


function App() {
  return (
   <>
      <Header />

      <Menu />

      <Imagem />

      <Produtos />

      <div className="Container">
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=637725599700270000" titulo=" Lavanda (gt. França) - 10ml" preco="R$60,00" parcela=" R$ 20,00 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155814/oleo-essencial-geranio-5ml-phytoterapica-01.jpg?v=637725623120030000" titulo=" Gerânio - 5ml" preco="R$44,00" parcela=" R$ 14,66 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155804/oleo-essencial-alecrim-10ml-phytoterapica-01.jpg?v=637725608065330000" titulo=" Alecrim (qt. Cineol) - 10ml" preco="R$37,00" parcela=" R$ 12,33 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155806/oleo-essencial-hortela-pimenta-10ml-phytoterapica-01.jpg?v=637725609590700000" titulo=" Hortelã-Pimenta (Menta) - 10ml" preco="R$60,00" parcela=" R$ 20,00 sem juros"/>
      </div>

      <div className="Container">
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155808/oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica-01.jpg?v=637725610656700000" titulo=" Malaleuca (Tea Tree) - 10ml" preco="R$50,00" parcela=" R$ 16,66 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155886/oleo-essencial-laranja-organico-10ml-phytoterapica-01.jpg?v=637753643540330000" titulo=" Laranja (Orgânico) - 10ml" preco="R$26,00" parcela=" R$ 8,66 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155820/oleo-essencial-eucalipto-globulus-10ml-phytoterapica-01.jpg?v=637725633480370000" titulo=" Eucalipto Globulus - 10ml" preco="R$35,20" parcela=" R$ 11,73 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155838/oleo-essencial-bergamota-5ml-phytoterapica-01.jpg?v=637725646137900000" titulo=" Bergamota - 5ml" preco="R$40,00" parcela=" R$ 13,33 sem juros"/>
      </div>

      <div className="Container">
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/156013/Mockup_Caixa_OE_Melaleuca_5ml_1000x1000px.jpg?v=637976535392430000" titulo=" Malaleuca (Tea Tree) - 5ml" preco="R$39,20" parcela=" R$ 13,06 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/156000/Mockup_Caixa_OE_Lavanda_5ml_1000x1000px.jpg?v=637975742756530000" titulo=" Lavanda (gt.França) - 5ml" preco="R$47,02" parcela=" R$ 15,67 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155415/_leo_essencial_de_lim_o-tahiti_10ml_-_phytoterapica_1_.jpg?v=637653490559770000" titulo=" Limão-Tahiti - 10ml" preco="R$34,20" parcela=" R$ 11,40 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155533/_leo_essencial_de_ol_bano_5ml_-_phytoterapica_1_.jpg?v=637655362480800000" titulo=" Olíbano - 10ml" preco="R$84,00" parcela=" R$ 28,00 sem juros"/>
      </div>
      
      <div className="Container">
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=637725599700270000" titulo=" Lavanda (gt. França) - 10ml" preco="R$60,00" parcela=" R$ 20,00 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155814/oleo-essencial-geranio-5ml-phytoterapica-01.jpg?v=637725623120030000" titulo=" Gerânio - 5ml" preco="R$44,00" parcela=" R$ 14,66 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155804/oleo-essencial-alecrim-10ml-phytoterapica-01.jpg?v=637725608065330000" titulo=" Alecrim (qt. Cineol) - 10ml" preco="R$37,00" parcela=" R$ 12,33 sem juros"/>
          <Products foto="https://phytoterapica.vtexassets.com/arquivos/ids/155806/oleo-essencial-hortela-pimenta-10ml-phytoterapica-01.jpg?v=637725609590700000" titulo=" Hortelã-Pimenta (Menta) - 10ml" preco="R$60,00" parcela=" R$ 20,00 sem juros"/>
      </div>

      <Inscrevase />

      <Informacoes />

      <Footer />
   </>
  );
}

export default App;
