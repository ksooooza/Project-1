//List of possible words

const wordList = ["aback", "abase", "abate", "abbey", "abbot", "abhor",
 "abide", "abled", "abode", "abort", "about", "above", "abuse", "abyss",
 "acorn", "acrid", "actor", "acute", "adage", "adapt", "adept", "admin", "admit", "adobe", "adopt", "adore", "adorn", "adult", "affix", "afire", "afoot", "afoul", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony", "agree", "ahead", "aider", "aisle", "alarm", "album", "alert", "algae", "alibi", "alien", "align", "alike", "alive", "allay", "alley", "allot", "allow", "alloy", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", "amble", "amend", "amiss", "amity", "among", "amply", "amply", "amuse", "angel", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", "annex", "annoy", "annul", "anode", "antic", "anvil", "aorta", "apart", "aphid", "aping", "apnea", "apple", "apply", "apron", "aptly", "arbor", "ardor", "arena", "argue", "arise", "aroma", "arose", "array", "arrow", "arson", "artsy", "ascot", "ashen", "aside", "askew", "assay", "asset", "atoll", "atone", "attic", "audio", "audit", "augur", "aunty", "avail", "avert", "avian", "avoid", "await", "awake", "award", "aware", "awash", "awful", "awoke", "axial", "axiom", "axion", "azure", "bacon", "badge", "badly", "bagel", "baggy", "baker", "baler", "balmy", "banal", "banjo", "barge", "baron", "basal", "basic", "basin", "basis", "baste", "batch", "bathe", "baton", "batty", "bawdy", "bayou", "beach", "beady", "beard", "beast", "beech", "beefy", "befit", "began", "begat", "beget", "begin", "begun", "being", "belch", "belie", "belle", "belly", "below", "bench", "beret", "berry", "berth", "beset", "betel", "bevel", "bezel", "bible", "bicep", "biddy", "bigot", "bilge", "billy", "binge", "bingo", "biome", "birch", "birth", "bison", "bitty", "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleat", "bleed", "bleep", "blend", "bless", "blimp", "blind", "blink", "bliss", "blitz", "bloat","cabal", "cabby", "cabin", "cable", "cacao", "cache", "cacti", "caddy", "cadet", "cagey", "cairn", "camel", "cameo", "canal", "candy", "canny", "daddy", "daily", "dairy", "daisy", "dally", "dance", "dandy", "datum", "daunt", "dealt", "death", "debar", "debit", "debug", "debut", "decal", "eager", "eagle", "early", "earth", "easel", "eaten", "eater", "ebony", "eclat", "edict", "edify", "eerie", "egret", "eight", "eject", "eking", "fable", "facet", "faint", "fairy", "faith", "false", "fancy", "fanny", "farce", "fatal", "fatty", "fault", "fauna", "favor", "feast", "fecal", "feign", "fella", "felon", "femme", "femur", ]

//Chooses a random index corresponding to a word in the words array
 function chooseRandomWord() {
    i = Math.floor(Math.random() * 292);
    //console.log(wordList[i]);
   //Make sure to update this number with a longer word list!
 }

chooseRandomWord();
let answerindex = wordList[i];

//Split computer generated word into letters
// function splitWord() {
//     for (let s = 0; s < answer.length; s++) {
//         let arr = [];
//         arr.push(answer.charAt(s));
//         console.log(arr);
//     } 
// }

let answer = answerindex.split('');
console.log(answer);

//splitWord(answer);
//console.log(answer.splitWord());

//Collect user input for guess 1
const guess1 = document.querySelector('[class="guess1"]')
const input1 = guess1.querySelectorAll('.inputs1 input')


function handleInput(e) {
//check for input and if there is a next input, skip to that one after text has been entered
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess1.addEventListener('input', handleInput);

//Collecting the data from the input boxes on a click of the check button and putting it into an array
let submitGuess1 = document.getElementById("checkguess1"); 

submitGuess1.onclick = function() {
    //Gets values from all input boxes
    let zero = document.querySelector('[id="0"]').value;
    //console.log(zero);
    let one = document.querySelector('[id="1"]').value;
    //console.log(one);
    let two = document.querySelector('[id="2"]').value;
    //console.log(two);
    let three = document.querySelector('[id="3"]').value;
    //console.log(three);
    let four = document.querySelector('[id="4"]').value;
    //console.log(four);

    //Pushes all of the values from input boxes in row 1 into an array and saves it as guess1
    let guess1 = [zero, one, two, three, four];
    console.log(guess1);

    //Compares word collected from guess 1 to the one selected from the list of possible words
    function compareToWordList() {
        for (let i = 0; i < 290; i++) {
        for (let j = 0; j < 5; j++) {
            if (guess1[j] === (wordList[i][j])) {
            document.getElementById("invalidguess").innerHTML = ""
            } else {
            document.getElementById("invalidguess").innerHTML = "Invalid guess"   
            }
         }
     } 
    }
     

    
    compareToWordList();

    function makeMessageDisappear() {
            if (document.getElementById("invalidguess").innerHTML = "Invalid guess") {
                document.getElementById("invalidguess").innerHTML = " "
            }
    }

    setTimeout(makeMessageDisappear, 2000);


    //Locks in guess so you can't go back and change it after submission
    function lockButton() {
        document.getElementById("checkguess1").disabled = true;
        document.getElementById("checkguess1").readOnly = true;
        function lockInputs() {
            document.getElementById("0").disabled = true;
            document.getElementById("0").readOnly = true;
            document.getElementById("1").disabled = true;
            document.getElementById("1").readOnly = true;
            document.getElementById("2").disabled = true;
            document.getElementById("2").readOnly = true;
            document.getElementById("3").disabled = true;
            document.getElementById("3").readOnly = true;
            document.getElementById("4").disabled = true;
            document.getElementById("4").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    //console.log(guess1);

    
//Compares guess 1 to the answer
    function compareGuess1() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess1[i]) {
           //console.log("Match")
           document.getElementById([i]).style.background = "green"
            } else if (answer.includes(guess1[i])) {
             //console.log("Included");
             document.getElementById([i]).style.background = "orange"
            } else {
           //console.log("Not Matched");
           document.getElementById([i]).style.background = "gray"
            }
        }
    };

    compareGuess1();

    //WIN CIRCUMSTANCE
    function checkWin() {
            if (answer[0] === guess1[0] && answer[1] === guess1[1] && answer[2] === guess1[2] && answer[3] === guess1[3] && answer[4] === guess1[4]) {
            document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
        }
    }

    checkWin(); 
}


    
//Collect user input for guess 2
const guess2 = document.querySelector('[class="guess2"]')
const input2 = guess1.querySelectorAll('.inputs2 input')

function handleInput2(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess2.addEventListener('input', handleInput2);

let submitGuess2 = document.getElementById("checkguess2");


submitGuess2.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess2").disabled = true;
        document.getElementById("checkguess2").readOnly = true;
        function lockInputs() {
            document.getElementById("5").disabled = true;
            document.getElementById("5").readOnly = true;
            document.getElementById("6").disabled = true;
            document.getElementById("6").readOnly = true;
            document.getElementById("7").disabled = true;
            document.getElementById("7").readOnly = true;
            document.getElementById("8").disabled = true;
            document.getElementById("8").readOnly = true;
            document.getElementById("9").disabled = true;
            document.getElementById("9").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let five = document.querySelector('[id="5"]').value;
    //console.log(five);
    let six = document.querySelector('[id="6"]').value;
    //console.log(six);
    let seven = document.querySelector('[id="7"]').value;
    //console.log(seven);
    let eight = document.querySelector('[id="8"]').value;
    //console.log(eight);
    let nine = document.querySelector('[id="9"]').value;
    //console.log(nine);

    let guess2 = [five, six, seven, eight, nine];
    //console.log(guess1);
    
    // function compareToWordList() {
    //     for (let i = 0; i < 5; i++) {
    //         //MAKE SURE TO CHANGE THIS NUMBER IF THE WORD LIST GETS LONGER
    //         for (let j = 0; j < 230; j++) {
    //             if (guess2[i] === wordList[j][i]) {
    //             document.getElementById("invalidguess").innerHTML = ""
    //             } else {
    //                 if (guess2[i] !== wordList[j][i])
    //                 document.getElementById("invalidguess").innerHTML = "Invalid Guess" 
    //                 }
    //             }
    //         }  
    // }
    

    // compareToWordList();

    // function makeMessageDisappear() {
    //         if (document.getElementById("invalidguess").innerHTML = 'Invalid Guess') {
    //             document.getElementById("invalidguess").innerHTML = ""
    //         }
    // }

    // setTimeout(makeMessageDisappear(), 2000);

    function compareGuess2() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess2[i]) {
           //console.log("Match")
           document.getElementById([i + 5]).style.background = "green";
            } else if (answer.includes(guess2[i])) {
             //console.log("Included");
             document.getElementById([i + 5]).style.background = "orange"
            } else {
           //console.log("Not Matched");
           document.getElementById([i + 5]).style.background = "gray"
            }
            }
        }
        compareGuess2();
        
    function checkWin() {
        if (answer[0] === guess2[0] && answer[1] === guess2[1] && answer[2] === guess2[2] && answer[3] === guess2[3] && answer[4] === guess2[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
        }
    }
    checkWin();
    };

    

