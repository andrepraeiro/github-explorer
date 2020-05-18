import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <img
          src="https://avatars3.githubusercontent.com/u/69631?v=4"
          alt={params.repository}
        />
        <div>
          <strong>{params.repository}</strong>
          <p>Descrição do repositório</p>
        </div>

        <ul>
          <li>
            <strong>1808</strong> <span>Stars</span>
          </li>
          <li>
            <strong>48</strong> <span>Forks</span>
          </li>
          <li>
            <strong>67</strong> <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="saasss">
          <div>
            <strong>dssss</strong>
            <p>ffjfjfj</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
