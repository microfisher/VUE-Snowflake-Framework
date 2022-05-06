import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ECharts from 'vue-echarts'
import { use } from "echarts/core";
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, RadarChart,} from 'echarts/charts'
import { GridComponent, TooltipComponent, ToolboxComponent } from 'echarts/components'

import App from './App.vue'
import router from "./routes";
import i18n from "./locales";
import Layout from './components/layouts/Layout.vue';

import 'virtual:windi.css'

use([
    CanvasRenderer,
    PieChart,
    RadarChart,
    GridComponent,
    TooltipComponent,
    ToolboxComponent
]);

const store = createPinia()
const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.component('Layout', Layout);
app.component('v-chart', ECharts);
app.mount('#app')

export default app;