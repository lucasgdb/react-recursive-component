import { faker } from "@faker-js/faker";
import { INode } from "../types";

type Props = {
  depth?: number;
  length?: number;
  fileLength?: number;
};

export function generateNodes({
  length = 1,
  depth = 3,
  fileLength = 5,
}: Props): INode[] {
  if (depth === 1) {
    return [...new Array(fileLength)].map(() => ({
      name: faker.system.fileName(),
    }));
  }

  return [...new Array(length)].map(() => ({
    name: faker.system.fileName({ extensionCount: 0 }),
    nodes: generateNodes({ length, depth: depth - 1, fileLength }),
  }));
}
