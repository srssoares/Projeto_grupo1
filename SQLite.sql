-- Criação da tabela de Estabelecimentos
CREATE TABLE Estabelecimentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    tipo_musica VARCHAR(50) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Criação da tabela de Músicos
CREATE TABLE Musicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    tipo_musica VARCHAR(50) NOT NULL,
    link_musica VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    id_estabelecimento INT,  -- Adicionando a referência ao estabelecimento
    FOREIGN KEY (id_estabelecimento) REFERENCES Estabelecimentos(id)  -- Chave estrangeira
);

-- Criação da tabela de publico
CREATE TABLE publico (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    tipo_musica VARCHAR(50) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Criação da tabela de Contratos (ou Eventos)
CREATE TABLE Contratos (
    id SERIAL PRIMARY KEY,
    id_cliente INT,  -- Referência ao cliente
    id_musico INT,   -- Referência ao músico
    data DATE NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id),  -- Chave estrangeira
    FOREIGN KEY (id_musico) REFERENCES Musicos(id)     -- Chave estrangeira
);

-- Índices para otimizar consultas nos emails
CREATE UNIQUE INDEX idx_estabelecimento_email ON Estabelecimentos (email);
CREATE UNIQUE INDEX idx_musico_email ON Musicos (email);

CREATE UNIQUE INDEX idx_cliente_email ON publico (email);
