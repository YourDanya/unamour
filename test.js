const s = "eeydgwdykpv"

const lengthOfLongestSubstring = (string) => {
    const map = {}
    let currentLength = 0
    let longestSubstrLength = 0
    string.split('').forEach((char, index, arr) => {
        const prevIndex = map[char]
        if (prevIndex===0 || prevIndex) {
            if (currentLength > longestSubstrLength) {
                longestSubstrLength = currentLength
            }
            Object.keys(map).every(key  => {
                delete map[key]
                if (key === char) return
            })
            currentLength = index - prevIndex
            map[char] = index
        }
        else {
            currentLength+=1
            map[char] = index
            if (index === arr.length - 1 && currentLength > longestSubstrLength) longestSubstrLength = currentLength
        }
        console.log('current length', currentLength)
    })
    return longestSubstrLength
}

console.log(lengthOfLongestSubstring(s))