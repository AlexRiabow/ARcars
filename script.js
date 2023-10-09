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