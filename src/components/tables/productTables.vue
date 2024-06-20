<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      :rows="productStore.newDataProducts"
      :columns="columns"
      row-key="id"
      :loading="loading"
      :pagination.sync="pagination"
    >
      <template v-slot:body-cell-action="props">
        <q-btn
          icon="edit"
          color="primary"
          dense
          outline
          @click="editRow(props.row)"
          >Edit</q-btn
        >
        <div class="q-pa-md q-gutter-sm">
          <q-btn icon="delete" color="negative" @click="deleteRow(props.row)"
            >Delete</q-btn
          >
        </div>
      </template>
    </q-table>
    <q-dialog v-model="dialogVisible">
      <q-card>
        <q-card-section>
          <editModal :formdata="formdata" />
        </q-card-section>
        <q-card-section>
          <q-btn label="Cancel" color="negative" @click="closeDialog" />
          <q-btn label="Save" color="primary" @click="saveChanges" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, watchEffect } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useQuasar } from "quasar";
import editModal from "@/components/modal/editModal.vue";

const $q = useQuasar();
const productStore = useProductStore();

type Column = {
  name: string;
  label: string;
  field: string;
};

const columns = ref<Column[]>([
  { name: "id", label: "ID", field: "id" },
  { name: "sku", label: "SKU", field: "sku" },
  { name: "title", label: "Title", field: "title" },
  { name: "description", label: "Description", field: "description" },
  { name: "category", label: "Category", field: "category" },
  { name: "price", label: "Price", field: "price" },
  { name: "rating", label: "Total Rating", field: "rating" },
  { name: "action", label: "Actions", field: "" },
]);

const loading = ref<boolean>(false);
const pagination = ref<any>({
  sortBy: "name",
  descending: false,
  page: 1,
  rowsPerPage: 10,
});

type tData = {
  id: number;
  sku: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
};

const dialogVisible = ref(false);

const formdata: Ref<tData> = ref({
  id: 0,
  sku: "",
  title: "",
  description: "",
  category: "",
  price: 0,
  rating: 0,
});

const editRow = (row: Record<string, any>) => {
  formdata.value = { ...row };
  dialogVisible.value = true;
};
const closeDialog = () => {
  dialogVisible.value = false; // Close the dialog
};

const saveChanges = () => {
  const index = productStore.newDataProducts.findIndex(
    (p) => p.id === formdata.value.id
  );
  if (index !== -1) {
    productStore.newDataProducts[index] = { ...formdata.value }; // Update data in store
  }
  closeDialog(); // Close dialog after saving
};

watchEffect(() => {
  console.log("Products updated:", productStore.newDataProducts);
});

const deleteRow = (row: any) => {
  $q.dialog({
    dark: true,
    title: "Confirm",
    message: "Would you like to delete this Row?",
    cancel: true,
    persistent: true,
  })
    .onOk(() => {
      const index = productStore.newDataProducts.findIndex(
        (p) => p.id === row.id
      );
      if (index !== -1) {
        productStore.newDataProducts.splice(index, 1);
      }
    })
    .onCancel(() => {
      console.log("Deletion canceled");
    })
    .onDismiss(() => {
      console.log("Dialog dismissed");
    });
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
