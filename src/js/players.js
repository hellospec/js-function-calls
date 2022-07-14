import { cast } from "./magics";

const hero = {
  kind: "hero",
  hp: 100,
  level: 3,
  magicFactor: 0.2,
  magicAbilities: ["fire"],
  cast: cast,
};

const mage = {
  kind: "mage",
  hp: 70,
  level: 2,
  magicFactor: 1.4,
  magicAbilities: ["fire", "blizzard", "thunder"],
  cast: cast,
};

const players = [hero, mage];

export default players;
