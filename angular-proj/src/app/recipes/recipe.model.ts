export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredientList: string[] = [];

  constructor(name: string, desc: string, imagePath: string, ingredientList: string[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredientList = ingredientList;
  }
}
