let stocks = {
    fruits : ["straberry", "grapes", "banana", "apples"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    topping : ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
    return new Promise((resolve, reject) =>{
        if(isShopOpen){
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen() {
    try{
        await time(2000);
        console.log(` ${stocks.fruits[0]} was selected`);

        await time(0000);
        console.log(" Production has started");

        await time(2000);
        console.log(" fruits are chopped");

        await time(1000);
        console.log( ` ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log(" Machine is started");

        await time(2000);
        console.log(` Ice Cream is placed on ${stocks.holder[0]}`);

        await time(3000);
        console.log(` ${stocks.topping[0]} was added`);

        await time(2000);
        console.log(" Serve the Ice Cream");

    }catch{
        console.log(" Customer left")

    }finally{
        console.log(" Day ended")

    }
}

kitchen()