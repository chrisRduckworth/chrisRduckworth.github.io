export function camelCase (string) {
  const words = string.split(" ")
  words[0] = words[0][0].toLowerCase() + words[0].slice(1)
  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    words[i] = word[0].toUpperCase() + word.slice(1)
  }
  return words.join("")
}
