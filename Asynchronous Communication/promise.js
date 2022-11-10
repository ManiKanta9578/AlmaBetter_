let stocks = {
    fruits : ["straberry", "grapes", "banana", "apples"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    topping : ["chocolate", "peanuts"],
};

//Relationship between time and work

let is_shop_open = true;  //false

let order = (time, work) => {
    return new Promise((resolve, reject) =>{
        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })
}

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

.then(() => {
    return order(0000, () => console.log("production was started"));
})

.then(() => {
    return order(2000,() => console.log("fruits was chopped"))
})

.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

.then(() => {
    return order(1000, () => console.log("Machine has been started"))
})

.then(() => {
    return order(2000, () => console.log(`${stocks.holder[1]} was picked`))
})

.then(() => {
    return order(3000, () => console.log(`${stocks.topping[1]} was added as topping`))
})

.then(() => {
    return order(2000, () => console.log("Serve the Ice Cream"))
})

.catch(() => console.log("customer left"))

.finally(() => console.log("Shop is closed for the day"))

