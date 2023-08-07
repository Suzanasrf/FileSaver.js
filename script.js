var button = document.querySelectorAll('.button')
const inputs = document.getElementById('#form')


class dadosCompletos {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

button.forEach(button => button.addEventListener('click', () => {
  
            const nome = document.getElementById('nome').value;
   
            const idade = document.getElementById('idade').value;
            const altura = document.getElementById('altura').value;
            const peso = document.getElementById('peso').value;

            const dados = new dadosCompletos(nome, idade, altura, peso);
            console.log(dados);
        
    
//CRIAÇÃO DO CONTEÚDO DO ARQUIVO
    /*Para criar um arquivo em branco e registrar os valores dos campos em JavaScript, você pode usar a funcionalidade de gravação de arquivos do JavaScript, que geralmente é feita usando Node.js no lado do servidor. No entanto, vou fornecer uma abordagem baseada no navegador usando a API FileSaver.js para criar e salvar um arquivo no formato de texto.
   Primeiro, você precisará adicionar a biblioteca FileSaver.js ao seu projeto. Você pode incluí-la em seu HTML da seguinte maneira:*/
    
 // Formatando os dados como uma string
                const fileContent = `Nome: ${dados.nome}\nIdade: ${dados.idade}\nAltura: ${dados.altura}\nPeso: ${dados.peso}`;
// Criação de um novo Blob (objeto binário)
            
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' })
    
//Salvando o blob como arquivo usando a biblioteca FileSaver.js
    
            saveAs(blob, 'dados.txt');
            
            console.log(dados)
    
}))



