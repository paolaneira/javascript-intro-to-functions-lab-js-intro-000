function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
var uppercase = string.toUpperCase()
var lowercase = "hello!"
var love = "I love you, Grandma."

function sayHiToGrandma(string) {
  if (string.toUpperCase() === uppercase) {
    return("YES INDEED!");
  }
  else if (string.toLowerCase() === lowercase) {
    return("I can't hear you!");
  }
  else {
    return("I love you, too.");
  }
  }
