const secondsToTime = (seconds: number): string => {
    const m: number = Math.trunc(seconds / 60),
          s: number = seconds % 60

    return `${m}m ${s}s`
}


export default secondsToTime