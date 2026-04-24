# 🏎️ Grand Prix do Théo - Convite Hot Wheels

Um convite digital interativo e responsivo criado para o aniversário de 6 anos do Théo. O projeto simula uma experiência de "Grand Prix" com o tema Hot Wheels, incluindo animações, mapa integrado e formulário de confirmação de presença (RSVP).

## 🚀 Funcionalidades

- **Design Temático:** Identidade visual inspirada na Hot Wheels com cores vibrantes (laranja/azul) e bandeiras quadriculadas.
- **RSVP Interativo:** Formulário para os convidados confirmarem presença, informarem o nome e o número de acompanhantes.
- **Integração com Google Maps:** Localização exata da festa (Habib's Rosa e Silva) integrada via iframe.
- **Totalmente Responsivo:** Design adaptado para uma visualização perfeita em dispositivos móveis e desktops.
- **Pronto para Sheet Monkey:** Estrutura preparada para enviar os dados do formulário diretamente para uma planilha do Google via API do Sheet Monkey.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3 (Tailwind CSS):** Estilização moderna, responsiva e animações personalizadas.
- **JavaScript:** Lógica de interatividade e manipulação do formulário.
- **Sheet Monkey API:** Para gerenciamento dos dados de RSVP.

## 📁 Estrutura de Arquivos

```text
/
├── index.html      # Esqueleto e conteúdo principal
├── style.css       # Estilização e animações
├── scripts.js      # Lógica de interatividade
└── assets/         # Pasta para imagens e ícones
```

## 🔧 Como Configurar o RSVP (Sheet Monkey)

Para que o formulário funcione e você receba as confirmações na sua planilha:

1. Vá até o site [Sheet Monkey](https://sheetmonkey.io/).
2. Crie um novo formulário e conecte-o à sua planilha do Google.
3. Copie o seu **Form Endpoint URL**.
4. No arquivo `index.html`, localize a tag `<form>` (por volta da linha 110).
5. Substitua o valor do atributo `action` pela URL que você copiou:

```html
<form action="SUA_URL_DO_SHEET_MONKEY_AQUI" method="POST" id="rsvp-form">
```

## 🏁 Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `scripts.js` estão na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador web.

---
*Projeto desenvolvido para a celebração de 6 anos do Piloto Théo! Que a festa seja em velocidade máxima!* 🏎️💨