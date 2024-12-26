let links=document.getElementById('links');
let skills=document.getElementById('skills');
let exp=document.getElementById('exp');
let edu=document.getElementById('edu');
let Experience=document.getElementById('Experience');
let Skill=document.getElementById('Skill');
let Education=document.getElementById('Education');
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
    Experience.style.aft
    Education.style.borderBottom='none';
    Experience.style.borderBottom='3px solid #ffb803';
    Skill.style.borderBottom='none';
    Experience.style.setProperty('--after-display', 'none');
    Skill.style.setProperty('--after-display','block');
    Education.style.setProperty('--after-display','block');
}
function showEdu(){ 
    skills.style.display='none';
    exp.style.display='none';
    edu.style.display='block';
    Experience.style.borderBottom='none';
    Education.style.borderBottom='3px solid #ffb803';
    Skill.style.borderBottom='none';
    Experience.style.setProperty('--after-display', 'block');
    Skill.style.setProperty('--after-display','block');
    Education.style.setProperty('--after-display','none');
}
function showSkills(){
    skills.style.display='block';
    exp.style.display='none';
    edu.style.display='none';
    Skill.style.borderBottom='3px solid #ffb803';
    Experience.style.borderBottom='none';
    Education.style.borderBottom='none';
    Experience.style.setProperty('--after-display', 'block');
    Skill.style.setProperty('--after-display','none');
    Education.style.setProperty('--after-display','block');
}
