<template>
  <v-container>
    <h1>Finalizar Compra</h1>
    <v-form ref="form" lazy-validation class="my-5">
      <v-row>
        <v-col md="6" sm="12">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nome completo"
            outlined
          />
          <v-row>
            <v-col>
              <v-text-field
                v-model="cpf"
                :rules="cpfRules"
                label="CPF"
                outlined
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="cel"
                :rules="celRules"
                label="Celular"
                outlined
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                outlined
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="cep"
                :rules="cepRules"
                label="CEP"
                outlined
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="address"
                :rules="addressRules"
                label="Endereço"
                outlined
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-list>
            <v-list-item :key="item.id" v-for="item in cart">
              <v-list-item-group
                style="width: 100%"
                class="d-flex justify-space-between align-center py-2"
              >
                <v-avatar class="mr-1" rounded size="46">
                  <v-img
                    :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`"
                  />
                </v-avatar>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle align="center">
                  {{ formatter(item.price) }}
                </v-list-item-subtitle>
                <v-list-item-subtitle align="center">
                  {{ item.quantity }}
                </v-list-item-subtitle>
                <v-btn icon @click="removeItem(item.id)">
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </v-list-item-group>
            </v-list-item>
            <v-footer
              v-if="cart.length > 0"
              class="d-flex flex-column align-center align-self-end"
            >
              <div
                style="width: 100%"
                class="d-flex justify-space-between align-center"
              >
                <p>Total:</p>
                <p style="font-weight: bold">{{ formatter(totalPrice) }}</p>
              </div>
              <v-btn
                @click="submitForm"
                style="width: 100%"
                elevation="5"
                color="primary"
                >Finalizar compra
              </v-btn>
            </v-footer>
          </v-list>
        </v-col>
      </v-row>
    </v-form>
    <v-dialog v-model="dialog" width="500">
      <v-card class="align-center">
        <v-card-title class="text-h5 grey lighten-2">
          {{ `Obrigado ${name}` }}
        </v-card-title>

        <v-card-text class="pa-5">
          Sua compra foi realizada com sucesso!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="goHome"> Voltar para loja </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default Vue.extend({
  name: 'PurchaseForm',

  data: () => ({
    formatter: format,
    dialog: false,
    name: '',
    nameRules: [(v: string) => !!v || 'Nome é obrigatório'],
    email: '',
    emailRules: [
      (v: string) => !!v || 'E-mail é obrigatório',
      (v: string) => /.+@.+/.test(v) || 'E-mail deve ser válido',
    ],
    cpf: '',
    cpfRules: [
      (v: string) => !!v || 'CPF é obrigatório',
      (v: string) => v.length === 11 || 'CPF deve ser válido',
    ],
    cel: '',
    celRules: [(v: string) => !!v || 'Telefone é obrigatório'],
    address: '',
    addressRules: [(v: string) => !!v || 'Endereço é obrigatório'],
    cep: '',
    cepRules: [(v: string) => !!v || 'CEP é obrigatório'],
  }),

  computed: {
    ...mapState(['cart']),
    ...mapGetters({
      totalPrice: 'totalPrice',
    }),
    totalPrice: {
      get() {
        return this.$store.getters.totalPrice;
      },
    },
  },

  methods: {
    removeItem(id: number) {
      this.$store.commit('removeItem', id);
    },
    submitForm() {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        this.dialog = true;
      }
    },
    goHome() {
      this.$router.push('/');
      this.$store.commit('clearCart');
    },
  },
});
</script>
