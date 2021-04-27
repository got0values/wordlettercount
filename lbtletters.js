function addpar() {
    let par = document.querySelector('#text').value;
    var regEx = /\w+/g; //RegEx to match alphanumeric characters only
    var words = par.split(" "); //Split the words into an array
    var wordsMatched = [];
    var sizeArray = [];

    //Go through each word and push them into a new array joining contractions and putting the size of that new word into another array
    for (let word in words){
        wordsMatched.push(words[word].match(regEx));
        var wordsMatched2 = wordsMatched[word].join("");
	    var size = wordsMatched2.length;
	    sizeArray.push(size);
    }

    //Sort the array for nicer output
    var count = sizeArray.sort();

    //Go through each item in the size count array, filter with each iteration to create an array with just that particular number,
    //with the length of that array being the number of words with that number of letters
    for (let counts of count) {
        var countFiltered = count.filter(y => counts == y)[0];
        console.log(countFiltered);
        if (countFiltered != undefined) {
            console.log(count.filter(currentIndex => currentIndex == counts).length, " words with ", countFiltered, " letters");
            document.querySelector('#letterswords').innerHTML += (count.filter(currentIndex => currentIndex == counts).length + ' words with ' + countFiltered + ' letters' + '<br>');
        }
    }

}

function clearpar() {
    document.querySelector('#letterswords').innerHTML = '';
}