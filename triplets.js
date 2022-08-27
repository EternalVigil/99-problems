const numbers = [0,0,0].sort((a, b) => a - b);
// need triples that sum up to zero
    const matches = [];

    for(let i = 0; i < numbers.length - 2 && numbers[i] <= 0; i++) {
        let j = i + 1;
        let k = numbers.length - 1;

        if(i > 0 && numbers[i] === numbers[i - 1]) {
            continue;
        }


        while(j < k) {
            const sum = numbers[i] + numbers[j] + numbers[k];


            if(sum === 0) {
                matches.push([numbers[i], numbers[j], numbers[k]]);
                j++;
                
                while(j < k && numbers[j] === numbers[j - 1]) {
                    j++;
                }

                k--;
                while(k > j && numbers[k] === numbers[k + 1]) {
                    k--;
                }
            } else if(sum > 0) {
                k--;
                while(k > j && numbers[k] === numbers[k + 1]) {
                    k--;
                }
            } else {
                j++;
                while(j < k && numbers[j] === numbers[j - 1]) {
                    j++;
                }
            }

        }

    }
    return matches;