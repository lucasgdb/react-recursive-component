import { FileSystem } from "./components/FileSystem";
import type { INode } from "./types";
import { generateNodes } from "./utils/generate-nodes";

export default function App() {
  return (
    <div className="p-4">
      <FileSystem nodes={nodes} />
    </div>
  );
}

const nodes: INode[] = [
  ...generateNodes({ depth: 3, fileLength: 5 }),
  ...generateNodes({ depth: 5, fileLength: 2 }),
  ...generateNodes({ depth: 1, fileLength: 3 }),
];
