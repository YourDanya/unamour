const permuteUnique = (nums) => {
    const res = [nums]

    for (let level = 0; level < nums.length - 1; level++) {
        const length = res.length
        for (let j = 0; j < length; j++) {
            const permut = res[j]

            const map = {[permut[level]]: true}
            
            for (let i = level + 1; i < nums.length; i++) {
                if (map[permut[i]]) {
                    continue
                }
                map[permut[i]] = true

                let temp = permut[level]
                permut[level] = permut[i]
                permut[i] = temp

                res.push([...permut])
            
                temp = permut[level]
                permut[level] = permut[i]
                permut[i] = temp
                map[permut[i]] += 1
            }
        }
    }

    return res
}

/*

2 2 1 1

 // const map = {}
    // for (let i = 0; i < nums.length; i++) {
    //     if (!map[nums[i]]) {
    //         map[nums[i]] = 0
    //     } else {
    //         map[nums[i]] = 1
    //     }
    // }
    //
    // map[nums[0]] =- 1
    //
    // const res = []

*/