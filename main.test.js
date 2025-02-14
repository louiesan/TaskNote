const { expect } = require("chai");
const sinon = require("sinon");

global.localStorage = {
  getItem: sinon.stub(),
  setItem: sinon.stub(),
};

const { clear } = require("../main.js");

describe("clear function", () => {});
