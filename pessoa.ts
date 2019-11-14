class Pessoa{
    private nome: String;
    private idade: Number;

    olamundo(): string{
        return "Olá mundo! 2DS2";
    }
}

let p = new Pessoa();

document.getElementById('texto').textContent = p.olamundo();