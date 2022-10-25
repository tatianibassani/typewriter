const sentence = (text) => {
 for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    console.log(text.charAt(i));
  }, i * 1000) // <= 1s delay to make it noticeable. Can dial it down later.
  //process.stdout.write(char);
  }
};

sentence('Lighthouse bootcamp');


/*const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
  }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
  process.stdout.write(char);
}*/