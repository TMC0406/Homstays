require('dotenv').config()

const generateCode = (value) => {
    let output = ''
    value = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("")
    let merge = value + process.env.homestay
    let length = merge.length
    for (let i = 0; i < 4; i++) {
        let index = i === 3 ? Math.floor(merge.length / 2 + length / 2 ) :  Math.floor(length / 2)
        output += merge.charAt(index) 
        length = index
    }
    return output
    // return `${code}${number.charAt(Math.floor(Math.random()*number.length))}`
}

export default generateCode