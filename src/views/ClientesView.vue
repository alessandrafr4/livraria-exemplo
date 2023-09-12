<script>
import ClientesApi from "@/api/clientes";
const clientesApi = new ClientesApi();
export default {
  data() {
    return {
      clientes: [],
      cliente: {},
    };
  },
  async created() {
    this.clientes = await clientesApi.buscarTodosOsClientes();
  },
  methods: {
    async salvar() {
      if (this.cliente.id) {
        await clientesApi.atualizarcliente(this.cliente);
      } else {
        await clientesApi.adicionarcliente(this.cliente);
      }
      this.cliente = {};
      this.clientes = await clientesApi.buscarTodosOsClientes();
    },
    editar(cliente) {
      Object.assign(this.cliente, cliente);
    },
    async excluir(cliente) {
      await clientesApi.excluircliente(cliente.id);
      this.clientes = await clientesApi.buscarTodosOsClientes();
    },
  },
};
</script>

<template>
  <h1>cliente</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="cliente.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="cliente in clientes" :key="cliente.id">
      <span @click="editar(cliente)">
        ({{ cliente.id }}) - {{ cliente.descricao }} -
      </span>
      <button @click="excluir(cliente)">X</button>
    </li>
  </ul>
</template>
