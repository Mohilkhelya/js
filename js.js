// // FUNCTIONS-----------

// const rectHeight = 70 ;

// function calcu(value) {
//     mainValue = value * 2.54
//     return mainValue;
// }

// const width = calcu(100);
// const height = calcu(rectHeight);


// const dimensions = [width , height];
// console.log(dimensions);

// const add = function (n1 , n2 ) {
//     return n1 + n2;
// }

// console.log (add(1, 5));


// // if else------------------

// const playerr ='ronaldo';
// const scoree = 747;

// if( playerr == 'ronaldo'){
//     console.log('juventus');
// } else if ( scoree == 747){
//     console.log( 'scored goal');
// } else{
//     console.log(' player belong to another team');
// }

// // switch----------------

// const scor = 3;

// switch (scor) {
//     case 1: 
//     console.log( 'scored a goal');
//     break;
//     case 2: 
//     console.log( 'scored a duo');
//     break;
//     case 3: 
//     console.log( 'scored a hatrick');
//     break;
//     case 4: 
//     console.log( 'scored a impressive goal');
//     break;
//     case 5: 
//     console.log( 'scored a magnificient goal');
//         break;

//     default:console.log('not a goal') ;
//         break;
// }



// // LOOPS----------

// // while----

// let amount = 11;
// while(amount > 0) {
//     console.log('I have $' + amount + ' money');
//     amount-- ;
// }

// // do while--

// let money = 12;
// do{ 
//     console.log('I have $' + money + ' money');
// money++;
// } while (money <= 11)

// // for---

// for (let index = 0; index >= 10; index++) {
//     console.log('no is ' + index);
// }


// // string propertise and method-------------

// let text = " mohil"

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(3));
// console.log(text.charAt(text.length - 1 ));
// console.log(text.indexOf('m'));
// console.log(text.trim());
// console.log(text.trim().toUpperCase().startsWith('M'));
// console.log(text.includes('mo'));
// console.log(text.slice(0, 4));
// console.log(text.slice(-2));

// // Template literals -ES6, Bacticks``, Interpolation ${}
// const player = 'neymar JR'
// const score = 747;
// const senc = `Top score off ${player} is ${score}. `;
// console.log(senc);

 

// // ARRAY PROPERTIES AND METHODS---------------

// let players = ['ronaldo', 'neymar', 'ronaldino', 'mbappe', 'messi', 'torres'];

// // length
// console.log(players.length);
// console.log(players[players.length - 1 ]);
  
// // concat
// const sub = ['rooney', 'bale', 'ozil' , 'ramos', 'pogba']
// const team = players.concat(sub);
// console.log(team);

// //reverse
// console.log(team.reverse());

// //push pop shift unshift
// // shift unshift
// team.unshift('pogba');
// team.unshift('ronaldo');
// console.log(team);

// team.shift('pogba');
// team.shift('ronaldo');
// console.log(team);

// // push pop
// team.push('hazard');
// console.log(team);

// team.pop();
// team.pop();
// team.pop();
// team.pop();
// team.pop();
// console.log(team);

// //splice - mutate original array

// const grab = team.splice(0, 2);
// console.log(grab);
// console.log(team);

//ARRAY AND LOOPS

//EX 
let array = ['vidhi', 'mohil', 'siddhesh', 'jidnesh'];
let lastnName = 'khelya';
let empty = [];
for(let i = 0; i < array.length; i++){
    const fullName = `${array[i]} ${lastnName}` ;
    empty.push(fullName.toUpperCase());
    // empty.push(`${array[i]} ${lastnName}`.toUpperCase());
}
console.log(empty);


// EX BY ME
let oldScore = [ 10 , 20 , 30 , 40 , 50, 60, 70 , 80 , 90];
let newScore = 1;
let finalScore = [];
let mainscore = [];
for(let i = 0; i < oldScore.length ; i++){
    let num1 = oldScore[i];
    let num2 = i + 1;
    const final = num1 + num2;
    finalScore.push(`${final}`);

    mainscore.push(`${oldScore[i]}${newScore}`);
}
console.log(finalScore);
console.log(mainscore); 

// EX CALCULATE
// funnction , return, if, array, for loop
const sleep = [ 6, 8, 1, 5 , 5];
const work = [ 2, 3, 9, 5 , 5];

function calcu(arr) {
    let total =0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    if(total > 24){
        console.log(`YOU NEED TO TIGHT YOUR SCHEDULE`);
        return total;
    }
    console.log('YOUR SCHEDULE IS GOOD')
    return total;
}

const sleepTotal = calcu(sleep);
const workTotal = calcu(work);
const nullTime = calcu([ 8, 7, 10, 6, 2]);

console.log({
    sleep: sleepTotal,
    work: workTotal,
    timewasted: nullTime
});                                                              












