import { FileSystemTree } from "./components/FileSystemTree";
import type { INode } from "./types";
import { generateNodes } from "./utils/generate-nodes";

export default function App() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <FileSystemTree nodes={nodes} />
    </div>
  );
}

const nodes: INode[] = [
  ...generateNodes({ depth: 3, fileLength: 5 }),
  ...generateNodes({ depth: 5, fileLength: 2 }),
  ...generateNodes({ depth: 1, fileLength: 3 }),
];
