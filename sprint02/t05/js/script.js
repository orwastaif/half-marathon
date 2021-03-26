function total(addCount, addPrice, currentTotal) {
    let result = 0;
    if (currentTotal === undefined) {
        currentTotal = 0;
    }
    result = currentTotal + addCount * addPrice
    return result = Number(result.toFixed(2));
  
  }