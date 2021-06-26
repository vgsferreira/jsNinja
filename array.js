var array = []
var convidados = ['vinicius', 'diego', 'camargo']

convidados.push('Leonardo')

function enviarConfirmacao (convidados){
    
    for(i=0; i < convidados.length; i++){

        console.log(convidados[i]+ ', você foi convidado para a festa!')        

    }
}

convidados.forEach(
    console.log(convidados[i] + ', foi desconvidado')
)

//enviarConfirmacao(convidados)