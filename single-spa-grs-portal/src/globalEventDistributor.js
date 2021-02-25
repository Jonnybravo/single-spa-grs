export class GlobalEventDistributor {

    constructor() {
        this.stores = [];
    }

    registerStore(store) {
        this.stores.push(store);
    }

    dispatchAll(event) {
        this.stores.forEach((s) => {
            s.dispatch(event)

            console.log(s, event)
        });
    }
}