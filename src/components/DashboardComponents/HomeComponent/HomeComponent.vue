<template>
  <div>
    <div class="my-background">
      <div class="justify-center row">
        <q-circular-progress
          show-value
          font-size="12px"
          value="100"
          size="80px"
          :thickness="0.1"
          color="white"
          track-color="grey-3"
          class="q-ma-md cursor-pointer"
        >
          <span class="text-h4 text-white">5</span>
        </q-circular-progress>
      </div>
      <div class="text-center poppins-medium text-grey-1">
        Todos os Patrimónios
      </div>
    </div>
    <div class="carousel-wrapper">
      <div class="carousel q-ml-sm q-mt-md">
        <q-card
          class="my-card cursor-pointer bg-white"
          flat
          v-for="item in items"
          :key="item.id"
        >
          <!-- Fundo com cor teal -->
          <q-card-section>
            <div class="col-3 text-center">
              <q-icon :name="item.icon" :color="item.iconColor" size="1.4rem" />
            </div>
            <div class="col text-center">
              <div class="text-caption poppins-regular text-teal">
                {{ item.title }}
              </div>
              <div
                class="text-body2 q-mb-xs text-center poppins-medium text-grey-9"
              >
                {{ item.description }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div>
      <div class="column">
        <q-list>
          <q-item-label class="column" header>
            <span class="poppins-medium">MOVIMENTOS</span>
            <span class="q-mt-xs"
              ><q-icon name="mdi-wallet-outline" />
              <span class="text-caption text-weight-medium">
                CONTA 124258772195154</span
              ></span
            >
          </q-item-label>
          <q-scroll-area
            class="my-content-now"
            :thumb-style="thumbStyle"
            :bar-style="barStyle"
          >
            <template v-for="i in 10" :key="i">
              <q-item class="column" clickable>
                <q-item-section top class="q-mb-sm">
                  <q-item-label class="q-mt-sm poppins-semibold text-teal-8"
                    >Expiração de Documento</q-item-label
                  >
                </q-item-section>
                <q-item class="col no-padding">
                  <q-item-section top>
                    <q-item-label lines="1">
                      <q-item-label class="text-weight-medium text-yellow-10"
                        >[quasarframework/quasar]</q-item-label
                      >
                      <q-item-label class="text-grey-8">
                        - GitHub repository</q-item-label
                      >
                    </q-item-label>
                    <q-item-label caption lines="2">
                      @rstoenescu in #3: > class refused settle until read
                      finally myself supply opposite air guess meat blow kind
                      hungry worker ten making past lead remember they behind
                      region.
                    </q-item-label>
                    <q-item-label
                      lines="1"
                      class="q-mt-md text-caption text-weight-bold text-teal-4 text-uppercase"
                    >
                      <span class="cursor-pointer">Tag#Terrenos</span>
                    </q-item-label>
                  </q-item-section>
                  <q-item-section avatar top>
                    <q-icon
                      name="mdi-shape-plus"
                      color="yellow-10"
                      size="54px"
                    />
                  </q-item-section>
                </q-item>
                <q-item-section top>
                  <q-item-label class="q-mt-sm text-caption text-grey-6"
                    >Há 5 min atrás</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator spaced />
            </template>
          </q-scroll-area>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineOptions({
  name: "HomeComponent",
});
const thumbStyle = {
  right: "4px",
  borderRadius: "1px",
  backgroundColor: "#008080",
  width: "2px",
  opacity: 0.65,
};

const barStyle = {
  right: "2px",
  borderRadius: "1px",
  backgroundColor: "#008080",
  width: "5px",
  opacity: 0.1,
};
const items = ref([
  {
    id: 1,
    title: "Tarefas",
    description: "10",
    icon: "mdi-file-tree",
    iconColor: "teal",
  },
  {
    id: 2,
    title: "Gerir Patrimónios",
    description: "32",
    icon: "mdi-office-building-marker",
    iconColor: "teal",
  },
  {
    id: 3,
    title: "Pessoas",
    description: "12",
    icon: "mdi-account-group",
    iconColor: "teal",
  },
  {
    id: 4,
    title: "Pontos",
    description: "0",
    icon: "mdi-access-point-network",
    iconColor: "teal",
  },
  {
    id: 4,
    title: "Pontos",
    description: "0",
    icon: "mdi-access-point-network",
    iconColor: "teal",
  },
  {
    id: 4,
    title: "Pontos",
    description: "0",
    icon: "mdi-access-point-network",
    iconColor: "teal",
  },
  {
    id: 4,
    title: "Pontos",
    description: "0",
    icon: "mdi-access-point-network",
    iconColor: "teal",
  },

  // Adicione mais itens conforme necessário
]);
</script>

<style lang="scss" scoped>
.my-background {
  background-color: teal;
  padding: 20px; /* Adiciona espaçamento interno */
}

.carousel-wrapper {
  overflow-x: hidden; /* Oculta a barra de rolagem horizontal */
  position: relative; /* Adiciona posição relativa para permitir o posicionamento do pseudo-elemento */
  display: flex;
  justify-content: center;
}

.carousel-wrapper::before {
  content: "";
  position: absolute; /* Adiciona posição absoluta para o pseudo-elemento */
  top: 0; /* Alinha o topo do pseudo-elemento com o topo do wrapper */
  left: 0; /* Alinha a esquerda do pseudo-elemento com a esquerda do wrapper */
  width: 100%; /* Define a largura do pseudo-elemento para ocupar toda a largura do wrapper */
  height: 50%; /* Define a altura do pseudo-elemento para ocupar metade da altura do wrapper */
  background-color: teal; /* Cor de fundo do pseudo-elemento */
  z-index: -1; /* Coloca o pseudo-elemento atrás dos cartões */
}

.carousel {
  display: flex;
  overflow-x: auto; /* Permite rolar horizontalmente */
  scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */
  -ms-overflow-style: none; /* Oculta a barra de rolagem no Internet Explorer e Edge */
}

.carousel::-webkit-scrollbar {
  display: none; /* Oculta a barra de rolagem no Chrome, Safari e Opera */
}

.my-card {
  position: relative; /* Permitir que o conteúdo absoluto seja posicionado em relação a este */
  border-radius: 15px;
  border: 1px solid #f0efef;
  flex: 0 0 auto;
  margin-right: 10px; /* Espaçamento entre os cartões */
  height: 90px; /* Altura fixa dos cartões */
  width: 150px; /* Largura fixa dos cartões */
  overflow: hidden; /* Oculta o texto que ultrapassa a altura do cartão */
}

.icon {
  height: 50px; /* Altura da imagem ou ícone */
  width: auto; /* Largura automática para manter a proporção */
}

.my-content-now {
  height: calc(100vh - (50px + 173px + 106px + 72.8px + 20px));
}
</style>
