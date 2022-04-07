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
            console.log(this.countries);
        }
    },
    computed: {
        searchCountry() {
            if (this.textInput) {
                let countrySearched = this.countries.filter((x) => x.name.includes(this.textInput));
                return countrySearched;
            }

            if (this.regionCountryFilter) {
                let IwantaRegion = this.countries.filter((x) => x.region.includes(this.regionCountryFilter));
                return IwantaRegion;
            }

            else if (this.textInput && this.regionCountryFilter) {
                return this.countries.filter((x) => x.region.includes(this.regionCountryFilter && this.textInput))

            }
            return this.countries
        }
    },


}).mount('#app')

