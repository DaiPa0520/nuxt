<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <BannersTilte :keys="keys"></BannersTilte>
      <Collapse :keys="'products'" :list="products" />
      <Collapse :keys="'operation'" :list="operation" />
      <Collapse :keys="'tech'" :list="tech" />
      <section class="text-center pt-3 pb-5">
        <h1>還是不夠了解嗎?</h1>
        <n-link to="/reservation" tag="button" class="btn btn-primary" exact-active-class>預約諮詢</n-link>
        <!-- <button type="button" class="btn btn-primary">預約諮詢</button> -->
      </section>
      <Footers></Footers>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keys: "question",
      products: [
        { name: "products list", desc: "productsxxxxxxxxxxxx" },
        { name: "products list", desc: "productsxxxxxxxxxxxx" }
      ],
      operation: [
        { name: "products list", desc: "productsxxxxxxxxxxxx" },
        { name: "products list", desc: "productsxxxxxxxxxxxx" }
      ],
      tech: [
        { name: "products list", desc: "productsxxxxxxxxxxxx" },
        { name: "products list", desc: "productsxxxxxxxxxxxx" }
      ]
    };
  },
  created() {
    console.log(1235555);
  }
};
</script>

<style>
</style>
