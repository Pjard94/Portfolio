//This is the text typewriter code
var typed = new Typed('.text-typewriter-output', {
    strings: ["I'm a Web Developer", "I'm a Programmer", "I'm a Designer"],
    // these are the sentences that get typed out
    showCursor: false,
    // this disabled the standard cursor
    typeSpeed: 100,
    smartBackspace: true,
    backSpeed: 100,
    backDelay: 1000,
    // These set the speed and the amount of characters removed
    loop: true,
    loopCount: Infinity
    // These rules set the looping aspect so that the typewriter never stops
  });
  