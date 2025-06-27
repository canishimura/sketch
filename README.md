# Pong Game com p5.js

![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Um projeto simples do clássico jogo Pong, desenvolvido utilizando a biblioteca JavaScript **p5.js**. O jogo implementa um modo de um jogador contra uma inteligência artificial com dificuldade dinâmica.

---

### 🎮 Demonstração do Jogo

![image](https://github.com/user-attachments/assets/17061d15-c380-4012-9afd-4ad3ff1069d9)


---

### ✨ Funcionalidades

* **Jogabilidade Clássica:** Movimente sua raquete para rebater a bolinha e marcar pontos.
* **Jogador vs. IA:** Desafie um oponente controlado pelo computador.
* **IA com Dificuldade Dinâmica:** A "chance de errar" do oponente se ajusta com base no placar, tornando o jogo mais desafiador.
* **Sistema de Pontuação:** Acompanhe os pontos em tempo real na tela.
* **Efeitos Sonoros:** Sons para a trilha de fundo, para a raquetada e para os pontos marcados.

---

### 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura base da página.
* **JavaScript:** Linguagem principal para toda a lógica do jogo.
* **[p5.js](https://p5js.org/):** Biblioteca para desenho, animação e interatividade.
* **[p5.sound.js](https://p5js.org/reference/#/libraries/p5.sound):** Add-on para manipulação de áudio.
* **[p5.collide2d.js](https://github.com/bmoren/p5.collide2D):** Biblioteca para detecção de colisão 2D precisa entre os elementos.

---

### 🚀 Como Executar o Projeto

Para rodar este projeto, você precisa de um servidor web local. Isso é necessário porque os navegadores têm uma política de segurança (CORS) que impede o carregamento de arquivos locais (como sons e imagens) diretamente pelo `index.html`.

A maneira mais fácil é usando a extensão **Live Server** no Visual Studio Code:

1.  Clone este repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2.  Abra a pasta do projeto no VS Code.
3.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
4.  Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

Seu navegador abrirá automaticamente com o jogo funcionando.

---

### 🕹️ Como Jogar

* **Mover para Cima:** Use a `Seta para Cima` do teclado.
* **Mover para Baixo:** Use a `Seta para Baixo` do teclado.

O objetivo é rebater a bolinha e fazer com que o oponente não consiga pegá-la de volta. O primeiro a atingir a pontuação alvo vence!
