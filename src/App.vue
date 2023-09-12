<template>
  <v-app>
    <v-main>
      <v-card max-width="1008" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Aplicacion web proyecto"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
      
        </template>

        <!-- <v-app-bar-title>Aplicacion web proyecto</v-app-bar-title> -->

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

       <!--  <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn> -->

      <!--   <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-divider></v-divider>

        <v-list density="compact" nav>
        <v-list-item to="/Compras" prepend-icon="mdi-shopping card" title="Compras" value="Compras_Com" ></v-list-item>
          <!-- <v-list-item prepend-icon="mdi-shopping card" title="Compras" value="Compras_Com" to="/"></v-list-item> -->
          <v-list-item prepend-icon="mdi-cash" title="Ventas" value="ventas" router-link to="/Ventas"></v-list-item>
          <v-list-item prepend-icon="mdi-cash" title="Usuarios" value="Usuarios" router-link to="/Usuarios"></v-list-item>
          <v-list-item prepend-icon="mdi-cash" title="Crear" value="Crear" router-link to="/Crear"></v-list-item>
         
          
         <!--  <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item> -->
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 400px"><router-view></router-view></v-main>
      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="n in 0"
              :key="n"
              cols="12"
            >
              <v-card
                :title="`Content ${n}`"
                :subtitle="`Subtitle for Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
              ></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
<!--       <HelloWorld/>
 -->    </v-main>
  </v-app>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'
 */
export default {
  name: 'App',

  components: {
/*     HelloWorld,
 */ 
 },

  data: () => ({
    drawer: true,
        rail: true,
  }),
}
</script>
