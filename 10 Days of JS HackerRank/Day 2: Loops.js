'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) 
{
        for(let i=0;i<s.length;i++)
        {
            var x = s.charAt(i);
            if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u')
            {
                console.log(x);
            }
        }
        for(let i=0;i<s.length;i++)
        {
            var x = s.charAt(i);
            if(x!='a' && x!='e' && x!='i' && x!='o' && x!='u')
            {
                console.log(x);
            }
        }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
