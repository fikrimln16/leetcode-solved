var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Memeriksa apakah array kosong

    let res = 1; 
    let i = 0;

    while (i < nums.length - 1) {
        if (nums[i] !== nums[i + 1]) {
            nums[res] = nums[i + 1];
            res++; 
        }
        i++;
    }

    return res;
};

