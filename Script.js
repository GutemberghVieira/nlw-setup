
//um site de hábitos para o usuários que queiram registrar o que fez no seus dias

//comando para marcar botões 

const form = document.querySelector("#form-habits");

const nlwSetup = new NLWSetup(form);

const  button = document.querySelector('header button');

button.addEventListener("click", add);
form.addEventListener("change", save);


button.addEventListener('click', add);

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, 5);
     //const today = '20/11' 

    const dayExists = nlwSetup.dayExists(today);
  
    //condição verificar  se o usuário já adicionou um dia
    if(dayExists){
        alert('Dia já incluso ❌');
        return;
    }
    
    

    //Verificar se o usuário adicionou um dia
    alert('Dia Adicionado ✅');

    nlwSetup.addDay(today);
}


function save()
{
    //condição salvar em um armazenamento os dias marcados
localStorage.setItem('NLWSetup@habits' , JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};


nlwSetup.setData(data);
nlwSetup.load();









//Treinamento
function Pessoa(nome, sobrenome) {
this.nome = nome;
this.sobrenome = sobrenome;


this.NomeCompleto = function(){
    return `${this.nome}   ${this.sobrenome}`;
};


}

let Gutembergh = new Pessoa('Gutembergh', 'Vieira');
let Déborah = new Pessoa('Déborah', 'Ellen');




console.log(Gutembergh);
console.log(Déborah);



const person = {
    firstName:'Gutembergh',
    lastName: 'Vieira',
    id      : 2116,

   fullYear: function (){
    return `${this.firstName}  ${this.lastName}`
   }

}

console.log(person.fullYear())

let Pessoa1 = 'Gut';

console.log(this.Pessoa1);
