import type { GModJSSafeTypes } from ".";

export type GmodCallback = (_: (result: GModJSSafeTypes) => void) => void;

declare global {
  const lua: {
    call: (name: string, ...args: [...GModJSSafeTypes[], (_: "__ok__" | "__err__", r: GModJSSafeTypes) => void]) => void;
  };
}

export async function invoke<T extends GModJSSafeTypes>(funcName: string, ...args: GModJSSafeTypes[]): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`calling '${funcName}': timed out`)), 3 * 1000);

    try {
      lua.call(funcName, ...args, (status, result) => {
        clearTimeout(timer);

        switch (status) {
          case "__ok__":
            resolve(result as T);
            break;
          case "__err__":
            reject(new Error(String(result)));
            break;
        }
      });
    } catch (error) {
      clearTimeout(timer);
      reject(error);
    }
  });
}