// ex 1
function renderUpToTwenty() {
    console.log('Ex 1');
    for (var i = 0; i <= 20; i++) {
        console.log(i);
    }
}

renderUpToTwenty();


// ex 2

function tenInTenToAHundred() {
    console.log('Ex 2');
    for (var i = 10; i <=100; i+= 10) {
        console.log(i);
    }
}

tenInTenToAHundred();

//ex 3

function oddUpToTwenty() {
    console.log('Ex 3');
    for (var i = 0; i <= 20; i++) {
        if(i % 2 == 1) {
            console.log(i);
        }
    }
}

oddUpToTwenty();


//ex 4

function evenUpToTwenty() {
    console.log('Ex 4');
    for (var i = 0; i <= 20; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

evenUpToTwenty();

// ex 5
function fromNegativeToPositive() {
    console.log('Ex 5');
    for (i = -10; i <= 0; i++) {
        console.log(i);
    }
}

fromNegativeToPositive();

// ex 6

function inDescendingDirection() {
    console.log('Ex 6');
    for (var i = 10; i >= 0; i--) {
        console.log(i);
    }
}

inDescendingDirection();


// ex 7

function toSquare() {
    console.log('Ex 7');
    for (var i = 1; i <= 10; i++) {
        console.log(i*i);
    }
}

toSquare();