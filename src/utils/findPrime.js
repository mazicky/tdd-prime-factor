export default function findPrime(value) {
  const result = []
  let remain = value
  let prime = 2

  while(remain !== 1) {
    if (remain%prime === 0) {
      result.push(prime)
      remain /= prime
    } else {
      prime++
    }
  }

  return result
}
