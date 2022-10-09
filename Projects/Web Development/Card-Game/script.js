var grid = document.querySelector(".grid")
var count =0;
var ar = -1;
var counter = 0;
var sec = 0;

function clock (){
 
        time = setInterval(function(){
        sec++;
        document.querySelector(".timer h1").innerHTML = sec;
     },1000)
    }
for (let i = 0; i < 8; i++) {
    var div = document.createElement("div")
    grid.appendChild(div)
}

function shuffle(array) {
    let currnetIndex = array.length, randomIndex;
    while (currnetIndex != 0) {
        randomIndex = Math.floor(Math.random() * currnetIndex);
        currnetIndex--;
        [array[currnetIndex], array[randomIndex]] = [array[randomIndex], array[currnetIndex]];
    }
    return array;
}

var arr = [0, 1, 2, 3,0,1,2,3];
shuffle(arr);


for (let i = 0; i < 8; i++) {
    document.querySelectorAll(".grid div")[i].addEventListener("click", function () {
        var x = `css${arr[i]}.png`;
        document.querySelectorAll(".grid div")[i].style.backgroundImage = "url(" + x + ")"
        count++;
        if(count===1){
            clock();
        }
        
        if(count % 2 === 1){
            ar = i
        }
        else{
        setTimeout(result,300);
        function result(){
            if(arr[i] === arr[ar]){
                counter++;
                if(counter === 4){
                    window.alert("Great job you won the game yout time is "+sec +"sec")
                    clearTimeout(time);
                }
            }

            else{
                document.querySelectorAll(".grid div")[i].style.backgroundImage = "url(ace3.jpg)"
                document.querySelectorAll(".grid div")[ar].style.backgroundImage = "url(ace3.jpg)"
            } }
        }

    })

}