Studio B'Sant — Barbershop e Hair Style

Landing page institucional para a barbearia Studio B'Sant Barbershop e Hair Style, em Salvador (BA). Site de página única, responsivo, feito em HTML, CSS e JavaScript puros, sem frameworks ou dependências externas além das fontes do Google Fonts.

Funcionalidades
Vitrine em carrossel — fotos em destaque no topo da página, com troca automática, setas de navegação manual e indicadores (dots), pausando ao passar o mouse.
Serviços — lista de preços com descrição curta de cada serviço.
Galeria filtrável — mosaico de fotos dos trabalhos realizados, filtrável por categoria (cortes, barbas, tranças, platinados, etc.), com visualização ampliada (lightbox) e zoom na própria imagem.
Vídeos em destaque — miniaturas em formato vertical que abrem um player em modal ao serem clicadas.
Horários e localização — sanfona (accordion) no menu mobile e caixa suspensa no menu desktop, com botão de rota direta para o Google Maps.
Nosso espaço — galeria assimétrica com fotos do ambiente interno da barbearia.
Sobre — seção institucional com animação de entrada ao rolar a página até ela.
Agendamento via WhatsApp — botões que abrem uma conversa já com mensagem padrão preenchida.
Múltiplos idiomas — português, inglês e espanhol, trocados por um botão no menu, com a preferência salva no navegador.
Menu mobile com botão hambúrguer animado e cabeçalho com sombra ao rolar a página.
Cursor personalizado (ícone de tesoura) em toda a página, exceto sobre fotos e vídeos clicáveis, que mantêm o cursor de lupa.
Totalmente responsivo, com layout dedicado para desktop e para celular.
Tecnologias
HTML5 semântico
CSS3 — variáveis customizadas, Grid, Flexbox, clamp() para tipografia fluida, prefers-reduced-motion respeitado em todas as animações
JavaScript (ES6+), sem bibliotecas ou frameworks
Fontes: Figtree e Young Serif, via Google Fonts
Estrutura do projeto
studio-bsant/
├── index.html
├── style.css
├── script.js
├── fotos/          # fotos de cortes, tranças e do espaço interno
└── videos/         # vídeos em destaque e suas capas
Como rodar localmente

Não é necessário nenhum processo de build. Basta:

Clonar o repositório.
Abrir o arquivo index.html diretamente no navegador, ou
Usando a extensão Live Server no VS Code, clicar com o botão direito em index.html → Open with Live Server.
Licença

Projeto de uso privado, desenvolvido para a barbearia Studio B'Sant Barbershop e Hair Style.
