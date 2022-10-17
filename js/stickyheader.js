
var Header = document.getElementById('stickHeader');

window.onscroll = function()
{
    if(window.scrollY > 20)
    {
        Header.classList.add('activeheader')
    }
    else
    {
        Header.classList.remove('activeheader')
    }
}