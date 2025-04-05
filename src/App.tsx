import { getScatterData, getBoxPlotData, getLineChartData } from "./util/data.ts";
import Plot from "react-plotly.js";

function App() {
    const data = [
        ...getLineChartData(),
        ...getScatterData(),
        ...getBoxPlotData()
    ];

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0
        }}>
            <Plot
                useResizeHandler={true}
                style={{ width: '100%', height: '100%' }}
                config={{ responsive: true }}
                data={data}
                layout={{
                    title: 'Gráfico misto com linhas, dispersão e boxplots',
                    autosize: true,
                    margin: {
                        l: 50,
                        r: 50,
                        b: 50,
                        t: 50,
                        pad: 4
                    }
                }}
            />
        </div>
    );
}

export default App;