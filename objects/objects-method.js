let restaurant = {
    name: 'cofe',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailabilty: function(partySize) {
        let setLeft = this.guestCapacity - this.guestCount
        return  partySize <=  setLeft 
    },
    seatParty: function(partySize){
        this.guestCount = partySize + this.guestCount
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    } 
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailabilty(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailabilty(4))


