//creating function counter 
function counterReducer(actionType, counter){
    //increment the counter by 1
    if(actionType == "INC"){ 
        counter = counter + 1;
        return console.log(counter);
    }
    //decrement the counter by 2
    if(actionType == "DEC"){
        counter = counter - 1;
        return console.log(counter);
    }
    else{
        return console.log("not valid")
    }
}
counterReducer("INC", 5);//gives output 6
counterReducer("DEC", 6);//gives output5
counterReducer("abc" , 3)//not valid
