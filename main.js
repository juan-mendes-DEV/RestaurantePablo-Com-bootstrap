$('document').ready(function(){
    $('#telefone').mask('(00) 00000-0000 ');
    });
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
        },
        messages:{
            nome:'Por favor insira seu nome',
            telefone:'por favor insira o dd de sua região e seu numero corretamente',
            email:'insira seu email corretamente',
            
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
        });