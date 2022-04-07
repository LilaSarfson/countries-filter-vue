// Suerte :)
Vue.createApp({
    data() {
        return {
            countries: [],
            textInput: "",
            regionCountryFilter: "",

        }
    },

    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const response = await fetch("https://restcountries.com/v2/all");
            this.countries = await response.json();
        }

    },
    computed: {
        searchCountry() {
            if (this.textInput) {
                let countrySearched = this.countries.filter((x) => x.name.toLowerCase().includes(this.textInput.toLowerCase()));
                if (this.regionCountryFilter) {
                    return countrySearched.filter((x) => x.region.includes(this.regionCountryFilter));
                }
                return countrySearched;
            }

            if (this.regionCountryFilter) {
                let IwantaRegion = this.countries.filter((x) => x.region.includes(this.regionCountryFilter));
                 return IwantaRegion;
                 
                }     

           
            return this.countries
        }
    },


}).mount('#app')

// :class="[isActive ? activeClass : '', errorClass]"