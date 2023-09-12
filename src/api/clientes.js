import axios from "axios";
export default class ddclientesApi {
  async buscarTodasAsddClientes() {
    const { data } = await axios.get("/clientes/");
    return data;
  }
  async adicionarddClientes(ddclientes) {
    const { data } = await axios.post("/clientes/", ddclientes);
    return data;
  }
  async atualizarddClientes(ddclientes) {
    const { data } = await axios.put(`/clientes/${ddclientes.id}/`, ddclientes);
    return data;
  }
  async excluirddClientes(id) {
    const { data } = await axios.delete(`/clientes/${id}/`);
    return data;
  }
}
