const PhoneMask = (phoneNumber?:string):string => {
    if(!phoneNumber)
        return ''
    if(phoneNumber.length === 11) {
        return "(" + phoneNumber.slice(0, 2) + ") " + phoneNumber.slice(2,7) + "-" + phoneNumber.slice(7, 11)
    }
    if(phoneNumber.length === 10) {
        return "(" + phoneNumber.slice(0, 2) + ") " + phoneNumber.slice(2,6) + "-" + phoneNumber.slice(7, 10)
    }
    if(phoneNumber.length === 9) {
        return + phoneNumber.slice(0,5) + "-" + phoneNumber.slice(5, 9)
    }
    if(phoneNumber.length === 8) {
        return + phoneNumber.slice(0,4) + "-" + phoneNumber.slice(4, 8)
    }
    return phoneNumber
}

export default PhoneMask