/**
 *  Använd några olika Jest Matcher för att testa
 */


// eslint-disable-next-line jest/valid-title
test(" Gomoku is a fun game ٩(⚙ᴗ⚙)۶", () => {
    expect("fun").toBe("fun");
});

function getPlayer(uuid) {
    return {
    uuid,
    player: `player${uuid}@test.com`,
    };
}

// toBe uses Object.is för att testa exakt jämställdhet.
// Om du vill kontrollera värdet på ett objekt, använd toEqual:
test("return a player object", () => {
    expect(getPlayer(123456)).toEqual({
        uuid: 123456,
        player: `player123456@test.com`,
    });
});

// toMatch(), ibland behöver vi reguljära uttrycksbaserade tester,
// vi kan använda toMatch() - funktionen.
test("test of string about player", () => {
    expect(getPlayer(1).player).toBe("player1@test.com");
    expect(getPlayer(2).player).toMatch(/.*test.com$/);
});


test('object assignment about colors of Gomoku balls ', () => {
    const colors = {one: "black"};
    colors['two'] = "white";
    expect(colors).toEqual({one: "black", two: "white"});
});

// Kontrollera längden på en array. Testar om ett specifikt element finns.
test("array of balls colors", () => {
    const colors = ["Black", "White",];
    expect(colors).toHaveLength(2);
    expect(colors).toContain("Black");
    expect(colors).not.toContain("Yellow");
    expect(colors).not.toContain("Red");
});

// toBeFalsy(), klarar testet om det utvärderas till falskt.
test("Gomoku round defalut number 0 falsy but string 0 is trushy", () => {
    expect(0).toBeFalsy();
    expect("0").toBeTruthy();
});

// toThrow()
function gomokuPlayer(id, email) {
    if (id <= 0) throw new Error("Invalid ID");
    return {
        id,
        email: `user${id}@email.com`,
    };
};

test("throw when plyer of gomogku id is non negative", () => {
    expect(()=> gomokuPlayer(-1)).toThrow();
    expect(()=> gomokuPlayer(-1)).toThrow("Invalid ID");
});

//
const ruleForGomoku = {
    start: true,
    cols: 15,
    rows: 15,
    board: {
        needs: ['wating', 'addPlayer', 'play','tie','win','cancel'],
        area: 225,
        ballColors: ['black','white'],
        'nice.play': true,
    },
    'winOfLine.bolls': 5,
};

describe('given a player wants to play the gomoku game', () => {
describe('when a player  waiting for a other player to play the game', () => {
    it('then the game is started', () => {
        expect(ruleForGomoku).toHaveProperty('board.area', 225);
        })
    })
})
    














