import React from 'react';
import './passwordgenerator.css';

function PasswordGenerator() {
  return (
    <div className="password-generator">
      <h2>Gerador de Senhas</h2>

      <label>
        <input type="checkbox" />
        Incluir Maiúsculas
      </label>

      <label>
        <input type="checkbox" />
        Incluir Minúsculas
      </label>

      <label>
        <input type="checkbox" />
        Incluir Números
      </label>

      <label>
        <input type="checkbox" />
        Incluir Símbolos
      </label>

      <input type="text" readOnly placeholder="Sua senha aparecerá aqui" />

      <button disabled>Gerar Senha</button>
    </div>
  );
}

export default PasswordGenerator;