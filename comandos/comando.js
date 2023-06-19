/*pop-ups*/
var pop1 = document.querySelector('.up1')
var pop2 = document.querySelector('.up2')
var pop3 = document.querySelector('.up3')

/*controle pop-up*/
var abra = document.querySelector('.abrir1')
abra.addEventListener('click', aba1)
function aba1(){
    pop1.showModal()
}
var fecha = document.querySelector('.fechar1')
fecha.addEventListener('click', fechamento)
function fechamento(){
    pop1.close()
    divresultado.style.display = 'none'
    erroaviso.style.display = 'none'
}


var abra2 = document.querySelector('.abrir2')
abra2.addEventListener('click', aba2)
function aba2(){
    pop1.close()
    pop2.showModal()
}
var fecha2 = document.querySelector('.fechar2')
fecha2.addEventListener('click', fechamento2)
function fechamento2(){
    pop2.close()
    pop1.showModal()
    caixa.style.display = 'none'
    aviso.style.display = 'none'
}


var abra3 = document.querySelector('.abrir3')
abra3.addEventListener('click', aba3)
function aba3(){
    pop3.showModal()
    pop1.close()
}
var fecha3 = document.querySelector('.fechar3')
fecha3.addEventListener('click', fechamento3)
function fechamento3(){
    contEdicao.style.display = 'none'
    pop3.close()
    pop1.showModal()
}

/*arrays*/
const repetidos = []
const nomesAlun1 = []
const nomesAlun2 = []
const nomesAlun3 = []
const nomesAlun4 = []
const nomesAlun5 = []
const nomesAlun6 = []
const nomesAlun7 = []
const nomesAlun8 = []
const nomesAlun9 = []
const nomesAlun10 = []
const nomesAlun11 = []

const nota1 = []
const nota1Matematica = []
const nota1Fisica = []
const nota1Quimica = []
const nota1Historia = []
const nota1Geografia = []
const nota1Gramatica = []
const nota1Filosofia = []
const nota1Sociologia = []
const nota1Biologia = []
const nota1Redação = []
const nota1Artes = []

const nota2 = []
const nota2Matematica = []
const nota2Fisica = []
const nota2Quimica = []
const nota2Historia = []
const nota2Geografia = []
const nota2Gramatica = []
const nota2Filosofia = []
const nota2Sociologia = []
const nota2Biologia = []
const nota2Redação = []
const nota2Artes = []

const nota3 = []
const nota3Matematica = []
const nota3Fisica = []
const nota3Quimica = []
const nota3Historia = []
const nota3Geografia = []
const nota3Gramatica = []
const nota3Filosofia = []
const nota3Sociologia = []
const nota3Biologia = []
const nota3Redação = []
const nota3Artes = []

const nota4 = []
const nota4Matematica = []
const nota4Fisica = []
const nota4Quimica = []
const nota4Historia = []
const nota4Geografia = []
const nota4Gramatica = []
const nota4Filosofia = []
const nota4Sociologia = []
const nota4Biologia = []
const nota4Redação = []
const nota4Artes = []

const medias = []
const mediasMatematica = []
const mediasFisica = []
const mediasQuimica = []
const mediasHistoria = []
const mediasGeografia = []
const mediasGramatica = []
const mediasFilosofia = []
const mediasSociologia = []
const mediasBiologia = []
const mediasRedação = []
const mediasArtes = []

