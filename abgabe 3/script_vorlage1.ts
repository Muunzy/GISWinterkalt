// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 24;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `Mamun`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}

/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Mamun
ich esse gerne Pizza
Ich gehöre zur Genation Z 
 */

// -- [Aufgabe 2]

let events: any[][] = [
  ["Mark Knopfler", 10.1],
  ["Pink Floyd", 15.9],
  ["Metallica", 20.1],
  ["Michael Bublé", 11.1],
  ["Dire Straits", 12.2],
  ["Mariah Carey", 1.1],
  ["Cat Stevens", 12.99],
  ["Mark Forster", 2.1],
  ["Helene Fischer", 3.1],
  ["Bee Gees", 25.2],
];

// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN

// Lösung a) ...

console.log(`Länge ist ${events.length}.`);

// Lösung b) ...
for (let outerIndex: number = 0; outerIndex < events.length; outerIndex++) {
  console.log(`${events[outerIndex]}`);
}
  // Lösung c) ...

  console.log(getHighestPrice(events));

  function getHighestPrice(_events: (string | number)[][]): number {

    let max: number = <number>_events[0][1];

    for (let outerIndex: number = 0; outerIndex < events.length; outerIndex++) {
      if (_events[outerIndex][1] > max) {
        max = <number>_events[outerIndex][1];
      }
    }

    return max;
  }

// Lösung d) ...
console.log(isArtistExistent(events, "Cat Stevens"));

function isArtistExistent(_events: (string | number)[][], _artistNmae: string): boolean {

  for (let outerIndex: number = 0; outerIndex < events.length; outerIndex++) {
    if (_events[outerIndex][0] == _artistNmae) {
      return true;
    }
  }

  return false;
}
// Lösung e) ...

// Lösung f) ...

// Lösung g) ...

// Lösung h) ...
