"use strict";
class HikariStick {
    changeColor = false;

    randomStorage = {};

    constructor(changeColor=false) {
        this.changeColor = changeColor ? true : false;
    }

    // 用于寄存Random结果
    #theRandom(id) {
        if (!id) return Math.random();
        if (!(id in this.randomStorage)) this.randomStorage[id] = Math.random();
        return this.randomStorage[id];
    }

    // 创建观众对象 *param: rank 角色星级
    createCustomers(rank) {
        document.querySelector(".customers").innerHTML = `
            <div class="customers-main"></div>
            <div class="customers-template">
                <div class="level"></div>
                <div class="stick">
                    <div class="stick-body">
                        <div class="illuminant"></div>
                    </div>
                </div>
            </div>`;
        this.removeCustomers();
        const main = document.querySelector(".customers .customers-main");
        const template = document.querySelector(".customers .customers-template");
        const ln = Number(Math.ceil(main.offsetHeight / 30)) + 1;
        for (let i = 0; i < ln; i++) {
            const level = template.querySelector(".level").cloneNode(true);
            let name = "l" + String(i % 2);
            level.classList.add(name);
            let gap = -Number((400 / ln).toFixed(3)) * (i - 1.75);
            level.style = `transform: translate3d(-50%, 0, ${gap}px); width: ${100 + 10 * i}%; bottom: ${main.offsetHeight / ln * i}px; z-index: ${100 + (ln - i)};`;
            const sn = Number(Math.ceil(main.offsetWidth / 80)) + Number(Math.floor(this.#theRandom(`i${i}sn`) * -2)) + 3 + (rank == 5 ? 5 : 0);
            for (let j = 0; j < sn; j++) {
                const stick = template.querySelector(".stick").cloneNode(true);
                let color = (rank => {
                    switch (rank) {
                        case 2:
                            return ["white"];
                        case 3:
                            return ["yellow"];
                        case 4:
                            let star4Color = ["white", "yellow", "red", "green", "blue", "aqua", "plum"];
                            return [star4Color[Math.floor(this.#theRandom((this.changeColor ? `i${i}j${j}s4c` : null)) * star4Color.length)]];
                        case 5:
                            let star5Color = ["white", "yellow", "red", "green", "blue", "plum"];
                            return [star5Color[Math.floor(this.#theRandom((this.changeColor ? `i${i}j${j}s5c` : null)) * star5Color.length)], "star5"];
                        default:
                            throw "Error!";
                    }
                })(rank);
                stick.querySelector(".stick-body").classList.add(...color);
                stick.querySelector(".stick-body").style.left = String(Number(Math.floor(this.#theRandom(`i${i}j${j}lp`) * -21)) + 60) + "px";
                level.appendChild(stick);
            }
            main.appendChild(level);
        }
    }

    // 移除观众对象（必须调用）
    removeCustomers() {
        document.querySelector(".customers .customers-main").innerHTML = null;
    }

    // 暂停摇晃动画
    pauseCustomers() {
        let sticks = Array.from(document.querySelectorAll(".stick .stick-body"));
        sticks.forEach(element => element.style.animation = "none");
    }

    // 继续摇晃动画
    continueCustomers() {
        let sticks = Array.from(document.querySelectorAll(".stick .stick-body"));
        sticks.forEach(element => element.style.animation = element.parentNode.parentNode.classList.contains("l1") ? "swing .25s linear infinite reverse" : "swing .25s linear infinite");
    }
}
