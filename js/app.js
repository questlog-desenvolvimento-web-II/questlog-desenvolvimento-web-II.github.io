
const el = {
  // topo
  nivel: document.getElementById('nivel'),
  xpTexto: document.getElementById('xp-texto'),
  barraXp: document.getElementById('barra-xp'),
  penalidades: document.getElementById('penalidades'),

  // formulário
  form: document.getElementById('form-tarefa'),
  titulo: document.getElementById('titulo-tarefa'),
  prazo: document.getElementById('prazo-tarefa'),
  anexosRascunho: document.getElementById('anexos-rascunho'),
  inputArquivo: document.getElementById('input-arquivo'),
  btnDitar: document.getElementById('btn-ditar'),
  btnGravarVideo: document.getElementById('btn-gravar-video'),
  btnGravarAudio: document.getElementById('btn-gravar-audio'),
  btnArquivo: document.getElementById('btn-arquivo'),
  btnColar: document.getElementById('btn-colar'),
  btnDesenhar: document.getElementById('btn-desenhar'),

  // listas, contadores e mensagens de lista vazia
  listaPendentes: document.getElementById('lista-pendentes'),
  listaAtrasadas: document.getElementById('lista-atrasadas'),
  listaConcluidas: document.getElementById('lista-concluidas'),
  contPendentes: document.getElementById('contador-pendentes'),
  contAtrasadas: document.getElementById('contador-atrasadas'),
  contConcluidas: document.getElementById('contador-concluidas'),

  // template do cartão de tarefa
  tplTarefa: document.getElementById('tpl-tarefa'),

  // diálogo de gravação
  dlgGravacao: document.getElementById('dialogo-gravacao'),
  previewVideo: document.getElementById('preview-video'),
  cronometro: document.getElementById('cronometro'),
  btnPararGravacao: document.getElementById('btn-parar-gravacao'),
  btnCancelarGravacao: document.getElementById('btn-cancelar-gravacao'),

  // diálogo de desenho
  dlgDesenho: document.getElementById('dialogo-desenho'),
  canvas: document.getElementById('canvas-desenho'),
  infoPonteiro: document.getElementById('info-ponteiro'),
  btnLimparDesenho: document.getElementById('btn-limpar-desenho'),
  btnCancelarDesenho: document.getElementById('btn-cancelar-desenho'),
  btnSalvarDesenho: document.getElementById('btn-salvar-desenho'),

  // mensagens
  snackbar: document.getElementById('snackbar'),

  // adicionar
  btnAdicionar: document.getElementById('btn-adicionar')
};

// ---------- Contrato com o CSS ----------
// Cartão de tarefa (clone de #tpl-tarefa):
//   <li class="tarefa" data-status="pendente|atrasada|concluida">
//   campos internos: [data-campo="check|titulo|prazo|anexos"]
//   botões internos: [data-acao="ouvir|copiar|excluir"]
//
// Anexo (você cria via JS dentro de [data-campo="anexos"]):
//   <div class="anexo anexo--video|audio|imagem|arquivo|texto"> ... </div>
//   botão de remover (só no rascunho): <button class="anexo__remover">×</button>
//
// Snackbar: el.snackbar.className = 'snackbar visivel' (+ 'erro' ou 'xp')
// Chip de penalidade: <span class="chip chip--penalidade">-40%</span>
// Diálogos: el.dlgGravacao.showModal() / .close()

// ---------- Roteiro ----------
// 1. Estado + persistência (IndexedDB para tarefas/anexos, localStorage para XP)
// 2. Adicionar tarefa e renderizar nas três listas
// 3. Checkbox: concluirTarefa(id) (recusar se já passou do prazo)
// 4. Prazos: status derivado + setInterval + penalidade única por tarefa
// 5. XP: calcularXP() e reset das penalidades ao concluir
// 6. File API (arquivo corrompido)
// 7. Clipboard API
// 8. MediaDevices + MediaRecorder (mínimo de 3s)
// 9. Speech (ditado e leitura)
// 10. Pointer Events (canvas)


let tarefas = [];
let proximoId = 1;
let xp = 0;
const agora = new Date();

function adicionarTarefa(){
  if(el.titulo.value.trim().length > 0){
    let nome = el.titulo.value;
    let dataMax = el.prazo.value;

    let objeto =
      {
        id: proximoId,
        titulo: nome,
        prazo: dataMax,
        concluida: false,
        anexos: [],
        penalizada: false
      }

    tarefas.push(objeto)
    proximoId++;
    el.titulo.value = "";
    el.prazo.value = "";
  }
  else  
      return;
}

el.form.addEventListener("submit", function(e){
  e.preventDefault();
  adicionarTarefa();

  console.log(tarefas)
})




