'use sttrict';

var eventTarget = function () {
    this.listeners = {};
};

eventTarget.prototype.listeners = null;
console.log(eventTarget.prototype);

eventTarget.prototype.addEventListener = function (type, callback) {
    if (!(type in this.listeners)) {
        this.listeners[type] = [];
    }

    this.listeners[type].push(callback);
}

eventTarget.prototype.removeEventListener = function (type, callback) {
    if (!(type in this.listeners)) {
        return;
    }

    const stack = this.listeners[type];

    for (let i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
            stack.splice(i, 1);
            return;
        }
    }


}

eventTarget.prototype.dispatchEvent = function (event) {
    if (!(event.type in this.listeners)) {
        return true;
    }
    var stack = this.listeners[event.type].slice();

    for (var i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
    }
    return !event.defaultPrevented;
}