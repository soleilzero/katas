let {expect} = require('chai');
let {Shop, Item} = require('./code.js');
describe("Gilded Rose", function() {
  describe("updates sellIn for", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Aged Brie", 0, 5),
      new Item("Sulfuras, Hand of Ragnaros", 4, 80),
    ]);
    const items = gildedRose.updateQuality();
    it("non-especial cases", function() {
      expect(items[0].sellIn).to.equal(9);
      expect(items[1].sellIn).to.equal(4);
    });
    it("Aged Brie", function() {
      expect(items[2].sellIn).to.equal(-1);
    });
    it("Sulfuras", function() {
      expect(items[3].sellIn).to.equal(4);
    });
  });
  describe("updates quality for ", function() {
    describe("any case cannot be negative", function() {
      const gildedRose = new Shop([
        new Item("+5 Dexterity Vest", 10, 0),
        new Item("Elixir of the Mongoose", 0, 0),
        new Item("Elixir of the Mongoose", -3, 1),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(0);
      });
      it("on sell date", function() {
        expect(items[1].quality).to.equal(0);
      });
      it("after sell date", function() {
        expect(items[2].quality).to.equal(0);
      });
    });
    describe("any case cannot be bigger than 50", function() {
      const gildedRose = new Shop([
        new Item("Aged Brie", 5, 50),
        new Item("Aged Brie", -1, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 3, 49),
      ]);
      const items = gildedRose.updateQuality();
      describe("Aged Brie", function() {
        it("on sell date", function () {
          expect(items[0].quality).to.equal(50);
        });
        it("past sell date", function () {
          expect(items[1].quality).to.equal(50);
        });
      });
      describe("Aged Brie", function() {
        it("on sell date", function () {
          expect(items[0].quality).to.equal(50);
        });
        it("past sell date", function () {
          expect(items[1].quality).to.equal(50);
        });
      });
      describe("Backstage passes", function() {
        it("6 days left", function() {
        expect(items[2].quality).to.equal(50);
        });
        it("3 days left", function() {
          expect(items[3].quality).to.equal(50);
        });
      });
    });
    describe("non especial cases:", function() {
      const gildedRose = new Shop([
        new Item("+5 Dexterity Vest", 10, 20),
        new Item("Elixir of the Mongoose", 0, 7),
        new Item("Elixir of the Mongoose", -3, 1),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(19);
      });
      it("on sell date", function() {
        expect(items[1].quality).to.equal(5);
      });
      it("after sell date", function() {
        expect(items[2].quality).to.equal(0);
      });
    });
    describe("Aged Brie:", function() {
      const gildedRose = new Shop([
        new Item("Aged Brie", 2, 0),
        new Item("Aged Brie", 0, 5),
        new Item("Aged Brie", -1, 5),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(1);
      });
      it("on sell date", function() {
        expect(items[1].quality).to.equal(7);
      });
      it("past sell date", function() {
        expect(items[2].quality).to.equal(7);
      });

    });
      describe("Sulfuras:", function() {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 4, 80),
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", -5, 80),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(80);
      });
      it("on sell date", function() {
        expect(items[1].quality).to.equal(80);
      });
      it("past sell date", function() {
        expect(items[1].quality).to.equal(80);
      });
    });
    describe("Backstage passes with", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", -5, 49),
      ]);
      const items = gildedRose.updateQuality();
      it("15 days left", function() {
        expect(items[0].quality).to.equal(21);
      });
      it("10 days left", function() {
        expect(items[1].quality).to.equal(50);
      });
      it("5 days left", function() {
        expect(items[2].quality).to.equal(50);
      });
      it("0 days left", function() {
        expect(items[3].quality).to.equal(0);
      });
      it("sell date passed", function() {
        expect(items[3].quality).to.equal(0);
      });
    });
    describe("Conjured Mana Cake", function() {
      const gildedRose = new Shop([
        new Item("Conjured Mana Cake", 3, 6),
        new Item("Conjured Mana Cake", 0, 10),
        new Item("Conjured Mana Cake", -5, 10),
      ]);
      const items = gildedRose.updateQuality();
      it("before sell date", function() {
        expect(items[0].quality).to.equal(4);
      });
      it("on sell date", function() {
        expect(items[1].quality).to.equal(6);
      });
      it("after sell date", function() {
        expect(items[1].quality).to.equal(6);
      });
    });
  });
});
