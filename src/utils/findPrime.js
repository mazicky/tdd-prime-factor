export default function findPrime(value) {
  const result = []
  let remain = value
  let prime = 2

  while (remain > 1) {
    if (remain%prime === 0) {
      remain /= prime
      result.push(prime)
    } else {
      prime++
    }
  }
  return result
}
