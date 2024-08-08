import type { INode } from "../types";
import { FileSystemNode } from "./FileSystemNode";

type Props = {
  nodes: INode[];
};

export function FileSystemTree({ nodes }: Props) {
  return (
    <ul>
      {nodes.map((node) => (
        <FileSystemNode name={node.name} nodes={node.nodes} key={node.name} />
      ))}
    </ul>
  );
}
