<template>
  <div class="tab2-content">
    <h1>TAB 2 Content</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Shirt</td>
          <td>2</td>
          <td>$25.00</td>
          <td>$50.00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Pants</td>
          <td>1</td>
          <td>$35.00</td>
          <td>$35.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Shoes</td>
          <td>1</td>
          <td>$50.00</td>
          <td>$50.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tab2Content",
};
</script>

<style scoped>
.tab2-content {
  margin-top: 40px; /* add margin top to push it down */
  text-align: center; /* center the table */
  max-width: 100%;
  overflow: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto; /* center the table */
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
In the above code, we added a div with a class of tab2-content to wrap the h1 and table elements. We added a margin to the top of the tab2-content class to push it down below the tabs, and set the text-align property to center to center the table. We also added some


