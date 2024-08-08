import type { INode } from "../types";
import { HiChevronRight, HiFolder, HiDocument } from "react-icons/hi";
import { cx } from "../utils/cx";
import { useState } from "react";

export function Node({ name, nodes }: INode) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1">
        {nodes && nodes.length > 0 && (
          <button onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
            <HiChevronRight
              className={cx(
                "size-4 text-gray-500 transition-all",
                isOpen && "rotate-90"
              )}
            />
          </button>
        )}

        {nodes ? (
          <HiFolder
            className={cx(
              "size-6 text-sky-500",
              nodes && nodes.length === 0 && "ml-[10px]"
            )}
          />
        ) : (
          <HiDocument className="ml-[18px] size-6 text-gray-900" />
        )}

        {name}
      </span>

      {isOpen && nodes && nodes.length > 0 && (
        <ul className="pl-5">
          {nodes.map((node) => (
            <Node name={node.name} nodes={node.nodes} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
