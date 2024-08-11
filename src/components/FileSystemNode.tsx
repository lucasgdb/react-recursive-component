import type { INode } from "../types";
import { HiChevronRight, HiFolder, HiDocument } from "react-icons/hi";
import { cx } from "../utils/cx";
import { useState } from "react";

export function FileSystemNode({ name, nodes }: INode) {
  const [isOpen, setIsOpen] = useState(false);

  const isFolder = nodes && nodes.length >= 0;

  const handleClick = () => {
    if (!isFolder) {
      return;
    }

    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <li className="my-1.5">
      <button
        onClick={handleClick}
        className={cx(!isFolder && "cursor-default")}
      >
        <span className="flex items-center gap-1">
          {isFolder && (
            <HiChevronRight
              className={cx(
                "size-4 text-gray-500 transition-all",
                isOpen && "rotate-90"
              )}
            />
          )}

          {isFolder ? (
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
      </button>

      {isOpen && isFolder && (
        <ul className="pl-5">
          {nodes.map((node) => (
            <FileSystemNode
              name={node.name}
              nodes={node.nodes}
              key={node.name}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
