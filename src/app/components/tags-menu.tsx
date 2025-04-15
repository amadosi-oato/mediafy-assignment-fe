import React from "react";

type TagsMenuProps = {
  tags: string[];
  onSelect: (tag: string | null) => void;
  selectedTag: string | null;
};

const TagsMenu: React.FC<TagsMenuProps> = ({ tags, onSelect, selectedTag }) => {
  console.log("TagsMenu rendered");

  return (
    <ul className="flex flex-row gap-2 justify-center">
      <li>
        <button
          className={`${
            null === selectedTag ? "bg-blue-500 text-white" : "bg-gray-200"
          } bg-gray-200 p-2 rounded`}
          onClick={() => onSelect(null)}
        >
          alla
        </button>
      </li>
      {tags.map((tag) => (
        <li key={tag}>
          <button
            className={`${
              tag === selectedTag ? "bg-blue-500 text-white" : "bg-gray-200"
            } bg-gray-200 p-2 rounded`}
            onClick={() => onSelect(tag)}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TagsMenu;
