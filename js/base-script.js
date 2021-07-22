
// let $elements = $(".text-typewriter-container .typewriter--text");
// $(".text-typewriter-output").tickerText($elements, 5, 6, 40, 0, 0.5, 2,false,"timerpause","timerstop");

var typed = new Typed('.text-typewriter-output', {
  strings: ["I'm a Web Developer", "I'm a Programmer", "I'm a Designer"],
  showCursor: false,
  typeSpeed: 100,
  smartBackspace: true,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity
});