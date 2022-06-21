const myArgs = process.argv.slice(2);
switch (myArgs[0]) {
    case 'B-INCOMESSF':
        console.log(myArgs[0], '10.0548');
        break;
    case 'BM70SSF':
        console.log(myArgs[0], '9.9774');
        break;
    case 'BEQSSF':
        console.log(myArgs[0], '11.247');
        break;
    case 'B-FUTURESSF':
        console.log(myArgs[0], '11.443');
        break;
    default:
}

// B-INCOMESSF	10.0548	10.0549	10.0548	0.0107
// BM70SSF	9.9774	9.9775	9.9774	0.0927
// BEQSSF	11.247	11.2471	11.247	0.1319
// B-FUTURESSF	11.443	11.4431	11.443	0.1488