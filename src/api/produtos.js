import axios from "axios";
export default class ProdutosApi {
  async buscarTodasAsProdutos() {
    const { data } = await axios.get("/produtos/");
    return data;
  }
  async adicionarProdutos(produtos) {
    const { data } = await axios.post("/produtos/", produtos);
    return data;
  }
  async atualizarProdutos(produtos) {
    const { data } = await axios.put(`/produtos/${produtos.id}/`, produtos);
    return data;
  }
  async excluirProdutos(id) {
    const { data } = await axios.delete(`/produtos/${id}/`);
    return data;
  }
}
