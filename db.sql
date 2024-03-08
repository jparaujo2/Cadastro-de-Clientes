
CREATE DATABASE cadastro_contatos;

USE cadastro_contatos;

CREATE TABLE contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_nascimento DATE NOT NULL,
    profissao VARCHAR(100) NOT NULL,
    celular VARCHAR(20) NOT NULL,
    whatsapp_check TINYINT(1) NOT NULL DEFAULT 0,
    email_check TINYINT(1) NOT NULL DEFAULT 0,
    sms_check TINYINT(1) NOT NULL DEFAULT 0
);
