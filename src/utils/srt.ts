import srtParser2 from 'srt-parser-2'

export const parser = new srtParser2()

export function parseSrt(srtString) {
  const lines = parser.fromSrt(srtString).map((line) => ({
    ...line,
    startTimeShort: line.startTime.split(',')[0],
    endTimeShort: line.endTime.split(',')[0],
  }))
  return lines
}
