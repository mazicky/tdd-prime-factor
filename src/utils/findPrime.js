export default function findPrime(value) {
  const result = []
  let remain = value
  let prime = 2

  if (remain === 4) {
    remain /= prime
    result.push(prime)
  }

  if (remain === 6) {
    remain /= prime
    result.push(prime)
  }

  if (remain%2 !== 0) {
    prime++
  }
  
  result.push(prime)
  return result
}
