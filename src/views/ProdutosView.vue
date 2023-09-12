<script>
import ProdutosApi from "@/api/produtos";
const produtosApi = new ProdutosApi();
export default {
  data() {
    return {
      cprodutos: [],
      produtos: {},
    };
  },
  async created() {
    this.produtos = await produtosApi.buscarTodosOsprodutos();
  },
  methods: {
    async salvar() {
      if (this.produtos.id) {
        await produtosApi.atualizarProdutos(this.produtos);
      } else {
        await produtosApi.adicionarprodutos(this.produtos);
      }
      this.produtos = {};
      this.cprodutos = await produtosApi.buscarTodosOsProdutos();
    },
    editar(produtos) {
      Object.assign(this.produtos, produtos);
    },
    async excluir(produtos) {
      await produtosApi.excluirprodutos(produtos.id);
      this.cprodutos = await produtosApi.buscarTodosOsProdutos();
    },
  },
};
</script>

<template>
  <h1>produtos</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="produtos.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="produtos in cprodutos" :key="produtos.id">
      <span @click="editar(produtos)">
        ({{ produtos.id }}) - {{ produtos.descricao }} -
      </span>
      <button @click="excluir(produtos)">X</button>
    </li>
  </ul>
</template>
