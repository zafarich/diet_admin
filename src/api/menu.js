import { api } from "src/boot/axios";
const url = "api/v1/admin/";
export async function getMenuSizes(params) {
  const { data } = await api(url + "menu-size/index", { params });
  return data;
}

export async function getMenuDetail(id) {
  const { data } = await api(url + `menu/index/${id}`);
  return data;
}
export async function updateById(id, payload) {
  const { data } = await api.post(url + "/update/" + id, payload);
  return data;
}
export async function deleteById(id) {
  const { data } = await api.delete(url + "/delete/" + id);
  return data;
}