function concat(string1, string2) {
    argument.count = 0;
    function argument() {
        let string2 = prompt('Enter: '); argument.count++;
        if (string2 === null) return string1l;
        return string1 += ' ' + string2
    }
    if (string2 === undefined) {
        return argument;
    }
    else {
        return string1 += ' ' + string2
    }
}
