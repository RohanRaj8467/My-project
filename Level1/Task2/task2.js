const clicker1=document.querySelector(".clicker1");
const clicker2=document.querySelector(".clicker2")
const clicker=document.querySelector(".clicker")
const form=document.querySelector(".calculator")
const result_value=document.querySelector(".Result")
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
        
clicker1.addEventListener('click',()=>{
    let colors=`rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
    clicker1.style.backgroundColor = `${colors}`;
            
        
})
clicker2.addEventListener('click',()=>{
    alert(`Congrat!\n you are live at ${Date()}`)
})
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let num1=Number(form[0].value);
    let num2=Number(form[1].value);
    let sum=num1+num2;
    console.log(sum)
    result_value.append(sum)
})