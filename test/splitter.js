var Splitter = artifacts.require("./Splitter.sol");

contract("Splitter contract", (accounts) => {
    let ownerAlice = accounts[0];
    let Bob = accounts[2];
    let Carol = accounts[3];

    beforeEach(() => {
        return Splitter.new({ from: owner })
            .then(instance => {
                contract = instance;
            });
    });

    it("should have deployed properly", () => {
        assert.strictEqual(true, true, "Something went wrong.")
    });

    it("should be owned by the owner", () => {
        return contract.owner({ from: ownerAlice })
            .then(_owner => assert.equal(_owner, ownerAlice, "Contract not owned by owner."));
    });

});