export default function findPrime(value) {
  const result = []
  let remain = value

  if (remain === 4) {
    remain /= 2
    result.push(remain)
  }

  if (remain === 6) {
    remain /= 3
    result.push(remain)
    remain++
  }

  result.push(remain)
  return result
}
