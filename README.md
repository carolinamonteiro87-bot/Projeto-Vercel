# Padoka Mágica

Site institucional de uma padaria artesanal fictícia, inspirada no universo de *Puella Magi Madoka Magica*. A Padoka Mágica fica em "Mitakihara", foi fundada em 2011 pelo Seu Tomohisa e hoje conta com uma equipe de garotas mágicas no forno e no balcão — mas sem nenhum contrato escondido.

## Objetivo

A intenção deste projeto foi **treinar conceitos básicos de programação para a web**, com foco em:

- Estruturar um projeto front-end de forma organizada (separação entre HTML, CSS, JavaScript e assets);
- Escrever HTML semântico (`header`, `nav`, `main`, `section`, `footer`, `form`);
- Estilizar páginas com CSS, usando variáveis, fontes personalizadas e layout com Flexbox;
- Criar uma página responsiva com media queries;
- Publicar o site na web por meio de deploy na Vercel.

O tema divertido serve como pretexto para praticar esses fundamentos em um projeto completo, do início ao deploy.

## Seções da página

| Seção | Descrição |
| --- | --- |
| **Header** | Cabeçalho fixo com logo e menu de navegação por âncoras |
| **Hero** | Chamada principal com título, texto de apresentação, botões e imagem com selo "Desde 2011" |
| **Nossa História** | Texto sobre a padaria e cards com números curiosos |
| **Como chegar** | Mapa incorporado (Google Maps), endereço, horário de funcionamento e transporte |
| **Contato** | Formulário com nome, e-mail, telefone, assunto, produto e mensagem |
| **Footer** | Rodapé com navegação, contatos e copyright |

## Conceitos praticados

**HTML**
- Estrutura básica de um documento e metadados (`charset`, `viewport`, favicon)
- Tags semânticas e hierarquia de títulos
- Links internos com âncoras (`#hero`, `#historia`, ...)
- Imagens com texto alternativo (`alt`)
- Formulários: `input` (text, email, tel), `select`, `textarea`, `label` e validação com `required`
- Incorporação de conteúdo externo com `iframe`

**CSS**
- Reset de estilos e `box-sizing: border-box`
- Variáveis CSS (`:root`) para cores e medidas
- Fontes personalizadas com `@font-face` (Pacifico e Poppins)
- Organização em múltiplos arquivos com `@import`
- Flexbox para alinhamento e distribuição dos elementos
- Posicionamento (`fixed`, `relative`, `absolute`) e `z-index`
- Pseudo-classes (`:hover`, `:focus`), transições e transformações
- Rolagem suave com `scroll-behavior` e `scroll-padding-top`
- Responsividade com `@media (max-width: 768px)`

## Estrutura do projeto

```
Padoka_Magica/
├── index.html
├── README.md
├── assets/
│   ├── fonts/       # Pacifico e família Poppins
│   ├── icons/       # Ícones em SVG
│   └── img/         # Logo, imagem do hero e personagem
├── css/
│   ├── variables.css  # Cores, medidas e fontes
│   ├── layout.css     # Reset, header e footer
│   └── home.css       # Estilos das seções da página inicial
└── js/
    └── app.js         # Reservado para interações futuras
```

A folha de estilo principal (`home.css`) importa `layout.css`, que por sua vez importa `variables.css`. Assim, o `index.html` precisa referenciar apenas um arquivo CSS.

## Paleta de cores

| Variável | Cor |
| --- | --- |
| `--cor-rosa` | `#ffb6bb` |
| `--cor-amarela` | `#ffe691` |
| `--cor-roxa` | `#585872` |
| `--cor-azul` | `#95d5ee` |
| `--cor-vermelho` | `#9e4446` |
| `--cor-branca` | `#fafafa` |

## Como executar

Não há dependências nem etapa de build. Basta:

1. Clonar ou baixar este repositório;
2. Abrir o arquivo `index.html` no navegador.

Se preferir, use a extensão **Live Server** do VS Code para recarregar a página automaticamente a cada alteração.

## Deploy

O projeto é um site estático e pode ser publicado na **Vercel**, **Netlify** ou **GitHub Pages** importando o repositório e mantendo as configurações padrão (sem comando de build e com a raiz do projeto como diretório de saída).

## Próximos passos

- Criar a página de **Cardápio** (o link já existe no menu);
- Usar o `js/app.js` para adicionar interatividade, como o tratamento do envio do formulário;
- Ajustar os links dos botões do hero para apontar às seções correspondentes.

## Aviso!

Projeto com fins exclusivamente educacionais. Os personagens e referências pertencem aos seus respectivos criadores; a padaria, os produtos, o endereço e os contatos são fictícios.