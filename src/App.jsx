import { Header } from "./components/Header";
// import GrupoInput  from "./components/GrupoInput";
import Formulario from "./components/Formulario";
import Tabela from "./components/Tabela";

export const App = () => {
  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
      <Formulario />
      <Tabela />
        {/* OS COMPONENTES SERÃO ENCAIXADOS AQUI! */}
      </div>
    </div>
  );
};
