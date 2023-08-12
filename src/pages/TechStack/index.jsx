import { Cards } from "../../components/Stacks";
import { Main } from "../../styles/globalStyles";
import * as C from "./styled";
export function Conhecimentos() {
  return (
    <C.Container>
      <Main>
        <h1>Tecnologias</h1>
        <C.ContainerCard>
          {/* Card para HTML */}
          <Cards
            title={"html"}
            subtitle={
              " O HTML é o componente básico da web,coloca o conteúdo e estabelece a estrutura básica de um website."
            }
            alt={"Html-Image"}
            imageSrc={"/images/image-html.png"}
            className="html"
          />
          {/* Card para CSS */}
          <Cards
            title={"Css"}
            subtitle={
              "Cascading Style Sheets usado para estilizar elementos escritos em uma linguagem de marcação como HTML."
            }
            alt={"Css-Image"}
            imageSrc={"/images/image-css.png"}
            className="css"
          />
          {/* Card para JavaScript */}
          <Cards
            title={"Javascript"}
            subtitle={
              "JavaScript é uma linguagem que permite a você implementar itens complexos em páginas web."
            }
            alt={"Javascript-Image"}
            imageSrc={"/images/image.javascript.png"}
            className="javascript"
          />
        </C.ContainerCard>

        <C.ContainerCard>
          {/* Card para TypeScript */}
          <Cards
            title={"Typescript"}
            subtitle={
              "Typescript é uma linguagem criada baseada no javascript que adiciona novos recursos de tipagem"
            }
            alt={"Typescript-Image"}
            imageSrc={"/images/image.typescript.png"}
            className="typescript"
          />
          {/* Card para ReactJS */}
          <Cards
            title={"Reactjs"}
            subtitle={
              "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
            }
            alt={"React-Image"}
            imageSrc={"/images/image-reactjs.png"}
            className="reactjs"
          />
          {/* Card para Next.js */}
          <Cards
            title={"NextJs"}
            subtitle={
              "Next.js é uma estrutura da web de desenvolvimento que permite renderização do lado do servidor e geração de sites estáticos."
            }
            alt={"NextJs-Image"}
            imageSrc={"/images/image-next.png"}
            className="nextjs"
          />
        </C.ContainerCard>
        <C.ContainerCard>
          {/* Card para Bootstrap */}
          <Cards
            title={"Bootstrap"}
            subtitle={
              "Bootstrap é um framework para desenvolvimento de componentes de interface para sites."
            }
            alt={"Bootstrap-Image"}
            imageSrc={"/images/bootstrap-social.png"}
            className="bootstrap"
          />
          {/* Card para Tailwind CSS */}
          <Cards
            title={"Tailwind Css"}
            subtitle={
              "Tailwind Css é um framework que fornece várias classes utilitárias para usar diretamente na sua marcação de texto para estilização."
            }
            alt={"TailwindCss-Image"}
            imageSrc={"/images/image-tailwind.png"}
            className="tailwind"
          />
          {/* Card para Styled Components */}
          <Cards
            title={"Styled Components"}
            subtitle={
              "é uma biblioteca que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript."
            }
            alt={"StyledComponents-Image"}
            imageSrc={"/images/image-styled.png"}
            className="styled"
          />
        </C.ContainerCard>
        <C.ContainerCard>
          {/* Card para Node.js */}
          <Cards
            title={"Nodejs"}
            subtitle={
              "Node.js é um software que utilizando o JavaScript pelo lado do servidor permite a criação de APIs, aplicações de chat e microsserviços."
            }
            alt={"Nodejs-Image"}
            imageSrc={"/images/image-node.png"}
            className="nodejs"
          />
          {/* Card para MySQL */}
          <Cards
            title={"MySql"}
            subtitle={
              "O MySQL é um sistema de gerenciamento de banco de dados relacional com ampla adoção e popularidade na indústria de TI."
            }
            alt={"MySql-Image"}
            imageSrc={"/images/image-sql.png"}
            className="mysql"
          />
          {/* Card para PostgreSQL */}
          <Cards
            title={"PostgreSQL"}
            subtitle={
              "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional poderoso, de código aberto e altamente extensível."
            }
            alt={"PostgreSQL-Image"}
            imageSrc={"/images/image-postgre.png"}
            className="postgresql"
          />
        </C.ContainerCard>
        <C.ContainerCard>
          {/* Card para Git */}
          <Cards
            title={"Git"}
            subtitle={
              "Git é um sistema de controle de versão open source usado para o controle de histórico de alterações nos arquivos."
            }
            alt={"Git-Image"}
            imageSrc={"/images/image-git.png"}
            className="git"
          />
          {/* Card para React Native */}
          <Cards
            title={"React Native"}
            subtitle={
              "React Native é uma estrutura de aplicativo móvel, baseada na linguagem JavaScript para criar aplicativos móveis nativamente para iOS e Android."
            }
            alt={"React-Native-Image"}
            imageSrc={"/images/image-native.png"}
            className="native"
          />
          {/* Card para Mongodb */}

          <Cards
            title={"MongoDb"}
            subtitle={
              "MongoDB é um banco de dados de documentos com a escalabilidade e flexibilidade que você deseja junto com a consulta e indexação que você precisa."
            }
            alt={"MongoDb-Image"}
            imageSrc={"/images/image-mongodb.png"}
            className="mongodb"
          />
        </C.ContainerCard>
      </Main>
    </C.Container>
  );
}
