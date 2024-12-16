const horarioStrongHtml = document.getElementById('horario-tempo-real');

// Atualiza a data e hora dinamicamente
function atualizarDataHora() {
    const now = new Date();

    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0');
   

    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');


    
    const dataHoraFormatada = `${dia} DE ${obterNomeMes(mes).toUpperCase()}HORÁRIO: ${horas}:${minutos}:${segundos}`;
    document.getElementById('dataHora-sangria').innerHTML = dataHoraFormatada;
}

function obterNomeMes(mes) {
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return meses[parseInt(mes, 10) - 1];
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();

