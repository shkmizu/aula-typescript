//Exercício 1
interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  motor?: string;
}
const meuCarro: Carro = {
  marca: "BMW",
  modelo: "M5 Competition",
  ano: 2025,
  motor: "4.4 V8"
};
console.log(meuCarro);




//Exercício 2
interface Multiplicacao {
  (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (a, b) => a * b;
console.log(multiplicar(5, 3)); // 15
console.log(multiplicar(7, 2)); // 14




//Exercício 3
function inverterArray<T>(array: T[]): T[] {
  return array.reverse();
}
console.log(inverterArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(inverterArray(["a", "b", "c"])); // ["c", "b", "a"]




//Exercício 4
interface Repositorio<T> {
  salvar(dado: T): void;
  obterTodos(): T[];
}

interface Usuario {
  nome: string;
  email: string;
}

class UsuarioRepositorio implements Repositorio<Usuario> {
  private usuarios: Usuario[] = [];

  salvar(dado: Usuario): void {
    this.usuarios.push(dado);
  }

  obterTodos(): Usuario[] {
    return this.usuarios;
  }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Vitor", email: "vitor@email.com" });
repo.salvar({ nome: "Type", email: "type@email.com" });
console.log(repo.obterTodos());




//Exercício 5
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log("Resposta do servidor:", resposta);
  } else if (resposta === true) {
    console.log("Operação bem-sucedida!");
  } else {
    console.log("Operação falhou.");
  }
}

processarResposta("Dados recebidos.");
processarResposta(true);
processarResposta(false);




//Exercício 6
interface Estudante {
  nome: string;
  curso: string;
}

interface Trabalhador {
  empresa: string;
  cargo: string;
}
type EstudanteTrabalhador = Estudante & Trabalhador;
const pessoa: EstudanteTrabalhador = {
  nome: "Vitor",
  curso: "Engenharia de Software",
  empresa: "FIAP",
  cargo: "Desenvolvedor Web Júnior"
};

console.log(pessoa);

