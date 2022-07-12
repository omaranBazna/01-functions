// challenge
const message = 'your phone number is contained somewhere in the digits of Pi';
const surprisedReaction = () => console.log(':o');
const smoothReaction = () => console.log('B)');
const saySomethingAndReact = (msg = 'you forgot to submit a message') => {
    console.log(msg);
    return (reaction) => {
        reaction();
    };
};


// add the inputs here
saySomethingAndReact(message)(surprisedReaction);
const createSpecialMessage=(name){
    return "Hello, " + name
}
///what really make the function pure that every variable contained inside the function scope
///so we do not expect to change the result by any other change in the code other than inputing arguments