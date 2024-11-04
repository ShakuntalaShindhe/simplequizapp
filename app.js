const questions=[{
    'que':'What of the following is a markup language?',
    'a':'html',
    'b':'CSS',
    'c':'Javascript',
    'd':'php',
    'correct':'a'
},
{
    'que':'What year was Javascript lanched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},
{
    'que':'What does CSS stands for?',
    'a':'Hyper Text markup language',
    'b':'Cascading style sheet',
    'c':'json onject notation',
    'd':'Helicopter Terminal ',
    'correct':'b'
}]
let index=0;
let total=questions.length;
let right=0,wrong=0;

const quesBox=document.getElementById('quesBox')
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index===total){
       return endQuiz()
    }
    reset();
const data=questions[index] 
console.log(data)
quesBox.innerHTML=`${index+1} ${data.que}`;
optionInputs[0].nextElementSibling.innerHTML=data.a;
optionInputs[1].nextElementSibling.innerHTML=data.b;
optionInputs[2].nextElementSibling.innerHTML=data.c;
optionInputs[3].nextElementSibling.innerHTML=data.d;

}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans==data.correct){
right++;
    }else{
 wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
   let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer= input.value;
    
        }
    })
    return answer;
}
const reset=()=>{
    optionInputs.forEach((input)=>{
        input.checked=false
    })
}
const endQuiz=()=>{
    document.getElementById('box').innerHTML=`<h3>Thank you for playing quiz</h3>
    <h2>${right}/${total} are correct</h2>`;

}
//initial call
loadQuestion()