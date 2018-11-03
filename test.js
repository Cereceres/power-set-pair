const assert = require('assert')

const convolution = require('./index')


describe('test to convolution', () => {
    it('should return the convolution of array', () => {
        assert.deepEqual(convolution([1, 2], (a, b) => a + b), [3])
    })

    it('should return the convolution of array [1,2,3,4]', () => {
        assert.deepEqual(convolution([1, 2, 3, 4], (a, b) => a + b), [3, 4, 5, 5, 6, 7])
    })

    it('should throw the error if a function is not given', () => {
        try {
            convolution([1, 2, 3])
        } catch (error) {
            assert(error.message === 'convolutionNeeded')
        }
    })
})
