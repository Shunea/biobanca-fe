const storagePrefix = "covid19_usmf_";

const storage = {
  getToken: () => {
    if (typeof window === "undefined") return null;

    const token = window.localStorage.getItem(`${storagePrefix}token`);

    if (!token || (typeof token === "string" && token === "undefined"))
      return null;

    return JSON.parse(token);
  },
  setToken: (token: string) => {
    if (typeof window === "undefined") return null;

    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    if (typeof window === "undefined") return null;

    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
