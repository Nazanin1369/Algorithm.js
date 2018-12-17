'use sttrict';

var eventTarget = function() {
    this.listeners = {};
};

eventTarget.prototype.listeners = null;
console.log(eventTarget.prototype);

eventTarget.prototype.addEventListener = function(type, callback) {
    if(!(type in this.listeners)) {
        this.listeners[type] = [];
    }

    this.listeners[type].push(callback);
}

eventTarget.prototype.removeEventListener = function(type, callback) {
    if(!(type in this.listeners)) {
        return;
    }
}

eventTarget.prototype.dispatchEvent = function(event) {

}