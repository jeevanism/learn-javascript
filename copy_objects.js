/**
 * (...) spread operator in Javascript allows to copy one object to another
 *  but there may undesired effect when changing the inner properties of a nested object
 */

/**
 * Below demonstrates the behavior of object copying and modifying in JavaScript.
 *
 */

/**
 * an object named me is defined with two properties:
 * name: The value is set to "Jeevan".
 * socials: This property is an object itself with a property twitter, and the value is set to "@jeevanism".
 *
 */

const me = { name: "Jeevan", socials: { twitter: "@jeevanism" } };

/**
 * A new object named myFriend is created using the spread syntax (...). This syntax creates a shallow copy of the me object.
 * It means that myFriend will have its own properties with the same values as me, but it will be a distinct object in memory.
 */

const myFriend = { ...me };

/**
 * The name property of the myFriend object is changed to "John". Additionally, the socials.twitter property of the myFriend object is modified to "@johnvick".
 * However, similar to the previous example, since the socials property is an object, modifying its properties within the myFriend object also affects the same object referenced by the me object.
 */

myFriend.name = "John";
myFriend.socials.twitter = "@johnvick";

console.log(me.socials.twitter); // prints @johnvick
console.log(myFriend.socials.twitter); // prints @johnvick

/**
 * In order  reach the desired output, we can rewrite code as below
 *
 */

const mee = { name: "Jeevan", socials: { twitter: "@jeevanism"} }
const myFriendd = {...mee, socials:{...mee.socials}}  // Create a copy of me.socials
myFriendd.name = "John"
myFriendd.socials.twitter = "@johnvick"

console.log(mee.name)
console.log(mee.socials.twitter)
console.log(myFriendd.name)
console.log(myFriendd.socials.twitter)