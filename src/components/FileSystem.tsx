import type { INode } from "../types";
import { Node } from "./Node";

type Props = {
  nodes: INode[];
};

export function FileSystem({ nodes }: Props) {
  return (
    <ul>
      {nodes.map((node) => (
        <Node name={node.name} nodes={node.nodes} key={node.name} />
      ))}
    </ul>
  );
}
