//object생성
/**
 * 속성
 *   만들어진 연도
 *   집의 이름
 *   창문의 개수
 *
 * 함수
 *      만들어진 연도를 콘솔창에 출력하는 "건물의 나이"
 *      창문의 개수를 콘솔창에 출력하는 함수
 */

class House {
  constructor(year, name, window) {
    this.name = name;
    this.year = year;
    this.window = window;
  }

  getAge() {
    console.log(`${this.name}은 건축한지 ${2023 - this.year} 지났어요`);
  }

  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window} 입니다`);
  }
}

const house1 = new House(1789, "old", 1);
console.log(house1);
house1.getAge();
house1.getWindow();
console.log("------");

const house2 = new House(2022, "자이", 10);
console.log(house1);
house1.getAge();
house1.getWindow();
console.log(house2.name);
console.log("--상속--");

class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name}, 총 층수는 ${this.floor}, 창문의 개수는 ${this.windowMaker}`;
  }
}

const apt1 = new Apartment(2020, "reamian", 6, 19, "kcc");
console.log(apt1);
console.log(apt1.getAptInfo());
apt1.getAge();
apt1.getWindow();

// overriding:  메소드 재정의
