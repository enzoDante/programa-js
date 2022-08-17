let texto_arquivo = "<?php\ninclude('');\n"
function arquivo(){
    let nome_arquivo = document.getElementById("nome_arquivo").value
    
    if(nome_arquivo != ''){
        let box = document.getElementsByClassName("caixa")
        for(let i =0; i < box.length; i++){
            if(box[i].checked){
                switch (box[i].value) {
                    case 'insert':
                        insert()
                        break;
                    case 'selectw':
                        selectw()
                        break;
                    case 'remove':
                        remove()
                        break;
                    case 'update':
                        update()
                        break;
                    case 'selectj':
                        selectj()
                        break;
                    default:
                        console.log("nada selecionado")
                        break;
                }
            }
        }
    }
}

function insert(){
    console.log("inserirr")
}
function selectw(){
    console.log("selectttwww")
}
function remove(){
    console.log("removee")
}
function update(){
    console.log("update")
}
function selectj(){
    console.log("select jj")
}