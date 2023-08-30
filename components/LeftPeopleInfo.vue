<template>
   <v-banner sticky shaped tile>
    <v-img :src="`https://image.tmdb.org/t/p/w500${data.profile_path}`"></v-img>
    <v-card-text class="mt-4"   >
      <h2>Personal Info</h2>
      <h3 class="mt-4 pink--text">Known For</h3>
      <span class="mt-1">{{data.known_for_department}}</span>
      <h3 class="mt-4 pink--text">Known Credits</h3>
      <span class="mt-1">{{data.combined_credits.cast.length}}</span>
      <h3 class="mt-4 pink--text">Gender</h3>
      <span class="mt-1">{{convertGender(data.gender)}}</span>
      <h3 class="mt-4 pink--text">Birthday</h3>
      <span class="mt-1">{{data.birthday}} ({{conuntBirthday(data.birthday)}} years old)</span>
      <h3 class="mt-4 pink--text">Place of Birth</h3>
      <span class="mt-1">{{data.place_of_birth }}</span>
      <h3 class="mt-4 pink--text">Also Known As</h3>
      <span  v-for="(k, index) in  data.also_known_as " :key =index >{{
             k
            }}
           <span v-if="index  != data.also_known_as.length -1 &&  data.also_known_as ">,</span>
            </span>
    </v-card-text>
  </v-banner>
</template>

<script>
export default {
   props:{
    data:{
      Type:Object,
    }
   },
   methods:{
    convertGender(gender){
      let genderName = " "
      switch(gender){
        case 1 :
          genderName ="Female"
          break;
        case 2 :
        genderName ="Male"
          break;


      }
      return genderName;
    },
    conuntBirthday(date){
      let dateNow = new Date();
      let dateBirthday =  new Date(date);
       return  dateNow.getYear() - dateBirthday.getYear() -1 ;
    },
}
}
</script>

<style>

</style>