//Collect user input for guess 3
const guess3 = document.querySelector('[class="guess3"]')
const input3 = guess1.querySelectorAll('.inputs input')

function handleInput3(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess3.addEventListener('input', handleInput3);

let submitGuess3 = document.getElementById("checkguess3");

submitGuess3.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess3").disabled = true;
        document.getElementById("checkguess3").readOnly = true;
        function lockInputs() {
            document.getElementById("10").disabled = true;
            document.getElementById("10").readOnly = true;
            document.getElementById("11").disabled = true;
            document.getElementById("11").readOnly = true;
            document.getElementById("12").disabled = true;
            document.getElementById("12").readOnly = true;
            document.getElementById("13").disabled = true;
            document.getElementById("13").readOnly = true;
            document.getElementById("14").disabled = true;
            document.getElementById("14").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let ten = document.querySelector('[id="10"]').value;
    //console.log(ten);
    let eleven = document.querySelector('[id="11"]').value;
    //console.log(eleven);
    let twelve = document.querySelector('[id="12"]').value;
    //console.log(twelve);
    let thirteen = document.querySelector('[id="13"]').value;
    //console.log(thirteen);
    let fourteen = document.querySelector('[id="14"]').value;
    //console.log(fourteen);

    let guess3 = [ten, eleven, twelve, thirteen, fourteen]
    //console.log(guess3)

    // function compareToWordList() {
    //     for (let i = 0; i < 5; i++) {
    //         //MAKE SURE TO CHANGE THIS NUMBER IF THE WORD LIST GETS LONGER
    //         for (let j = 0; j < 230; j++) {
    //             if (guess3[i] === wordList[j][i]) {
    //             document.getElementById("invalidguess").innerHTML = ""
    //             } else {
    //                 if (guess3[i] !== wordList[j][i])
    //                 document.getElementById("invalidguess").innerHTML = "Invalid Guess" 
    //                 }
    //             }
    //         }  
    // }
    

    // compareToWordList();

    // function makeMessageDisappear() {
    //         if (document.getElementById("invalidguess").innerHTML = 'Invalid Guess') {
    //             document.getElementById("invalidguess").innerHTML = ""
    //         }
    // }

    // setTimeout(makeMessageDisappear(), 2000);

    function compareGuess3() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess3[i]) {
           //console.log("Match")
           document.getElementById([i + 10]).style.background = "green";
            } else if (answer.includes(guess3[i])) {
             //console.log("Included");
             document.getElementById([i + 10]).style.background = "orange"
            } else {
           //console.log("Not Matched");
           document.getElementById([i + 10]).style.background = "gray"
            }
        }
    }
    compareGuess3();

    function checkWin() {
        if (answer[0] === guess3[0] && answer[1] === guess3[1] && answer[2] === guess3[2] && answer[3] === guess3[3] && answer[4] === guess3[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    }
}

checkWin();
};

    



