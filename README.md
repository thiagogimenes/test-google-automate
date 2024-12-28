# Cypress


#### Projeto em cypress 

> Instalar nodejs

> Instalar o npm

> Instalar cypress

> executar npx cypress open

### Cenários teste para validar com cypress

- Cenário 1: Busca de um site com sucesso
	- Dado que eu esteja na tela inicial do google
	- E preencha o campo de busca qazando
	- Quando clicar sobre o botão de PESQUISA GOOGLE
	- Então minha busca será apresentada
-
- Cenário 2: Busca de uma palavra com caracter especial
	- Dado que eu esteja na tela inicial do google
	- E preencha o campo busca com a palavra "$ucesso"
	- Quando clicar sobre o botão de PESQUISA GOOGLE
	- Então minha busca será apresentada com a palavra "Sucesso"
-
- Cenário 3: Busca de um texto com apenas números
	- Dado que eu esteja na tela inicial do google
	- E preencha o campo busca com números "123456789"
	- Quando clicar sobre o botão de PESQUISA GOOGLE
	- Então minha busca será apresentada
-
- Cenário 4: Busca de um texto com apenas letras
	- Dado que eu esteja na tela inicial do google
	- E preencha o campo busca com "aeiou"
	- Quando clicar sobre o botão de PESQUISA GOOGLE
	- Então minha busca será apresentada
-
- Cenário 5: Busca de uma frase completa
	- Dado que eu esteja na tela inicial do google
	- E preencha o campo com a frase "Como fazer um bolo de cenoura"
	- Quando clicar sobre o botão de PESQUISA GOOGLE
	- Então minha busca será apresentada
-
- Cenário 6: Busca de uma informação que não exista
	- Dado que eu esteja na tela inicial do google
	- E preencha o campo com a texto "13215646.654.9/asdfasd"
	- Quando clicar sobre o botão de PESQUISA GOOGLE
	- Então minha busca NÃO será apresentada
-
- Cenário 7: Busca de um site acessando através do link
	- DAdo que eu esteja na tela inicial do google
	- E preencha o campo com o texto "cypress"
	- E clicar sobre o botão de PESQUISA GOOGLE
	- Quando clicar no primeiro link da busca
	- Então deverá acessar o link site retornado na busca