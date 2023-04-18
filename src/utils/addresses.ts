import { getAddress } from 'ethers';

export const shortenAddress = (address: string, firstLength?: number, lastLength?: number, unicode?: boolean) => {
  if (address && address.length > 0) {
    return `${address.substring(0, firstLength || 6)}${unicode ? '•••••' : '...' }${address.substring(
      address.length - (lastLength || 4),
      address.length,
    )}`;
  }
};

export function isAddress(value: string): string | false {
  try {
    return getAddress(value.toLowerCase());
  } catch {
    return false;
  }
}
