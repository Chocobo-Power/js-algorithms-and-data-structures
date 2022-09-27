/**
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the longest substring with all distinct characters.
 * 
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 * 
 * Time Complexity - O(n)
 */

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!

    // Empty string
    if (str.length == 0) return 0;

    const charSet = new Set();
    let max = 0, i = 0, j = 0;

    while (i < str.length) {
        const c = str[i];

        while (charSet.has(c)) {
            charSet.delete(str[j]);
            j++
        }
        charSet.add(c);
        max = Math.max(max, i-j+1);
        i++;
    }

    return max;

    // Old solution, gets the expected output with consistent +1
    // so i'm substracting -1 in the last step, but I think it's wrong

    /*
    const charSet = {};
    let longest = 0;
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr2 < str.length) {

        if (charSet[str[ptr2]] === undefined || charSet[str[ptr2]] === 0) {
            charSet[str[ptr2]] = 1;
            ptr2++;
        } else {
            longest = Math.max(longest, (ptr2+1)-ptr1);
            charSet[str[ptr1]]--;
            ptr1++;
        }
    }
    longest = Math.max(longest, (ptr2+1)-ptr1) -1;

    return longest;
    */
}




// Prints results in a nice table
function printResults(strings) {
    console.log("Longest Substrings:");
    let longest = strings.map(val => val[0].length).reduce((val, curr) => Math.max(val, curr));

    // Print enough dashes
    const dashes = 26 + Math.max(6, longest);
    for (let i = 0; i < dashes; i++) process.stdout.write("-");
    process.stdout.write("\n");

    // Print first line
    process.stdout.write("| String");
    for (let i = 0; i < longest-6+2; i++) process.stdout.write(" ");
    console.log(" | Expected | Result |");

    // Print separator dashes
    for (let i = 0; i < dashes; i++) process.stdout.write("-");
    process.stdout.write("\n");

    // Print rows
    for (str of strings) {
        process.stdout.write("| '"); // pipe
        process.stdout.write(str[0] + "'"); // string
        for (let i = 0; i < longest-str[0].length; i++) process.stdout.write(" "); // Padding
        process.stdout.write(" | "); // pipe
        process.stdout.write(str[1].toString()); // expected output
        process.stdout.write("        | "); // padding + pipe
        process.stdout.write(findLongestSubstring(str[0]).toString()); // actual output
        process.stdout.write("      |\n") // padding + pipe
    }


}


const strings = [
    ['', 0],
    ['rithmschool', 7],
    ['thisisawesome', 6],
    ['thecatinthehat', 7],
    ['bbbbbb', 1],
    ['longestsubstring', 8],
    ['thisishowwedoit', 6],
];


printResults(strings);


/**
 * Expected output
 * 
 * Longest Substrings:
 * ------------------------------------------
 * | String             | Expected | Result |
 * ------------------------------------------
 * | ''                 | 0        | 0      |
 * | 'rithmschool'      | 7        | 7      |
 * | 'thisisawesome'    | 6        | 6      |
 * | 'thecatinthehat'   | 7        | 7      |
 * | 'bbbbbb'           | 1        | 1      |
 * | 'longestsubstring' | 8        | 8      |
 * | 'thisishowwedoit'  | 6        | 6      |
 *
 */
