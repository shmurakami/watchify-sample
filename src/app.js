"use strict";

import sample from "./sample";

class App {
    constructor(name) {
        this.name = name;
    }

    say () {
        console.log(this.name);
    }

    say2() {
        console.log(`${this.name} desu.`);
    }

    dest() {
        console.log('dest');
    }

}

