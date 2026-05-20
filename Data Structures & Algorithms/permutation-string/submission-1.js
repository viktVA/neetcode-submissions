class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let map = new Map();


        if (s1.length > s2.length) {
            return false;
        }

        for (const symv of s1) {
            map.set(symv, (map.get(symv) ?? 0) + 1);
        }

        let sizeWindow = s1.length;
        let left = 0
        let myMap = new Map();
        const arrayMap = Array.from(map.keys());
        
        for (let right = 0; right < s2.length; right++) {
            if (sizeWindow < right - left + 1) {
                myMap.set(s2[left], myMap.get(s2[left]) - 1);
                left++;
            }

            myMap.set(s2[right], (myMap.get(s2[right]) ?? 0) + 1);
            

            if (sizeWindow === right - left + 1) {
                
                let flag = true;
                for (const myKey of arrayMap) {
                    if (myMap.get(myKey) !== map.get(myKey)) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    return true;
                }
            }
        }
        return false;
    }
}
