import { invoke } from "./invoke";
import { Vector3 } from "./types/vector";

export async function updateVgui(id: string, isVisible: boolean, x?: number, y?: number, w?: number, h?: number) {
  return await invoke("__vgui__handle__", id, isVisible, x, y, w, h);
}

export async function getNick(): Promise<string> {
  return await invoke("getNick");
}

export async function getSteamId(): Promise<string> {
  return await invoke("getSteamId");
}

export async function getSteamId64(): Promise<string> {
  return await invoke("getSteamId64");
}

export async function getUserGroup(): Promise<string> {
  return await invoke("getUserGroup");
}

export async function getHealth(): Promise<number> {
  return await invoke("getHealth");
}

export async function getArmor(): Promise<number> {
  return await invoke("getArmor");
}

export async function getPosition(): Promise<Vector3> {
  return new Vector3(await invoke("getPosition"));
}

export async function getAngle2D(): Promise<number> {
  return await invoke("getAngle2D");
}