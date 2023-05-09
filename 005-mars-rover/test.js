import { executeInstructions } from "./code";

beforeAll(() => {
    jest.spyOn(console,"log");
});

afterEach(() => {
    console.log.mockClear();
});

afterAll(() => {
    jest.restoreAllMocks();
})

describe("Given a 0x0 plateau with a sole rover in", () => {
    describe("0,0", () => {
        describe("facing north", () => {
            describe("When instructed to turn left", () => {
                it("It faces west", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'N',
                        instructions: 'L',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 W\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces east", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'N',
                        instructions: 'R',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 E\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing west", () => {
            describe("When instructed to turn left", () => {
                it("It faces south", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'W',
                        instructions: 'L',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 S\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces south", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'W',
                        instructions: 'R',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 N\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing east", () => {
            describe("When instructed to turn left", () => {
                it("It faces north", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'E',
                        instructions: 'L',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 N\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces south", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'E',
                        instructions: 'R',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 S\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing south", () => {
            describe("When instructed to turn left", () => {
                it("It faces east", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'S',
                        instructions: 'L',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 E\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces west", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'S',
                        instructions: 'R',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 0 W\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When given a invalid instruction 'X'", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'S',
                            instructions: 'X',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid instruction 'X'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
            describe("When given a invalid instruction '3'", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'S',
                            instructions: '3',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid instruction '3'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
        });
        describe("facing an invalid direction 'T'", () => {
            describe("When instructed to turn left", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'T',
                            instructions: 'L',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid direction 'T'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
            describe("When instructed to turn right", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'T',
                            instructions: 'R',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid direction 'T'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
        });
    });
    describe("1,0 facing south", () => {
        describe("When instructed to turn left", () => {
            it("It throws an error", () => {
                expect(() => {
                    executeInstructions({
                        x: 1,
                        y: 0,
                        direction: 'S',
                        instructions: 'L',
                        plateau: {
                            width: 1,
                            height: 1,
                        }
                    })
                }).toThrow(`Invalid position '1,0' in grid of size 1,1 indexed from zero`);
                expect(console.log).toBeCalledTimes(0);
            });
        });
    });
});
