export function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
    return true;
  }
  return false;
};
