import { Link } from "react-router-dom";
import { StyledContainerNotFound } from "../../Styles/Container";

export function NotFound() {
    return (
      <StyledContainerNotFound>
        <div>
          <p>Erro 404 - Página não encontrada :(</p>
          <small>Deseja ir para a página de login?</small>
          <Link to={'/'}>Clique aqui</Link>
        </div>
      </StyledContainerNotFound>
    )
  }