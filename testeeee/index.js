const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector ('#conteudo')
const botao = document.querySelector ('.highlight')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class = "preview hljs ${linguagem.value}" contententeditable="true" area-label="Editor de codigo"></code> `
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})