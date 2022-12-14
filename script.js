// build arrays to hold various statement parts
const holidays = ['New Years Day','Valentines Day',
                    'St Patricks Day','Easter',
                    'Passover','Memorial Day',
                    'Independance Day','Labor Day',
                    'Halloween','Christmas'];
const emotions = ['happy','angry','sad','exasperated','jubilant','scared'];
const mascots = ['Santa Claus','Easter Bunny','Jesus','Uncle Sam','Zombie','Witch']

function randomMessage() {
    let randH = holidays[Math.floor(Math.random() * holidays.length)];
    let randEm = emotions[Math.floor(Math.random() * emotions.length)];
    let randMas = mascots[Math.floor(Math.random() * mascots.length)];
    
    console.log(`Tomorrow is ${randH} and you are feeling ${randEm} about seeing ${randMas}.`);
};

randomMessage();
