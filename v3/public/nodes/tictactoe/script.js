let input = "x"
let arr = [0,0,0,0,0,0,0,0,0]

let result =  document.querySelector(".result")

let checkList = {
    0:[[1,2], [3,6], [4,8]],
    1:[[0,2], [1,7]],
    2:[[0,1], [5,8], [4,6]],
    3:[[0,6], [4,5]],
    4:[[0,8], [1,7], [2,6], [3,5]],
    5:[[2,8], [3,4]],
    6:[[0,3], [7,8], [4,2]],
    7:[[1,4], [6,8]],
    8:[[0,4], [2,5], [6,7]]
}

const check = (bid, input) => {
    let arrid = bid;
    for(let index = 0; index < checkList[arrid].length; index++){
        if(arr[arrid] == arr[checkList[arrid][index][0]] &&
            arr[arrid] == arr[checkList[arrid][index][1]]
        ){
            result.innerText = `${input} "Player Wins"`
        }
    }
}

const changeText =  (event) => {
    if(input === "x"){
        event.target.innerText = "x"
        let bid = event.target.id
        arr[bid] = 1
        //Check Winner
        check(bid, input)
        input = "o"
    }else{
        event.target.innerText = "o"
        let bid = event.target.id
        arr[bid] = 2
        //Check Winner
        check(bid, input)
        input = "x"
    }
}

let boxes = document.querySelectorAll("button")

boxes.forEach((box) => {
    box.addEventListener("click", changeText)
})