let i=1;
function _click()
{
    if(i % 2){
        document.querySelector('.nightMode').style.background='#4b556d'
        document.querySelector('.nightMode>svg').style.color='#ffce45'
        document.getElementsByTagName('body')[0].style.background="#4b556d"
        document.getElementsByTagName('main')[0].style.background="#2e384a"
        document.getElementsByTagName('main')[0].style.color='#f5f5f5'
    }
    else{
        document.querySelector('.nightMode').style.background='rgb(222, 222, 222)'
        document.querySelector('.nightMode>svg').style.color='#7c7c7c'
        document.getElementsByTagName('body')[0].style.background="#f2f2f2"
        document.getElementsByTagName('main')[0].style.background='#fafafa'
        document.getElementsByTagName('main')[0].style.color="#aaaaaa"
    }
    i++
}