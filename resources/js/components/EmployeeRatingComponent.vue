<template>
    <div class="row justify-content-center">
        <div class="col-6">
            <radar-chart
              :options="options"
              :chart-data="datacollection"></radar-chart>
        </div>
        <div class="col-4 offset-2">
          <p class="font-bold text-2xl mb-6 mt-4">{{ employee.name }}</p>
          <div class="row text-left">
            <div class="row px-2">
              <div class="col-12 mb-4">
                <p class="lead">Kedisiplinan</p>
                {{ employee.rating ? null : 'Belum memiliki Rating' }}
                <i class="fas fa-star" v-for="star in Math.trunc(employee.rating.kedisiplinan)"></i>
                <i class="fas fa-star-half-alt" v-if="employee.rating.kedisiplinan - Math.trunc(employee.rating.kedisiplinan) > 0"></i>
              </div>
              <div class="col-12 mb-4">
                <p class="lead">Kerjasama</p>
                {{ employee.rating ? null : 'Belum memiliki Rating' }}
                <i class="fas fa-star" v-for="star in Math.trunc(employee.rating.kerjasama)"></i>
                <i class="fas fa-star-half-alt" v-if="employee.rating.kerjasama - Math.trunc(employee.rating.kerjasama) > 0"></i>
              </div>
              <div class="col-12 mb-4">
                <p class="lead">Kecepatan</p>
                {{ employee.rating ? null : 'Belum memiliki Rating' }}
                <i class="fas fa-star" v-for="star in Math.trunc(employee.rating.kecepatan)"></i>
                <i class="fas fa-star-half-alt" v-if="employee.rating.kecepatan - Math.trunc(employee.rating.kecepatan) > 0"></i>
              </div>
              <div class="col-12 mb-4">
                <p class="lead">Kemampuan</p>
                {{ employee.rating ? null : 'Belum memiliki Rating' }}
                <i class="fas fa-star" v-for="star in Math.trunc(employee.rating.kemampuan)"></i>
                <i class="fas fa-star-half-alt" v-if="employee.rating.kemampuan - Math.trunc(employee.rating.kemampuan) > 0"></i>
              </div>
              <div class="col-12 mb-4">
                <p class="lead">Ketelitian</p>
                {{ employee.rating ? null : 'Belum memiliki Rating' }}
                <i class="fas fa-star" v-for="star in Math.trunc(employee.rating.ketelitian)"></i>
                <i class="fas fa-star-half-alt" v-if="employee.rating.ketelitian - Math.trunc(employee.rating.ketelitian) > 0"></i>
              </div>
            </div>
          </div>

          <div class="row">
            <button data-toggle="modal" data-target="#employeeRatings" class="btn btn-primary btn-sm">Detail</button>
            <div class="modal fade" id="employeeRatings" tabindex="-1" role="dialog" aria-labelledby="employeeRatingsLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="employeeRatingsLabel">Rating Karyawan</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="col-12 mb-2" v-for="rate in employee.ratings">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-6 my-2">
                                <p>
                                  Kedisiplinan <br>
                                  <i class="fas fa-star" v-for="star in Math.trunc(rate.kedisiplinan)"></i>
                                  <i class="fas fa-star-half-alt" v-if="rate.kedisiplinan - Math.trunc(rate.kedisiplinan) > 0"></i>
                                </p>
                              </div>
                              <div class="col-6 my-2">
                                <p>
                                  Kerjasama <br>
                                  <i class="fas fa-star" v-for="star in Math.trunc(rate.kerjasama)"></i>
                                  <i class="fas fa-star-half-alt" v-if="rate.kerjasama - Math.trunc(rate.kerjasama) > 0"></i>
                                </p>
                              </div>
                              <div class="col-6 my-2">
                                <p>
                                  Kecepatan <br>
                                  <i class="fas fa-star" v-for="star in Math.trunc(rate.kecepatan)"></i>
                                  <i class="fas fa-star-half-alt" v-if="rate.kecepatan - Math.trunc(rate.kecepatan) > 0"></i>
                                </p>
                              </div>
                              <div class="col-6 my-2">
                                <p>
                                  Kemampuan <br>
                                  <i class="fas fa-star" v-for="star in Math.trunc(rate.kemampuan)"></i>
                                  <i class="fas fa-star-half-alt" v-if="rate.kemampuan - Math.trunc(rate.kemampuan) > 0"></i>
                                </p>
                              </div>
                              <div class="col-6 my-2">
                                <p>
                                  Ketelitian <br>
                                  <i class="fas fa-star" v-for="star in Math.trunc(rate.ketelitian)"></i>
                                  <i class="fas fa-star-half-alt" v-if="rate.ketelitian - Math.trunc(rate.ketelitian) > 0"></i>
                                </p>
                              </div>
                              <div class="col-6 my-2">
                                <p>
                                  {{ rate.supervisor }} <br>
                                  {{ rate.created_at }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    
    import RadarChart from './RadarChart'

    export default {

        components: {
            RadarChart,
        },

        props: {
          employee: {
            required: true,
          }
        },

        data () {
          return {
            datacollection: null,
            labels: [],
            title: '',
            data: [],

            options: {
              scale: {
                  ticks: {
                    beginAtZero: true,
                    max: 5,
                    min: 0,
                  }
              }
            }
          }
        },

        mounted () {
          this.computeData();
          this.fillData();
        },

        watch: {
          employee() {
            this.computeData();
            this.fillData();
          }
        },

        methods: {
          computeData() {
            this.title = this.employee.name;

            let entries = Object.entries(this.employee.rating);

            this.labels = [];
            this.data = [];

            entries.map(item => {
              if (this.labels.length < 5) {
                this.labels.push(this.titleCase(item[0]));
                this.data.push(item[1]);
              }
            });

          },

          fillData () {
            this.datacollection = {
              labels: this.labels,
              datasets: [
                {
                    label: 'Rating',
                    backgroundColor: 'rgba(56, 178, 172, 0.7)',
                    borderColor: '#38b2ac',
                    pointBackgroundColor: '#38b2ac',
                    data: this.data,
                },
              ]
            }
          },

          titleCase(str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            }
            return str.join(' ');
          }
        }
    }

</script>