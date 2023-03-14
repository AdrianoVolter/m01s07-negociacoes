import { Header } from "./components/Header";
// import GrupoInput  from "./components/GrupoInput";
import Formulario from "./components/Formulario";

export const App = () => {
  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
      <Formulario />
        {/* OS COMPONENTES SERÃO ENCAIXADOS AQUI! */}
      </div>
    </div>
  );
};
