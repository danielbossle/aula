// EXERCIOS AULA 3

// 1 - VERIFICAR SE É NACIONAL OU INTERNACIONAL
// 2 - SE FOR INTERNACIONAL APLICAR 1.20 SE FOR NACIONAL 1.12 DE IMPOSTOS

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}; 
let texto = "O custo deste produto é de";

if (produtoA["internacional"] == true) {
console.log("O custo da " + produtoA["nome"] + " e de " + produtoA["valor"] * 1.20 + " com impostos internacionais")}
    else {("O custo da " + produtoA["nome"] + " e de " + produtoA["valor"] * 1.12 + " com impostos nacionais") 
    }

    if (produtoB["internacional"] == true) {
     console.log("O custo da " + produtoB["nome"] + " e de " + produtoB["valor"] * 1.20 + " com impostos internacionais")
 } else {
     console.log("O custo da " + produtoB["nome"] + " e de " + produtoB["valor"] * 1.12 + " com impostos nacionais") 
 }

    if (produtoC["internacional"] == true) {
        console.log("O custo da " + produtoC["nome"] + " e de " + produtoC["valor"] * 1.20 + " com impostos internacionais")
    } else {
        console.log("O custo da " + produtoC["nome"] + " e de " + produtoC["valor"] * 1.12 + " com impostos nacionais")
    }