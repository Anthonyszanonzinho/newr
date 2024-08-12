let users_a_serem_excluidos = []
let span = document.querySelector('span[id="numero_selecionados"]')
let tabela = document.querySelector('table[id="tabela"]').dataset.user

function pesquisar(x){
    let coluna = document.querySelector('select[id="coluna"]').value
    let todos_valore = ""
    if(coluna != "id"){
        todos_valore = document.querySelectorAll(`td[class="${coluna}"]`)
    } else {
        todos_valore = document.querySelectorAll(`th[class="${coluna}"]`)
    }
    
    for(i of todos_valore){
        let texto_linhas = i.innerText.toLowerCase()
        let texto_input = x.value.toLowerCase()

        if(texto_linhas.includes(texto_input)){
            document.getElementById(i.dataset.id).style.display = ""
        } else {
            document.getElementById(i.dataset.id).style.display = "none"
        }
    }
    
}

function adicionar_linha(x){
    if(users_a_serem_excluidos.includes(`${x.id}`) == false){
        users_a_serem_excluidos.push(x.id)
        span.innerText = users_a_serem_excluidos.length
        x.style.border = "0px solid red"
    } else {
        x.style.border = ""
        let u = users_a_serem_excluidos.filter(item => item !== x.id)
        users_a_serem_excluidos = u
        span.innerText = users_a_serem_excluidos.length
    }
   
}

function ir_para_o_site(){
    if(users_a_serem_excluidos.length >= 1){
        window.location.href = `/deletar/${tabela}/${users_a_serem_excluidos}`
    } else {
        window.alert("Selecione pelo menos um usuário")
    }
   
}