//Collect user input for guess 4
const guess4 = document.querySelector('[class="guess4"]')
const input4 = guess1.querySelectorAll('.inputs input')

function handleInput4(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess4.addEventListener('input', handleInput4);

let submitGuess4 = document.getElementById("checkguess4");

submitGuess4.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess4").disabled = true;
        document.getElementById("checkguess4").readOnly = true;
        function lockInputs() {
            document.getElementById("15").disabled = true;
            document.getElementById("15").readOnly = true;
            document.getElementById("16").disabled = true;
            document.getElementById("16").readOnly = true;
            document.getElementById("17").disabled = true;
            document.getElementById("17").readOnly = true;
            document.getElementById("18").disabled = true;
            document.getElementById("18").readOnly = true;
            document.getElementById("19").disabled = true;
            document.getElementById("19").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let fifteen = document.querySelector('[id="15"]').value;
    //console.log(fifteen);
    let sixteen = document.querySelector('[id="16"]').value;
    //console.log(sixteen);
    let seventeen = document.querySelector('[id="17"]').value;
    //console.log(seventeen);
    let eighteen = document.querySelector('[id="18"]').value;
    //console.log(eighteen);
    let nineteen = document.querySelector('[id="19"]').value;
    //console.log(nineteen);

    let guess4 = [fifteen, sixteen, seventeen, eighteen, nineteen]
    //console.log(guess4)

    // function compareToWordList() {
    //     for (let i = 0; i < 5; i++) {
    //         //MAKE SURE TO CHANGE THIS NUMBER IF THE WORD LIST GETS LONGER
    //         for (let j = 0; j < 230; j++) {
    //             if (guess4[i] === wordList[j][i]) {
    //             document.getElementById("invalidguess").innerHTML = ""
    //             } else {
    //                 if (guess4[i] !== wordList[j][i])
    //                 document.getElementById("invalidguess").innerHTML = "Invalid Guess" 
    //                 }
    //             }
    //         }  
    // }
    

    // compareToWordList();

    // function makeMessageDisappear() {
    //         if (document.getElementById("invalidguess").innerHTML = 'Invalid Guess') {
    //             document.getElementById("invalidguess").innerHTML = ""
    //         }
    // }

    // setTimeout(makeMessageDisappear(), 2000);
    
    function compareGuess4() {
        for (let i = 0; i < 5; i++) {
            for (let j = 15; j < 20; j++) {
           if (answer[i] === guess4[i]) {
           //console.log("Match")
           document.getElementById([i + 15]).style.background = "green";
            } else if (answer.includes(guess4[i])) {
             //console.log("Included");
             document.getElementById([i + 15]).style.background = "orange"
            } else {
           //console.log("Not Matched");
           document.getElementById([i + 15]).style.background = "gray"
            }
        }
    }
    };

    compareGuess4();

    function checkWin() {
        if (answer[0] === guess4[0] && answer[1] === guess4[1] && answer[2] === guess4[2] && answer[3] === guess4[3] && answer[4] === guess4[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    }
}

checkWin();
}

//Collect user input for guess 5
const guess5 = document.querySelector('[class="guess5"]')
const input5 = guess1.querySelectorAll('.inputs input')

function handleInput5(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess5.addEventListener('input', handleInput5);

let submitGuess5 = document.getElementById("checkguess5");

submitGuess5.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess5").disabled = true;
        document.getElementById("checkguess5").readOnly = true;
        function lockInputs() {
            document.getElementById("20").disabled = true;
            document.getElementById("20").readOnly = true;
            document.getElementById("21").disabled = true;
            document.getElementById("21").readOnly = true;
            document.getElementById("22").disabled = true;
            document.getElementById("22").readOnly = true;
            document.getElementById("23").disabled = true;
            document.getElementById("23").readOnly = true;
            document.getElementById("24").disabled = true;
            document.getElementById("24").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let twenty = document.querySelector('[id="20"]').value;
    //console.log(twenty);
    let twentyone = document.querySelector('[id="21"]').value;
    //console.log(twentyone);
    let twentytwo = document.querySelector('[id="22"]').value;
    //console.log(twentytwo);
    let twentythree = document.querySelector('[id="23"]').value;
    //console.log(twentythree);
    let twentyfour = document.querySelector('[id="24"]').value;
    //console.log(twentyfour);

    let guess5 = [twenty, twentyone, twentytwo, twentythree, twentyfour]
    //console.log(guess5);

    // function compareToWordList() {
    //     for (let i = 0; i < 5; i++) {
    //         //MAKE SURE TO CHANGE THIS NUMBER IF THE WORD LIST GETS LONGER
    //         for (let j = 0; j < 230; j++) {
    //             if (guess5[i] === wordList[j][i]) {
    //             document.getElementById("invalidguess").innerHTML = ""
    //             } else {
    //                 if (guess5[i] !== wordList[j][i])
    //                 document.getElementById("invalidguess").innerHTML = "Invalid Guess" 
    //                 }
    //             }
    //         }  
    // }
    

    // compareToWordList();

    // function makeMessageDisappear() {
    //         if (document.getElementById("invalidguess").innerHTML = 'Invalid Guess') {
    //             document.getElementById("invalidguess").innerHTML = ""
    //         }
    // }

    // setTimeout(makeMessageDisappear(), 2000);

    function compareGuess5() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess5[i]) {
           //console.log("Match")
           document.getElementById([i + 20]).style.background = "green";
            } else if (answer.includes(guess5[i])) {
             //console.log("Included");
             document.getElementById([i + 20]).style.background = "orange"
            } else {
           //console.log("Not Matched");
           document.getElementById([i + 20]).style.background = "gray"
            }
        }
    }
    compareGuess5();

    function checkWin() {
        if (answer[0] === guess5[0] && answer[1] === guess5[1] && answer[2] === guess5[2] && answer[3] === guess5[3] && answer[4] === guess5[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    }
}

checkWin();
};

    

//Collect user input for guess 6
const guess6 = document.querySelector('[class="guess6"]')
const input6 = guess1.querySelectorAll('.inputs input')

function handleInput6(e) {
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}
guess6.addEventListener('input', handleInput6);

let submitGuess6 = document.getElementById("checkguess6");

submitGuess6.onclick = function() {
    function lockButton() {
        document.getElementById("checkguess6").disabled = true;
        document.getElementById("checkguess6").readOnly = true;
        function lockInputs() {
            document.getElementById("25").disabled = true;
            document.getElementById("25").readOnly = true;
            document.getElementById("26").disabled = true;
            document.getElementById("26").readOnly = true;
            document.getElementById("27").disabled = true;
            document.getElementById("27").readOnly = true;
            document.getElementById("28").disabled = true;
            document.getElementById("28").readOnly = true;
            document.getElementById("29").disabled = true;
            document.getElementById("29").readOnly = true;
        }
        lockInputs();
    }  
    lockButton();

    let twentyfive = document.querySelector('[id="25"]').value;
    //console.log(twentyfive);
    let twentysix = document.querySelector('[id="26"]').value;
    //console.log(twentysix);
    let twentyseven = document.querySelector('[id="27"]').value;
    //console.log(twentyseven);
    let twentyeight = document.querySelector('[id="28"]').value;
    //console.log(twentyeight);
    let twentynine = document.querySelector('[id="29"]').value;
    //console.log(twentynine);

    let guess6 = [twentyfive, twentysix, twentyseven, twentyeight, twentynine]
    //console.log(guess6)
    
    // function compareToWordList() {
    //     for (let i = 0; i < 5; i++) {
    //         //MAKE SURE TO CHANGE THIS NUMBER IF THE WORD LIST GETS LONGER
    //         for (let j = 0; j < 230; j++) {
    //             if (guess6[i] === wordList[j][i]) {
    //             document.getElementById("invalidguess").innerHTML = " "
    //             } else {
    //                 if (!(guess6[i] === wordList[j][i]))
    //                 document.getElementById("invalidguess").innerHTML = "Invalid Guess" 
    //                 }
    //             }
    //         }  
    // }
    

    // compareToWordList();

    // function makeMessageDisappear() {
    //         if (document.getElementById("invalidguess").innerHTML = "Invalid Guess") {
    //             document.getElementById("invalidguess").innerHTML = " "
    //         }
    // }

    // setTimeout(makeMessageDisappear, 2000);

    function compareGuess6() {
        for (let i = 0; i < 5; i++) {
           if (answer[i] === guess6[i]) {
           //console.log("Match")
           document.getElementById([i + 25]).style.background = "green";
            } else if (answer.includes(guess6[i])) {
             //console.log("Included");
             document.getElementById([i + 25]).style.background = "orange"
            } else {
           //console.log("Not Matched");
           document.getElementById([i + 25]).style.background = "gray"
            }
        }
    } compareGuess6();

    function checkWin() {
        if (answer[0] === guess6[0] && answer[1] === guess6[1] && answer[2] === guess6[2] && answer[3] === guess6[3] && answer[4] === guess6[4]) {
        document.getElementById("winorlosemessage").innerHTML = "YOU WIN!"
    } else {
        document.getElementById("winorlosemessage").innerHTML = `YOU LOSE! The word was ${answerindex}.`
    }
}

checkWin();
};



 //TO DO LIST
 //1. Add backspace function
 //2. Add a keyboard at the bottom
 //3. Needing to submit guess 1 before guess 2 etc.
 //4. Making it so that you can't enter another guess after you've wont the game
 //5. Do it like the actual wordle does with including two of the same letter etc
 //6. Adding animations
 //7. Take out uneccessary code
 //8. Make a readME
 //9. Get it up and running on gitHub pages