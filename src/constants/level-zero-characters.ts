import { DiceType } from '../types/dice';
import type { OccupationTable } from '../types/tables';

// Typed occupation table. Each entry has numeric min/max (inclusive),
// the original range string, a name, a weapon, and an equipment array.
// We keep your original content (including the d2 entry) and the diceType property
// so callers know which die to roll.
export const Occupations: OccupationTable = {
  diceType: DiceType.D100,
  name: 'Level-zero occupations (d100)',
  entries: [
    {
      min: 1,
      max: 2,
      name: 'animal trainer',
      weapon: { name: 'sling (d4)' },
      equipment: [{ name: 'whistle' }, { name: 'trained animal' }]
    },
    {
      min: 3,
      max: 11,
      name: 'farmer',
      weapon: { name: 'hay fork (d4)' },
      equipment: [{ name: 'poney' }, { name: 'potato sack' }]
    },
    {
      min: 12,
      max: 12,
      name: 'alchemist',
      weapon: { name: 'staff (d4)' },
      equipment: [{ name: 'greek fire', quantity: 1 }]
    },
    {
      min: 13,
      max: 14,
      name: 'beekeeper',
      weapon: { name: 'machete (d4)' },
      equipment: [{ name: 'honey pot' }, { name: 'beeswax' }]
    },
    {
      min: 15,
      max: 15,
      name: 'herald',
      weapon: { name: 'dagger (d4)' },
      equipment: [{ name: 'papirus' }, { name: 'ink and quill' }]
    },
    {
      min: 16,
      max: 25,
      name: 'craftsman',
      weapon: { name: 'dagger (d4)' },
      equipment: [
        { name: 'rope', quantity: 50, unit: 'ft' },
        { name: 'breads sack', observation: '2d6' }
      ]
    },
    {
      min: 26,
      max: 30,
      name: 'artist',
      weapon: { name: 'dart (d2)' },
      equipment: [{ name: 'musical instrument' }, { name: 'makeup' }]
    },
    {
      min: 31,
      max: 32,
      name: 'armorer',
      weapon: { name: 'hammer (d4)' },
      equipment: [{ name: 'iron elm' }]
    },
    {
      min: 33,
      max: 33,
      name: 'astronomer',
      weapon: { name: 'dagger (d4)' },
      equipment: [{ name: 'portable telescope', observation: 'improves seeing 2x' }]
    },
    {
      min: 34,
      max: 35,
      name: 'bedel',
      weapon: { name: 'light mace (d4)' },
      equipment: [{ name: 'holy water' }, { name: 'wine' }]
    },
    {
      min: 36,
      max: 37,
      name: 'hunter',
      weapon: { name: 'light crossbow (d4)' },
      equipment: [{ name: 'lether armor' }, { name: 'hunting hound' }]
    },
    {
      min: 38,
      max: 40,
      name: 'rat hunter',
      weapon: { name: 'net' },
      equipment: [{ name: 'rodent trap' }]
    },
    {
      min: 41,
      max: 41,
      name: 'cartographer',
      weapon: { name: 'staff (d4)' },
      equipment: [{ name: 'book' }, { name: 'ink and quill' }]
    },
    {
      min: 42,
      max: 42,
      name: 'fortune teller',
      weapon: { name: 'dagger (d4)' },
      equipment: [{ name: 'deck of cards' }, { name: 'mirror' }]
    },
    {
      min: 43,
      max: 44,
      name: 'lawyer',
      weapon: { name: 'club (d4)' },
      equipment: [{ name: 'whistle' }, { name: 'hourglass', quantity: 10, unit: 'min' }]
    },
    {
      min: 45,
      max: 47,
      name: 'groom',
      weapon: { name: 'machete (d4)' },
      equipment: [{ name: 'common horse' }]
    },
    {
      min: 48,
      max: 49,
      name: 'locksmith',
      weapon: { name: 'dagger (d4)' },
      equipment: [{ name: 'lockpick' }, { name: 'needles' }, { name: 'scissors' }]
    },
    {
      min: 50,
      max: 51,
      name: 'gravedigger',
      weapon: { name: 'shovel (d3)' },
      equipment: [{ name: 'big sack' }, { name: 'candles', quantity: 2 }]
    },
    {
      min: 52,
      max: 53,
      name: 'cook',
      weapon: { name: 'cleaver (d3)' },
      equipment: [{ name: 'piece of meat' }, { name: 'hook' }]
    },
    {
      min: 54,
      max: 54,
      name: 'healer',
      weapon: { name: 'club (d4)' },
      equipment: [{ name: 'burdock', quantity: 1 }, { name: 'saw' }]
    },
    {
      min: 55,
      max: 55,
      name: 'winemaker',
      weapon: { name: 'sling (d4)' },
      equipment: [
        { name: 'whine', quantity: 3 },
        { name: 'pulmonaria', quantity: 1 }
      ]
    },
    {
      min: 56,
      max: 57,
      name: 'scribe',
      weapon: { name: 'staff (d4)' },
      equipment: [{ name: 'book' }, { name: 'ink and quill' }]
    },
    {
      min: 58,
      max: 59,
      name: 'squire',
      weapon: { name: 'short sword (d4)' },
      equipment: [{ name: 'shield' }, { name: 'poney' }]
    },
    {
      min: 60,
      max: 62,
      name: 'stevedore',
      weapon: { name: 'club (d4)' },
      equipment: [{ name: 'ration', quantity: 4, unit: 'days' }, { name: 'small sack' }]
    },
    {
      min: 63,
      max: 64,
      name: 'blacksmith',
      weapon: { name: 'long sword' },
      equipment: [{ name: 'hammer' }, { name: 'pegs' }]
    },
    {
      min: 65,
      max: 65,
      name: 'nobleman',
      weapon: { name: 'silver rapier (d6)' },
      equipment: [{ name: 'noble clothes' }, { name: 'ring', observation: 'worth 50gp' }]
    },
    {
      min: 66,
      max: 66,
      name: 'philosofer',
      weapon: { name: 'dart (d2)' },
      equipment: [{ name: 'general knowledge book' }]
    },
    {
      min: 67,
      max: 69,
      name: 'bandit',
      weapon: { name: 'short sword (d6)' },
      equipment: [{ name: 'leather armor' }, { name: 'caltrops' }]
    },
    {
      min: 70,
      max: 71,
      name: 'outlander',
      weapon: { name: 'short sword (d6)' },
      equipment: [{ name: 'iron pan' }, { name: 'oil', quantity: 1 }]
    },
    {
      min: 72,
      max: 73,
      name: 'guard',
      weapon: { name: 'spear (d6)' },
      equipment: [{ name: 'shield' }, { name: 'horn' }]
    },
    {
      min: 74,
      max: 75,
      name: 'guide',
      weapon: { name: 'staff (d4)' },
      equipment: [
        { name: 'bag' },
        { name: 'ration', quantity: 3, unit: 'days' },
        { name: 'wineskin' }
      ]
    },
    {
      min: 76,
      max: 76,
      name: 'herbalist',
      weapon: { name: 'club (d4)' },
      equipment: [
        { name: 'aconite', quantity: 1 },
        { name: 'rue', quantity: 1 },
        { name: 'garlic', quantity: 1 }
      ]
    },
    {
      min: 77,
      max: 78,
      name: 'gardener',
      weapon: { name: 'shovel (d3)' },
      equipment: [{ name: 'rue', quantity: 1 }, { name: 'scissors' }]
    },
    {
      min: 79,
      max: 79,
      name: 'jeweler',
      weapon: { name: 'dagger (d4)' },
      equipment: [{ name: 'looking glass' }, { name: 'gem', observation: 'worth 10 gp' }]
    },
    {
      min: 80,
      max: 81,
      name: 'lumberjack',
      weapon: { name: 'commom axe (d4)' },
      equipment: [
        { name: 'coal', quantity: 1 },
        { name: 'rope', quantity: 50, unit: 'ft' }
      ]
    },
    {
      min: 82,
      max: 83,
      name: 'sailor',
      weapon: { name: 'hatchet (d4)' },
      equipment: [{ name: 'canoe' }, { name: 'rope', quantity: 50, unit: 'ft' }]
    },
    {
      min: 84,
      max: 85,
      name: 'peddler',
      weapon: { name: 'light crossbow (d4)' },
      equipment: [{ name: 'common horse' }, { name: 'bell' }]
    },
    {
      min: 86,
      max: 87,
      name: 'merchant',
      weapon: { name: 'short sword (d6)' },
      equipment: [{ name: 'belt pouch' }, { name: 'glass flask', quantity: 1 }]
    },
    {
      min: 88,
      max: 90,
      name: 'miner',
      weapon: { name: 'pickaxe (d4)' },
      equipment: [{ name: 'torch', quantity: 1 }, { name: 'flint and steel' }]
    },
    {
      min: 91,
      max: 92,
      name: 'shepherd',
      weapon: { name: 'staff (d4)' },
      equipment: [{ name: 'sheep' }, { name: 'shepherd dog' }]
    },
    {
      min: 93,
      max: 94,
      name: 'mason',
      weapon: { name: 'hammer (d4)' },
      equipment: [{ name: 'sack of rocks' }]
    },
    {
      min: 95,
      max: 96,
      name: 'fisher',
      weapon: { name: 'javelin (d4)' },
      equipment: [{ name: 'fishing pole' }]
    },
    {
      min: 97,
      max: 97,
      name: 'postillion',
      weapon: { name: 'staff (d4)' },
      equipment: [{ name: 'box with carrier pigeon', quantity: 1 }]
    },
    {
      min: 98,
      max: 99,
      name: 'dentist',
      weapon: { name: 'dagger (d4)' },
      equipment: [{ name: 'string' }, { name: 'mirror' }]
    },
    {
      min: 100,
      max: 100,
      name: 'shaman',
      weapon: { name: 'staff (d4)' },
      equipment: [{ name: 'linseed' }, { name: 'pulmonaria', quantity: 1 }]
    }
  ]
};
