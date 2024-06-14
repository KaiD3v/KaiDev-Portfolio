import "./ThriftStoreManager.css";

// images
import ThriftStoreHome from "../../../assets/img/ThriftStoreManagerHome.png";
import ThriftStoreProducts from "../../../assets/img/productspage.png";
import ThriftStoreDashboard from "../../../assets/img/dashboard.gif";
import ThriftStoreCart from "../../../assets/img/makesale.gif";

import { motion as m } from "framer-motion";

const ThriftStoreManager = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="thriftstoremanager-container"
    >
      <header>
        <h1>Thrift Store Manager</h1>
        <h2>Principais Tecnologias Utilizadas</h2>
        <ul>
          <li>
            <a href="https://react.dev/learn">ReactJs</a>
          </li>
          <li>
            <a href="https://expressjs.com/en/starter/installing.html">
              Express
            </a>
          </li>
          <li>
            <a href="https://tailwindui.com/documentation">Tailwind CSS</a>
          </li>
        </ul>
      </header>
      <section className="thriftstoremanager-description">
        <h3>Sobre o Projeto</h3>
        <p>
          Esta é uma aplicação web fullstack para gerenciar pequenas lojas de
          segunda mão, chamada "Thrift Store Manager".
        </p>
        <p>
          A aplicação é 100% responsiva e possui várias funcionalidades para
          facilitar a gestão da loja.
        </p>
        <p>
          Na página home, você encontra toda a documentação de como utilizar o
          sistema, proporcionando uma introdução completa para novos usuários.
        </p>
        <p>
          Na página Dashboard, você pode visualizar gráficos de vendas, tabelas
          com as vendas realizadas e tabelas com devedores.
        </p>
        <p>
          Na página de Produtos, é possível gerenciar todo o estoque, incluindo
          cadastrar novos produtos com suas devidas informações, editar produtos
          existentes e deletar produtos quando necessário.
        </p>
        <p>
          A aplicação também possui um formulário de compras onde você pode
          registrar as compras feitas para a loja. Nessa tela, há tabelas com
          produtos fora de estoque, tabelas com todos os produtos e tabelas de
          compras.
        </p>
        <p>
          Além disso, há um componente de carrinho de compras onde são
          adicionados os itens que serão vendidos. Após a venda, os itens são
          mandados para a tabela de vendas.
        </p>
        <p>
          Também há uma tela de tarefas, onde você pode monitorar todas as
          tarefas disponíveis para serem realizadas, garantindo que nada
          importante seja esquecido.
        </p>
      </section>
      <section className="thriftstoremanager-images">
        <h3>Imagens da Aplicação</h3>
        <div className="images-container">
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={ThriftStoreCart} alt="Carrinho de Compras" />
            <p>
              Componente de carrinho de compras, onde são adicionados os itens
              que serão vendidos.
            </p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={ThriftStoreProducts} alt="Página de Produtos" />
            <p>
              Página de produtos, onde você pode gerenciar todo o estoque,
              cadastrando, editando e deletando produtos.
            </p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={ThriftStoreHome} alt="Página Home" />
            <p>
              Home page, onde há uma breve apresentação e documentação do
              sistema.
            </p>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} className="image-item">
            <img src={ThriftStoreDashboard} alt="Dashboard" />
            <p>
              Página de Dashboard, onde você pode visualizar gráficos de vendas
              e tabelas de desempenho.
            </p>
          </m.div>
        </div>
        <footer>
          <p>
            Este é um sistema privado com imagens ilustrativas utilizadas
            exclusivamente para a apresentação do sistema.
          </p>
        </footer>
      </section>
    </m.div>
  );
};

export default ThriftStoreManager;
