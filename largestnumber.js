//Objective is, given an array of numbers, to find the largest possible number by
//joining them together

let nums = [3,30,34,5,9]


//O(nlogn) solution that sorts the numbers based on their combined values,
//then gets rid of any remaining zeroes in the front

return nums.sort((a,b) => {
    return (b + '' + a) - (a + '' + b)
}).join('').replace(/^0*/,'') || '0'