## Slide 103

```js
alert("Começando com JavaScript");
console.log("Bom dia");
document.write("Boa tarde");
```

## Slide 104

```js
console.log(8 + 2);
```

```js
console.log(8 - 2);
console.log(8 * 2);
console.log(8 / 2);
```

```js
console.log(8 ** 2);
console.log(8 ** 3);
console.log(7 ** 2);
console.log(10 ** 3);
```

## Slide 105

```js
console.log(1.75);
```

```js
console.log(4 * (7 + 3));
```

```js
console.log(4 * (7 + (5 - 4) + (-2 * (5 + 1))));
```

## Slide 106

```js
console.log("Bom " + "dia");
console.log('Boa ' + "tarde");
```

## Slide 107

```js
console.log(2 ** 0.5);
console.log(27 ** (1 / 3));
```

```js
console.log(13 % 4);
console.log(14 % 4);
console.log(15 % 4);
console.log(16 % 4);
```

## Slide 108

```js
console.log((-1) ** 0.5);
console.log(8 / 0);
console.log("banana" * "pêra" / "morango");
```

## Slide 109

```js
console.log(1 + 1);
console.log("1" + 1);
console.log("1" - 1);
console.log("X" - 1);
console.log("Bom dia " + 1 + 1);
console.log("Bom dia " + (1 + 1));
```

## Slide 110

```js
t = 5;
v = 10;
d = t * v;
console.log(d);
```

```js
tempo = 5;
velocidade = 10;
distancia = tempo * velocidade;
console.log(distancia);
```

## Slide 111

```js
quantidade = 5;
quantidade = 6;
console.log(quantidade);
```

```js
tamanho = 5;
tamanho = tamanho + 1;
console.log(tamanho);
```

## Slide 112

```js
quantidade = 5;
Quantidade = 6;
quAntiDaDe = 8;
QUANTIDADE = 4;
console.log(quantidade);
console.log(Quantidade);
console.log(quAntiDaDe);
console.log(QUANTIDADE);
console.log(quantidadE);
```

## Slides 114 e 115

```js
quantidade = 5;
quantidade = 6;
console.log(quantidade);
tamanho = 5;
tamanho = tamanho + 1;
```

```js
     quantidade     =5
  ;quantidade
=      6;console      .
   log(       quantidade
         ) ;tamanho   =   5 ;tamanho =tamanho+
1;
```

```js
quantidade=5;quantidade=6;console.log(quantidade);tamanho=5;tamanho=tamanho+1;
```

## Slide 119

```js
function somar(a, b) {
    return a + b;
}

console.log(somar(3, 7));
```

## Slide 120

```js
function areaCirculo(raio) {
    return Math.PI * raio ** 2;
}

console.log(areaCirculo(1));
console.log(areaCirculo(5));
console.log(areaCirculo(10));
```

```js
function grausParaRadianos(graus) {
    return graus * Math.PI / 180;
}

function radianosParaGraus(radianos) {
    return radianos * 180 / Math.PI; 
}
```

## Slide 121

```js
function calcularJurosCompostos(valorInicial, taxa, parcelas) {
    return valorInicial * (1 + (taxa / 100)) ** (parcelas - 1);
}

console.log(calcularJurosCompostos(1000, 4, 12));
```

```js
function mensagemDoDia() {
    return "Bom dia";
}

console.log(mensagemDoDia());
```

## Slides 122 e 123

```js
estoque = 0;

function comprar(quantidade) {
    console.log("Comprando " + quantidade + " itens.");
    estoque = estoque + quantidade;
}

function vender(quantidade) {
    console.log("Vendendo " + quantidade + " itens.");
    estoque = estoque - quantidade;
}

comprar(8);
vender(5);
console.log(estoque);
```

## Slide 125

```js
"use strict";
let quantidade = 5;
quantidade = 6;
const preco = 15;
preco = 18;
naoExiste = 555;
```

## Slide 126

```js
"use strict";
let x = 4;

function teste() {
    let x = 5;
    console.log(x);
}

teste();
console.log(x);
```

```js

x = 4;

function teste() {
    x = 5;
    console.log(x);
}

teste();
console.log(x);
```

## Slides 138 a 164

[Veja o código aqui](trajetoria/trajetoria1.html)

## Slide 167

```js
// Lista de números.
const lista1 = [2, 4, 6, 9, 13];

// Lista de strings.
const lista2 = ["abacaxi", "banana", "morango", "uva", "melancia"];

// Lista misturada.
const lista3 = [5, "chocolate", undefined, true, 18.7, NaN];

// Lista vazia.
const lista4 = [];

// Mostra as listas:
console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);
```

## Slides 168 e 169

```js
// Lista de strings.
const lista5 = ["abacaxi", "banana", "morango", "uva", "melancia"];

// Mostra alguns elementos:
console.log(lista5[0]);
console.log(lista5[1]);
console.log(lista5[2]);
console.log(lista5[3]);
console.log(lista5[4]);
console.log(lista5[5]);
console.log(lista5[999]);
console.log(lista5.length);

let x = 3;
console.log(lista5[x]);
```

