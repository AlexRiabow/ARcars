function openCloseup(url,desc) {
    document.getElementById('closeupImgPic').src=url;
    document.getElementById('closeupDesc').innerHTML=desc;
    document.getElementById('closeupBG').classList.remove('hidden');     
}

function closeCloseup() {
    document.getElementById('closeupBG').classList.add('hidden');     
}

document.getElementById('closeupBG').addEventListener('click', closeCloseup) 
document.getElementById('CrewImgPos1').addEventListener('click', ()=>
    {
        openCloseup('assets/img/crewImg1.svg', 
        `Антон <br><br>
        Технический специалист,<br>
        Эксперт по подбору автомобиля`
        )
    }
)
document.getElementById('CrewImgPos2').addEventListener('click', ()=>
    {
        openCloseup('assets/img/crewImg2.svg', 
        `Антон <br><br>
        Технический специалист,<br>
        Эксперт по подбору автомобиля`)
    }
)
document.getElementById('CrewImgPos3').addEventListener('click', ()=>
    {
        openCloseup('assets/img/crewImg3.svg',``)
    }
)
document.getElementById('CrewImgPos4').addEventListener('click', ()=>
    {
        openCloseup('assets/img/crewImg4.svg',
        `Андрей <br><br>
        Финансы и администрирование,<br>
        Менеджер по работе с клиентами`)
    }
)
document.getElementById('CrewImgPos5').addEventListener('click', ()=>
    {
        openCloseup('assets/img/crewImg5.svg',
        `Андрей <br><br>
        Финансы и администрирование,<br>
        Менеджер по работе с клиентами`)
    }
)
document.getElementById('auc').addEventListener('click', ()=>
    {
        openCloseup('assets/img/aucList.jpg',``)
    }
)
document.getElementById('ogr').addEventListener('click', ()=>
    {
        openCloseup('assets/img/OGR.jpeg',``)
    }
)

const form = document.getElementById('form');
form.addEventListener('submit',formSend);

async function formSend(e){
    e.preventDefault();
    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0){
        form.classList.add('_sending')
        let response = await fetch('sendmail.php',{
            method: 'POST',
            body: formData
        });
        if (response.ok){
            let result = await response.json();
            form.classList.remove('_sending');
            alert(result.message);
            form.reset();
        }else{
            alert('Ошибка отправки формы');
            form.classList.remove('_sending');
        }
    }

}

function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req')

    for (let index = 0;index < formReq.length;index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)){
                formAddError(input);
                error++;
            }
        }
        if (input.classList.contains('_tel')) {
            if (telTest(input)){
                formAddError(input);
                error++;
            }
        }
        else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
    return error
}

function formRemoveError(input){
    input.classList.remove('_error')
}
function formAddError(input){
    input.classList.add('_error')
}
function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
function telTest(input){
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
}