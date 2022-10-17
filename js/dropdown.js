
var HiddenMenu = document.getElementById('hiddenMenu');
var Dropdown = document.getElementById('hiddennav');
var Crossicon = document.getElementById('hiddencross');

Dropdown.style.transform = "translateY(-250px)";

HiddenMenu.onclick = function()
{
   

    if(Dropdown.style.transform == "translateY(-250px)")
    {
        Dropdown.style.transform = "translateY(0px)"
        Crossicon.style.display = 'block'
        
    }

}

Crossicon.onclick = function()
{
    
    if(Dropdown.style.transform == "translateY(0px)")
    {
        Dropdown.style.transform = "translateY(-250px)"
        Crossicon.style.display = 'none'
       
    }
}