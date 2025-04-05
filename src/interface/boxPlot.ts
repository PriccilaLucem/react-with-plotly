export interface IPlotlyTrace {
    x: number[];
    y: number[];
    name?: string;
    type: 'scatter' | 'box';
    mode?: 'lines' | 'markers' | 'lines+markers';
}
