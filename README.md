⚔️ Questlog

📖 Sobre o projeto

O Questlog é uma Single Page Application responsiva de lista de tarefas, desenvolvida para a disciplina de Web II. Cada tarefa tem um prazo e pode receber anexos de vários tipos (vídeo, áudio, arquivos, texto colado, desenho feito à mão). Concluir tarefas dentro do prazo rende XP; deixar o prazo vencer gera penalidades que reduzem o XP das próximas conclusões.

O projeto foi feito em JavaScript puro (sem frameworks), usando apenas APIs nativas do navegador e o visual do Material Design 3.

✨ Funcionalidades
Criar tarefas com título e prazo
Marcar tarefas como concluídas por checkbox, movendo-as da lista de pendentes para a de concluídas
Tarefas atrasadas ficam bloqueadas e não podem mais ser concluídas
Anexar vídeo gravado pela câmera
Anexar áudio gravado pelo microfone (gravações com menos de 3 segundos são recusadas com aviso)
Anexar arquivos do dispositivo, com validação (arquivo corrompido gera mensagem de erro)
Copiar e colar texto e imagens direto na tarefa
Ditado por voz para preencher o título e leitura em voz alta das tarefas
Anotações à mão com mouse, caneta ou toque
Anexos exibidos logo abaixo do título da tarefa, como miniaturas e players
Sistema de XP com penalidades por atraso
Dados salvos no navegador (funciona após recarregar a página)
🎮 Regras de XP
Situação	Resultado
Concluir uma tarefa no prazo	Ganha XP
Deixar uma tarefa vencer	Não ganha XP e aplica uma penalidade
1º atraso	A próxima conclusão rende 40% a menos de XP
2º atraso seguido	Mais 30% de redução é somado à penalidade
Concluir qualquer tarefa	Todas as penalidades são zeradas

Cada tarefa atrasada gera penalidade uma única vez.

Exemplo (tarefa que vale 100 XP):

Atrasos acumulados	Multiplicador	XP da próxima conclusão
0	100%	100 XP
1	60%	60 XP
2	60% × 70% = 42%	42 XP
<!-- Ajuste a tabela acima se você decidir que as penalidades somam (-40% e -30% = -70%) em vez de acumular. -->
🧩 APIs utilizadas
API	Onde aparece no app
MediaDevices API	Acesso à câmera e ao microfone
MediaRecorder API	Gravação de vídeo e áudio das tarefas
Clipboard API	Copiar e colar texto e imagens
File API	Anexar arquivos e detectar arquivos corrompidos
Web Speech API (SpeechSynthesis e SpeechRecognition)	Leitura em voz alta e ditado por voz
Pointer Events	Interação por mouse, caneta e toque
Date / Intl	Prazos, contagem regressiva e verificação de atrasos
IndexedDB	Armazenamento local de tarefas e anexos
🛠️ Tecnologias
HTML5, CSS3 e JavaScript (ES6+)
Material Design 3 (tokens de cor, forma e elevação em CSS)
Hospedagem no GitHub Pages

📁 Estrutura do projeto
questlog/
├── index.html
├── css/
├── js/
├── assets/
├── README.md
└── LICENSE

⚠️ Limitações conhecidas
O ditado por voz (SpeechRecognition) funciona apenas em navegadores baseados em Chromium (Chrome, Edge) e precisa de internet
Os dados ficam somente no navegador do usuário, sem sincronização entre dispositivos
Limpar os dados do navegador apaga tarefas, anexos e XP
Câmera e microfone dependem da permissão do usuário

👤 Autor
Álvaro Gabriel Avelar Disciplina: Web II, Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais (IF Sudeste MG) Professor(a): RAFAEL JOSE DE ALENCAR ALMEIDA

