export class Vector3 {
  private x: number;
  private y: number;
  private z: number;

  constructor(vec: string) {
    let splitted = vec.split(" ");

    this.x = parseFloat(splitted[0]!);
    this.y = parseFloat(splitted[1]!);
    this.z = parseFloat(splitted[2]!);
  }

  add(vec: Vector3): this {
    this.x += vec.x;
    this.y += vec.y;
    this.z += vec.z;

    return this;
  }

  sub(vec: Vector3): this {
    this.x -= vec.x;
    this.y -= vec.y;
    this.z -= vec.z;

    return this;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getZ(): number {
    return this.z;
  }
}