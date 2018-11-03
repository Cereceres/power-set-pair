
module.exports = (array, convolution) => {
    if (typeof convolution !== 'function') throw new Error('convolutionNeeded')
    const response = []
    const beforeLast = array.length - 1
    const iterate = (i = 0) => {
        for (let j = i + 1, len = array.length; j < len; j++) response
            .push(
                convolution(array[i], array[j], response[response.length - 1])
            )
        if (i <= beforeLast) return iterate(i + 1)

        return response
    }

    return iterate()
}