## Slide 170

```js
// Lista de strings.
const lista6 = ["abacaxi", "banana", "morango", "uva", "melancia"];

lista6[2] = "gato";
lista6.push("laranja");

// Mostra a lista:
console.log(lista6);
```

## Slide 171

```js
// Lista de strings.
const lista7 = ["abacaxi", "banana", "morango", "uva", "melancia"];
const lista8 = lista7;
const lista9 = [...lista7];

lista7[2] = "gato";

// Mostra as listas:
console.log(lista7);
console.log(lista8);
console.log(lista9);
```

## Slide 172

```js
// Lista de strings.
const lista10 = ["abacaxi", "banana", "morango", "uva", "melancia"];

let x = lista10.pop();
console.log(x);
console.log(lista10);

lista10.push("laranja");
console.log(lista10);

let y = lista10.shift();
console.log(y);
console.log(lista10);

lista10.unshift("kiwi");
console.log(lista10);
```

## Slide 173

```js
const casa1 = {
    area: 120,
    cor: "branco",
    comodos: 6,
    quartos: 2,
    banheiros: 1,
    pisos: 1
};

const casa2 = {};
casa2.area = 175;
casa2.cor = "azul";
casa2.comodos = 8;
casa2.quartos = 3;
casa2.banheiros = 2;
casa2.pisos = 2;
```

## Slides 174 e 175

```js
const casa3 = {
    area: 120,
    cor: "branco",
    comodos: 6,
    quartos: 2,
    banheiros: 1,
    pisos: 1,
    "tipo de construção": "alvenaria"
};
console.log(casa3);

casa3["área de jardim"] = 15;
casa3.pisos = 2;
casa3["pisos"] = 3;
let x = "banheiros";
casa3[x] = casa3[x] + 1;

console.log(casa3);
delete casa3.cor;
delete casa3["area"];
console.log(casa3.area, casa3["cor"], casa3.naoexiste);
```

## Slides 177 a 187

[Veja o código aqui](trajetoria/trajetoria2.html)

## Slides 190 e 191

[Veja o código aqui](trajetoria/trajetoria3.html)

## Slides 193 e 194

[Veja o código aqui](trajetoria/trajetoria4.html)

## Slide 197

```js
let a = 5;
let b = 8;
let c = (a === b);
console.log(a, b, c);
```

```js
let a = 5;
let b = 8;
let c = (a == b);
console.log(a, b, c);
```

```js
let a = 5;
let b = 8;
let c = (a = b);
console.log(a, b, c);
```

## Slide 198

```js
let a = 5;
let b = "5";
let c = (a === b);
console.log(a, b, c);
```

```js
let a = 5;
let b = "5";
let c = (a == b);
console.log(a, b, c);
```

## Slide 199

```js
let a = []; // Uma lista.
let b = []; // Outra lista.
let c = "";
console.log(a === c, b === c, a === b);
console.log(a ==  c, b ==  c, a ==  b);
```

## Slide 200

```js
let a = [];
let b = NaN
console.log(a === a, 5 === 5, "xxx" === "xxx");
console.log(b === b, b ==  b);
```

## Slide 209

```js
console.log("  ab c d  ".trim()); //→ "ab c d"
console.log("  ab c d  ".trimStart()); //→ "ab c d  "
console.log("  ab c d  ".trimEnd()); //→ "  ab c d"
console.log("abcdef".length); //→ 6
console.log("abcdef".charAt(3)); //→ "d"
console.log("aBcDeF".toLowerCase()); //→ "abcdef"
console.log("aBcDeF".toUpperCase()); //→ "ABCDEF"
console.log("abcdef".replaceAll("cd", "xyz")); //→ "abxyzef"
console.log("abcdef".substring(2, 5)); //→ "cde"
console.log("a-bc-d".split("-")); //→ ["a", "bc", "d"]
console.log("abcd".split("")); //→ ["a", "b", "c", "d"]
```

```js
console.log([1, 2, 3, 4].includes(3)); //→ true
console.log([1, 2, 3, 4].includes(7)); //→ false
```

## Slide 210

```js
let nome = "Carlos";
let idade = 42;
let texto1 = nome + " tem " + idade + " anos.";
let texto2 = `${nome} tem ${idade} anos.`;
console.log(texto1, texto2);
```

## Slide 211

```js
const dog = {
    tipo: "cachorro",
    fazerSom: function() {
        return "au au";
    }
};

const cat = {
    tipo: "gato",
    fazerSom: function() {
        return "miau";
    }
};

const lista = [dog, cat];
for (const animal of lista) {
    console.log(animal.fazerSom());
}
```

## Slide 212

