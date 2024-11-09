{
  function countWordOccurrences(sentence: string, word: string): number {
    const sentecneWords = sentence.split(" ");
    let wordCount = sentecneWords.filter((words) => words === word).length;
    return wordCount;
  }

  countWordOccurrences(
    "I love typescript but typescript do not love me back",
    "typescript"
  );
}
