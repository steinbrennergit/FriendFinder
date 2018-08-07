function Friend(name, responses) {

    this.name = name,
    this.photo = "https://vignette.wikia.nocookie.net/spongebob/images/2/2e/Squee.png/revision/latest?cb=20150920232539",
    this.responses = responses
}



var people = [];
var names = ['Tucker', 'Jeff', 'Avonlea', 'Chris', 'Gehrig', 'Noah', 'Blane', 'Steven', 'Andrew', 'Kevin', 'Carol', 'Lizzy', 'Leah', 'Dominic', 'Matt'];
names.forEach(name => {
    //Randomize 10 reponses for each 
    var resAns = []
    for (let i = 0; i< 10; i++) {
        var resNum = Math.floor(Math.random()*5) +1;
        resAns.push(resNum)    
    }
    var frnd = new Friend(name, resAns)
    people.push(frnd)
});

module.exports = people