```js
function criarCachorro(nome) {
    return {
        nome: nome,
        tipo: "cachorro",
        fazerSom: function() {
            return `${this.nome} au au`;
        }
    };
}

const lista = [
    criarCachorro("rex"),
    criarCachorro("totó")
];
for (const animal of lista) {
    console.log(animal.fazerSom());
}
```

## Slide 213

```js
function f1() {
    return "a";
}

let f2 = (function() {
    return "b";
});

let f3 = (function() {
    return "c";
});

console.log(f1() + f2() + f3());

let f4 = f1;
f1 = f2;
f2 = f3;
f3 = f4;

console.log(f1() + f2() + f3());
```

## Slide 214

```js
let f5 = () => 42;

let f6 = p => 2 * p;

let f7 = (p, q) => {
    if (p < q) {
        return 2 * p;
    } else {
        return 3 * q;
    }
};

console.log(f5());      // 42
console.log(f6(7));     // 14
console.log(f7(15, 3)); // 30
```

## Slides 218 a 222, lado esquerdo

```js
// JavaScript:
"use strict";

function triplo(valor) {
    return valor * 3;
}

/* Variáveis: */
let x = 42;
let y = "Mariana";
console.log(`${y} tem ${x} anos.`);

if (x === 18) {
    console.log("18 anos");
} else if (x < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}

let z = ["gato", "rato", "formiga"];
for (let animal of z) {
    console.log(animal);
}

console.log(triplo(5));
```

## Slide 218, lado direito

```java
// Java:
import java.util.List;

public class Teste {
    private static int triplo(int valor) {
        return valor * 3;
    }

    public static void main(String[] args) {
        /* Variáveis: */
        int x = 42;
        String y = "Mariana";
        System.out.println(y + " tem " + x + " anos.");

        if (x == 18) {
            System.out.println("18 anos");
        } else if (x < 18) {
            System.out.println("Menor de idade");
        } else {
            System.out.println("Maior de idade");
        }

        var z = List.of("gato", "rato", "formiga");
        for (String animal : z) {
            System.out.println(animal);
        }

        System.out.println(triplo(5));
    }
}
```

## Slide 219, lado direito

```cs
// C#:
public class Teste {
    private static int Triplo(int valor) {
        return valor * 3;
    }

    public static void Main() {
        /* Variáveis: */
        int x = 42;
        string y = "Mariana";
        Console.WriteLine($"{y} tem {x} anos.");

        if (x == 18) {
            Console.WriteLine("18 anos");
        } else if (x < 18) {
            Console.WriteLine("Menor de idade");
        } else {
            Console.WriteLine("Maior de idade");
        }

        var z = new List<string> { "gato", "rato", "formiga" };
        foreach (string animal in z) {
            Console.WriteLine(animal);
        }

        Console.WriteLine(Triplo(5));
    }
}
```

## Slide 220, lado direito

```c
// C:
#include <stdio.h>

int triplo(int valor) {
    return valor * 3;
}

int main(int argc, char **argv) {
    /* Variáveis: */
    int x = 42;
    char y[] = "Mariana";
    printf("%s tem %d anos.\n", y, x);

    if (x == 18) {
        printf("18 anos\n");
    } else if (x < 18) {
        printf("Menor de idade\n");
    } else {
        printf("Maior de idade\n");
    }

    char *z[] = {"gato", "rato", "formiga"};
    for (int i; i < 3; i++) {
        printf("%s\n", z[i]);
    }

    printf("%d\n", triplo(5));
    return 0;
}
```

## Slide 221, lado direito

```php
<?php
// PHP:

function triplo($valor) {
    return $valor * 3;
}

/* Variáveis: */
$x = 42;
$y = "Mariana";
echo "$y tem $x anos.\n";

if ($x === 18) {
    echo "18 anos\n";
} else if ($x < 18) {
    echo "Menor de idade\n";
} else {
    echo "Maior de idade\n";
}

$z = array("gato", "rato", "formiga");
foreach ($z as $animal) {
    echo "$animal\n";
}

echo triplo(5) . "\n";
?>
```

## Slide 222, lado direito

```python
# Python:

def triplo(valor):
    return valor * 3

# Variáveis:
x = 42
y = "Mariana"
print(f"{y} tem {x} anos.")

if x == 18:
    print("18 anos")
elif x < 18:
    print("Menor de idade")
else:
    print("Maior de idade")

z = ["gato", "rato", "formiga"]
for animal in z:
    print(animal)

print(triplo(5))
```

## Slides 227 a 231

* [Veja o HTML aqui.](teclas/teclas.html)
* [Veja o JS aqui.](teclas/teclas.js)

## Slides 238 a 241

* [Veja o HTML aqui.](desenho-som/desenho-som.html)
* [Veja o JS aqui.](desenho-som/desenho-som.js)
* [Imagem.](desenho-som/Trollface.png)
* [Áudio.](desenho-som/vamos-js.mp3)