export function cleanDescription(description) {
  const noArrows = description.replace(/<.*>/g, "");
  const noNewLines = noArrows.replaceAll("\n", " ");
  return noNewLines;
}

export function seperateTags(description) {
  const tags = [];
  let lastSplitIndex = 0;
  description.split("").forEach((letter, i) => {
    if (letter === "<") {
      tags.push(description.slice(lastSplitIndex, i));
      lastSplitIndex = i;
    } else if (letter === ">") {
      tags.push(description.slice(lastSplitIndex, i + 1));
      lastSplitIndex = i + 1;
    }
  });
  tags.push(description.slice(lastSplitIndex));
  const noEmptyStrings = tags.filter((tag) => tag !== "");
  const newLines = noEmptyStrings
    .map((tag) => {
      return tag.split("\n");
    })
    .flat();
  return newLines;
}
