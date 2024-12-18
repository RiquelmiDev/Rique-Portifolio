const horarioStrongHtml = document.getElementById('horario-tempo-real');
const dataSpanHtml = document.getElementById('data-tempo-real');

// Atualiza a data e hora dinamicamente
function atualizarDataHora() {
    const now = new Date();

    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0');
    const diaSemana = obterNomeDiaSemana(now.getDay());
    
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    
    const HoraFormatada = `${horas}:${minutos}`;
    const dataFormatada = `${diaSemana}, ${dia} de ${obterNomeMes(mes)}`;
    
    horarioStrongHtml.textContent = HoraFormatada;
    dataSpanHtml.textContent = dataFormatada;
}

function obterNomeDiaSemana(dia) {
    const diasSemana = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
        'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    return diasSemana[dia];
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


