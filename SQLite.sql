-- Criação da tabela de Estabelecimentos
CREATE TABLE Estabelecimentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    id_estado INT NOT NULL,
    id_cidade INT NOT NULL,
    tipo_musica VARCHAR(50) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_estado) REFERENCES Estados(id),
    FOREIGN KEY (id_cidade) REFERENCES Cidades(id)
);

-- Criação da tabela de Músicos
CREATE TABLE Musicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    id_estado INT NOT NULL,
    id_cidade INT NOT NULL,
    tipo_musica VARCHAR(50) NOT NULL,
    link_musica VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    id_estabelecimento INT,  -- Adicionando a referência ao estabelecimento
    FOREIGN KEY (id_estabelecimento) REFERENCES Estabelecimentos(id),
    FOREIGN KEY (id_estado) REFERENCES Estados(id),
    FOREIGN KEY (id_cidade) REFERENCES Cidades(id)
);

-- Criação da tabela de Clientes
CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    id_estado INT NOT NULL,
    id_cidade INT NOT NULL,
    tipo_musica VARCHAR(50) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_estado) REFERENCES Estados(id),
    FOREIGN KEY (id_cidade) REFERENCES Cidades(id)
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

-- Criação da tabela de Estados
CREATE TABLE Estados (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sigla VARCHAR(2) NOT NULL UNIQUE
);

-- Criação da tabela de Cidades
CREATE TABLE Cidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_estado INT NOT NULL,
    FOREIGN KEY (id_estado) REFERENCES Estados(id)  -- Chave estrangeira
);

-- Índices para otimizar consultas nos emails
CREATE UNIQUE INDEX idx_estabelecimento_email ON Estabelecimentos (email);
CREATE UNIQUE INDEX idx_musico_email ON Musicos (email);
CREATE UNIQUE INDEX idx_cliente_email ON Clientes (email);

