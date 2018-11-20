/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
    let product = [];
    
    for(let i = 0; i < nums.length; i++) {        
        product[i] = getProduct(nums, 0, i) * getProduct(nums, i + 1, nums.length);
    }
    
    return product;
};

const getProduct = (arr, startIndex, endIndex) => {
    let p = 1;
    
    for(let i = startIndex; i < endIndex; i++) {
        p *= arr[i];
    }
    
    return p;
}
