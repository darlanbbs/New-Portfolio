import * as C from "./styled";

const repositories = [
  "https://github.com/darlanbbs/cadastro_cliente_mobile",
  "https://github.com/darlanbbs/Wallet-APP",
  "https://github.com/darlanbbs/FrontEnd-App-Disciplinas",
  "https://github.com/darlanbbs/Otaku-Shop",
  "https://github.com/darlanbbs/E-Commerce-Plant-Shop",
  "https://github.com/darlanbbs/RestaurantFinder-with-API",
  "https://github.com/darlanbbs/ProjectNext",
  "https://github.com/darlanbbs/Secret-Word-Project",
  "https://github.com/darlanbbs/Project-Space",
  "https://github.com/darlanbbs/ProjectFilms",
  "https://github.com/darlanbbs/MultiStep",
];

export function MyProject() {
  return (
    <C.ProjectsCards>
      <a href={repositories[0]} target="_blank">
        <C.Project>
          <C.Image src="/images/homepageMobile.png" />
          <h3>Cadastro de Clientes</h3>
          <p>
            Este é o mobile da aplicação Cadastro de Clientes, uma aplicação que
            permite aos usuários registrar clientes que podem ser pessoas
            fisicas ou juridícas podendo fazer um anexo de contrato social e
            consultar os dados.
          </p>
          <C.Tecnologias>
            ReactJs Native / Expo, Yup, Axios, React Hook Form, Styled
            Components
          </C.Tecnologias>
        </C.Project>
      </a>

      <a href={repositories[0]} target="_blank">
        <C.Project>
          <C.Image src="/images/homepageMobile.png" />
          <h3>Cadastro de Clientes BackEnd</h3>
          <p>
            Este é o BackEnd da aplicação de cadastro de clientes, responsável
            pela criação e validação de dados dos clientes cadastrados podendo
            ser pessoas fisicas ou juridicas utilizando PostgreSql como banco de
            dados.
          </p>
          <C.Tecnologias>PostgreSql / NodeJs, ExpressJs, Pg</C.Tecnologias>
        </C.Project>
      </a>

      <a href={repositories[1]} target="_blank">
        <C.Project>
          <C.Image src="/images/wallet.png" />
          <h3>App-Carteira Financeira</h3>
          <p>
            Este é o front-end da aplicação Wallet-APP, uma carteira digital que
            permite aos usuários registrar e fazer login em suas contas. O
            aplicativo utiliza tecnologias modernas como React e diversas
            bibliotecas para fornecer uma experiência de usuário eficiente e
            amigável.
          </p>
          <C.Tecnologias>
            ReactJs, Bootstrap, Styled Components, Axios
          </C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[1]} target="_blank">
        <C.Project>
          <C.Image src="/images/wallet.png" />
          <h3>Api-Carteira Financeira</h3>
          <p>
            Este é o back-end da aplicação Wallet-APP, responsável por fornecer
            a lógica de negócios e gerenciar a comunicação com o banco de dados
            MongoDB. O aplicativo utiliza diversas bibliotecas para garantir a
            segurança, autenticação e manipulação dos dados.
          </p>
          <C.Tecnologias>
            NodeJs, ExpressJs, jwt, bcrypt, Joi, Mongoose, MongoDb
          </C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[1]} target="_blank">
        <C.Project>
          <C.Image src="/images/page1Nothing.png" />
          <h3>App-Gerenciamento de Disciplinas</h3>
          <p>
            Este é o FrontEnd da aplicação BackEnd-APP-Disciplinas,uma aplicação
            de gerenciamento de disciplinas e avaliações baseado em seus
            semestres,desenvolvido em ReactJs com Typescript proporcionando uma
            experiência de usuário interativa e amigável.
          </p>
          <C.Tecnologias>ReactJs, Typescript, Axios, Bootstrap</C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[1]} target="_blank">
        <C.Project>
          <C.Image src="/images/page1Nothing.png" />
          <h3>Api-Gerenciamento de Disciplinas</h3>
          <p>
            O BackEnd desta aplicação é responsável por gerenciar as operações
            relacionadas às disciplinas e avaliações. Ele foi construído
            utilizando Node.js e Express.js para fornecer uma API robusta.
          </p>
          <C.Tecnologias>NodeJs, Express.js, UUID</C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[2]} target="_blank">
        <C.Project>
          <C.Image src="/images/otakushop.png" />
          <h3>Otaku Shop</h3>
          <p>
            OtakuShop E-commerce! Este é um e-commerce dedicado a roupas,
            figures e acessórios relacionados a animes e cultura otaku. Este
            README fornecerá informações perguntas frequentes como configurar e
            executar o projeto localmente.
          </p>
          <C.Tecnologias>
            NextJs, Typescript, Bootstrap, GraphQl, Axios, React Query
          </C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[3]} target="_blank">
        <C.Project>
          <C.Image src="/images/greenmind.png" />
          <h3>Ecommerce de plantas</h3>
          <p>
            Landing page integrada a um e-commerce de plantas, utilizando a
            biblioteca Redux para gerenciamento de estado. A landing page serve
            como ponto de entrada, proporcionando aos visitantes uma visão
            atraente e envolvente das plantas disponíveis para compra.
          </p>
          <C.Tecnologias>
            ReactJs, Typescript, Bootstrap, Styled Components, Redux
          </C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[4]} target="_blank">
        <C.Project>
          <C.Image src="/images/image1.png" />
          <h3>Achador de restaurantes</h3>
          <p>
            Neste projeto, você está criando um localizador de restaurantes com
            recursos de pesquisa e integração de mapas do Google Maps. A
            aplicação permite aos usuários encontrar restaurantes com base em
            diferentes critérios de pesquisa, como tipo de cozinha, localização
            ou classificação.
          </p>
          <C.Tecnologias>
            ReactJs, Typescript, Bootstrap, Styled Components, Redux
          </C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[5]} target="_blank">
        <C.Project>
          <C.Image src="/images/pokenext.png" />
          <h3>Pokedex com Nextjs</h3>
          <p>
            Pokédex utilizando Next.js e integrando uma API de Pokémon. A
            Pokédex é uma enciclopédia virtual que exibe informações detalhadas
            sobre diferentes espécies de Pokémon. Através da integração da API
            de Pokémon, obtendo dados precisos e atualizados sobre cada Pokémon,
            incluindo seus nomes, tipos, habilidades e etc.
          </p>
          <C.Tecnologias>
            ReactJs, Nextjs, Typescript, ChakraUi, Axios
          </C.Tecnologias>
        </C.Project>
      </a>
      <a href={repositories[6]} target="_blank">
        <C.Project>
          <C.Image src="/images/secretWorldGame.png" />
          <h3>Adivinhador de palavras</h3>
          <p>
            O projeto é um jogo de adivinhação desenvolvido em JavaScript,
            inspirado no jogo da forca. Os jogadores tentam adivinhar uma
            palavra oculta escolhida aleatoriamente, revelando letras uma por
            uma. O objetivo é adivinhar a palavra antes de cometer muitos erros
            e completar um desenho da forca.
          </p>
          <C.Tecnologias>Javascript</C.Tecnologias>
        </C.Project>
      </a>

      <a href={repositories[7]} target="_blank">
        <C.Project>
          <C.Image src="/images/projectSpace1.png" />
          <h3>Projeto Espaço</h3>
          <p>
            Este projeto é uma exploração do espaço que abrange diversos
            aspectos. Ele envolve a criação de um sistema que simula um universo
            fictício, incluindo planetas com características únicas, equipes de
            tripulantes que exploram esses planetas e tecnologias avançadas
            utilizadas para viagens espaciais.
          </p>
          <C.Tecnologias>ReactJs</C.Tecnologias>
        </C.Project>
      </a>

      <a href={repositories[8]} target="_blank">
        <C.Project>
          <C.Image src="/images/projectFilms.png" />
          <h3>Serviço de Filmes</h3>
          <p>
            Esse projeto envolve a criação de um site que utiliza a API TMDB
            para construir um clone personalizado da plataforma de streaming
            Netflix. Através da integração com a API, o site exibirá uma ampla
            seleção de filmes e séries, permitindo aos usuários navegar, buscar
            e visualizar informações detalhadas sobre o conteúdo.
          </p>
          <C.Tecnologias>ReactJs</C.Tecnologias>
        </C.Project>
      </a>

      <a href={repositories[9]} target="_blank">
        <C.Project>
          <C.Image src="/images/multiStep.png" />
          <h3>Formulario Multi Etapas</h3>
          <p>
            Esse projeto consiste em um formulário de várias etapas, projetado
            para guiar os usuários por um processo complexo de maneira
            organizada e intuitiva. Cada etapa do formulário é apresentada em
            sequência, com indicadores visuais que mostram em qual etapa o
            usuário está atualmente.
          </p>
          <C.Tecnologias>
            React.js, Typescript, React Hook Form, Yup, Bootstrap e Styled
            Components
          </C.Tecnologias>
        </C.Project>
      </a>
    </C.ProjectsCards>
  );
}
