const chai = window.chai
const expect = chai.expect


describe("Wheel of Doom", () => {
    it("Al empezar el juego, aún no ha salido ninguna coder", () => {

        let coders = ["Carmen", "Anna", "Rosa"];

        let wheelOfDoom = new WheelOfDoom(coders);

        expect(wheelOfDoom.codersQueQuedan()).to.have.same.members(["Carmen", "Anna", "Rosa"])
    })

    it("Cuando sale elegida una coder, esa coder no vuelve a salir", () => {
        let coders = ["Carmen", "Anna", "Rosa"];

        let wheelOfDoom = new WheelOfDoom(coders);

        let coder = wheelOfDoom.elegirCoder();

        expect(wheelOfDoom.codersQueQuedan()).not.to.include(coder);
        expect(wheelOfDoom.codersQueQuedan()).to.have.lengthOf(2);
    })

    it("Cuando han salido elegidas todas las coders, el sorteo vuelve a empezar", () => {
        let coders = ["Carmen", "Anna", "Rosa"];

        let wheelOfDoom = new WheelOfDoom(coders);

        wheelOfDoom.elegirCoder();
        wheelOfDoom.elegirCoder();
        wheelOfDoom.elegirCoder();

        expect(wheelOfDoom.codersQueQuedan()).to.have.same.members(["Carmen", "Anna", "Rosa"])
        
    })
});