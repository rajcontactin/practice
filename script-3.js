    function twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];
            console.log(need);
            if (map.has(need)) {
                console.log("reached_y");
                return [map.get(need), i];
                
            }
            console.log("reached_n");
            map.set(nums[i], i);
        }
    }