const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((assembledBatteries, batteryBatches) => assembledBatteries + batteryBatches, 0 )

const wordCountMap = monologueLines.reduce((wordPerSentence, freq) =>  {
  const wordCount = freq.split(' ').length;

  if (!wordPerSentence[wordCount]) {
    wordPerSentence[wordCount] = 0;
  }

 wordPerSentence[wordCount]++;

  return wordPerSentence
}, {})