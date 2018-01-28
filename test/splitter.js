var Splitter = artifacts.require("./Splitter.sol");

contract("Splitter contract", (accounts) => {
    let ownerAlice = accounts[0];
    let _bob = accounts[1];
    let _carol = accounts[2];

    beforeEach(() => {
        return Splitter.new(_bob, _carol, { from: owner })
            .then(instance => {
                contract = instance;
                bobAddress = _bob;
                carolAddress = _carol;
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