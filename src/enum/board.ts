export enum Board {
  MY_BOARD = "MY_BOARD",
  ENEMY_BOARD = "ENEMY_BOARD",
}

export enum DiceState {
  SLOT = "SLOT",
  BOARD = "BOARD",
}

enum Color {
  Green = "#CCE8DB",
  Blue = "#C1D4E3",
  Purple = "#BEB4D6",
  Pink = "#FADAE2",
  Red = "#F8B3CA",
  Magenta = "#CC97C1",
}

export enum DiceNumber {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
}
export enum DiceColor {
  One = Color.Green,
  Two = Color.Blue,
  Three = Color.Purple,
  Four = Color.Pink,
  Five = Color.Red,
  Six = Color.Magenta,
}

export function mapDiceColor(number: DiceNumber): DiceColor {
  switch (number) {
    case DiceNumber.One:
      return DiceColor.One;
    case DiceNumber.Two:
      return DiceColor.Two;
    case DiceNumber.Three:
      return DiceColor.Three;
    case DiceNumber.Four:
      return DiceColor.Four;
    case DiceNumber.Five:
      return DiceColor.Five;
    case DiceNumber.Six:
      return DiceColor.Six;
    default:
      return DiceColor.One;
  }
}

export function mapDiceNumber(number: number): number {
  switch (number) {
    case 1:
      return DiceNumber.One;
    case 2:
      return DiceNumber.Two;
    case 3:
      return DiceNumber.Three;
    case 4:
      return DiceNumber.Four;
    case 5:
      return DiceNumber.Five;
    case 6:
      return DiceNumber.Six;
    default:
      return DiceNumber.One;
  }
}
