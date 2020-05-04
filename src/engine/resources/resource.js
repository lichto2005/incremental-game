import { clock, TICK_LENGTH } from "../clock";
import { BehaviorSubject } from "rxjs";

class ResourceConfig {
    constructor(name, opts) {
        this.name = name;
        this.initialCount = opts.initialCount || 0;
        this.initialRate = opts.initialRate || 0;
        this.prices = opts.prices || {};
    }
}

class Resource extends BehaviorSubject {
    constructor(config) {
        super(null); //TODO is this a problem if we dont send an update before subscriptions come in? composition instead mayhaps
        this.config = config;
        this.count = config.initialCount;
        this.rate = config.initialRate

        clock.subscribe(() => {
            this.count += TICK_LENGTH * this.rate / 1000.0;
            this.next(this)
        })
    }

    update(amnts) {
        if (!amnts) {
            return false;
        }
        this.updateCount(amnts.count);
        this.updateRate(amnts.rate);
    }

    updateCount(amnt) {
        if (!amnt) {
            return false;
        }
        this.count += amnt;
        this.next(this);
    }

    updateRate(amnt) {
        if (!amnt) {
            return false;
        }
        this.rate += amnt;
        this.next(this);
    }
}


const a = new ResourceConfig('a', {
    // prices: {
    //     'a++': {
    //         price: {c:2},
    //         rate: 1,
    //     }
    // }
});

const b = new ResourceConfig('b', {
    // prices: {
    //     "click": {
    //         price: {},
    //         count: 1.
    //     },
    //     "b++": {
    //         price: {c:10},
    //         rate: 1,
    //     },
    // },
});

const c = new ResourceConfig('c', {
    // initialCount: 2,
    // prices: {
    //     "convert": {
    //         price: {a:5, b:5},
    //         count: 1
    //     },
    // },
});

const ALL_CONFIGS = [a, b, c]

export const RESOURCES = ALL_CONFIGS.reduce(
    (acc, config) => {
        acc[config.name] = new Resource(config);
        return acc;
    }, {})
