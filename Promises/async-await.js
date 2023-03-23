
//first 2 persons come and show the ticket
console.log('person1: shows ticket');
console.log('person2: shows ticket');

//i do not have a ticket so i make a promise that my friend brings ticket
const promiseFriendBrings = new Promise((resolve,reject) => {
    //we got to wait sometime
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})
 
//making async function
const preMovie = async() => {
    let ticket = await promiseFriendBrings;
        console.log(`wife: I have the ${ticket}`);
        console.log('Husband: Lets go in');
        console.log("wife: I'm hungry");
    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
    let popcorn = await getPopcorn;
        console.log(`Husband: I got some ${popcorn}`);
        console.log('Husband: Lets go in');
        console.log('wife: I want Butter on Popcorn');
    let addbutter = new Promise((resolve,reject)=> resolve(`butter`));
    let butter = await addbutter;
        console.log(`Husband: I got some ${butter} on popcorn`);
        console.log('Husband: Lets go in');
        console.log('wife: Lets go');
    return ticket;

    
}
preMovie().then((msg) => console.log(`Person3 : shows ${msg}`));


//now more person shows the tickets
console.log('person4: shows ticket');
console.log('person5: shows ticket');


