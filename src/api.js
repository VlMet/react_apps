import {cryptoData, cryptoAssets} from './data.js';

export function fetchCrypto() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1000)
  })
}

export function fetchAssets() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1000)
  })
}