/*controles de formulario*/
/*CALCULADORA DE MEDIA*/
function calcmedia(){
    event.preventDefault()
    var nome = document.querySelector('.nome-aluno')
    var valnome = nome.value

    var n1 = document.querySelector('.nota1')
    var n2 = document.querySelector('.nota2')
    var n3 = document.querySelector('.nota3')
    var n4 = document.querySelector('.nota4')

    var valn1 = Number(n1.value)
    var valn2 = Number(n2.value)
    var valn3 = Number(n3.value)
    var valn4 = Number(n4.value)

    var media = (valn1 + valn2 + valn3 + valn4) / 4

    var esc = document.getElementById('materia')
    var escmat = esc.options[esc.selectedIndex].value
    if (escmat == '1'){
        var pesquisa = nomesAlun1.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun1.push(valnome)
            nota1Matematica.push(valn1)
            nota2Matematica.push(valn2)
            nota3Matematica.push(valn3)
            nota4Matematica.push(valn4)
            mediasMatematica.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '2'){
        var pesquisa = nomesAlun2.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun2.push(valnome)
            nota1Fisica.push(valn1)
            nota2Fisica.push(valn2)
            nota3Fisica.push(valn3)
            nota4Fisica.push(valn4)
            mediasFisica.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '3'){
        var pesquisa = nomesAlun3.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun3.push(valnome)
            nota1Quimica.push(valn1)
            nota2Quimica.push(valn2)
            nota3Quimica.push(valn3)
            nota4Quimica.push(valn4)
            mediasQuimica.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '4'){
        var pesquisa = nomesAlun4.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun4.push(valnome)
            nota1Historia.push(valn1)
            nota2Historia.push(valn2)
            nota3Historia.push(valn3)
            nota4Historia.push(valn4)
            mediasHistoria.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '5'){
        var pesquisa = nomesAlun5.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun5.push(valnome)
            nota1Geografia.push(valn1)
            nota2Geografia.push(valn2)
            nota3Geografia.push(valn3)
            nota4Geografia.push(valn4)
            mediasGeografia.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '6'){
        var pesquisa = nomesAlun6.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun6.push(valnome)
            nota1Gramatica.push(valn1)
            nota2Gramatica.push(valn2)
            nota3Gramatica.push(valn3)
            nota4Gramatica.push(valn4)
            mediasGramatica.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '7'){
        var pesquisa = nomesAlun7.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun7.push(valnome)
            nota1Filosofia.push(valn1)
            nota2Filosofia.push(valn2)
            nota3Filosofia.push(valn3)
            nota4Filosofia.push(valn4)
            mediasFilosofia.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '8'){
        var pesquisa = nomesAlun8.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun8.push(valnome)
            nota1Sociologia.push(valn1)
            nota2Sociologia.push(valn2)
            nota3Sociologia.push(valn3)
            nota4Sociologia.push(valn4)
            mediasSociologia.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '9'){
        var pesquisa = nomesAlun9.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun9.push(valnome)
            nota1Biologia.push(valn1)
            nota2Biologia.push(valn2)
            nota3Biologia.push(valn3)
            nota4Biologia.push(valn4)
            mediasBiologia.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if(escmat == '10'){
        var pesquisa = nomesAlun10.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun10.push(valnome)
            nota1Redação.push(valn1)
            nota2Redação.push(valn2)
            nota3Redação.push(valn3)
            nota4Redação.push(valn4)
            mediasRedação.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }else if (escmat == '11'){
        var pesquisa = nomesAlun11.indexOf(valnome)
        if(pesquisa == -1){
            nomesAlun11.push(valnome)
            nota1Artes.push(valn1)
            nota2Artes.push(valn2)
            nota3Artes.push(valn3)
            nota4Artes.push(valn4)
            mediasArtes.push(media)
            window.alert(`As notas de ${valnome} foram salvas`)
        }else{
            window.alert("nome repetido. Digite outro nome.")
        }
    }
}

/*buscador de nota por aluno*/
var erroaviso = document.querySelector('.conteiner-aviso-a')
var divresultado = document.querySelector('.div-result')
function mostrar(){
    event.preventDefault()
    var mostranome = document.querySelector('.void-name')
    var mostranota1 = document.querySelector('.void-nota1')
    var mostranota2 = document.querySelector('.void-nota2')
    var mostranota3 = document.querySelector('.void-nota3')
    var mostranota4 = document.querySelector('.void-nota4')
    var mostramedia = document.querySelector('.void-media')

    var esc = document.getElementById('materia-busc')
    var escmat = esc.options[esc.selectedIndex].value
    if (escmat == '1'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun1.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun1[numpesquisa]
        var pesquisanota1 = nota1Matematica[numpesquisa]
        var pesquisanota2 = nota2Matematica[numpesquisa]
        var pesquisanota3 = nota3Matematica[numpesquisa]
        var pesquisanota4 = nota4Matematica[numpesquisa]
        var pesquisamedia = mediasMatematica[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia
    }else if(escmat == '2'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun2.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun2[numpesquisa]
        var pesquisanota1 = nota1Fisica[numpesquisa]
        var pesquisanota2 = nota2Fisica[numpesquisa]
        var pesquisanota3 = nota3Fisica[numpesquisa]
        var pesquisanota4 = nota4Fisica[numpesquisa]
        var pesquisamedia = mediasFisica[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if(escmat == '3'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun3.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun3[numpesquisa]
        var pesquisanota1 = nota1Quimica[numpesquisa]
        var pesquisanota2 = nota2Quimica[numpesquisa]
        var pesquisanota3 = nota3Quimica[numpesquisa]
        var pesquisanota4 = nota4Quimica[numpesquisa]
        var pesquisamedia = mediasQuimica[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia
    }else if(escmat == '4'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun4.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun4[numpesquisa]
        var pesquisanota1 = nota1Historia[numpesquisa]
        var pesquisanota2 = nota2Historia[numpesquisa]
        var pesquisanota3 = nota3Historia[numpesquisa]
        var pesquisanota4 = nota4Historia[numpesquisa]
        var pesquisamedia = mediasHistoria[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if(escmat == '5'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun5.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun5[numpesquisa]
        var pesquisanota1 = nota1Geografia[numpesquisa]
        var pesquisanota2 = nota2Geografia[numpesquisa]
        var pesquisanota3 = nota3Geografia[numpesquisa]
        var pesquisanota4 = nota4Geografia[numpesquisa]
        var pesquisamedia = mediasGeografia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if(escmat == '6'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun6.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun6[numpesquisa]
        var pesquisanota1 = nota1Gramatica[numpesquisa]
        var pesquisanota2 = nota2Gramatica[numpesquisa]
        var pesquisanota3 = nota3Gramatica[numpesquisa]
        var pesquisanota4 = nota4Gramatica[numpesquisa]
        var pesquisamedia = mediasGramatica[numpesquisa]


        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if(escmat == '7'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun7.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun7[numpesquisa]
        var pesquisanota1 = nota1Filosofia[numpesquisa]
        var pesquisanota2 = nota2Filosofia[numpesquisa]
        var pesquisanota3 = nota3Filosofia[numpesquisa]
        var pesquisanota4 = nota4Filosofia[numpesquisa]
        var pesquisamedia = mediasFilosofia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if(escmat == '8'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun8.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun8[numpesquisa]
        var pesquisanota1 = nota1Sociologia[numpesquisa]
        var pesquisanota2 = nota2Sociologia[numpesquisa]
        var pesquisanota3 = nota3Sociologia[numpesquisa]
        var pesquisanota4 = nota4Sociologia[numpesquisa]
        var pesquisamedia = mediasSociologia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if(escmat == '9'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun9.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun9[numpesquisa]
        var pesquisanota1 = nota1Biologia[numpesquisa]
        var pesquisanota2 = nota2Biologia[numpesquisa]
        var pesquisanota3 = nota3Biologia[numpesquisa]
        var pesquisanota4 = nota4Biologia[numpesquisa]
        var pesquisamedia = mediasBiologia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if(escmat == '10'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun10.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun10[numpesquisa]
        var pesquisanota1 = nota1Redação[numpesquisa]
        var pesquisanota2 = nota2Redação[numpesquisa]
        var pesquisanota3 = nota3Redação[numpesquisa]
        var pesquisanota4 = nota4Redação[numpesquisa]
        var pesquisamedia = mediasRedação[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }else if (escmat == '11'){
        var seekname = document.querySelector('.busc-nome')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun11.indexOf(valueseek)

        if(numpesquisa == -1){
            divresultado.style.display = 'none'
            erroaviso.style.display = 'flex'
        }else{
            divresultado.style.display = 'flex'
            erroaviso.style.display = 'none'
        }

        var pesquisanome = nomesAlun11[numpesquisa]
        var pesquisanota1 = nota1Artes[numpesquisa]
        var pesquisanota2 = nota2Artes[numpesquisa]
        var pesquisanota3 = nota3Artes[numpesquisa]
        var pesquisanota4 = nota4Artes[numpesquisa]
        var pesquisamedia = mediasArtes[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

    }
}
/*BOLETIM DE ALUNO*/
var caixa = document.querySelector('.conteiner-boletim')
var aviso = document.querySelector('.conteiner-aviso-b')
function boletim(){
    event.preventDefault()
    var seekname = document.querySelector('.busc-nome-b')
    var valueseek = seekname.value
    var numpesquisa1 = nomesAlun1.indexOf(valueseek)
    var numpesquisa2 = nomesAlun2.indexOf(valueseek)
    var numpesquisa3 = nomesAlun3.indexOf(valueseek)
    var numpesquisa4 = nomesAlun4.indexOf(valueseek)
    var numpesquisa5 = nomesAlun5.indexOf(valueseek)
    var numpesquisa6 = nomesAlun6.indexOf(valueseek)
    var numpesquisa7 = nomesAlun7.indexOf(valueseek)
    var numpesquisa8 = nomesAlun8.indexOf(valueseek)
    var numpesquisa9 = nomesAlun9.indexOf(valueseek)
    var numpesquisa10 = nomesAlun10.indexOf(valueseek)
    var numpesquisa11 = nomesAlun11.indexOf(valueseek)

    if(numpesquisa1 == -1 || numpesquisa2 == -1 || numpesquisa3 == -1 || numpesquisa4 == -1 || numpesquisa5 == -1|| numpesquisa6 == -1 || numpesquisa7 == -1 || numpesquisa8 == -1 || numpesquisa9 == -1 || numpesquisa10 == -1 || numpesquisa11 == -1){
        caixa.style.display = 'none'
        aviso.style.display = 'flex'
    }else{
        caixa.style.display = 'flex'
        aviso.style.display = 'none'
    }

    var n1m = nota1Matematica[numpesquisa1]
    var n2m = nota2Matematica[numpesquisa1]
    var n3m = nota3Matematica[numpesquisa1]
    var n4m = nota4Matematica[numpesquisa1]
    var m1m = mediasMatematica[numpesquisa1]

    var n1f = nota1Fisica[numpesquisa2]
    var n2f = nota2Fisica[numpesquisa2]
    var n3f = nota3Fisica[numpesquisa2]
    var n4f = nota4Fisica[numpesquisa2]
    var m1f = mediasFisica[numpesquisa2]

    var n1q = nota1Quimica[numpesquisa3]
    var n2q = nota2Quimica[numpesquisa3]
    var n3q = nota3Quimica[numpesquisa3]
    var n4q = nota4Quimica[numpesquisa3]
    var m1q = mediasQuimica[numpesquisa3]

    var n1h = nota1Historia[numpesquisa4]
    var n2h = nota2Historia[numpesquisa4]
    var n3h = nota3Historia[numpesquisa4]
    var n4h = nota4Historia[numpesquisa4]
    var m1h = mediasHistoria[numpesquisa4]

    var n1g = nota1Geografia[numpesquisa5]
    var n2g = nota2Geografia[numpesquisa5]
    var n3g = nota3Geografia[numpesquisa5]
    var n4g = nota4Geografia[numpesquisa5]
    var m1g = mediasGeografia[numpesquisa5]

    var n1gr = nota1Gramatica[numpesquisa6]
    var n2gr = nota2Gramatica[numpesquisa6]
    var n3gr = nota3Gramatica[numpesquisa6]
    var n4gr = nota4Gramatica[numpesquisa6]
    var m1gr = mediasGramatica[numpesquisa6]

    var n1fl = nota1Filosofia[numpesquisa7]
    var n2fl = nota2Filosofia[numpesquisa7]
    var n3fl = nota3Filosofia[numpesquisa7]
    var n4fl = nota4Filosofia[numpesquisa7]
    var m1fl = mediasFilosofia[numpesquisa7]

    var n1sc = nota1Sociologia[numpesquisa8]
    var n2sc = nota2Sociologia[numpesquisa8]
    var n3sc = nota3Sociologia[numpesquisa8]
    var n4sc = nota4Sociologia[numpesquisa8]
    var m1sc = mediasSociologia[numpesquisa8]

    var n1b = nota1Biologia[numpesquisa9]
    var n2b = nota2Biologia[numpesquisa9]
    var n3b = nota3Biologia[numpesquisa9]
    var n4b = nota4Biologia[numpesquisa9]
    var m1b = mediasBiologia[numpesquisa9]

    var n1r = nota1Redação[numpesquisa10]
    var n2r = nota2Redação[numpesquisa10]
    var n3r = nota3Redação[numpesquisa10]
    var n4r = nota4Redação[numpesquisa10]
    var m1r = mediasRedação[numpesquisa10]

    var n1ar = nota1Artes[numpesquisa11]
    var n2ar = nota2Artes[numpesquisa11]
    var n3ar = nota3Artes[numpesquisa11]
    var n4ar = nota4Artes[numpesquisa11]
    var m1ar = mediasArtes[numpesquisa11]


    var n1l1 = document.querySelector('.nm1')
    n1l1.innerHTML = n1m
    var n2l1 = document.querySelector('.nm2')
    n2l1.innerHTML = n2m
    var n3l1 = document.querySelector('.nm3')
    n3l1.innerHTML = n3m
    var n4l1 = document.querySelector('.nm4')
    n4l1.innerHTML = n4m
    var m1l1 = document.querySelector('.mm1')
    m1l1.innerHTML = m1m
    var sl1 = document.querySelector('.sm1')
    if (m1m >= 7){
        sl1.innerHTML = 'aprovado'
    }else{
        sl1.innerHTML = 'reprovado'
    }


    var n1l2 = document.querySelector('.nf1')
    n1l2.innerHTML = n1f
    var n2l2 = document.querySelector('.nf2')
    n2l2.innerHTML = n2f
    var n3l2 = document.querySelector('.nf3')
    n3l2.innerHTML = n3f
    var n4l2 = document.querySelector('.nf4')
    n4l2.innerHTML = n4f
    var m1l2 = document.querySelector('.mf1')
    m1l2.innerHTML = m1f
    var sl2 = document.querySelector('.sf1')
    if (m1f >= 7){
        sl2.innerHTML = 'aprovado'
    }else{
        sl2.innerHTML = 'reprovado'
    }


    var n1l3 = document.querySelector('.nq1')
    n1l3.innerHTML = n1q
    var n2l3 = document.querySelector('.nq2')
    n2l3.innerHTML = n2q
    var n3l3 = document.querySelector('.nq3')
    n3l3.innerHTML = n3q
    var n4l3 = document.querySelector('.nq4')
    n4l3.innerHTML = n4q
    var m1l3 = document.querySelector('.mq1')
    m1l3.innerHTML = m1q
    var sl3 = document.querySelector('.sq1')
    if (m1q >= 7){
        sl3.innerHTML = 'aprovado'
    }else{
        sl3.innerHTML = 'reprovado'
    }


    var n1l4 = document.querySelector('.nh1')
    n1l4.innerHTML = n1h
    var n2l4 = document.querySelector('.nh2')
    n2l4.innerHTML = n2h
    var n3l4 = document.querySelector('.nh3')
    n3l4.innerHTML = n3h
    var n4l4 = document.querySelector('.nh4')
    n4l4.innerHTML = n4h
    var m1l4 = document.querySelector('.mh1')
    m1l4.innerHTML = m1h
    var sl4 = document.querySelector('.sh1')
    if (m1h >= 7){
        sl4.innerHTML = 'aprovado'
    }else{
        sl4.innerHTML = 'reprovado'
    }


    var n1l5 = document.querySelector('.ng1')
    n1l5.innerHTML = n1g
    var n2l5 = document.querySelector('.ng2')
    n2l5.innerHTML = n2g
    var n3l5 = document.querySelector('.ng3')
    n3l5.innerHTML = n3g
    var n4l5 = document.querySelector('.ng4')
    n4l5.innerHTML = n4g
    var m1l5 = document.querySelector('.mg1')
    m1l5.innerHTML = m1g
    var sl5 = document.querySelector('.sg1')
    if (m1g >= 7){
        sl5.innerHTML = 'aprovado'
    }else{
        sl5.innerHTML = 'reprovado'
    }


    var n1l6 = document.querySelector('.ngr1')
    n1l6.innerHTML = n1gr
    var n2l6 = document.querySelector('.ngr2')
    n2l6.innerHTML = n2gr
    var n3l6 = document.querySelector('.ngr3')
    n3l6.innerHTML = n3gr
    var n4l6 = document.querySelector('.ngr4')
    n4l6.innerHTML = n4gr
    var m1l6 = document.querySelector('.mgr1')
    m1l6.innerHTML = m1gr
    var sl6 = document.querySelector('.sgr1')
    if (m1gr >= 7){
        sl6.innerHTML = 'aprovado'
    }else{
        sl6.innerHTML = 'reprovado'
    }


    var n1l7 = document.querySelector('.nfl1')
    n1l7.innerHTML = n1fl
    var n2l7 = document.querySelector('.nfl2')
    n2l7.innerHTML = n2fl
    var n3l7 = document.querySelector('.nfl3')
    n3l7.innerHTML = n3fl
    var n4l7 = document.querySelector('.nfl4')
    n4l7.innerHTML = n4fl
    var m1l7 = document.querySelector('.mfl1')
    m1l7.innerHTML = m1fl
    var sl7 = document.querySelector('.sfl1')
    if (m1fl >= 7){
        sl7.innerHTML = 'aprovado'
    }else{
        sl7.innerHTML = 'reprovado'
    }


    var n1l8 = document.querySelector('.nsc1')
    n1l8.innerHTML = n1sc
    var n2l8 = document.querySelector('.nsc2')
    n2l8.innerHTML = n2sc
    var n3l8 = document.querySelector('.nsc3')
    n3l8.innerHTML = n3sc
    var n4l8 = document.querySelector('.nsc4')
    n4l8.innerHTML = n4sc
    var m1l8 = document.querySelector('.msc1')
    m1l8.innerHTML = m1sc
    var sl8 = document.querySelector('.ssc1')
    if (m1sc >= 7){
        sl8.innerHTML = 'aprovado'
    }else{
        sl8.innerHTML = 'reprovado'
    }


    var n1l9 = document.querySelector('.nb1')
    n1l9.innerHTML = n1b
    var n2l9 = document.querySelector('.nb2')
    n2l9.innerHTML = n2b
    var n3l9 = document.querySelector('.nb3')
    n3l9.innerHTML = n3b
    var n4l9 = document.querySelector('.nb4')
    n4l9.innerHTML = n4b
    var m1l9 = document.querySelector('.mb1')
    m1l9.innerHTML = m1b
    var sl9 = document.querySelector('.sb1')
    if (m1b >= 7){
        sl9.innerHTML = 'aprovado'
    }else{
        sl9.innerHTML = 'reprovado'
    }


    var n1l10 = document.querySelector('.nr1')
    n1l10.innerHTML = n1r
    var n2l10 = document.querySelector('.nr2')
    n2l10.innerHTML = n2r
    var n3l10 = document.querySelector('.nr3')
    n3l10.innerHTML = n3r
    var n4l10 = document.querySelector('.nr4')
    n4l10.innerHTML = n4r
    var m1l10 = document.querySelector('.mr1')
    m1l10.innerHTML = m1r
    var sl10 = document.querySelector('.sr1')
    if (m1r >= 7){
        sl10.innerHTML = 'aprovado'
    }else{
        sl10.innerHTML = 'reprovado'
    }


    var n1l12 = document.querySelector('.na1')
    n1l12.innerHTML = n1ar
    var n2l12 = document.querySelector('.na2')
    n2l12.innerHTML = n2ar
    var n3l12 = document.querySelector('.na3')
    n3l12.innerHTML = n3ar
    var n4l12 = document.querySelector('.na4')
    n4l12.innerHTML = n4ar
    var m1l12 = document.querySelector('.ma1')
    m1l12.innerHTML = m1ar
    var sl11 = document.querySelector('.sa1')
    if (m1ar >= 7){
        sl11.innerHTML = 'aprovado'
    }else{
        sl11.innerHTML = 'reprovado'
    }
}

/*EDITAR NOTAS*/
var avisoEdit = document.querySelector('.conteiner-aviso-edit')
var contEdicao = document.querySelector('.conteiner-edicao')
var edito = document.querySelector('.busc')
edito.addEventListener('click', editar)
function editar(){
    event.preventDefault()
    contEdicao.style.display = 'flex'

    var mostranome = document.querySelector('.val-nome')
    var mostranota1 = document.querySelector('.val-nota-1')
    var mostranota2 = document.querySelector('.val-nota-2')
    var mostranota3 = document.querySelector('.val-nota-3')
    var mostranota4 = document.querySelector('.val-nota-4')
    var mostramedia = document.querySelector('.val-media')

    var esc = document.getElementById('altera-esc')
    var escmat = esc.options[esc.selectedIndex].value
    if (escmat == '1'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun1.indexOf(valueseek)

        var pesquisanome = nomesAlun1[numpesquisa]
        var pesquisanota1 = nota1Matematica[numpesquisa]
        var pesquisanota2 = nota2Matematica[numpesquisa]
        var pesquisanota3 = nota3Matematica[numpesquisa]
        var pesquisanota4 = nota4Matematica[numpesquisa]
        var pesquisamedia = mediasMatematica[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar1)
        function mudar1(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Matematica.splice(numpesquisa, 1, notaNova1)
            nota2Matematica.splice(numpesquisa, 1, notaNova2)
            nota3Matematica.splice(numpesquisa, 1, notaNova3)
            nota4Matematica.splice(numpesquisa, 1, notaNova4)
            mediasMatematica.splice(numpesquisa, 1, mediaNova)
        }
    }else if(escmat == '2'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun2.indexOf(valueseek)


        var pesquisanome = nomesAlun2[numpesquisa]
        var pesquisanota1 = nota1Fisica[numpesquisa]
        var pesquisanota2 = nota2Fisica[numpesquisa]
        var pesquisanota3 = nota3Fisica[numpesquisa]
        var pesquisanota4 = nota4Fisica[numpesquisa]
        var pesquisamedia = mediasFisica[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar2)
        function mudar2(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Fisica.splice(numpesquisa, 1, notaNova1)
            nota2Fisica.splice(numpesquisa, 1, notaNova2)
            nota3Fisica.splice(numpesquisa, 1, notaNova3)
            nota4Fisica.splice(numpesquisa, 1, notaNova4)
            mediasFisica.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '3'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun3.indexOf(valueseek)


        var pesquisanome = nomesAlun3[numpesquisa]
        var pesquisanota1 = nota1Quimica[numpesquisa]
        var pesquisanota2 = nota2Quimica[numpesquisa]
        var pesquisanota3 = nota3Quimica[numpesquisa]
        var pesquisanota4 = nota4Quimica[numpesquisa]
        var pesquisamedia = mediasQuimica[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar3)
        function mudar3(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Quimica.splice(numpesquisa, 1, notaNova1)
            nota2Quimica.splice(numpesquisa, 1, notaNova2)
            nota3Quimica.splice(numpesquisa, 1, notaNova3)
            nota4Quimica.splice(numpesquisa, 1, notaNova4)
            mediasQuimica.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '4'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun4.indexOf(valueseek)


        var pesquisanome = nomesAlun4[numpesquisa]
        var pesquisanota1 = nota1Historia[numpesquisa]
        var pesquisanota2 = nota2Historia[numpesquisa]
        var pesquisanota3 = nota3Historia[numpesquisa]
        var pesquisanota4 = nota4Historia[numpesquisa]
        var pesquisamedia = mediasHistoria[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar4)
        function mudar4(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Historia.splice(numpesquisa, 1, notaNova1)
            nota2Historia.splice(numpesquisa, 1, notaNova2)
            nota3Historia.splice(numpesquisa, 1, notaNova3)
            nota4Historia.splice(numpesquisa, 1, notaNova4)
            mediasHistoria.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '5'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun5.indexOf(valueseek)


        var pesquisanome = nomesAlun5[numpesquisa]
        var pesquisanota1 = nota1Geografia[numpesquisa]
        var pesquisanota2 = nota2Geografia[numpesquisa]
        var pesquisanota3 = nota3Geografia[numpesquisa]
        var pesquisanota4 = nota4Geografia[numpesquisa]
        var pesquisamedia = mediasGeografia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar5)
        function mudar5(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Geografia.splice(numpesquisa, 1, notaNova1)
            nota2Geografia.splice(numpesquisa, 1, notaNova2)
            nota3Geografia.splice(numpesquisa, 1, notaNova3)
            nota4Geografia.splice(numpesquisa, 1, notaNova4)
            mediasGeografia.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '6'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun6.indexOf(valueseek)


        var pesquisanome = nomesAlun6[numpesquisa]
        var pesquisanota1 = nota1Gramatica[numpesquisa]
        var pesquisanota2 = nota2Gramatica[numpesquisa]
        var pesquisanota3 = nota3Gramatica[numpesquisa]
        var pesquisanota4 = nota4Gramatica[numpesquisa]
        var pesquisamedia = mediasGramatica[numpesquisa]


        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar6)
        function mudar6(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Gramatica.splice(numpesquisa, 1, notaNova1)
            nota2Gramatica.splice(numpesquisa, 1, notaNova2)
            nota3Gramatica.splice(numpesquisa, 1, notaNova3)
            nota4Gramatica.splice(numpesquisa, 1, notaNova4)
            mediasGramatica.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '7'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun7.indexOf(valueseek)


        var pesquisanome = nomesAlun7[numpesquisa]
        var pesquisanota1 = nota1Filosofia[numpesquisa]
        var pesquisanota2 = nota2Filosofia[numpesquisa]
        var pesquisanota3 = nota3Filosofia[numpesquisa]
        var pesquisanota4 = nota4Filosofia[numpesquisa]
        var pesquisamedia = mediasFilosofia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar7)
        function mudar7(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Filosofia.splice(numpesquisa, 1, notaNova1)
            nota2Filosofia.splice(numpesquisa, 1, notaNova2)
            nota3Filosofia.splice(numpesquisa, 1, notaNova3)
            nota4Filosofia.splice(numpesquisa, 1, notaNova4)
            mediasFilosofia.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '8'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun8.indexOf(valueseek)


        var pesquisanome = nomesAlun8[numpesquisa]
        var pesquisanota1 = nota1Sociologia[numpesquisa]
        var pesquisanota2 = nota2Sociologia[numpesquisa]
        var pesquisanota3 = nota3Sociologia[numpesquisa]
        var pesquisanota4 = nota4Sociologia[numpesquisa]
        var pesquisamedia = mediasSociologia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar8)
        function mudar8(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Sociologia.splice(numpesquisa, 1, notaNova1)
            nota2Sociologia.splice(numpesquisa, 1, notaNova2)
            nota3Sociologia.splice(numpesquisa, 1, notaNova3)
            nota4Sociologia.splice(numpesquisa, 1, notaNova4)
            mediasSociologia.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '9'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun9.indexOf(valueseek)


        var pesquisanome = nomesAlun9[numpesquisa]
        var pesquisanota1 = nota1Biologia[numpesquisa]
        var pesquisanota2 = nota2Biologia[numpesquisa]
        var pesquisanota3 = nota3Biologia[numpesquisa]
        var pesquisanota4 = nota4Biologia[numpesquisa]
        var pesquisamedia = mediasBiologia[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar9)
        function mudar9(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Biologia.splice(numpesquisa, 1, notaNova1)
            nota2Biologia.splice(numpesquisa, 1, notaNova2)
            nota3Biologia.splice(numpesquisa, 1, notaNova3)
            nota4Biologia.splice(numpesquisa, 1, notaNova4)
            mediasBiologia.splice(numpesquisa,1, mediaNova)
        }
    }else if(escmat == '10'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun10.indexOf(valueseek)


        var pesquisanome = nomesAlun10[numpesquisa]
        var pesquisanota1 = nota1Redação[numpesquisa]
        var pesquisanota2 = nota2Redação[numpesquisa]
        var pesquisanota3 = nota3Redação[numpesquisa]
        var pesquisanota4 = nota4Redação[numpesquisa]
        var pesquisamedia = mediasRedação[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar10)
        function mudar10(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Redação.splice(numpesquisa, 1, notaNova1)
            nota2Redação.splice(numpesquisa, 1, notaNova2)
            nota3Redação.splice(numpesquisa, 1, notaNova3)
            nota4Redação.splice(numpesquisa, 1, notaNova4)
            mediasRedação.splice(numpesquisa,1, mediaNova)
        }
    }else if (escmat == '11'){
        var seekname = document.querySelector('.busc-nome-edit')
        var valueseek = seekname.value
        var numpesquisa = nomesAlun11.indexOf(valueseek)


        var pesquisanome = nomesAlun11[numpesquisa]
        var pesquisanota1 = nota1Artes[numpesquisa]
        var pesquisanota2 = nota2Artes[numpesquisa]
        var pesquisanota3 = nota3Artes[numpesquisa]
        var pesquisanota4 = nota4Artes[numpesquisa]
        var pesquisamedia = mediasArtes[numpesquisa]

        mostranome.innerHTML = pesquisanome
        mostranota1.innerHTML = pesquisanota1
        mostranota2.innerHTML = pesquisanota2
        mostranota3.innerHTML = pesquisanota3
        mostranota4.innerHTML = pesquisanota4
        mostramedia.innerHTML = pesquisamedia

        var altera = document.querySelector('.alteracao')
        altera.addEventListener('click', mudar4)
        function mudar4(){
            var nova1 = document.querySelector('.nova1')
            var nova2 = document.querySelector('.nova2')
            var nova3 = document.querySelector('.nova3')
            var nova4 = document.querySelector('.nova4')
            var notaNova1 = Number(nova1.value)
            var notaNova2 = Number(nova2.value)
            var notaNova3 = Number(nova3.value)
            var notaNova4 = Number(nova4.value)
            var mediaNova = (notaNova1 + notaNova2 + notaNova3 + notaNova4) / 4
            nota1Artes.splice(numpesquisa, 1, notaNova1)
            nota2Artes.splice(numpesquisa, 1, notaNova2)
            nota3Artes.splice(numpesquisa, 1, notaNova3)
            nota4Artes.splice(numpesquisa, 1, notaNova4)
            mediasArtes.splice(numpesquisa,1, mediaNova)
        }
    }
}