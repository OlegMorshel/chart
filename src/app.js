import data from "./data.json"
import {chart} from "./chart";
import './styles.scss'

const tgChart = chart(document.getElementById('chart'), data[0])

tgChart.init()