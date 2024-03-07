<?php
// Verifica se o método de requisição é POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se o formulário de cadastro foi submetido
    if (isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["telefone"]) && isset($_POST["data_nascimento"]) && isset($_POST["profissao"]) && isset($_POST["celular"])) {
        
        // Configurações do banco de dados
        $servername = "localhost";
        $username = "seu_usuario";
        $password = "sua_senha";
        $dbname = "seu_banco_de_dados";
        
        // Cria uma conexão com o banco de dados
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verifica se a conexão foi estabelecida com sucesso
        if ($conn->connect_error) {
            die("Erro na conexão com o banco de dados: " . $conn->connect_error);
        }

        // Prepara os dados do formulário para inserção no banco de dados
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $telefone = $_POST["telefone"];
        $data_nascimento = $_POST["data_nascimento"];
        $profissao = $_POST["profissao"];
        $celular = $_POST["celular"];
        $whatsappCheck = isset($_POST["whatsappCheck"]) ? 1 : 0;
        $emailCheck = isset($_POST["emailCheck"]) ? 1 : 0;
        $smsCheck = isset($_POST["smsCheck"]) ? 1 : 0;

        // Insere os dados no banco de dados
        $sql = "INSERT INTO contatos (nome, email, telefone, data_nascimento, profissao, celular, whatsapp_check, email_check, sms_check)
                VALUES ('$nome', '$email', '$telefone', '$data_nascimento', '$profissao', '$celular', '$whatsappCheck', '$emailCheck', '$smsCheck')";

        if ($conn->query($sql) === TRUE) {
            echo "Cadastro realizado com sucesso!";
        } else {
            echo "Erro ao cadastrar: " . $conn->error;
        }

        // Fecha a conexão com o banco de dados
        $conn->close();
    }
}
?>