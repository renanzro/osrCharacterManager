import { DiceType } from '../types/dice';
import type { OccupationTable } from '../types/tables';

// Typed occupation table using new RollingTableTranslated structure
// Each entry has an id, min/max range, and data array containing occupation details in multiple languages
export const Occupations: OccupationTable = {
  id: 'default-level-zero-occupations',
  diceType: DiceType.D100,
  name: [
    { language: 'en', value: 'Level-zero occupations (d100)' },
    { language: 'pt-BR', value: 'Ocupações de nível zero (d100)' }
  ],
  translated: true,
  entries: [
    {
      id: 'animal_trainer',
      min: 1,
      max: 2,
      data: [
        {
          language: 'en',
          name: 'animal trainer',
          weapon: { name: 'sling (d4)' },
          equipment: [{ name: 'whistle' }, { name: 'trained animal' }]
        },
        {
          language: 'pt-BR',
          name: 'treinador de animais',
          weapon: { name: 'estilingue (d4)' },
          equipment: [{ name: 'apito' }, { name: 'animal treinado' }]
        }
      ]
    },
    {
      id: 'farmer',
      min: 3,
      max: 11,
      data: [
        {
          language: 'en',
          name: 'farmer',
          weapon: { name: 'hay fork (d4)' },
          equipment: [{ name: 'poney' }, { name: 'potato sack' }]
        },
        {
          language: 'pt-BR',
          name: 'fazendeiro',
          weapon: { name: 'forquilha de feno (d4)' },
          equipment: [{ name: 'pônei' }, { name: 'saco de batatas' }]
        }
      ]
    },
    {
      id: 'alchemist',
      min: 12,
      max: 12,
      data: [
        {
          language: 'en',
          name: 'alchemist',
          weapon: { name: 'staff (d4)' },
          equipment: [{ name: 'greek fire', quantity: 1 }]
        },
        {
          language: 'pt-BR',
          name: 'alquimista',
          weapon: { name: 'cajado (d4)' },
          equipment: [{ name: 'fogo grego', quantity: 1 }]
        }
      ]
    },
    {
      id: 'beekeeper',
      min: 13,
      max: 14,
      data: [
        {
          language: 'en',
          name: 'beekeeper',
          weapon: { name: 'machete (d4)' },
          equipment: [{ name: 'honey pot' }, { name: 'beeswax' }]
        },
        {
          language: 'pt-BR',
          name: 'apicultor',
          weapon: { name: 'facão (d4)' },
          equipment: [{ name: 'pote de mel' }, { name: 'cera de abelha' }]
        }
      ]
    },
    {
      id: 'herald',
      min: 15,
      max: 15,
      data: [
        {
          language: 'en',
          name: 'herald',
          weapon: { name: 'dagger (d4)' },
          equipment: [{ name: 'papirus' }, { name: 'ink and quill' }]
        },
        {
          language: 'pt-BR',
          name: 'arauto',
          weapon: { name: 'adaga (d4)' },
          equipment: [{ name: 'papiru' }, { name: 'tinta e pena' }]
        }
      ]
    },
    {
      id: 'craftsman',
      min: 16,
      max: 25,
      data: [
        {
          language: 'en',
          name: 'craftsman',
          weapon: { name: 'dagger (d4)' },
          equipment: [
            { name: 'rope', quantity: 50, unit: 'ft' },
            { name: 'breads sack', observation: '2d6' }
          ]
        },
        {
          language: 'pt-BR',
          name: 'artesão',
          weapon: { name: 'adaga (d4)' },
          equipment: [
            { name: 'corda', quantity: 50, unit: 'pés' },
            { name: 'saco de pães', observation: '2d6' }
          ]
        }
      ]
    },
    {
      id: 'artist',
      min: 26,
      max: 30,
      data: [
        {
          language: 'en',
          name: 'artist',
          weapon: { name: 'dart (d2)' },
          equipment: [{ name: 'musical instrument' }, { name: 'makeup' }]
        },
        {
          language: 'pt-BR',
          name: 'artista',
          weapon: { name: 'dardo (d2)' },
          equipment: [{ name: 'instrumento musical' }, { name: 'maquiagem' }]
        }
      ]
    },
    {
      id: 'armorer',
      min: 31,
      max: 32,
      data: [
        {
          language: 'en',
          name: 'armorer',
          weapon: { name: 'hammer (d4)' },
          equipment: [{ name: 'iron elm' }]
        },
        {
          language: 'pt-BR',
          name: 'armeiro',
          weapon: { name: 'martelo (d4)' },
          equipment: [{ name: 'forja de ferro' }]
        }
      ]
    },
    {
      id: 'astronomer',
      min: 33,
      max: 33,
      data: [
        {
          language: 'en',
          name: 'astronomer',
          weapon: { name: 'dagger (d4)' },
          equipment: [{ name: 'portable telescope', observation: 'improves seeing 2x' }]
        },
        {
          language: 'pt-BR',
          name: 'astrônomo',
          weapon: { name: 'adaga (d4)' },
          equipment: [{ name: 'luneta portátil', observation: 'melhora visão 2x' }]
        }
      ]
    },
    {
      id: 'bedel',
      min: 34,
      max: 35,
      data: [
        {
          language: 'en',
          name: 'bedel',
          weapon: { name: 'light mace (d4)' },
          equipment: [{ name: 'holy water' }, { name: 'wine' }]
        },
        {
          language: 'pt-BR',
          name: 'bedel',
          weapon: { name: 'maça leve (d4)' },
          equipment: [{ name: 'água benta' }, { name: 'vinho' }]
        }
      ]
    },
    {
      id: 'hunter',
      min: 36,
      max: 37,
      data: [
        {
          language: 'en',
          name: 'hunter',
          weapon: { name: 'light crossbow (d4)' },
          equipment: [{ name: 'lether armor' }, { name: 'hunting hound' }]
        },
        {
          language: 'pt-BR',
          name: 'caçador',
          weapon: { name: 'besta leve (d4)' },
          equipment: [{ name: 'armadura de couro' }, { name: 'cão de caça' }]
        }
      ]
    },
    {
      id: 'rat_hunter',
      min: 38,
      max: 40,
      data: [
        {
          language: 'en',
          name: 'rat hunter',
          weapon: { name: 'net' },
          equipment: [{ name: 'rodent trap' }]
        },
        {
          language: 'pt-BR',
          name: 'caçador de ratos',
          weapon: { name: 'rede' },
          equipment: [{ name: 'armadilha para roedores' }]
        }
      ]
    },
    {
      id: 'cartographer',
      min: 41,
      max: 41,
      data: [
        {
          language: 'en',
          name: 'cartographer',
          weapon: { name: 'staff (d4)' },
          equipment: [{ name: 'book' }, { name: 'ink and quill' }]
        },
        {
          language: 'pt-BR',
          name: 'cartógrafo',
          weapon: { name: 'cajado (d4)' },
          equipment: [{ name: 'livro' }, { name: 'tinta e pena' }]
        }
      ]
    },
    {
      id: 'fortune_teller',
      min: 42,
      max: 42,
      data: [
        {
          language: 'en',
          name: 'fortune teller',
          weapon: { name: 'dagger (d4)' },
          equipment: [{ name: 'deck of cards' }, { name: 'mirror' }]
        },
        {
          language: 'pt-BR',
          name: 'cartomante',
          weapon: { name: 'adaga (d4)' },
          equipment: [{ name: 'baralho de cartas' }, { name: 'espelho' }]
        }
      ]
    },
    {
      id: 'lawyer',
      min: 43,
      max: 44,
      data: [
        {
          language: 'en',
          name: 'lawyer',
          weapon: { name: 'club (d4)' },
          equipment: [{ name: 'whistle' }, { name: 'hourglass', quantity: 10, unit: 'min' }]
        },
        {
          language: 'pt-BR',
          name: 'advogado',
          weapon: { name: 'clava (d4)' },
          equipment: [{ name: 'apito' }, { name: 'ampulheta', quantity: 10, unit: 'minutos' }]
        }
      ]
    },
    {
      id: 'groom',
      min: 45,
      max: 47,
      data: [
        {
          language: 'en',
          name: 'groom',
          weapon: { name: 'machete (d4)' },
          equipment: [{ name: 'common horse' }]
        },
        {
          language: 'pt-BR',
          name: 'cocheiro',
          weapon: { name: 'facão (d4)' },
          equipment: [{ name: 'cavalo comum' }]
        }
      ]
    },
    {
      id: 'locksmith',
      min: 48,
      max: 49,
      data: [
        {
          language: 'en',
          name: 'locksmith',
          weapon: { name: 'dagger (d4)' },
          equipment: [{ name: 'lockpick' }, { name: 'needles' }, { name: 'scissors' }]
        },
        {
          language: 'pt-BR',
          name: 'chaveiro',
          weapon: { name: 'adaga (d4)' },
          equipment: [{ name: 'arame de fechar' }, { name: 'agulhas' }, { name: 'tesouras' }]
        }
      ]
    },
    {
      id: 'gravedigger',
      min: 50,
      max: 51,
      data: [
        {
          language: 'en',
          name: 'gravedigger',
          weapon: { name: 'shovel (d3)' },
          equipment: [{ name: 'big sack' }, { name: 'candles', quantity: 2 }]
        },
        {
          language: 'pt-BR',
          name: 'coveiro',
          weapon: { name: 'pá (d3)' },
          equipment: [{ name: 'saco grande' }, { name: 'velas', quantity: 2 }]
        }
      ]
    },
    {
      id: 'cook',
      min: 52,
      max: 53,
      data: [
        {
          language: 'en',
          name: 'cook',
          weapon: { name: 'cleaver (d3)' },
          equipment: [{ name: 'piece of meat' }, { name: 'hook' }]
        },
        {
          language: 'pt-BR',
          name: 'cozinheiro',
          weapon: { name: 'cutelo (d3)' },
          equipment: [{ name: 'pedaço de carne' }, { name: 'gancho' }]
        }
      ]
    },
    {
      id: 'healer',
      min: 54,
      max: 54,
      data: [
        {
          language: 'en',
          name: 'healer',
          weapon: { name: 'club (d4)' },
          equipment: [{ name: 'burdock', quantity: 1 }, { name: 'saw' }]
        },
        {
          language: 'pt-BR',
          name: 'curandeiro',
          weapon: { name: 'clava (d4)' },
          equipment: [{ name: 'bardana', quantity: 1 }, { name: 'serra' }]
        }
      ]
    },
    {
      id: 'winemaker',
      min: 55,
      max: 55,
      data: [
        {
          language: 'en',
          name: 'winemaker',
          weapon: { name: 'sling (d4)' },
          equipment: [
            { name: 'whine', quantity: 3 },
            { name: 'pulmonaria', quantity: 1 }
          ]
        },
        {
          language: 'pt-BR',
          name: 'vinicultor',
          weapon: { name: 'estilingue (d4)' },
          equipment: [
            { name: 'vinho', quantity: 3 },
            { name: 'pulmonária', quantity: 1 }
          ]
        }
      ]
    },
    {
      id: 'scribe',
      min: 56,
      max: 57,
      data: [
        {
          language: 'en',
          name: 'scribe',
          weapon: { name: 'staff (d4)' },
          equipment: [{ name: 'book' }, { name: 'ink and quill' }]
        },
        {
          language: 'pt-BR',
          name: 'escriba',
          weapon: { name: 'cajado (d4)' },
          equipment: [{ name: 'livro' }, { name: 'tinta e pena' }]
        }
      ]
    },
    {
      id: 'squire',
      min: 58,
      max: 59,
      data: [
        {
          language: 'en',
          name: 'squire',
          weapon: { name: 'short sword (d4)' },
          equipment: [{ name: 'shield' }, { name: 'poney' }]
        },
        {
          language: 'pt-BR',
          name: 'escudeiro',
          weapon: { name: 'espada curta (d4)' },
          equipment: [{ name: 'escudo' }, { name: 'pônei' }]
        }
      ]
    },
    {
      id: 'stevedore',
      min: 60,
      max: 62,
      data: [
        {
          language: 'en',
          name: 'stevedore',
          weapon: { name: 'club (d4)' },
          equipment: [{ name: 'ration', quantity: 4, unit: 'days' }, { name: 'small sack' }]
        },
        {
          language: 'pt-BR',
          name: 'estivador',
          weapon: { name: 'clava (d4)' },
          equipment: [{ name: 'ração', quantity: 4, unit: 'dias' }, { name: 'saco pequeno' }]
        }
      ]
    },
    {
      id: 'blacksmith',
      min: 63,
      max: 64,
      data: [
        {
          language: 'en',
          name: 'blacksmith',
          weapon: { name: 'long sword' },
          equipment: [{ name: 'hammer' }, { name: 'pegs' }]
        },
        {
          language: 'pt-BR',
          name: 'ferreiro',
          weapon: { name: 'espada longa' },
          equipment: [{ name: 'martelo' }, { name: 'pinos' }]
        }
      ]
    },
    {
      id: 'nobleman',
      min: 65,
      max: 65,
      data: [
        {
          language: 'en',
          name: 'nobleman',
          weapon: { name: 'silver rapier (d6)' },
          equipment: [{ name: 'noble clothes' }, { name: 'ring', observation: 'worth 50gp' }]
        },
        {
          language: 'pt-BR',
          name: 'fidalgo',
          weapon: { name: 'florete de prata (d6)' },
          equipment: [{ name: 'roupas nobres' }, { name: 'anel', observation: 'vale 50 gp' }]
        }
      ]
    },
    {
      id: 'philosofer',
      min: 66,
      max: 66,
      data: [
        {
          language: 'en',
          name: 'philosofer',
          weapon: { name: 'dart (d2)' },
          equipment: [{ name: 'general knowledge book' }]
        },
        {
          language: 'pt-BR',
          name: 'filósofo',
          weapon: { name: 'dardo (d2)' },
          equipment: [{ name: 'livro de conhecimentos gerais' }]
        }
      ]
    },
    {
      id: 'bandit',
      min: 67,
      max: 69,
      data: [
        {
          language: 'en',
          name: 'bandit',
          weapon: { name: 'short sword (d6)' },
          equipment: [{ name: 'leather armor' }, { name: 'caltrops' }]
        },
        {
          language: 'pt-BR',
          name: 'fora da lei',
          weapon: { name: 'espada curta (d6)' },
          equipment: [{ name: 'armadura leve' }, { name: 'esporas' }]
        }
      ]
    },
    {
      id: 'outlander',
      min: 70,
      max: 71,
      data: [
        {
          language: 'en',
          name: 'outlander',
          weapon: { name: 'short sword (d6)' },
          equipment: [{ name: 'iron pan' }, { name: 'oil', quantity: 1 }]
        },
        {
          language: 'pt-BR',
          name: 'forasteiro',
          weapon: { name: 'espada curta (d6)' },
          equipment: [{ name: 'panela de ferro' }, { name: 'óleo', quantity: 1 }]
        }
      ]
    },
    {
      id: 'guard',
      min: 72,
      max: 73,
      data: [
        {
          language: 'en',
          name: 'guard',
          weapon: { name: 'spear (d6)' },
          equipment: [{ name: 'shield' }, { name: 'horn' }]
        },
        {
          language: 'pt-BR',
          name: 'guarda',
          weapon: { name: 'lança (d6)' },
          equipment: [{ name: 'escudo' }, { name: 'berrante' }]
        }
      ]
    },
    {
      id: 'guide',
      min: 74,
      max: 75,
      data: [
        {
          language: 'en',
          name: 'guide',
          weapon: { name: 'staff (d4)' },
          equipment: [
            { name: 'bag' },
            { name: 'ration', quantity: 3, unit: 'days' },
            { name: 'wineskin' }
          ]
        },
        {
          language: 'pt-BR',
          name: 'guia',
          weapon: { name: 'cajado (d4)' },
          equipment: [
            { name: 'bolsa' },
            { name: 'ração', quantity: 3, unit: 'dias' },
            { name: 'odre' }
          ]
        }
      ]
    },
    {
      id: 'herbalist',
      min: 76,
      max: 76,
      data: [
        {
          language: 'en',
          name: 'herbalist',
          weapon: { name: 'club (d4)' },
          equipment: [
            { name: 'aconite', quantity: 1 },
            { name: 'rue', quantity: 1 },
            { name: 'garlic', quantity: 1 }
          ]
        },
        {
          language: 'pt-BR',
          name: 'herborista',
          weapon: { name: 'clava (d4)' },
          equipment: [
            { name: 'acônito', quantity: 1 },
            { name: 'arruda', quantity: 1 },
            { name: 'alho', quantity: 1 }
          ]
        }
      ]
    },
    {
      id: 'gardener',
      min: 77,
      max: 78,
      data: [
        {
          language: 'en',
          name: 'gardener',
          weapon: { name: 'shovel (d3)' },
          equipment: [{ name: 'rue', quantity: 1 }, { name: 'scissors' }]
        },
        {
          language: 'pt-BR',
          name: 'jardineiro',
          weapon: { name: 'pá (d3)' },
          equipment: [{ name: 'arruda', quantity: 1 }, { name: 'tesouras' }]
        }
      ]
    },
    {
      id: 'jeweler',
      min: 79,
      max: 79,
      data: [
        {
          language: 'en',
          name: 'jeweler',
          weapon: { name: 'dagger (d4)' },
          equipment: [{ name: 'looking glass' }, { name: 'gem', observation: 'worth 10 gp' }]
        },
        {
          language: 'pt-BR',
          name: 'joalheiro',
          weapon: { name: 'adaga (d4)' },
          equipment: [{ name: 'espelho' }, { name: 'gema', observation: 'vale 10 gp' }]
        }
      ]
    },
    {
      id: 'lumberjack',
      min: 80,
      max: 81,
      data: [
        {
          language: 'en',
          name: 'lumberjack',
          weapon: { name: 'commom axe (d4)' },
          equipment: [
            { name: 'coal', quantity: 1 },
            { name: 'rope', quantity: 50, unit: 'ft' }
          ]
        },
        {
          language: 'pt-BR',
          name: 'lenhador',
          weapon: { name: 'machado comum (d4)' },
          equipment: [
            { name: 'carvão', quantity: 1 },
            { name: 'corda', quantity: 50, unit: 'pés' }
          ]
        }
      ]
    },
    {
      id: 'sailor',
      min: 82,
      max: 83,
      data: [
        {
          language: 'en',
          name: 'sailor',
          weapon: { name: 'hatchet (d4)' },
          equipment: [{ name: 'canoe' }, { name: 'rope', quantity: 50, unit: 'ft' }]
        },
        {
          language: 'pt-BR',
          name: 'marinheiro',
          weapon: { name: 'machadinha (d4)' },
          equipment: [{ name: 'canoa' }, { name: 'corda', quantity: 50, unit: 'pés' }]
        }
      ]
    },
    {
      id: 'peddler',
      min: 84,
      max: 85,
      data: [
        {
          language: 'en',
          name: 'peddler',
          weapon: { name: 'light crossbow (d4)' },
          equipment: [{ name: 'common horse' }, { name: 'bell' }]
        },
        {
          language: 'pt-BR',
          name: 'mascate',
          weapon: { name: 'besta leve (d4)' },
          equipment: [{ name: 'cavalo comum' }, { name: 'sino' }]
        }
      ]
    },
    {
      id: 'merchant',
      min: 86,
      max: 87,
      data: [
        {
          language: 'en',
          name: 'merchant',
          weapon: { name: 'short sword (d6)' },
          equipment: [{ name: 'belt pouch' }, { name: 'glass flask', quantity: 1 }]
        },
        {
          language: 'pt-BR',
          name: 'mercador',
          weapon: { name: 'espada curta (d6)' },
          equipment: [{ name: 'pochete' }, { name: 'frasco de vidro', quantity: 1 }]
        }
      ]
    },
    {
      id: 'miner',
      min: 88,
      max: 90,
      data: [
        {
          language: 'en',
          name: 'miner',
          weapon: { name: 'pickaxe (d4)' },
          equipment: [{ name: 'torch', quantity: 1 }, { name: 'flint and steel' }]
        },
        {
          language: 'pt-BR',
          name: 'minerador',
          weapon: { name: 'picareta (d4)' },
          equipment: [{ name: 'tocha', quantity: 1 }, { name: 'pederneira e isqueiro' }]
        }
      ]
    },
    {
      id: 'shepherd',
      min: 91,
      max: 92,
      data: [
        {
          language: 'en',
          name: 'shepherd',
          weapon: { name: 'staff (d4)' },
          equipment: [{ name: 'sheep' }, { name: 'shepherd dog' }]
        },
        {
          language: 'pt-BR',
          name: 'pastor',
          weapon: { name: 'cajado (d4)' },
          equipment: [{ name: 'ovelha' }, { name: 'cão de pastoreio' }]
        }
      ]
    },
    {
      id: 'mason',
      min: 93,
      max: 94,
      data: [
        {
          language: 'en',
          name: 'mason',
          weapon: { name: 'hammer (d4)' },
          equipment: [{ name: 'sack of rocks' }]
        },
        {
          language: 'pt-BR',
          name: 'pedreiro',
          weapon: { name: 'martelo (d4)' },
          equipment: [{ name: 'saco de pedras' }]
        }
      ]
    },
    {
      id: 'fisher',
      min: 95,
      max: 96,
      data: [
        {
          language: 'en',
          name: 'fisher',
          weapon: { name: 'javelin (d4)' },
          equipment: [{ name: 'fishing pole' }]
        },
        {
          language: 'pt-BR',
          name: 'pescador',
          weapon: { name: 'dardo de arremesso (d4)' },
          equipment: [{ name: 'vara de pescar' }]
        }
      ]
    },
    {
      id: 'postillion',
      min: 97,
      max: 97,
      data: [
        {
          language: 'en',
          name: 'postillion',
          weapon: { name: 'staff (d4)' },
          equipment: [{ name: 'box with carrier pigeon', quantity: 1 }]
        },
        {
          language: 'pt-BR',
          name: 'postilhão',
          weapon: { name: 'cajado (d4)' },
          equipment: [{ name: 'caixa com pombo correio', quantity: 1 }]
        }
      ]
    },
    {
      id: 'dentist',
      min: 98,
      max: 99,
      data: [
        {
          language: 'en',
          name: 'dentist',
          weapon: { name: 'dagger (d4)' },
          equipment: [{ name: 'string' }, { name: 'mirror' }]
        },
        {
          language: 'pt-BR',
          name: 'dentista',
          weapon: { name: 'adaga (d4)' },
          equipment: [{ name: 'barbante' }, { name: 'espelho' }]
        }
      ]
    },
    {
      id: 'shaman',
      min: 100,
      max: 100,
      data: [
        {
          language: 'en',
          name: 'shaman',
          weapon: { name: 'staff (d4)' },
          equipment: [{ name: 'linseed' }, { name: 'pulmonaria', quantity: 1 }]
        },
        {
          language: 'pt-BR',
          name: 'xamã',
          weapon: { name: 'cajado (d4)' },
          equipment: [{ name: 'linhaça' }, { name: 'pulmonária', quantity: 1 }]
        }
      ]
    }
  ]
};
