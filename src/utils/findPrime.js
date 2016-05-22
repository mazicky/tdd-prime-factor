export default function findPrime(value) {
  const result = []
  let remain = value
  let prime = 2

  while(remain !== 1) {
    while (remain%prime === 0) {
      result.push(prime)
      remain /= prime
    }

    prime++
  }

  return result
}
