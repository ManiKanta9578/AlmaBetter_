//Callbacks, Promises, and Async/Await in JS by Making Ice Cream!

let stocks = {
    fruits : ["straberry", "grapes", "banana", "apples"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    topping : ["chocolate", "peanuts"],
};

const order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected sucessfully placed order!`)
        call_production();
    }, 3000)
};

const production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("fruits has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("Machine was started");
                    setTimeout(() => {
                        console.log(`IceCreame was placed on ${stocks.holder[0]}  `);
                        setTimeout(() => {
                            console.log(`${stocks.topping} was added as toppings`);
                            setTimeout(() => {
                                console.log("Serve Ice Creame")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
}

order(0, production);

