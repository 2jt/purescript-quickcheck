/* global ArrayBuffer, Float32Array, Int32Array */

export function float32ToInt32(n) {
  const arr = new ArrayBuffer(4);
  const fv = new Float32Array(arr);
  const iv = new Int32Array(arr);
  fv[0] = n;
  return iv[0];
}
