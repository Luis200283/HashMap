let HashMap = class {
    constructor() {
        this.hasMap = {}
        this.counter = 0
    }
    hash(key) {
        let hasCode = 0
        const primeNumber = 31

        for (let i = 0; i < key.length; i++) {
            hasCode = (primeNumber * hasCode + key.charCodeAt(i))
        }
        return hasCode
    }
    set(key, value, newValue) {
        let keygen = this.hash(key)
        if (value === undefined) return
        if (!this.hasMap[keygen]) {
            this.hasMap[keygen] = []
            this.length = 0
        }
        if (newValue !== undefined) {
            let index = this.hasMap[keygen].indexOf(value)
            if (index !== -1) {
                this.hasMap[keygen][index] = newValue
            }
            return
        }
        if (this.hasMap[keygen].includes(value)) {
            return
        }
        this.hasMap[keygen].push(value)
        this.counter++
    }
    get(key) {
        let adress = String(this.hash(key))
        let result = this.hasMap[adress]
        if (result !== undefined) {
            return result
        }
        return 'not found'
    }
    has(key) {
        if (this.get(key)) {
            return true
        }
        return false
    }
    remove(key) {
        let keygen = this.hash(key)
        if (!this.get(key)) return false
        delete this.hasMap[keygen]
        this.counter--
        return true
    }
    lenght(){
        return this.counter
    }
    clear(){
        this.hasMap = {}
        return true
    }
    keys(){
        let result =  Object.keys(this.hasMap)
        return result
    }
    values(){
        let arr = Object.values(this.hasMap)
        let result = []
        for (const element of arr) {
            for (const value of element) {
                result.push(value)
            }
        }
        return result
    }
    entries(){
        return this.hasMap
    }
}

// let prueba = new HashMap()
// prueba.set('raSa', 'value 1')// set
// prueba.set('raSa', 'value 1') //error
// prueba.set('raSa', 'value 1', 'value 2') // update
// prueba.set('raSa', 'value 1', 'value 3') //error
// console.log(prueba.set('Sara', 'value 10')) //set
// console.log(prueba.keys())
// console.log(prueba.values())
// console.log(prueba.entries())
// console.log(prueba.remove('Sara')) // remove
// console.log(prueba.get('Sara')) // call
// console.log(prueba.lenght())
// console.log(prueba.clear())
