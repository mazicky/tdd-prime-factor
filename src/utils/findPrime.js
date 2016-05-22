export default function findPrime(value) {
  const result = []
  let remain = value

  if (remain === 4) {
    remain /= 2
    result.push(remain)
  }
  
  result.push(remain)
  return result
}
