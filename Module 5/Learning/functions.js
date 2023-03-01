const str = "GH2U87A"

function stringSum(str) {
    let sum = 0;
    const regex = /[0-9]/g;
    for(let i = 0; i < str.length; i++) {
        if(regex.test(str[i])) {
            sum += parseInt(str[i]);
        };
    };
    return sum;
};

const answer = stringSum("G1k1l1d")

console.log(answer)