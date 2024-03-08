// Função para formatar o número do celular
function formatarCelular(input) {
   
    var numero = input.value.replace(/\D/g, '');
    var novoNumero = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 6) + '-' + numero.substring(6, 10);

    // Atualiza o valor do input
    input.value = novoNumero;
}

// Adiciona um listener de evento para chamar a função de formatação quando o usuário digitar
document.getElementById('telefone').addEventListener('input', function() {
    formatarCelular(this);
});

$(document).ready(function() {
    // Adiciona um listener de evento para as caixas de seleção
    $('.form-check-input').change(function() {
        var checkboxId = $(this).attr('id');
        var isChecked = $(this).is(':checked');
        console.log('Seleção:', checkboxId, isChecked);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Adicione um evento de alteração aos checkboxes
    var whatsappCheckbox = document.getElementById("whatsappCheck");
    var emailCheckbox = document.getElementById("emailCheck");
    var smsCheckbox = document.getElementById("smsCheck");

    whatsappCheckbox.addEventListener("change", enviarNotificacao);
    emailCheckbox.addEventListener("change", enviarNotificacao);
    smsCheckbox.addEventListener("change", enviarNotificacao);

    function enviarNotificacao() {
        var notificacoes = [];

        if (whatsappCheckbox.checked) {
            notificacoes.push("WhatsApp");
        }

        if (emailCheckbox.checked) {
            notificacoes.push("E-mail");
        }

        if (smsCheckbox.checked) {
            notificacoes.push("SMS");
        }

        if (notificacoes.length > 0) {
            var mensagem =   notificacoes.join(", ");
            alert('Notificações enviadas: ' + mensagem); // Exemplo: Mostrar uma mensagem
        }
    }
});

function enviarNotificacao() {
    var formData = new FormData();
    
    if (whatsappCheckbox.checked) {
        formData.append("whatsappCheck", "on");
    }

    if (emailCheckbox.checked) {
        formData.append("emailCheck", "on");
        enviarEmail(); // Chama a função para enviar e-mail
    }

    if (smsCheckbox.checked) {
        formData.append("smsCheck", "on");
        enviarSMS(); // Chama a função para enviar SMS
    }
    fetch('cadastro.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar notificação');
        }
        return response.json();
    })
    .then(data => {
        alert('Notificações enviadas com sucesso');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar notificações');
    });
}

function enviarSMS() {
    // Configure sua conta Twilio
    var accountSid = 'SUA_ACCOUNT_SID';
    var authToken = 'SEU_AUTH_TOKEN';
    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    // Enviar mensagem de texto
    client.messages.create({
        body: 'Corpo da mensagem do SMS',
        to: 'NUMERO_DE_DESTINO',  // Número de destino
        from: 'SEU_NUMERO_TWILIO'  // Número do seu Twilio
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error('Erro ao enviar SMS:', error));
}
