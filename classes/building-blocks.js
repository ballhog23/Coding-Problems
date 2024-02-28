class Block {
    constructor(array) {
        this.width = array[0]
        this.length = array[1]
        this.height = array[2]
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.getWidth() * this.getLength() * this.getHeight()
    }

    // yes i had to look up the formula for surface area :P
    getSurfaceArea() {
        return (2 * this.getLength() * this.getWidth()) + (2 * this.getLength() * this.getHeight()) + (2 * this.getHeight() * this.getWidth())
    }
}

let aBlock = new Block([20, 21, 22])

console.log(aBlock.getSurfaceArea())