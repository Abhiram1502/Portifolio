let links=document.getElementById('links');
let skills=document.getElementById('skills');
let exp=document.getElementById('exp');
let edu=document.getElementById('edu');
let Experience=document.getElementById('Experience');
function showMenu(){
    links.style.display='flex';
    links.style.right="0px";
}
function hideMenu(){
    links.style.display='none';
    links.style.right="-180px";
}
function showExp(){
    skills.style.display='none';
    exp.style.display='block';
    edu.style.display='none';
    Experience.classList.add('activ');
}
function showEdu(){
    skills.style.display='none';
    exp.style.display='none';
    edu.style.display='block';

}
function showSkills(){
    skills.style.display='block';
    exp.style.display='none';
    edu.style.display='none';
}
