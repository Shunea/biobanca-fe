import storage from "@/utils/storage";
import axios from "axios";

export async function logoutFn() {
  await axios.post("/api/logout");
  storage.clearToken();

  return null;
}
