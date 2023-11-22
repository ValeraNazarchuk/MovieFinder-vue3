export function setTokenData(data) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("refreshToken", data.refreshToken);
  removeAnonymousTokenData();
}

export function setAnonymousTokenData(data) {
  localStorage.setItem("anonymousToken", data.token);
  localStorage.setItem("anonymousRefreshToken", data.refreshToken);
}

export function removeAnonymousTokenData() {
  localStorage.removeItem("anonymousToken");
  localStorage.removeItem("anonymousRefreshToken");
}

export function removeTokenData() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
}
