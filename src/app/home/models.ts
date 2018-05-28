export class Character {
  name: string;
  gender: Gender;
  race: Race;
  profession: Profession;
  statCategories: StatCategory[];
}

enum Gender {
  Male,
  Female,
  Other
}

export class StatCategory {
  name: string;
  stats: Stat[];
}

export class Modifier {
  stat: string;
  amount: number;
  roll: DiceRoll;
}

export class Stat {
  name: string;
  description: string;
  value: number;
}

export class DiceRoll {
  count: number;
  sides: number;
  mod: number;
}

export class Race {
  name: string;
  description: string;
  modifiers: Modifier[];
}

export class Profession {
  name: string;
  description: string;
  modifiers: Modifier[];
}
