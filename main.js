// Suerte :)
Vue.createApp({
    data() {
        return {
            countries: [],
            textInput: "",
            regionCountryFilter: "",
            Isitblackmode: true,
            HigherOrLower: "",

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
            if (this.HigherOrLower == "Lower") {

                this.countries.sort((country1, country2) => {
                    if (country1.population > country2.population) {
                        return 1;
                    }
                    if (country1.population < country2.population) {
                        return -1;
                    }
                    return 0;
                });
            }
            else {
                this.countries.sort((country1, country2) => {
                    if (country1.population > country2.population) {
                        return -1;
                    }
                    if (country1.population < country2.population) {
                        return 1;
                    }
                    return 0;
                });

            }
            return this.countries
        },
        alertLowPopulation() {
            return this.searchCountry.length !== 0 && this.searchCountry.every(country => country.population < 10000000);
        }


    }


}).mount('#app')

// Si los paises que me aparecen actualmente filtrados , TODOS ellos tienen menos de 10 millones de habitantes, que apareza una <p> diciendo un mensaje algo así como "Todos los paises mostrados tienen poquitos habitantes" 