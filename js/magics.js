const availableMagics = [
  { name: "fire", damage: 30 },
  { name: "blizzard", damage: 30 },
  { name: "thunder", damage: 30 },
];

function getBaseMagicDamageFor(name) {
  const m = availableMagics.find(function (magic) {
    return magic.name === name;
  });
  if (m != null) {
    return m.damage;
  } else {
    return 0;
  }
}

function cast(magicName) {
  if (canCast(this, magicName)) {
    console.log(`[${magicName}] ${totalMagicDamageFor(this, magicName)} !!`);
  } else {
    console.log("Alohomora ... errr");
  }
}

function canCast(player, magicName) {
  let result = player.magicAbilities.find((name) => name === magicName);
  return result != undefined;
}

function totalMagicDamageFor(player, name) {
  let baseDamage = getBaseMagicDamageFor(name);
  let level = player.level || 1;
  let magicFactor = player.magicFactor || 1;

  return parseInt(level * magicFactor * baseDamage);
}

export { availableMagics, getBaseMagicDamageFor, cast };
