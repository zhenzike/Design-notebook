const PubSub = {
    message: {},
    publish(type) {
        if (!this.message[type]) {
            return
        }
        this.message[type].forEach(item => {
            item()
        })
    },
    subscribe(type, cb) {
        if (!this.message[type]) {
            this.message[type] = [cb]
        } else {
            this.message[type].push(cb)
        }
    }
}

function testA() {
    console.log('testA');
};

function testB() {
    console.log('testB');
};

PubSub.subscribe(testA);
PubSub.subscribe(testB);

PubSub.publish()