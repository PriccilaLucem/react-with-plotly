import { IPlotlyTrace } from "../interface/boxPlot.ts";

export const getLineChartData = (): IPlotlyTrace[] => {
    return [
        {
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1, 2.4, 3, 7, 5, 8, 9, 9, 9, 9, 9, 9],
            name: 'Corporate DI',
            type: 'scatter',
            mode: 'lines'
        },
        {
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1, 2, 4, 6, 8, 8, 8, 8, 8, 8, 8, 8],
            name: 'Engie Brasil',
            type: 'scatter',
            mode: 'lines'
        }
    ];
};

export const getScatterData = (): IPlotlyTrace[] => {
    return [
        { x: [1.3], y: [3], name: 'ENGIA0', type: 'scatter', mode: 'markers' },
        { x: [2.6], y: [4], name: 'ENGIA1', type: 'scatter', mode: 'markers' },
        { x: [3.7], y: [5], name: 'ENGIA2', type: 'scatter', mode: 'markers' },
        { x: [4.8], y: [2], name: 'ENGIB2', type: 'scatter', mode: 'markers' },
        { x: [7.9], y: [7], name: 'ENGIC3', type: 'scatter', mode: 'markers' }
    ];
};

export const getBoxPlotData = (): IPlotlyTrace[] => {
    return [
        { x: [1.5, 1.5, 1.5, 1.5, 1.5], y: [1.5, 2.1, 2.4, 2.2, 1.9], name: 'ENGIA0', type: 'box' },
        { x: [2.7, 2.7, 2.7, 2.7, 2.7], y: [2.5, 2.8, 3.0, 2.7, 2.9], name: 'ENGIA1', type: 'box' },
        { x: [3.0, 3.0, 3.0, 3.0, 3.0], y: [3.5, 3.2, 3.7, 3.8, 3.6], name: 'ENGIA2', type: 'box' },
        { x: [4.6, 4.6, 4.6, 4.6, 4.6], y: [2.8, 3.3, 3.0, 3.5, 3.2], name: 'ENGIB2', type: 'box' },
        { x: [7.9, 7.9, 7.9, 7.9, 7.9], y: [2.8, 3.3, 3.0, 3.5, 4.5], name: 'ENGIC3', type: 'box' }
    ];
};
